# Project context — ikonhouse AV Pre-Sales Studio

Background notes for anyone (human or AI) picking this project up. `CHANGELOG.md`
records *what* changed; this file records *why*, plus the invariants that are easy
to break without noticing.

---

## What this is

A browser-based AV pre-sales planning tool: import a floor plan, place device
"ikons" on it, draw rooms/zones around them, and export a branded plan set,
an Excel Field Device sheet, and a priced BoQ.

- **Pure static app.** No build step, no framework, no server. `index.html` +
  `assets/css/app.css` + `assets/js/app.js`. Open the file and it runs.
- **Deployed** on Netlify at `ikonhouse-presales-tool.netlify.app`.
- **Projects are files**, not cloud records — a `.ikonplan` is JSON, saved via
  the File System Access API (Ctrl+S writes in place) with a download fallback.

Keep it this way unless there's a strong reason not to. The lack of a build
step is a feature: anyone can open the source, and there's no toolchain to rot.

---

## Release discipline

Every release bumps **four** places. Missing one causes stale-cache bugs that
look like "my fix didn't deploy":

1. `APP_VERSION` in `app.js`
2. `?v=X.Y.Z` on **both** asset URLs in `index.html` (cache-bust)
3. The welcome-footer string `V1.X` in `index.html`
4. `CHANGELOG.md` (Keep a Changelog format) and the version line in `README.md`

Then tag `vX.Y.Z` so the tag, `APP_VERSION`, and the cache-bust string all agree.

**Compatibility rule:** every 1.x release must open every older `.ikonplan`.
Loading does `Object.assign` over defaults and runs migrations (e.g. legacy
rectangle rooms → polygons via `migrateRoom`). Never assume a field exists.

---

## Output decisions (the part that isn't obvious from the code)

### Excel — the FD sheet

The Field Device sheet deliberately mirrors the client's existing quotation
workbook (`Villa_Leaz_Quote_08Jul26.xlsx`), which was inspected cell-by-cell to
match its conventions. Keep a copy in `reference/` — future changes should be
checked against it.

- **`xlsx-js-style` is the primary vendor library, not plain SheetJS.** This
  matters: the free SheetJS build silently ignores fills, rotation, and row
  heights. If styling ever "stops working," check which library actually loaded.
- **Device columns follow the library's `catOrder`**, not placement order or
  insertion order — so the sheet reads in the same sequence as the tool's
  device library (4 Button Keypad first, etc.). This was an explicit client
  request; it makes the sheet scannable against the library on screen.
- **Headers are rotated 90° upright**, wrapped and bold on a grey fill, with
  row height 96 — device names are long and columns are narrow.
- **Out-of-scope rooms are indicated by fill, not text.** The row gets
  `FFBFBFBF` (~25% darker than white) and the room name stays plain. An earlier
  version appended "(OUT OF SCOPE)" to the name; that was removed because it
  bloated the column and read as noise in a document that's already colour-coded.
- In-scope cells are explicitly filled white (`FFFFFFFF`) rather than left
  unstyled, so the contrast is deliberate rather than theme-dependent.
- Zero quantities render blank, not `0`. Totals use real `SUM` formulas so the
  sheet stays live if someone edits quantities.
- Column widths: A ≈ 4.5 (row numbers), B ≈ 42 (room names).
- Sheet 2 (`BoQ Summary`) is the priced version.

**Verification approach:** the builder was tested by driving a real `.ikonplan`
through `buildFdSheet` in Node with a mocked `XLSX.utils`, then asserting on the
resulting cell objects (device order, rotation, which rows got which fill). This
catches ordering and styling regressions without needing a spreadsheet app. Worth
repeating after any change to the builder.

### PDF / PNG sheets

