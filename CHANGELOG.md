# Changelog

All notable changes to the ikonhouse AV Pre-Sales Tool.
Format follows [Keep a Changelog](https://keepachangelog.com); versioning
follows [Semantic Versioning](https://semver.org).

## [1.8.0] — 2026-07-14

### Fixed
- **Cropped plans exported blurry.** Plans were passing through three
  generations of JPEG (PDF import at q0.86 → crop re-encode → PDF embed).
  PDF pages now import at higher resolution and every plan-altering step
  (import, crop, rotate) stores lossless PNG; the final PDF embeds at
  higher quality. Line art stays crisp through any number of crops.
- **Library appeared empty on tablets when docking left/right/floating:**
  those docks live in the slide-in sheet on small screens, which stayed
  closed after switching — it now opens immediately, and switching to
  top/bottom closes it.

### Changed
- **Out-of-scope hatching is much more visible** (denser, thicker, ~2.5×
  stronger) with a bolder dashed outline.
- **BoQ room breakdown is now a true matrix:** rooms as rows, device icons
  as columns (hover for the name), quantities in cells, per-room totals —
  scrolls horizontally when needed, mirroring the Excel FD layout.

### Added
- **Reshape without Rooms mode:** a highlighted room (single-click its
  name) now shows its corner handles — move, resize, and reshape directly;
  double-click still opens the editor.

## [1.7.1] — 2026-07-14

### Changed
- **Angle lock now applies only to pure 4-corner rectangles**, which resize
  rigidly as before. As soon as a room has additional corners it becomes
  fully freeform — every corner drags independently. The previous behaviour
  kept pulling neighbouring corners along in multi-corner shapes, which made
  reshaping feel stiff.

## [1.7.0] — 2026-07-14

### Added
- **Angle lock while reshaping.** Dragging a corner keeps formerly straight
  (axis-aligned) edges straight: the neighbouring corners follow, so
  rectangles resize like rectangles and L-shapes keep their square angles.
  A corner added via a midpoint handle moves freely — that is how a new
  angle is introduced — and deliberately diagonal edges stay free.
- **The full package now includes the editable design file.** Every
  "Full package (.zip)" export contains the project''s `.ikonplan` plus a
  "HOW TO OPEN THE DESIGN FILE.txt" note pointing recipients to
  https://ikonhouse-presales-tool.netlify.app → "Open a project…", with a
  contents listing of the package.

## [1.6.0] — 2026-07-14

### Added
- **Movable room editor.** Drag the popover by its header to uncover the
  plan beneath while editing.
- **Single vs double click on room names.** Single click highlights the
  area (or selects it in Rooms mode); double click opens the room editor.
  Applies in and out of Rooms mode.

### Changed
- The device library now docks to the **bottom** by default (existing
  projects keep their saved dock).
- The app starts in **your system's light/dark mode**; the in-app toggles
  still override it, and projects keep their saved theme.
- Removed the 2-button keypad from the starting library (the icon remains
  available when creating devices).

### Fixed
- **Rooms could not be dragged or reshaped on touch devices** (cursor
  changed but nothing moved): every movement rebuilt the room layer, which
  detached the element the touch gesture was captured on, silently ending
  the drag. Gestures now update the shape in place and re-render only on
  release — smoother on mouse, working at all on touch.

## [1.5.0] — 2026-07-13

### Added
- **Counter-clockwise rotation** (↺ button beside Rotate) with correct
  remapping of ikons and rooms in both directions.
- **BoQ breakdown by room.** The BoQ drawer now ends with a per-floor room
  table — each room's color dot, total quantity, and a device summary
  ("2× Keypad, 1× TV"), with unassigned ikons and OUT OF SCOPE tags shown —
  mirroring the Excel FD sheet.
- **Edit from highlight.** Clicking a room name outside Rooms mode now opens
  the room's editor alongside the highlight, so rename / recolor / scope /
  delete no longer require switching to the Rooms tool.
- **Save and Save as…** in the Export menu. On Chrome/Edge, Save as… writes a
  real file via the system picker and **Save (Ctrl+S) writes back to that
  same file silently** — no more download-per-save. Opening a project through
  the picker links it for Ctrl+S too. Browsers without the File System
  Access API fall back to downloading, and Start Over unlinks the file.

### Changed
- The room popover is restructured for readability: header with live ikon
  count, labeled Name / Color / Status sections, and a clearer out-of-scope
  description. It stays open until you press Done.

### Fixed
- **Popover jumping to the top-left corner** when toggling out-of-scope or
  changing color: re-renders replaced the label the popover was anchored
  to, leaving it measuring a detached element (position 0,0). It now always
  re-anchors to the live label.

## [1.4.1] — 2026-07-13

### Fixed
- **Room editing was unreachable.** The room overlay was stacked beneath the
  drawing surface, so in Rooms mode every click or drag — even on a corner
  handle, a room body, or a name label — started drawing a new box, and
  reshape / move / delete / color / out-of-scope were all inaccessible. The
  overlay now sits above the drawing surface with click-through empty areas:
  drawing on blank plan still works, and handles, bodies, and labels receive
  their events.

### Changed
- Creating a room now opens its popover immediately, so name, color, and
  out-of-scope are one step away instead of hidden behind a label click.

## [1.4.0] — 2026-07-13

### Added
- **Reshapeable polygon rooms.** Rooms are no longer locked to rectangles:
  in Rooms mode, select a room and drag its corner handles to reshape;
  drag a midpoint handle to add a corner (L-shapes, notches, any outline);
  double-click a corner to remove it. Drag inside a room to move it whole.
  Every edit is undoable.
- **Snapping.** While drawing, reshaping, or moving, corners snap to other
  rooms' edges and to the plan boundary for clean, gap-free adjacency.
- **Room colors.** Click a room's name (in Rooms mode) for a popover with
  an 8-color palette — distinguish common, main, private, and outdoor areas.
- **Out-of-scope rooms.** The same popover has an "Out of scope" toggle:
  the room renders hatched with a faint outline and an OUT tag, and its row
  in the Excel FD sheet is suffixed "(OUT OF SCOPE)".
- **Room highlight.** Outside Rooms mode, click a room's name to spotlight
  it: its ikons glow, all others dim, and a toast summarizes the contents
  ("OFFICE — 2× Keypad, 1× Touch Panel"). Click again or press Esc to clear.
- **Library management.** Hover a category header for rename (✎) and
  delete (✕) controls — deleting a category removes its devices and their
  placed ikons after confirmation. Each device row now has a quick-delete
  (trash) button beside the edit pencil. Always visible on touch devices.

### Changed
- **Icon redesigns:** Keypad is now a squared faceplate with a single
  column of buttons; new "Keypad (2-Column)" device/icon with two button
  columns; the 2-button keypad matches the squared style; Thermostat is a
  squared keypad-style faceplate with a display window; Touch Panel is now
  an iPad-style tablet.

### Compatibility
- `.ikonplan` files from 1.0.0–1.3.1 open unchanged; rectangular rooms are
  migrated to polygons automatically on load.

## [1.3.1] — 2026-07-13

### Fixed
- **Rooms button appearing dead after an update.** The code was verified
  correct by direct execution; the symptom matches a stale cached
  `app.js` being served alongside the new HTML. Asset URLs are now
  version-stamped (`app.js?v=1.3.1`, `app.css?v=1.3.1`) so every release
  forces browsers and CDNs to fetch matching assets. If a button ever seems
  inert after updating, hard-refresh once (`Ctrl+Shift+R`).

### Changed
- Entering Rooms mode now shows a confirmation toast, so mode activation is
  always visible.

## [1.3.0] — 2026-07-13

### Added
- **FD Field Device Sheet** as the first tab of the Excel export, matching
  the client's reference workbook (`FD 08July26`): devices across the top as
  rotated Century Gothic headers, one numbered row per floor, blank cells for
  zero, and a bold **Total units** row of live `=SUM()` formulas. The tab is
  named by date in the reference convention (e.g. `FD 13July26`).
- The previous priced layout remains as a second **BoQ Summary** tab
  (unit prices and amounts live there — the FD sheet is quantities only,
  as in the reference).
- The Excel engine now prefers a style-capable build (xlsx-js-style, loaded
  local-first then CDN) so fonts and rotated headers come through; if only
  the plain build is available, the same data and formulas export without
  styling.

### Notes
- The reference sheet lists **rooms grouped under floor headers**; the app
  currently tracks floors, not rooms, so FD rows are floors. Room-level
  rows would require a zones feature (candidate for a future release).

### Compatibility
- `.ikonplan` files from 1.0.0–1.2.0 open unchanged.

## [1.8.0] — 2026-07-14

### Fixed
- **Cropped plans exported blurry.** Plans were passing through three
  generations of JPEG (PDF import at q0.86 → crop re-encode → PDF embed).
  PDF pages now import at higher resolution and every plan-altering step
  (import, crop, rotate) stores lossless PNG; the final PDF embeds at
  higher quality. Line art stays crisp through any number of crops.
- **Library appeared empty on tablets when docking left/right/floating:**
  those docks live in the slide-in sheet on small screens, which stayed
  closed after switching — it now opens immediately, and switching to
  top/bottom closes it.

### Changed
- **Out-of-scope hatching is much more visible** (denser, thicker, ~2.5×
  stronger) with a bolder dashed outline.
- **BoQ room breakdown is now a true matrix:** rooms as rows, device icons
  as columns (hover for the name), quantities in cells, per-room totals —
  scrolls horizontally when needed, mirroring the Excel FD layout.

### Added
- **Reshape without Rooms mode:** a highlighted room (single-click its
  name) now shows its corner handles — move, resize, and reshape directly;
  double-click still opens the editor.

## [1.7.1] — 2026-07-14

### Changed
- **Angle lock now applies only to pure 4-corner rectangles**, which resize
  rigidly as before. As soon as a room has additional corners it becomes
  fully freeform — every corner drags independently. The previous behaviour
  kept pulling neighbouring corners along in multi-corner shapes, which made
  reshaping feel stiff.

## [1.7.0] — 2026-07-14

### Added
- **Angle lock while reshaping.** Dragging a corner keeps formerly straight
  (axis-aligned) edges straight: the neighbouring corners follow, so
  rectangles resize like rectangles and L-shapes keep their square angles.
  A corner added via a midpoint handle moves freely — that is how a new
  angle is introduced — and deliberately diagonal edges stay free.
- **The full package now includes the editable design file.** Every
  "Full package (.zip)" export contains the project''s `.ikonplan` plus a
  "HOW TO OPEN THE DESIGN FILE.txt" note pointing recipients to
  https://ikonhouse-presales-tool.netlify.app → "Open a project…", with a
  contents listing of the package.

## [1.6.0] — 2026-07-14

### Added
- **Movable room editor.** Drag the popover by its header to uncover the
  plan beneath while editing.
- **Single vs double click on room names.** Single click highlights the
  area (or selects it in Rooms mode); double click opens the room editor.
  Applies in and out of Rooms mode.

### Changed
- The device library now docks to the **bottom** by default (existing
  projects keep their saved dock).
- The app starts in **your system's light/dark mode**; the in-app toggles
  still override it, and projects keep their saved theme.
- Removed the 2-button keypad from the starting library (the icon remains
  available when creating devices).

### Fixed
- **Rooms could not be dragged or reshaped on touch devices** (cursor
  changed but nothing moved): every movement rebuilt the room layer, which
  detached the element the touch gesture was captured on, silently ending
  the drag. Gestures now update the shape in place and re-render only on
  release — smoother on mouse, working at all on touch.

## [1.5.0] — 2026-07-13

### Added
- **Counter-clockwise rotation** (↺ button beside Rotate) with correct
  remapping of ikons and rooms in both directions.
- **BoQ breakdown by room.** The BoQ drawer now ends with a per-floor room
  table — each room's color dot, total quantity, and a device summary
  ("2× Keypad, 1× TV"), with unassigned ikons and OUT OF SCOPE tags shown —
  mirroring the Excel FD sheet.
- **Edit from highlight.** Clicking a room name outside Rooms mode now opens
  the room's editor alongside the highlight, so rename / recolor / scope /
  delete no longer require switching to the Rooms tool.
- **Save and Save as…** in the Export menu. On Chrome/Edge, Save as… writes a
  real file via the system picker and **Save (Ctrl+S) writes back to that
  same file silently** — no more download-per-save. Opening a project through
  the picker links it for Ctrl+S too. Browsers without the File System
  Access API fall back to downloading, and Start Over unlinks the file.

### Changed
- The room popover is restructured for readability: header with live ikon
  count, labeled Name / Color / Status sections, and a clearer out-of-scope
  description. It stays open until you press Done.

### Fixed
- **Popover jumping to the top-left corner** when toggling out-of-scope or
  changing color: re-renders replaced the label the popover was anchored
  to, leaving it measuring a detached element (position 0,0). It now always
  re-anchors to the live label.

## [1.4.1] — 2026-07-13

### Fixed
- **Room editing was unreachable.** The room overlay was stacked beneath the
  drawing surface, so in Rooms mode every click or drag — even on a corner
  handle, a room body, or a name label — started drawing a new box, and
  reshape / move / delete / color / out-of-scope were all inaccessible. The
  overlay now sits above the drawing surface with click-through empty areas:
  drawing on blank plan still works, and handles, bodies, and labels receive
  their events.

### Changed
- Creating a room now opens its popover immediately, so name, color, and
  out-of-scope are one step away instead of hidden behind a label click.

## [1.4.0] — 2026-07-13

### Added
- **Reshapeable polygon rooms.** Rooms are no longer locked to rectangles:
  in Rooms mode, select a room and drag its corner handles to reshape;
  drag a midpoint handle to add a corner (L-shapes, notches, any outline);
  double-click a corner to remove it. Drag inside a room to move it whole.
  Every edit is undoable.
- **Snapping.** While drawing, reshaping, or moving, corners snap to other
  rooms' edges and to the plan boundary for clean, gap-free adjacency.
- **Room colors.** Click a room's name (in Rooms mode) for a popover with
  an 8-color palette — distinguish common, main, private, and outdoor areas.
- **Out-of-scope rooms.** The same popover has an "Out of scope" toggle:
  the room renders hatched with a faint outline and an OUT tag, and its row
  in the Excel FD sheet is suffixed "(OUT OF SCOPE)".
- **Room highlight.** Outside Rooms mode, click a room's name to spotlight
  it: its ikons glow, all others dim, and a toast summarizes the contents
  ("OFFICE — 2× Keypad, 1× Touch Panel"). Click again or press Esc to clear.
- **Library management.** Hover a category header for rename (✎) and
  delete (✕) controls — deleting a category removes its devices and their
  placed ikons after confirmation. Each device row now has a quick-delete
  (trash) button beside the edit pencil. Always visible on touch devices.

### Changed
- **Icon redesigns:** Keypad is now a squared faceplate with a single
  column of buttons; new "Keypad (2-Column)" device/icon with two button
  columns; the 2-button keypad matches the squared style; Thermostat is a
  squared keypad-style faceplate with a display window; Touch Panel is now
  an iPad-style tablet.

### Compatibility
- `.ikonplan` files from 1.0.0–1.3.1 open unchanged; rectangular rooms are
  migrated to polygons automatically on load.

## [1.3.1] — 2026-07-13

### Fixed
- **Rooms button appearing dead after an update.** The code was verified
  correct by direct execution; the symptom matches a stale cached
  `app.js` being served alongside the new HTML. Asset URLs are now
  version-stamped (`app.js?v=1.3.1`, `app.css?v=1.3.1`) so every release
  forces browsers and CDNs to fetch matching assets. If a button ever seems
  inert after updating, hard-refresh once (`Ctrl+Shift+R`).

### Changed
- Entering Rooms mode now shows a confirmation toast, so mode activation is
  always visible.

## [1.3.0] — 2026-07-13

### Added
- **Rooms / areas on the floor plan.** A new Rooms tool in the toolbar lets
  you drag named zones onto the plan (rename by clicking the label, ✕ to
  delete, Esc to finish). Ikons are assigned to rooms automatically by
  position — nested rooms resolve to the smallest containing area. Rooms
  survive crop and rotation, participate in undo/redo, and are saved in
  `.ikonplan` files.
- **Field Device sheet in the Excel export.** The workbook now opens with an
  `FD <date>` tab matching the team's quotation reference: device types as
  columns, floors as sections, numbered room rows with per-room quantities,
  an UNASSIGNED/GENERAL row for ikons outside any room, and a formula-driven
  Total Units row — ready to copy into the quotation tab. The priced summary
  remains as the second sheet ("BoQ Summary").

### Compatibility
- `.ikonplan` files from 1.0.0–1.2.0 open unchanged (floors gain an empty
  rooms list on load).

## [1.2.0] — 2026-07-13

### Added
- **Redo** (↪ toolbar button, `Ctrl+Y` / `Ctrl+Shift+Z`) as the counterpart
  to Undo — covers ikon add/remove and crop/rotate snapshots. Any fresh
  action clears the redo history, as expected.

### Fixed
- **Touch panning on the plan** (reported on Galaxy Fold 7): drags starting
  on the floor plan were being claimed by the browser as scroll gestures
  (`touch-action: manipulation` on the placement layer), so the plan could
  not be moved by touch. It now pans freely in every direction.
- **Floating library on small screens:** the floating dock ignored the
  mobile off-canvas rules and its inline position, leaving the panel parked
  over the left half of the canvas. On screens ≤1024px the floating dock now
  collapses into the slide-in Devices sheet like the other vertical docks.
- **Device rows on touch devices:** the edit (pencil) button only appeared
  on hover, which does not exist on touch — it is now always visible on
  coarse-pointer devices. Device names are no longer hidden in the
  top/bottom strip on phones (they truncate gracefully instead), so devices
  can be identified and customized on mobile.

### Compatibility
- `.ikonplan` files from 1.0.0 and 1.1.0 open unchanged.

## [1.1.0] — 2026-07-12

### Added
- **Undo for crop and rotate.** Both operations now snapshot the plan first;
  `Ctrl+Z` / `Cmd+Z` restores the image, dimensions and every ikon exactly
  as they were. Previously a crop was irreversible.
- **Undo button in the toolbar** (↩) so tablet and phone users can undo
  without a keyboard. Works for ikon add/remove as well as crop/rotate.
- **Tablet crop gestures:** while cropping, a one-finger drag inside the
  frame slides the floor plan beneath a visually steady crop window
  (photo-cropper style), and a two-finger pinch zooms the plan under the
  frame — the crop region rescales inversely so the window appears fixed.
  Mouse behaviour is unchanged (dragging the frame moves the frame).

### Changed
- Crop corner handles are roughly twice as large on touch devices
  (`pointer: coarse`), making them far easier to grab on tablets.

### Compatibility
- `.ikonplan` files from 1.0.0 open unchanged.

## [1.0.0] — 2026-07-12

First stable release. Developed by Jassim Alfonso with Claude.

- Device library: 26 built-in AV icons, custom PNG icons, 20-color palette
  with custom picker, categories with drag-to-reorder, search, resizable
  panel, dockable left / top / bottom / right / floating / hidden.
- Floor plans: image upload, multi-page PDF import, clipboard paste,
  drag-and-drop, crop with A-series (recommended) and standard ratios,
  90° rotation with ikon remapping.
- Placement: click-to-place ikons with live quantities, drag to move,
  right-click or select-to-remove, free pan/zoom canvas with zoom-to-cursor
  and pinch support.
- Exports: branded A4/A3/A1 layout sheets (PDF or PNG) with header, legend
  and sheet numbering; orientation-matched cover page; Excel BoQ with
  per-floor columns; full package as one .zip; portable `.ikonplan`
  project files.
- Branding: official ikonhouse logotype (embedded, taint-proof), light and
  dark themes, project details (client, location, prepared by, reference)
  flowing through all documents.
- Onboarding: animated welcome screen with theme-aware wave graphic and
  guided project setup; Start over returns to the beginning while keeping
  the device library.