- **The pipeline is lossless end to end.** Original bug: plans went through
  three JPEG generations (PDF import → crop re-encode → PDF embed), which
  smears one-pixel line art into visible haze. Now: PDF pages import at up to
  4× as PNG, crop/rotate store PNG, and sheets embed as PNG in jsPDF.
  **Do not "optimise" any of these back to JPEG** — the file-size saving is
  small on line art and the quality cost is immediately visible when zooming.
- Resolutions: A4 and A3 at 300 dpi, A1 at 150 dpi (A1 at 300 would be
  memory-prohibitive on tablets).
- `renderSheet` and `renderCover` share `drawSheetHeader` / `drawSheetFooter` /
  `roundRect` so branding stays consistent across page types.
- **The on-sheet legend is a categorized table**, grouped under library category
  headers. An earlier design put a separate "device schedule by room" page after
  each plan; it was cramped and hard to read, and was removed in v1.19. If
  per-room numbers are wanted again, they belong in the Excel output or the BoQ
  drawer matrix, not as a printed page.
- Sequence labels (`CS-01`, `4B-02`) are drawn beside pins only when
  auto-numbering is on.

### The export package

The full package zip includes the editable `.ikonplan` plus a plain-text
"HOW TO OPEN THE DESIGN FILE" note pointing at the Netlify URL and the
"Open a project…" flow. The intent: a package sent to a colleague or client is
self-contained — they can reopen and continue the actual design, not just view a
PDF. If the deployment URL ever changes, it's one string in `exportPackage`.

---

## Interaction invariants (easy to break)

- **Never call `renderMarkers()` or `renderRooms()` mid-gesture.** Re-rendering
  detaches the element holding the pointer capture and silently kills touch
  drags. Update styles in place during a drag; re-render once on release. This
  bug has been introduced twice — once for rooms, once for grouped ikons.
- **Long-press fires `contextmenu` on Android.** Any gesture bound to
  press-and-hold must suppress it, or it collides with right-click handlers.
  This caused holding a room node to delete it *and* spawn a new room.
- **Layout is decided in JavaScript, not by media queries alone.** `isCompact()`
  measures the viewport and sets `body.compact`; the CSS overrides key off that
  class. Reason: the Fold 7's inner screen is wider than tall even held upright
  (~1092 CSS px), so it dodged both the width and orientation breakpoints and
  kept a docked panel over the plan. Keep CSS and JS agreeing by keeping one
  source of truth.
- **Snapping is room-to-room only.** The plan boundary is deliberately not a
  magnet — it made tracing the drawing's own walls impossible.
- **Node linking requires true coincidence** (`NODE_LINK_EPS`, ~0.0009), not
  proximity. A looser tolerance bound neighbouring-but-separate rooms together,
  which was confusing. Snapping produces exact equality, so this is safe.

---

## Verification habits worth keeping

- `node --check assets/js/app.js` after every edit.
- Grep audit: every `$('#id')` in JS should exist in `index.html` (known
  exceptions: `roomPop`, `dockHint`, `polyPrev` — created at runtime).
- A DOM-shim probe harness (stub elements, eval the file, fire a few handlers)
  catches load-time errors that syntax checking misses.
- Pure geometry functions can be extracted by string slice and unit-tested in
  Node — used for point-in-polygon, edge translation, linked corners, snapping,
  and sequence numbering. Give each test case a fresh array; mutation between
  cases has produced false failures.
- **Patch scripts must assert.** A find-and-replace whose anchor string doesn't
  match is a silent no-op — this shipped a "fixed" crop feature that was never
  actually wired.

---

## Known open items

- Domain-gated access (`@ikonhouse.com`) discussed but not implemented.
  Netlify Identity is still supported (its deprecation was reversed in Feb
  2026); invite-only registration plus a client-side domain check is the light
  path. Note that a client-side gate restricts the UI, not the files — real
  enforcement needs edge-level access control.
- Cloud project storage would require a genuine backend; deliberately deferred.
- Feature backlog: live area/dimensions with scale calibration, room templates,
  duplicate floor, shared team device library, non-destructive rotation.
