# Changelog

All notable changes to the ikonhouse AV Pre-Sales Tool.
Format follows [Keep a Changelog](https://keepachangelog.com); versioning
follows [Semantic Versioning](https://semver.org).

## [1.63.1] — 2026-08-22

### Fixed
- **Device pins and chips disappeared in Futuristic mode.** The outline
  treatment hollowed them out while their symbols stayed white, so on a white
  plan there was nothing to see. A pin sits on someone else''s drawing, so it
  now always carries a solid fill and a contrasting ring in every mode — the
  modes differ by **shape, ring and glow**, never by hollowing the pin:
  - **Modern** — round, white ring, soft drop shadow, slightly bolder symbol.
  - **Retro** — square, dark hairline, hard offset shadow, blunt-capped symbol.
  - **Futuristic** — round with a **neon halo** in the device''s own colour,
    and a brighter one when selected.
- **Modes are listed by name and description only.** The colour chips beside
  them said nothing useful about a mode — colour themes keep theirs, since
  there the colour *is* the choice.

## [1.63.0] — 2026-08-22

### Added
- **Each mode now brings its own colours**, because a design ethos is not
  only shapes:
  - **Modern** — Apple''s system blue on near-white, almost no chroma
    anywhere else; true black at night.
  - **Retro** — a warm CRT: tan paper and burnt orange by day, **amber on
    black with a phosphor glow** at night.
  - **Futuristic** — monochrome with a single red, used sparingly and never
    decoratively.
  A mode paints only while the colour theme is set to **Match mode**;
  choosing any theme takes over, exactly as before. **Bronze** is now an
  explicit choice rather than the absence of one.
- **Icons take each mode''s hand** — 1.15px hairlines for Futuristic, 1.7px
  rounded for Modern, 2.4px square-capped for Retro — and device chips follow:
  soft shadowed squares, hard-shadowed blocks, or hollow rings.

### Fixed
- **The welcome mode row is centred** with the rest of the page.
- **The Futuristic title fits on one line** — the dot-matrix face needed a
  smaller size and tighter tracking than the others.
- **The colour chips beside the mode name are gone** from the toolbar, in
  favour of a plain glyph.

## [1.62.0] — 2026-08-22

### Changed
- **The welcome screen''s mode picker is now a quiet line of words**, aligned
  with everything else on the page, rather than a row of chips.
- **A plainly labelled Mode control sits in the toolbar**, showing which mode
  you are in and opening a menu to change it — no longer buried in Appearance.
- **The modes are far further apart.** Each now sets its own density, type
  scale, icon weight, pin shape, room-outline style and panel construction:
  - **Modern** — roomier throughout, a transparent toolbar of floating
    buttons, round pins with soft shadows, smooth room outlines, pill labels
    and toasts, rounded icon strokes.
  - **Retro** — compact and dense, two-pixel borders, panels topped by a
    title strip with ▪ ▪ ▪ in the corner, square pins with hard shadows,
    dashed room outlines, dotted row separators, square icon caps, and a
    scanline over the whole plan.
  - **Futuristic** — airy and stripped back, dot-matrix labels and figures,
    hollow ring pins, room outlines drawn as fine dots, hairline dotted
    separators, thin icon strokes, and a dot grid behind the plan.

## [1.61.0] — 2026-08-22

### Added
- **Mode is chosen on the welcome screen**, before you even open a project —
  the same four options, and the screen itself changes as you pick.
- **Each mode now moves differently**, which is most of why it feels like a
  different app:
  - **Modern** — long, settling easing; panels rise and scale in; buttons give
    slightly under a press.
  - **Retro** — no easing at all. Everything is instant and mechanical,
    buttons shift a pixel down-right as if depressed, toasts blink on, and a
    terminal caret blinks beside the wordmark.
  - **Futuristic** — fast and precise, with a faint blur as panels arrive,
    a glow on lit controls, and hairlines that sweep into place.
- Motion honours **reduced-motion** settings; all three fall still when asked.

## [1.60.0] — 2026-08-22

### Added
- **Three modes**, in Appearance → Mode, each changing shape, type, spacing
  and depth rather than just colour:
  - **Modern** — Apple''s softness and Google''s clarity with Japanese
    restraint: pill geometry, generous air, light weights, quiet depth.
  - **Retro** — the rack gear and terminals this trade grew up on: square
    corners, bevelled edges, engraved monospace labels, hard shadows and a
    faint scanline in the panels.
  - **Futuristic** — Nothing''s vocabulary: dot-matrix labels, hairline
    structure, translucency, circles where other interfaces use rectangles,
    and a dot grid behind the plan.
  Any mode combines with any colour theme, and **Original** restores the app
  exactly as it ships.

### Changed
- **Projects now save as `.ikon`** — shorter, and easier to say. Existing
  **`.ikonplan` files still open**; opening one says that saving will create
  a `.ikon` file and leaves the original untouched, rather than writing back
  over it.

## [1.59.3] — 2026-08-22

### Fixed
- **The pointer disappeared on white plans.** Rooms and Notes were using the
  system crosshair, which some setups draw in white — invisible against a
  white drawing. The app now draws its own: dark lines with a white halo, so
  it reads on any plan, in any theme, whatever the system is set to. The
  skribble ring is pinned to the same dark outline for the same reason.

## [1.59.2] — 2026-08-22

### Fixed
- **Choosing a leader tip was impossible to see in Mono.** The selected
  button drew its symbol in white on a fill that is itself white in that
  theme. Anything filled with the accent colour now takes its symbol from the
  background instead of a hard-coded white, so it stays legible in every
  theme — the same trap affected several other lit controls.
- **The brush ring is visible on any drawing**, with a dark ring inside a
  light one rather than relying on the accent colour.
- **Note boxes follow the theme again** — the Mono-specific overrides added
  in 1.59.1 have been dropped.

### Changed
- **Note text size is set in real pixel values** — presets of 12, 16, 20, 26
  and 34, plus a slider and a typed value, all kept in step with each other.

## [1.59.1] — 2026-08-22

### Fixed
- **The leader arrow pointed the wrong way.** Its base was set behind the
  point rather than back along the line, so it aimed away from what it was
  marking. It now points at its target, on screen and on the sheet.
- **Things floating over the plan no longer vanish in the Mono theme.** The
  brush cursor has a dark ring inside a light one, leader tips carry a light
  outline, and note boxes sit on solid ground — none of it now depends on an
  accent colour that may be pure white or pure black.
- **Selecting a leader point no longer hides the ikon beneath it.** The
  highlight is a ring rather than a filled patch.

### Added
- **Note text size** — set it in pixels, or from **S / M / L / XL** presets so
  a set of drawings stays consistent. The default is larger than before,
  since notes were unreadably small on big plans. The size is in plan
  pixels, so a note keeps its proportions when printed no matter how far
  you are zoomed in.

## [1.59.0] — 2026-08-22

### Fixed
- **Leader lines now meet the text box at its centre**, so they stay properly
  attached however the box is dragged — they used to stop at its left edge.
- **Long notes are readable in full.** Labels were cut off after a few lines;
  they now grow to fit, keep their line breaks, and wrap long words.
- **The text cursor is visible** in the note editor.

### Added
- **Choose how a leader ends** — a dot, an arrow that points along the line,
  or a numbered circle — and set its **size**.
- **More than one leader per note.** Add as many as you need, drag each point
  to whatever it should aim at, and the note reads once while pointing at
  several things. Existing notes carry over untouched.
- All of it prints on the exported sheets, tips included.

## [1.58.3] — 2026-08-22

### Changed
- **The radio starts far sooner.** The YouTube player library was only
  fetched at the moment you pressed play, so the first note waited on a
  download. It is now fetched quietly while the app is idle, and connections
  to YouTube are opened in advance, so playback begins almost at once.
  The pill shows **Connecting…** until sound actually starts, so the wait —
  whatever remains of it — is never silent and unexplained.
- The library is still only fetched when the radio is set to start with the
  app, and only ever once.

## [1.58.2] — 2026-08-22

### Fixed
- **The radio panel would not open from the welcome screen.** It opened and
  then closed itself: the same click carried on to the handler that dismisses
  the panel when you click away, which did not recognise the welcome button.
  Both radio buttons are now exempt, and the panel anchors beneath whichever
  one opened it rather than to the toolbar hidden behind the welcome screen.

## [1.58.1] — 2026-08-22

### Fixed
- **The ✕ on the radio panel was switching the whole radio off.** It now
  closes the panel only and the music keeps playing. Turning the radio off is
  its own action — **Turn the radio off** at the foot of the panel — and the
  note button returns to the toolbar so it can be brought back.
- **Clicking the pill reliably closes its panel again**; the controls on the
  pill no longer bubble up and reopen it.

### Added
- **Previous button** on the pill, alongside skip — both wrap around the list.

## [1.58.0] — 2026-08-22

### Added
- **Claude Music** joins the stations, and the first is now named
  **Tokyo Lofi** — also the default.
- **Skip button** on the now-playing pill: step to the next station, wrapping
  round at the end.
- **Mono theme** — black and white only, with no hue anywhere. Emphasis comes
  from contrast alone, which suits presenting and printing; lit controls
  invert rather than tint.

### Changed
- **The colour themes have far more life in them.** The muted set has been
  replaced by Indigo (electric blue), Green, Azure, Ember and Mono, each with
  a matching night version, and backgrounds now carry a hint of the accent
  instead of being uniformly grey.
- **Clicking the now-playing pill closes the panel again**, rather than only
  opening it.

## [1.57.1] — 2026-08-22

### Changed
- **The radio is now a "now playing" strip in the toolbar** — play/pause, four
  little bars that move only while something is actually playing, and the
  station name. Clicking the name drops a small panel beneath it for stations,
  volume, rename and the autostart switch; clicking away closes it. Closing
  turns the radio off entirely.
- **Fitting the plan needs a deliberate double middle-click.** Panning with
  the wheel button used to trip it: a middle click now only counts if the
  pointer did not move and the button was not held, so panning never fits the
  view by accident.

## [1.57.0] — 2026-08-22

### Changed
- **The radio is now a slim bar** — a small round player, play/pause, the
  station name, mute and close. Clicking the name expands it for the station
  list, volume and rename; everything else stays out of the way.

### Added
- **The radio starts with the app.** Browsers only allow sound once someone
  has interacted with the page, so it begins at your first click or key press
  rather than on load — near enough to opening that it feels automatic.
  **Start with the app** in the expanded panel turns it off, and the setting
  is remembered.

## [1.56.3] — 2026-08-22

### Fixed
- **The two channel stations would not play**, so they have been removed.
  Four verified streams remain, with **Lofi radio — focus** added and set as
  the default. A saved station that no longer exists now falls back to the
  default instead of failing silently.
- Pasting a **channel** link when adding a station still works — it plays
  whatever that channel is streaming at the time.

## [1.56.2] — 2026-08-21

### Added
- **Five stations**, including the working Lofi Girl beats stream and two
  channels — Lofi Tokyo and one other — added as **channel** stations rather
  than fixed video IDs, so they always play whatever that channel is
  streaming and cannot go stale when a stream restarts.
- **Rename any station** with the pencil in the radio header; names are
  remembered, so an unfamiliar channel can be labelled however you like.

## [1.56.1] — 2026-08-21

### Fixed
- **Two radio stations would not play.** Live-stream IDs change whenever a
  channel restarts its stream, and two of the four shipped were stale. Only
  verified streams now ship — **Synthwave** and **Sleep** — and rather than
  guess at others, **stations you add from a link are saved and stay in the
  list**, with a name of your choosing.

### Added
- **The radio is on the welcome screen too**, next to the appearance button.
  Opening it there starts the dark Synthwave stream straight away — that click
  is what browsers require before sound is allowed.

## [1.56.0] — 2026-08-21

### Changed
- **Dragging the plan now moves it**, as it already did on touch. Boxing a
  selection is **Shift-drag** — previously a plain drag started a selection
  box, which fought with simply moving around the plan.

### Added
- **Double-click the scroll wheel to fit the plan to the window.**
- **Focus radio** — a small background-music panel (toolbar, note icon) with
  Lofi Girl and Chillhop streams, play/pause, mute, volume, and the option to
  paste any YouTube link. Volume and station are remembered; nothing loads
  until the panel is opened, so it costs nothing at startup, and closing it
  stops the music.

## [1.55.1] — 2026-08-21

### Changed
- **Look sets removed; colour themes kept.** Changing corner shape, typeface
  and density altered the app''s character without making it better to use, so
  the choice is now simply a colour theme — Bronze, Indigo, Sage, Slate or
  Clay — each working in day or night.

### Fixed
- **The appearance button did nothing on the welcome screen.** The panel was
  opening behind it; it now sits above.
- **Dialogs have room to breathe** — more padding throughout, a proper rule
  under each title, and clearer spacing between fields and actions.

## [1.55.0] — 2026-08-21

### Added
- **Appearance panel**, from a palette button in the toolbar and on the
  welcome screen. Two independent choices:
  - **Look** — the app''s character: **Original** (rounded, warm),
    **Atelier** (drawing office), **Kinari** (soft and airy) or **Retro**
    (squared, rack-gear). Corner shape, typeface and density all change.
  - **Colour** — **Bronze**, **Indigo**, **Sage**, **Slate** or **Clay**.
  Any look combines with any colour, in day or night, and **Back to the
  original** clears everything in one click.
- **Appearance is remembered in the browser**, not in the project file, so
  the app looks the way you like it whichever project you open — while
  project files stay portable between people with different preferences.
- **Recent projects on the welcome screen** — name, client, floors, devices
  and when it was last edited. Each has a **✕** that removes it from the list
  only; the file itself is untouched.

### Changed
- The look and accent pickers added in 1.54 are superseded by the Appearance
  panel, which separates character from colour rather than bundling them.

## [1.54.0] — 2026-08-21

### Added
- **Look &amp; feel sets** (View menu): **Atelier** (limestone and indigo,
  drawing-office), **Kinari** (unbleached paper and sage) and **Slate** (cool
  neutral), alongside the **Original** warm bronze. A look is a palette only —
  nothing structural changes — and each works in both day and night.
- **Accent colour** can be set on its own, overriding whichever look is
  active, so the tool can carry a project or client colour.
- **"Back to the original look"** clears both in one click. Both settings save
  with the project.

### Fixed
- **Notes are properly multi-line.** They opened in a single-line browser
  prompt; there is now a real editor with a resizable text area, Ctrl/⌘+Enter
  to save, and a Delete button. Line breaks are kept on the plan and on the
  exported sheets.
- **Resizing a highlighted room no longer pans the plan.** Outside Rooms mode
  a near-miss on a handle landed on the plan and started a pan. Handles now
  have a wider catch there, and a press that lands close to one no longer
  pans at all.

## [1.53.2] — 2026-08-21

### Fixed
- **FD sheet colouring.** Every cell was being given a solid white fill, which
  flattened the sheet and painted over Excel''s own gridlines. Ordinary cells
  now carry no fill at all, exactly as the reference workbook does.
- **Floor rows stand out again.** Matching the reference removed their tint
  in 1.52, leaving floor sections hard to pick out in a long sheet. Floor
  titles and the totals row now sit on a faint grey band — enough to scan by,
  far lighter than the old heavy grey. Out-of-scope rooms keep their darker
  grey, so the two never read as the same thing.

## [1.53.1] — 2026-08-21

### Changed
- **Room names find a clear spot instead of sitting on the devices.** A label
  is now placed where the room is emptiest — furthest from the ikons inside it
  and from its own walls — rather than at the geometric centre, which is
  exactly where devices tend to cluster. Empty rooms still read centrally, and
  labels stay inside awkward shapes such as L-rooms.
- Labels are visually lighter, brighten on hover or when their room is
  highlighted, and fade further back while a device is armed for placement.

## [1.53.0] — 2026-08-21

### Added
- **Leader notes.** A note is now a target ring on the thing it describes,
  joined by a leader line to a label you can drag clear of the drawing — so
  one note can call out a single device, several items sharing one point, or a
  whole area. Both ends drag independently; leaders and wrapped label text
  print on the exported sheets.
- **Outdoor areas.** A room can be marked as an *outdoor area*: it surrounds
  other rooms instead of dividing them, draws beneath them with a dashed
  outline, and devices inside an inner room still belong to that room — only
  what falls outside them counts as the area''s. Skribble has an **Outdoor
  area** switch that lets the brush pass over existing rooms.
- **Wall thickness slider** (WALLS) for clearer boundaries, and **room fill
  strength** joins the always-visible toolbar group.

### Changed
- **Tapping a shared wall cycles through the rooms that meet along it** —
  tap once for one side, again for the other, with the room named each time.
- **"Linked walls" is now "Joined rooms move together"**, with a tooltip
  explaining that it keeps rooms attached when you drag a shared corner.

## [1.52.0] — 2026-08-21

### Changed
- **The Excel FD sheet now matches the ikonhouse quotation format:** header
  row 140pt deep with device names
  rotated 90°, bold, 10pt; the top row frozen; hairline borders on every cell;
  column widths 3.1 / 44 / 5.4; plain bold floor titles with a single rule
  beneath; a blank row between floors; and a **Total units** row of SUM
  formulas. Out-of-scope rooms keep their grey fill.
- **The device library is seeded in the workbook''s order** — 4 Button Keypad,
  8 Button Keypad, Touch Panel, Thermostat, HVAC Zones, lighting modules,
  curtain control, speakers and streaming, Wi-Fi, intercom and CCTV, then
  client-supplied items — with categories ordered to match. Rearranging the
  library still drives the FD column order, so the sequence stays yours.

## [1.51.0] — 2026-08-13

### Fixed
- **The room editor no longer jumps to the middle of the room.** Since labels
  moved to each room''s centre, every re-open — after a colour or scope change
  — re-anchored the panel there. It now stays where you put it while you keep
  working on the same room.
- **The custom out-of-scope colour is round again**, sized properly, and
  ringed with a colour wheel so it reads as a picker rather than a swatch.
  The device dialog''s custom colour matches.

### Changed
- **Skribbled rooms are now always square-walled.** Every wall comes out
  horizontal or vertical, which makes results predictable — an odd-shaped
  room is a couple of corner drags away afterwards. A genuinely triangular
  scribble still returns a shape rather than nothing.
- **Linked walls, greyscale, ikon size and opacity are back on the toolbar**
  as an always-visible group, since they are used constantly. Room fill
  strength, numbering size, auto-numbering and the out-of-scope colour stay in
  the Display panel. The group shrinks gracefully on narrow screens rather
  than disappearing.

## [1.50.0] — 2026-08-13

### Added
- **Notes.** Press <kbd>A</kbd> or tap **Notes**, then tap the plan to leave a
  comment — site conditions, client requests, anything worth remembering.
  Notes are numbered pins with their text beside them: drag to move, tap to
  edit, clear the text to delete. Fully undoable, they survive crop and
  rotate, save with the project, and print on the exported sheets.

### Fixed
- **Cropping is undoable — and now says so.** It always was, but nothing told
  you, so a bad crop felt permanent. Applying a crop now says that Undo brings
  the full plan back. (History is capped at 80 steps, since crop snapshots
  hold a whole plan image.)
- **Device names are no longer buried by their tools.** Names take the space
  they need and truncate cleanly; with a mouse the row tools stay hidden until
  you hover, and on touch they are compact and sit clear of the name.
- **The out-of-scope colour control** is properly round and has moved out of
  the tool row.

### Changed
- **Display settings are always a panel**, on every device, instead of
  sliders inline on desktop and a panel on tablets — one consistent layout
  and a much calmer toolbar at every width.
- **Skribble is straighter again** — wobble is absorbed more aggressively,
  and only a dominant edge near 45° keeps its angle.

## [1.49.0] — 2026-08-13

### Fixed
- **Adjusting one room of a joined pair.** Shared corners always moved both
  rooms, which made fine-tuning a boundary awkward. Hold **Ctrl/⌘** while
  dragging to move just the room you grabbed, or switch off **Linked walls**
  in Display to make that the default. A one-time note explains it the first
  time you take hold of a shared corner.
- **Floor tabs stay put.** They previously sat at the right of the tool row
  on wide screens and jumped to their own row on narrow ones. They now always
  occupy their own full-width row beneath the tools, in the same place at
  every size.

### Changed
- **A calmer toolbar.** Rotate left, rotate right and the room schedule order
  have moved into a **More** menu, leaving the row to the tools actually used
  while planning. Nothing was removed — and the keyboard shortcuts are
  unchanged.

## [1.48.0] — 2026-08-13

### Added
- **Show / hide devices and categories, like layers.** Every device row and
  every category header now has an eye: switch one off and those ikons leave
  the plan — and the exported sheets and their legend — so a plan can be
  presented one discipline at a time (lighting only, audio only, and so on).
  - Hiding is **presentation, not scope**: quantities in the BoQ, the Excel FD
    sheet and the room matrix are unaffected. Out-of-scope remains the way to
    exclude something from the numbers.
  - A category''s eye switches all of its devices together.
  - A standing reminder appears while anything is hidden, with **Show all** to
    restore everything in one click — so a hidden layer is never forgotten
    before an export.
  - Choosing a hidden device to place brings it back automatically.

## [1.47.0] — 2026-08-12

### Fixed
- **Floor tabs disappearing in a narrow window — at any screen size.** The
  toolbar was a fixed-height row that simply scrolled its contents out of
  sight, so on a smaller desktop window the floors were pushed off the end.
  The toolbar now **wraps**: when the floor tabs can no longer hold a sensible
  width they move to their own full-width row, separated by a rule, with
  larger tabs. This happens automatically at every width, so no manual
  resizing is needed.
- **Narrow desktop windows now get the grouped Display panel too** (below
  1400 px), instead of squeezing four sliders into the tool row.

## [1.46.0] — 2026-08-12

### Added
- **Select several rooms at once.** Shift/Ctrl-click room edges to build a
  selection (once one is picked, plain clicks keep adding). Selected rooms are
  outlined boldly and a bar appears with the actions that apply to all of them.
- **Mark rooms out of scope in bulk**, from that bar or with the <kbd>O</kbd>
  shortcut — which also works on a single highlighted room, and toggles back
  in scope. Each room''s own colour is remembered and restored.
- **Recolour several rooms at once** from the same bar. Recolouring a room
  that is currently out of scope stores the colour for when it returns, so the
  out-of-scope convention is never broken by accident.
- Tapping the plan or pressing <kbd>Esc</kbd> clears the selection.

## [1.45.0] — 2026-08-12

### Added
- **The out-of-scope colour is now yours to choose** — a swatch row (plus a
  full colour picker) beside the plan sliders, under **OUT**. Changing it
  restyles every out-of-scope room across all floors at once, leaves in-scope
  rooms alone, and keeps each room''s original colour remembered for when it
  comes back into scope. Saved with the project; red remains the default.

## [1.44.0] — 2026-08-12

### Changed
- **Skribble''s shortcut is now <kbd>K</kbd>**, and every tool key toggles —
  press it again to leave the tool. <kbd>C</kbd> now closes the crop frame as
  well as opening it.

### Added
- **Tap the plan to let a room go.** After resizing or highlighting a room, a
  plain tap anywhere on the plan clears the highlight and closes its editor —
  previously only a tap outside the plan did. Panning and dragging are
  unaffected, since only a tap that did not move counts.

## [1.43.0] — 2026-08-12

### Fixed
- **Floor tabs are properly visible on tablets and folds.** They were sharing
  one row with ten toolbar buttons and got squeezed to nothing. On compact
  screens they now sit on their own full-width row beneath the toolbar, with
  larger, higher-contrast tabs.

### Added
- **Keyboard shortcuts:** <kbd>R</kbd> rooms, <kbd>B</kbd> skribble,
  <kbd>C</kbd> crop, <kbd>G</kbd> greyscale, <kbd>N</kbd> numbering,
  <kbd>L</kbd> library, <kbd>?</kbd> the guide. They are ignored while typing.
- **A single, consistent way out of any tool on touch:** a floating **Done**
  button appears whenever Rooms or Skribble is active, naming the tool it will
  close. Esc and tapping the tool button again still work.

## [1.42.0] — 2026-08-12

### Fixed
- **Skribbling over an existing room selected it instead of painting.** The
  room layer sits above the plan and was intercepting the brush, so a stroke
  crossing a room grabbed and resized it. In Skribble mode the rooms no longer
  take pointer input at all — the brush always wins, and boundaries are still
  respected as before.
- **Floor names were hard to read on small screens** — higher contrast, larger
  type and roomier tabs on compact layouts.
- **Room names sat in a corner** — labels are now placed at each room''s area
  centroid, and stay inside awkward shapes such as L-rooms rather than
  drifting outside them.

### Changed
- **Skribble is boxier again.** Only a dominant edge at roughly 45° keeps its
  angle; slopes up to about 40° are squared up.

## [1.41.0] — 2026-08-11

### Fixed
- **The How-to-use guide stopped appearing at startup.** It was marked as seen
  permanently after the first dismissal; it now shows once **per release**, so
  each update surfaces it again. The **?** button opens it any time.

### Changed
- **Skribble prefers straight walls more strongly again.** Only a decisively
  diagonal wall — roughly 32° to 58° off square — keeps its angle; everything
  gentler, and everything close to vertical, is squared up. Rooms come out as
  clean blocks unless an angle was clearly intended.
- **The guide has room to breathe** — more padding throughout, wider steps
  with clearer numbering, and noticeably more space between sections.

## [1.52.1] — 2026-08-21

### Removed
- **The reference quotation workbook is no longer included in the project.**
  It held commercially sensitive client and pricing information and should
  never have been copied in. It has been deleted, all identifying references
  scrubbed from the documentation, and a `.gitignore` now blocks spreadsheet
  files from being committed. Keep such files outside the repository and
  consult them locally.

## [1.63.1] — 2026-08-22

### Fixed
- **Device pins and chips disappeared in Futuristic mode.** The outline
  treatment hollowed them out while their symbols stayed white, so on a white
  plan there was nothing to see. A pin sits on someone else''s drawing, so it
  now always carries a solid fill and a contrasting ring in every mode — the
  modes differ by **shape, ring and glow**, never by hollowing the pin:
  - **Modern** — round, white ring, soft drop shadow, slightly bolder symbol.
  - **Retro** — square, dark hairline, hard offset shadow, blunt-capped symbol.
  - **Futuristic** — round with a **neon halo** in the device''s own colour,
    and a brighter one when selected.
- **Modes are listed by name and description only.** The colour chips beside
  them said nothing useful about a mode — colour themes keep theirs, since
  there the colour *is* the choice.

## [1.63.0] — 2026-08-22

### Added
- **Each mode now brings its own colours**, because a design ethos is not
  only shapes:
  - **Modern** — Apple''s system blue on near-white, almost no chroma
    anywhere else; true black at night.
  - **Retro** — a warm CRT: tan paper and burnt orange by day, **amber on
    black with a phosphor glow** at night.
  - **Futuristic** — monochrome with a single red, used sparingly and never
    decoratively.
  A mode paints only while the colour theme is set to **Match mode**;
  choosing any theme takes over, exactly as before. **Bronze** is now an
  explicit choice rather than the absence of one.
- **Icons take each mode''s hand** — 1.15px hairlines for Futuristic, 1.7px
  rounded for Modern, 2.4px square-capped for Retro — and device chips follow:
  soft shadowed squares, hard-shadowed blocks, or hollow rings.

### Fixed
- **The welcome mode row is centred** with the rest of the page.
- **The Futuristic title fits on one line** — the dot-matrix face needed a
  smaller size and tighter tracking than the others.
- **The colour chips beside the mode name are gone** from the toolbar, in
  favour of a plain glyph.

## [1.62.0] — 2026-08-22

### Changed
- **The welcome screen''s mode picker is now a quiet line of words**, aligned
  with everything else on the page, rather than a row of chips.
- **A plainly labelled Mode control sits in the toolbar**, showing which mode
  you are in and opening a menu to change it — no longer buried in Appearance.
- **The modes are far further apart.** Each now sets its own density, type
  scale, icon weight, pin shape, room-outline style and panel construction:
  - **Modern** — roomier throughout, a transparent toolbar of floating
    buttons, round pins with soft shadows, smooth room outlines, pill labels
    and toasts, rounded icon strokes.
  - **Retro** — compact and dense, two-pixel borders, panels topped by a
    title strip with ▪ ▪ ▪ in the corner, square pins with hard shadows,
    dashed room outlines, dotted row separators, square icon caps, and a
    scanline over the whole plan.
  - **Futuristic** — airy and stripped back, dot-matrix labels and figures,
    hollow ring pins, room outlines drawn as fine dots, hairline dotted
    separators, thin icon strokes, and a dot grid behind the plan.

## [1.61.0] — 2026-08-22

### Added
- **Mode is chosen on the welcome screen**, before you even open a project —
  the same four options, and the screen itself changes as you pick.
- **Each mode now moves differently**, which is most of why it feels like a
  different app:
  - **Modern** — long, settling easing; panels rise and scale in; buttons give
    slightly under a press.
  - **Retro** — no easing at all. Everything is instant and mechanical,
    buttons shift a pixel down-right as if depressed, toasts blink on, and a
    terminal caret blinks beside the wordmark.
  - **Futuristic** — fast and precise, with a faint blur as panels arrive,
    a glow on lit controls, and hairlines that sweep into place.
- Motion honours **reduced-motion** settings; all three fall still when asked.

## [1.60.0] — 2026-08-22

### Added
- **Three modes**, in Appearance → Mode, each changing shape, type, spacing
  and depth rather than just colour:
  - **Modern** — Apple''s softness and Google''s clarity with Japanese
    restraint: pill geometry, generous air, light weights, quiet depth.
  - **Retro** — the rack gear and terminals this trade grew up on: square
    corners, bevelled edges, engraved monospace labels, hard shadows and a
    faint scanline in the panels.
  - **Futuristic** — Nothing''s vocabulary: dot-matrix labels, hairline
    structure, translucency, circles where other interfaces use rectangles,
    and a dot grid behind the plan.
  Any mode combines with any colour theme, and **Original** restores the app
  exactly as it ships.

### Changed
- **Projects now save as `.ikon`** — shorter, and easier to say. Existing
  **`.ikonplan` files still open**; opening one says that saving will create
  a `.ikon` file and leaves the original untouched, rather than writing back
  over it.

## [1.59.3] — 2026-08-22

### Fixed
- **The pointer disappeared on white plans.** Rooms and Notes were using the
  system crosshair, which some setups draw in white — invisible against a
  white drawing. The app now draws its own: dark lines with a white halo, so
  it reads on any plan, in any theme, whatever the system is set to. The
  skribble ring is pinned to the same dark outline for the same reason.

## [1.59.2] — 2026-08-22

### Fixed
- **Choosing a leader tip was impossible to see in Mono.** The selected
  button drew its symbol in white on a fill that is itself white in that
  theme. Anything filled with the accent colour now takes its symbol from the
  background instead of a hard-coded white, so it stays legible in every
  theme — the same trap affected several other lit controls.
- **The brush ring is visible on any drawing**, with a dark ring inside a
  light one rather than relying on the accent colour.
- **Note boxes follow the theme again** — the Mono-specific overrides added
  in 1.59.1 have been dropped.

### Changed
- **Note text size is set in real pixel values** — presets of 12, 16, 20, 26
  and 34, plus a slider and a typed value, all kept in step with each other.

## [1.59.1] — 2026-08-22

### Fixed
- **The leader arrow pointed the wrong way.** Its base was set behind the
  point rather than back along the line, so it aimed away from what it was
  marking. It now points at its target, on screen and on the sheet.
- **Things floating over the plan no longer vanish in the Mono theme.** The
  brush cursor has a dark ring inside a light one, leader tips carry a light
  outline, and note boxes sit on solid ground — none of it now depends on an
  accent colour that may be pure white or pure black.
- **Selecting a leader point no longer hides the ikon beneath it.** The
  highlight is a ring rather than a filled patch.

### Added
- **Note text size** — set it in pixels, or from **S / M / L / XL** presets so
  a set of drawings stays consistent. The default is larger than before,
  since notes were unreadably small on big plans. The size is in plan
  pixels, so a note keeps its proportions when printed no matter how far
  you are zoomed in.

## [1.59.0] — 2026-08-22

### Fixed
- **Leader lines now meet the text box at its centre**, so they stay properly
  attached however the box is dragged — they used to stop at its left edge.
- **Long notes are readable in full.** Labels were cut off after a few lines;
  they now grow to fit, keep their line breaks, and wrap long words.
- **The text cursor is visible** in the note editor.

### Added
- **Choose how a leader ends** — a dot, an arrow that points along the line,
  or a numbered circle — and set its **size**.
- **More than one leader per note.** Add as many as you need, drag each point
  to whatever it should aim at, and the note reads once while pointing at
  several things. Existing notes carry over untouched.
- All of it prints on the exported sheets, tips included.

## [1.58.3] — 2026-08-22

### Changed
- **The radio starts far sooner.** The YouTube player library was only
  fetched at the moment you pressed play, so the first note waited on a
  download. It is now fetched quietly while the app is idle, and connections
  to YouTube are opened in advance, so playback begins almost at once.
  The pill shows **Connecting…** until sound actually starts, so the wait —
  whatever remains of it — is never silent and unexplained.
- The library is still only fetched when the radio is set to start with the
  app, and only ever once.

## [1.58.2] — 2026-08-22

### Fixed
- **The radio panel would not open from the welcome screen.** It opened and
  then closed itself: the same click carried on to the handler that dismisses
  the panel when you click away, which did not recognise the welcome button.
  Both radio buttons are now exempt, and the panel anchors beneath whichever
  one opened it rather than to the toolbar hidden behind the welcome screen.

## [1.58.1] — 2026-08-22

### Fixed
- **The ✕ on the radio panel was switching the whole radio off.** It now
  closes the panel only and the music keeps playing. Turning the radio off is
  its own action — **Turn the radio off** at the foot of the panel — and the
  note button returns to the toolbar so it can be brought back.
- **Clicking the pill reliably closes its panel again**; the controls on the
  pill no longer bubble up and reopen it.

### Added
- **Previous button** on the pill, alongside skip — both wrap around the list.

## [1.58.0] — 2026-08-22

### Added
- **Claude Music** joins the stations, and the first is now named
  **Tokyo Lofi** — also the default.
- **Skip button** on the now-playing pill: step to the next station, wrapping
  round at the end.
- **Mono theme** — black and white only, with no hue anywhere. Emphasis comes
  from contrast alone, which suits presenting and printing; lit controls
  invert rather than tint.

### Changed
- **The colour themes have far more life in them.** The muted set has been
  replaced by Indigo (electric blue), Green, Azure, Ember and Mono, each with
  a matching night version, and backgrounds now carry a hint of the accent
  instead of being uniformly grey.
- **Clicking the now-playing pill closes the panel again**, rather than only
  opening it.

## [1.57.1] — 2026-08-22

### Changed
- **The radio is now a "now playing" strip in the toolbar** — play/pause, four
  little bars that move only while something is actually playing, and the
  station name. Clicking the name drops a small panel beneath it for stations,
  volume, rename and the autostart switch; clicking away closes it. Closing
  turns the radio off entirely.
- **Fitting the plan needs a deliberate double middle-click.** Panning with
  the wheel button used to trip it: a middle click now only counts if the
  pointer did not move and the button was not held, so panning never fits the
  view by accident.

## [1.57.0] — 2026-08-22

### Changed
- **The radio is now a slim bar** — a small round player, play/pause, the
  station name, mute and close. Clicking the name expands it for the station
  list, volume and rename; everything else stays out of the way.

### Added
- **The radio starts with the app.** Browsers only allow sound once someone
  has interacted with the page, so it begins at your first click or key press
  rather than on load — near enough to opening that it feels automatic.
  **Start with the app** in the expanded panel turns it off, and the setting
  is remembered.

## [1.56.3] — 2026-08-22

### Fixed
- **The two channel stations would not play**, so they have been removed.
  Four verified streams remain, with **Lofi radio — focus** added and set as
  the default. A saved station that no longer exists now falls back to the
  default instead of failing silently.
- Pasting a **channel** link when adding a station still works — it plays
  whatever that channel is streaming at the time.

## [1.56.2] — 2026-08-21

### Added
- **Five stations**, including the working Lofi Girl beats stream and two
  channels — Lofi Tokyo and one other — added as **channel** stations rather
  than fixed video IDs, so they always play whatever that channel is
  streaming and cannot go stale when a stream restarts.
- **Rename any station** with the pencil in the radio header; names are
  remembered, so an unfamiliar channel can be labelled however you like.

## [1.56.1] — 2026-08-21

### Fixed
- **Two radio stations would not play.** Live-stream IDs change whenever a
  channel restarts its stream, and two of the four shipped were stale. Only
  verified streams now ship — **Synthwave** and **Sleep** — and rather than
  guess at others, **stations you add from a link are saved and stay in the
  list**, with a name of your choosing.

### Added
- **The radio is on the welcome screen too**, next to the appearance button.
  Opening it there starts the dark Synthwave stream straight away — that click
  is what browsers require before sound is allowed.

## [1.56.0] — 2026-08-21

### Changed
- **Dragging the plan now moves it**, as it already did on touch. Boxing a
  selection is **Shift-drag** — previously a plain drag started a selection
  box, which fought with simply moving around the plan.

### Added
- **Double-click the scroll wheel to fit the plan to the window.**
- **Focus radio** — a small background-music panel (toolbar, note icon) with
  Lofi Girl and Chillhop streams, play/pause, mute, volume, and the option to
  paste any YouTube link. Volume and station are remembered; nothing loads
  until the panel is opened, so it costs nothing at startup, and closing it
  stops the music.

## [1.55.1] — 2026-08-21

### Changed
- **Look sets removed; colour themes kept.** Changing corner shape, typeface
  and density altered the app''s character without making it better to use, so
  the choice is now simply a colour theme — Bronze, Indigo, Sage, Slate or
  Clay — each working in day or night.

### Fixed
- **The appearance button did nothing on the welcome screen.** The panel was
  opening behind it; it now sits above.
- **Dialogs have room to breathe** — more padding throughout, a proper rule
  under each title, and clearer spacing between fields and actions.

## [1.55.0] — 2026-08-21

### Added
- **Appearance panel**, from a palette button in the toolbar and on the
  welcome screen. Two independent choices:
  - **Look** — the app''s character: **Original** (rounded, warm),
    **Atelier** (drawing office), **Kinari** (soft and airy) or **Retro**
    (squared, rack-gear). Corner shape, typeface and density all change.
  - **Colour** — **Bronze**, **Indigo**, **Sage**, **Slate** or **Clay**.
  Any look combines with any colour, in day or night, and **Back to the
  original** clears everything in one click.
- **Appearance is remembered in the browser**, not in the project file, so
  the app looks the way you like it whichever project you open — while
  project files stay portable between people with different preferences.
- **Recent projects on the welcome screen** — name, client, floors, devices
  and when it was last edited. Each has a **✕** that removes it from the list
  only; the file itself is untouched.

### Changed
- The look and accent pickers added in 1.54 are superseded by the Appearance
  panel, which separates character from colour rather than bundling them.

## [1.54.0] — 2026-08-21

### Added
- **Look &amp; feel sets** (View menu): **Atelier** (limestone and indigo,
  drawing-office), **Kinari** (unbleached paper and sage) and **Slate** (cool
  neutral), alongside the **Original** warm bronze. A look is a palette only —
  nothing structural changes — and each works in both day and night.
- **Accent colour** can be set on its own, overriding whichever look is
  active, so the tool can carry a project or client colour.
- **"Back to the original look"** clears both in one click. Both settings save
  with the project.

### Fixed
- **Notes are properly multi-line.** They opened in a single-line browser
  prompt; there is now a real editor with a resizable text area, Ctrl/⌘+Enter
  to save, and a Delete button. Line breaks are kept on the plan and on the
  exported sheets.
- **Resizing a highlighted room no longer pans the plan.** Outside Rooms mode
  a near-miss on a handle landed on the plan and started a pan. Handles now
  have a wider catch there, and a press that lands close to one no longer
  pans at all.

## [1.53.2] — 2026-08-21

### Fixed
- **FD sheet colouring.** Every cell was being given a solid white fill, which
  flattened the sheet and painted over Excel''s own gridlines. Ordinary cells
  now carry no fill at all, exactly as the reference workbook does.
- **Floor rows stand out again.** Matching the reference removed their tint
  in 1.52, leaving floor sections hard to pick out in a long sheet. Floor
  titles and the totals row now sit on a faint grey band — enough to scan by,
  far lighter than the old heavy grey. Out-of-scope rooms keep their darker
  grey, so the two never read as the same thing.

## [1.53.1] — 2026-08-21

### Changed
- **Room names find a clear spot instead of sitting on the devices.** A label
  is now placed where the room is emptiest — furthest from the ikons inside it
  and from its own walls — rather than at the geometric centre, which is
  exactly where devices tend to cluster. Empty rooms still read centrally, and
  labels stay inside awkward shapes such as L-rooms.
- Labels are visually lighter, brighten on hover or when their room is
  highlighted, and fade further back while a device is armed for placement.

## [1.53.0] — 2026-08-21

### Added
- **Leader notes.** A note is now a target ring on the thing it describes,
  joined by a leader line to a label you can drag clear of the drawing — so
  one note can call out a single device, several items sharing one point, or a
  whole area. Both ends drag independently; leaders and wrapped label text
  print on the exported sheets.
- **Outdoor areas.** A room can be marked as an *outdoor area*: it surrounds
  other rooms instead of dividing them, draws beneath them with a dashed
  outline, and devices inside an inner room still belong to that room — only
  what falls outside them counts as the area''s. Skribble has an **Outdoor
  area** switch that lets the brush pass over existing rooms.
- **Wall thickness slider** (WALLS) for clearer boundaries, and **room fill
  strength** joins the always-visible toolbar group.

### Changed
- **Tapping a shared wall cycles through the rooms that meet along it** —
  tap once for one side, again for the other, with the room named each time.
- **"Linked walls" is now "Joined rooms move together"**, with a tooltip
  explaining that it keeps rooms attached when you drag a shared corner.

## [1.52.0] — 2026-08-21

### Changed
- **The Excel FD sheet now matches the ikonhouse quotation format:** header
  row 140pt deep with device names
  rotated 90°, bold, 10pt; the top row frozen; hairline borders on every cell;
  column widths 3.1 / 44 / 5.4; plain bold floor titles with a single rule
  beneath; a blank row between floors; and a **Total units** row of SUM
  formulas. Out-of-scope rooms keep their grey fill.
- **The device library is seeded in the workbook''s order** — 4 Button Keypad,
  8 Button Keypad, Touch Panel, Thermostat, HVAC Zones, lighting modules,
  curtain control, speakers and streaming, Wi-Fi, intercom and CCTV, then
  client-supplied items — with categories ordered to match. Rearranging the
  library still drives the FD column order, so the sequence stays yours.

## [1.51.0] — 2026-08-13

### Fixed
- **The room editor no longer jumps to the middle of the room.** Since labels
  moved to each room''s centre, every re-open — after a colour or scope change
  — re-anchored the panel there. It now stays where you put it while you keep
  working on the same room.
- **The custom out-of-scope colour is round again**, sized properly, and
  ringed with a colour wheel so it reads as a picker rather than a swatch.
  The device dialog''s custom colour matches.

### Changed
- **Skribbled rooms are now always square-walled.** Every wall comes out
  horizontal or vertical, which makes results predictable — an odd-shaped
  room is a couple of corner drags away afterwards. A genuinely triangular
  scribble still returns a shape rather than nothing.
- **Linked walls, greyscale, ikon size and opacity are back on the toolbar**
  as an always-visible group, since they are used constantly. Room fill
  strength, numbering size, auto-numbering and the out-of-scope colour stay in
  the Display panel. The group shrinks gracefully on narrow screens rather
  than disappearing.

## [1.50.0] — 2026-08-13

### Added
- **Notes.** Press <kbd>A</kbd> or tap **Notes**, then tap the plan to leave a
  comment — site conditions, client requests, anything worth remembering.
  Notes are numbered pins with their text beside them: drag to move, tap to
  edit, clear the text to delete. Fully undoable, they survive crop and
  rotate, save with the project, and print on the exported sheets.

### Fixed
- **Cropping is undoable — and now says so.** It always was, but nothing told
  you, so a bad crop felt permanent. Applying a crop now says that Undo brings
  the full plan back. (History is capped at 80 steps, since crop snapshots
  hold a whole plan image.)
- **Device names are no longer buried by their tools.** Names take the space
  they need and truncate cleanly; with a mouse the row tools stay hidden until
  you hover, and on touch they are compact and sit clear of the name.
- **The out-of-scope colour control** is properly round and has moved out of
  the tool row.

### Changed
- **Display settings are always a panel**, on every device, instead of
  sliders inline on desktop and a panel on tablets — one consistent layout
  and a much calmer toolbar at every width.
- **Skribble is straighter again** — wobble is absorbed more aggressively,
  and only a dominant edge near 45° keeps its angle.

## [1.49.0] — 2026-08-13

### Fixed
- **Adjusting one room of a joined pair.** Shared corners always moved both
  rooms, which made fine-tuning a boundary awkward. Hold **Ctrl/⌘** while
  dragging to move just the room you grabbed, or switch off **Linked walls**
  in Display to make that the default. A one-time note explains it the first
  time you take hold of a shared corner.
- **Floor tabs stay put.** They previously sat at the right of the tool row
  on wide screens and jumped to their own row on narrow ones. They now always
  occupy their own full-width row beneath the tools, in the same place at
  every size.

### Changed
- **A calmer toolbar.** Rotate left, rotate right and the room schedule order
  have moved into a **More** menu, leaving the row to the tools actually used
  while planning. Nothing was removed — and the keyboard shortcuts are
  unchanged.

## [1.48.0] — 2026-08-13

### Added
- **Show / hide devices and categories, like layers.** Every device row and
  every category header now has an eye: switch one off and those ikons leave
  the plan — and the exported sheets and their legend — so a plan can be
  presented one discipline at a time (lighting only, audio only, and so on).
  - Hiding is **presentation, not scope**: quantities in the BoQ, the Excel FD
    sheet and the room matrix are unaffected. Out-of-scope remains the way to
    exclude something from the numbers.
  - A category''s eye switches all of its devices together.
  - A standing reminder appears while anything is hidden, with **Show all** to
    restore everything in one click — so a hidden layer is never forgotten
    before an export.
  - Choosing a hidden device to place brings it back automatically.

## [1.47.0] — 2026-08-12

### Fixed
- **Floor tabs disappearing in a narrow window — at any screen size.** The
  toolbar was a fixed-height row that simply scrolled its contents out of
  sight, so on a smaller desktop window the floors were pushed off the end.
  The toolbar now **wraps**: when the floor tabs can no longer hold a sensible
  width they move to their own full-width row, separated by a rule, with
  larger tabs. This happens automatically at every width, so no manual
  resizing is needed.
- **Narrow desktop windows now get the grouped Display panel too** (below
  1400 px), instead of squeezing four sliders into the tool row.

## [1.46.0] — 2026-08-12

### Added
- **Select several rooms at once.** Shift/Ctrl-click room edges to build a
  selection (once one is picked, plain clicks keep adding). Selected rooms are
  outlined boldly and a bar appears with the actions that apply to all of them.
- **Mark rooms out of scope in bulk**, from that bar or with the <kbd>O</kbd>
  shortcut — which also works on a single highlighted room, and toggles back
  in scope. Each room''s own colour is remembered and restored.
- **Recolour several rooms at once** from the same bar. Recolouring a room
  that is currently out of scope stores the colour for when it returns, so the
  out-of-scope convention is never broken by accident.
- Tapping the plan or pressing <kbd>Esc</kbd> clears the selection.

## [1.45.0] — 2026-08-12

### Added
- **The out-of-scope colour is now yours to choose** — a swatch row (plus a
  full colour picker) beside the plan sliders, under **OUT**. Changing it
  restyles every out-of-scope room across all floors at once, leaves in-scope
  rooms alone, and keeps each room''s original colour remembered for when it
  comes back into scope. Saved with the project; red remains the default.

## [1.44.0] — 2026-08-12

### Changed
- **Skribble''s shortcut is now <kbd>K</kbd>**, and every tool key toggles —
  press it again to leave the tool. <kbd>C</kbd> now closes the crop frame as
  well as opening it.

### Added
- **Tap the plan to let a room go.** After resizing or highlighting a room, a
  plain tap anywhere on the plan clears the highlight and closes its editor —
  previously only a tap outside the plan did. Panning and dragging are
  unaffected, since only a tap that did not move counts.

## [1.43.0] — 2026-08-12

### Fixed
- **Floor tabs are properly visible on tablets and folds.** They were sharing
  one row with ten toolbar buttons and got squeezed to nothing. On compact
  screens they now sit on their own full-width row beneath the toolbar, with
  larger, higher-contrast tabs.

### Added
- **Keyboard shortcuts:** <kbd>R</kbd> rooms, <kbd>B</kbd> skribble,
  <kbd>C</kbd> crop, <kbd>G</kbd> greyscale, <kbd>N</kbd> numbering,
  <kbd>L</kbd> library, <kbd>?</kbd> the guide. They are ignored while typing.
- **A single, consistent way out of any tool on touch:** a floating **Done**
  button appears whenever Rooms or Skribble is active, naming the tool it will
  close. Esc and tapping the tool button again still work.

## [1.42.0] — 2026-08-12

### Fixed
- **Skribbling over an existing room selected it instead of painting.** The
  room layer sits above the plan and was intercepting the brush, so a stroke
  crossing a room grabbed and resized it. In Skribble mode the rooms no longer
  take pointer input at all — the brush always wins, and boundaries are still
  respected as before.
- **Floor names were hard to read on small screens** — higher contrast, larger
  type and roomier tabs on compact layouts.
- **Room names sat in a corner** — labels are now placed at each room''s area
  centroid, and stay inside awkward shapes such as L-rooms rather than
  drifting outside them.

### Changed
- **Skribble is boxier again.** Only a dominant edge at roughly 45° keeps its
  angle; slopes up to about 40° are squared up.

## [1.41.0] — 2026-08-11

### Fixed
- **The "How to use" guide appears on startup again**, and now keeps doing so
  until you tick **"Don't show this on startup"** in its footer — previously
  it silenced itself after being closed once, so it vanished for good.
- **Exports no longer freeze the window.** Each sheet was encoded with a
  blocking call, so a multi-floor A3 set locked the interface for the whole
  render with nothing on screen. Encoding is now asynchronous, the window
  stays responsive, and progress is reported page by page.

### Changed
- **The guide has proper margins** — more padding, roomier steps and wider
  spacing between sections.
- **Skribble is boxier still.** Only a dominant edge at roughly 40° or more
  keeps its angle; anything gentler is treated as an unsteady hand and
  squared up, so rooms come out like building blocks unless an angle was
  clearly intended.

## [1.40.0] — 2026-08-11

### Fixed
- **A selection box no longer appears while panning on touch.** Gating it
  behind a hold was not enough — a slow pan could out-wait the timer. Marquee
  select is now mouse-only. On touch, **hold an ikon** to start selecting and
  then tap others to add or remove; tap the plan when done.

### Changed
- **Skribble strongly prefers straight walls.** Each edge is now judged by
  length as well as angle: short edges are treated as hand-wobble and squared
  up readily, while a long edge is only straightened if it was close to
  square already. Small diagonal chamfers left at corners are absorbed into
  the walls either side.
  - Wobbly rectangles come out as clean four-corner boxes, L-shapes keep
    exactly their notch, and gentle drift (under about 20°) is treated as an
    unsteady hand rather than intent.
  - A room genuinely brushed at an angle — roughly 35° or steeper — keeps its
    diagonal.

## [1.39.0] — 2026-08-11

### Added
- **Skribbled rooms click into place against their neighbours.** Once an
  outline is traced, any edge that came out straight is compared with the
  walls facing it and snapped flush — so rooms sit together like blocks
  rather than leaving hairline gaps, and rarely need tidying afterwards.
  - Only edges that are already straight are aligned; an edge you clearly
    brushed at an angle keeps its angle.
  - Walls only align to walls that actually face them, so unrelated rooms
    elsewhere on the plan never pull a shape out of position.
  - Remaining corner-sized gaps close onto real corners, which also links the
    rooms so they stay joined when either is edited.

## [1.38.1] — 2026-08-11

### Fixed
- **A selection box appeared while panning the plan on touch.** Marquee
  select fired on any drag, competing with panning. On touch it now needs a
  brief hold on empty plan first (a short buzz confirms) before dragging
  boxes a selection; moving straight away simply pans. Mouse drag-to-select
  is unchanged.

## [1.38.0] — 2026-08-11

### Fixed
- **Panning the plan no longer draws rooms on touch.** The previous fix tried
  to tell a swipe from a deliberate drag by speed, which misfired on larger
  screens. On touch, dragging now simply pans — rooms are made by tapping
  corners or with Skribble, both of which are better suited to a finger.
  Mouse drag still draws a box.
- **Room corners are much easier to grab.** Each handle now has a generous
  invisible target (about 2.4× its visible size on touch) with the small dot
  drawn on top, so a near-miss no longer moves the whole room instead of
  resizing it.

### Changed
- **The toolbar is calmer on small screens.** The four display sliders and the
  greyscale / auto-number toggles now live behind a single **Display** button
  on compact screens, laid out as a labelled panel. On desktop they stay
  inline as before.

## [1.37.1] — 2026-08-11

### Fixed
- **Skribbled rooms could still overlap a neighbour.** Clipping the brush kept
  the painted area clean, but squaring-up afterwards could push a straightened
  edge back over a boundary. The finished outline is now genuinely subtracted
  from existing rooms before the room is created, so shapes butt against each
  other along shared walls instead of overlapping.
- **The version now reads in full (e.g. V1.37.1)** on the welcome screen, and
  is taken directly from `APP_VERSION` rather than being typed separately —
  so it can no longer fall out of step with a release.

## [1.37.0] — 2026-08-11

### Added
- **Skribble respects existing rooms.** The brush is clipped to the area not
  already claimed, so paint simply stops at a neighbouring room''s wall as you
  draw — you can sweep straight over a boundary and the new room ends exactly
  where the other begins, sharing the wall instead of fighting for it. Rooms
  no longer overlap by accident, and device counts stay unambiguous.
  - **Hold Alt** while starting a stroke to ignore boundaries and overlap
    deliberately (for a zone spanning several rooms).
  - Brushing entirely inside an existing room now says so, rather than
    failing silently.

## [1.36.1] — 2026-08-11

### Changed
- **Skribble hands back to normal editing once a room is made.** The brush
  cursor used to stay active afterwards, getting in the way of adjusting the
  new room. Creating a room now leaves Skribble automatically, with the room
  selected and its editor open — tap Skribble again for the next one. The
  cursor also stands down over the room editor, panels and toolbars.
- **Out-of-scope rooms are now red** rather than grey, so excluded areas are
  obvious at a glance on the plan. (The Excel FD sheet keeps its grey fill,
  matching the quotation workbook convention.)

## [1.36.0] — 2026-08-11

### Added
- **Pick the room colour before you skribble** — a swatch row in the brush
  bar. The stroke paints in that colour and the room is created with it, so
  you can colour-code as you go instead of editing afterwards.
- **Brush footprint on the cursor** — a ring under the pointer showing the
  exact area the brush will cover, tinted to the chosen colour and resizing
  live with the thickness slider.

### Fixed
- **The skribble trail was too faint to follow.** It was drawn at 42% with a
  multiply blend, which sank into the drawing underneath. It now paints at
  full strength in the chosen colour, so it is obvious where you have been.

## [1.35.0] — 2026-08-11

### Added
- **“Apply to all plans” in the crop bar** — frames every floor plan exactly
  like the one in front of you, so pages match when flipping through the
  exported set. The framing is applied proportionally, so plans that came from
  the same source (a multi-page PDF, for instance) end up pixel-identical.
  Warns first if ikons would fall outside, and it is a single undo step.
- **The crop ratio is now sticky** — the aspect you pick carries to the next
  plan and is saved with the project, instead of resetting each time.

### Fixed
- **Cropping re-encoded plans as JPEG**, quietly undoing the lossless pipeline
  and softening line art with every crop. Crops are lossless PNG again, with
  high-quality resampling.

## [1.34.0] — 2026-08-11

### Changed
- **Out-of-scope rooms turn grey automatically.** Marking a room out of scope
  switches it to a neutral grey; unmarking restores the colour it had before,
  so scope reads at a glance without hunting through the palette.
- **Room fills are a little stronger** by default — clearly present without
  drowning the drawing underneath.

### Added
- **Room fill strength slider** (toolbar, "ROOM"): from barely-there to
  emphatic, covering fill, outline and out-of-scope hatching together.
- **Auto-number size slider** (toolbar, "No."): the sequence badges were too
  small to read on dense plans — they now scale from 70% to 220%, on screen
  and on exported sheets. Both settings save with the project.

## [1.33.0] — 2026-08-11

### Added
- **Skribble — brush an area to create a room.** A new toolbar mode: brush
  over part of the plan with your finger, stylus or mouse and release; the
  painted area becomes a room. Scribble back and forth to cover an odd shape
  in one continuous motion.
  - **Brush thickness** is adjustable from the bar at the bottom, with a live
    size dot — fine for a cupboard, broad for a lounge. Saved with the project.
  - The stroke is traced, simplified and **squared up**, so wobbly hand
    movements still produce clean, presentable outlines, and the result snaps
    to neighbouring rooms exactly like a drawn one.
  - The result is an ordinary polygon — the same corner, wall and linking
    tools apply afterwards.
  - Stray dabs are ignored (the largest painted area wins) and strokes too
    small to be a room are rejected rather than making slivers.
  - Deliberately shape-only: no wall detection, so it behaves identically on
    CAD linework, scans and photographed plans.

## [1.32.0] — 2026-08-11

### Changed
- **Placement toggles live in the toolbar.** Auto-numbering joins greyscale as
  a toolbar button that lights up when active, so both can be flipped mid-work
  without opening a menu. The View menu toggles remain and stay in sync.
- **Reordering now feels like picking something up.** Dragging a category, a
  device, or a room in the schedule lifts it toward you — a slight scale, a
  soft tilt and a real shadow — while the rest of the list recedes. Previously
  the dragged item just dimmed, which read as "disabled" rather than "held".
  Respects reduced-motion preferences.
- **The room schedule panel has room to breathe** — wider, more padding, and
  noticeably more space between rows, floor groups and the footer.

## [1.31.1] — 2026-08-11

### Changed
- **Greyscale is now a toolbar button**, next to the ikon sliders, instead of
  being buried in the View menu — it lights up when active, so it can be
  flipped while placing devices without leaving what you are doing. The View
  menu toggle remains and the two stay in sync.

## [1.31.0] — 2026-08-11

### Added
- **Greyscale floor plan** (View menu → Placement): drops the architect''s
  drawing to greyscale while ikons, rooms and labels keep their colour, so
  devices read clearly against a busy plan. Applies on screen and on the
  exported sheets, is saved with the project, and switches back at any time.

## [1.30.0] — 2026-08-11

### Added
- **Room schedule order panel** (toolbar button beside Rooms): every room on
  every floor in one list, showing its position, colour, ikon count and
  out-of-scope tag. **Drag a room** to move it, or use ▲▼ — the order is
  exactly what the Excel FD sheet and the BoQ breakdown use. Rooms stay within
  their own floor.
- **Sort by position** orders every floor the way a reader scans the plan —
  top to bottom, left to right within each band — as a one-click starting
  point before fine-tuning.
- The room editor''s order section now links straight through with
  **“Reorder all…”**.

## [1.29.0] — 2026-08-11

### Added
- **Order rooms in the schedule while you design.** The room editor gains an
  "Order in schedule" section — ▲▼ move a room earlier or later, with its
  position shown (e.g. "3 of 11"). That order is exactly the row order used in
  the Excel FD sheet and the BoQ room breakdown, so the client-facing schedule
  can follow the building rather than the order rooms happened to be drawn.

## [1.28.0] — 2026-07-26

### Fixed
- **The device dialog vanished when picking a custom ikon colour.** Choosing a
  colour rebuilt the whole swatch row, which replaced the `<input type="color">`
  element the OS picker was attached to — closing the picker (and appearing to
  close the dialog) mid-pick. The row now updates its selection in place.

### Added
- **Ikon opacity slider** next to the size slider: drop it to see walls and
  dimensions on the plan through the ikons. It applies on screen and on the
  exported sheets, and is saved with the project.

### Changed
- **Ikons can go much smaller.** The size slider starts at 20% (was 50%) and
  the hard 12px floor that quietly overrode it is now 5px — so ikons stay
  proportionate on dense or large-format plans.

## [1.27.1] — 2026-07-26

### Changed
- **Category headers are larger and better balanced** — more breathing room
  above each group, slightly bigger type with a little more contrast, and
  round 24px tool buttons (30px on touch) that no longer feel cramped. The
  tools now reserve their space instead of appearing on hover, so headers
  never shift as the pointer moves across them. Horizontal docks keep the
  compact spacing, where vertical space is scarce.

## [1.27.0] — 2026-07-26

### Added
- **Reorder devices within a category.** Each device row now has ▲▼ buttons
  (always visible on touch, on hover with a mouse), and dragging a device onto
  another drops it into that position — within its own category, or into
  another category if you drop it on a device there. Dropping on a category
  header still moves it to the end of that category, as before.
- The order is stored with the project and flows through to the exports, so
  the FD sheet''s column order follows the library exactly.

## [1.26.0] — 2026-07-25

### Added
- **"How to use" guide**, reachable from a **?** button in the toolbar (the
  gestures card was previously buried in the View menu). Three tabs:
  - **Quick start** — five steps from floor plan to client package, written as
    a walkthrough rather than a feature list.
  - **Gestures** — grouped by what you are doing, with keys shown as keycaps.
  - **Outputs** — what each export contains and when to reach for it.
- The guide **opens once automatically** the first time someone enters the
  workspace, and never again (dismissal is remembered locally). **Esc** or
  **Got it** closes it.

## [1.25.0] — 2026-07-25

### Added
- **Create a room from a node on desktop too.** Press and hold a corner with
  the mouse (~0.5s — slightly longer than touch, since pausing mid-click is
  common) then drag to size the new room; it shares the anchor corner, so the
  two rooms stay linked. **Ctrl/⌘-drag** from a corner does the same instantly,
  with no waiting.
- The node **pulses while the hold arms**, so it is clear which gesture is
  about to fire, and **Esc** cancels a spawn in progress.

## [1.24.1] — 2026-07-25

### Fixed
- **Pinch-to-zoom on the floor plan.** The zoom maths were correct, but three
  competing gesture handlers were fighting the pinch:
  - the one-finger pan only *paused* while a pinch was active, so when the
    second finger lifted it resumed from its original origin and snapped the
    plan back — undoing the zoom''s framing. A pinch now ends the pan outright.
  - in Rooms mode the plan is the SVG room layer, which sits outside
    `#planClick`, so the stage pan handler ran *alongside* the room layer''s own
    pan — two systems writing the same pan offsets from different origins.
  - marquee select ignored pinches entirely, drawing a selection box (and
    selecting ikons) during a two-finger gesture.
- Pinches with three or more fingers on screen are now recognised too.

## [1.24.0] — 2026-07-25

### Fixed
- **Panning the plan no longer draws rooms** (touch): a quick one-finger
  swipe on the plan now pans it — matching every photo/map app — while a
  deliberate, slower drag still draws a box. Tap-corners, pinch-zoom and
  hold-for-linked-room are unchanged.

### Added
- **Tap outside the plan to cancel** (Rooms mode): tapping the area around
  the floor plan clears the selected box and any in-progress outline —
  outside Rooms mode it clears a highlight.

### Changed
- **Room nodes slimmed further** (~20%) with thinner rings — visible and
  catchable without cluttering the outline.

## [1.23.0] — 2026-07-25

### Fixed
- **Press & hold on a corner deleted it and spawned a room (Android).** The
  browser''s long-press fires a context-menu event, which was mapped to
  right-click-delete — so holding a node triggered the delete *and* the
  new-room gesture together. Corner interactions are now one coherent
  handler: hold still → new linked room; move → drag the corner; and on
  touch the context menu is suppressed without deleting. Desktop right-click
  still deletes a node; double-tap deletes on touch.
- **Crop edge bars did not resize.** They were unwired (and fell through to
  the frame-move gesture). All four edge bars now resize their side —
  honouring the selected ratio about the frame''s centre — and the **Reset**
  button restores the recommended framing.
- **Room ✕ unreliable on touch** — the target was too small; it''s now
  26px on touch, clears any stale highlight, and confirms with an
  undo-able toast.

### Added
- **Gestures & tips** reference (View menu → Help) — every canvas, ikon,
  room, and library gesture on one card.
- **Done chip** in the Rooms-mode hint bar — an obvious exit on touch,
  alongside Esc.

## [1.22.0] — 2026-07-21

### Added
- **Tap outside to deselect a room.** After creating or selecting a room,
  tapping empty plan in Rooms mode clears the selection so you can start the
  next room immediately.
- **Grow a new room from a corner.** Press & hold an existing room''s node
  (~0.4s, a short buzz confirms), then drag: a new room is anchored at that
  exact corner, so the two rooms share the node and stay linked.
- **Category reorder arrows** (▲ ▼) on every category header — always
  visible on touch — alongside the existing press-and-hold drag.

### Changed
- **Crop is easier to handle**, especially on touch: draggable **edge
  handles** on all four sides (not just corners), a rule-of-thirds grid
  inside the frame, and a **Reset** button that restores the frame to the
  whole plan. Ratio presets and pinch/drag behaviour are unchanged.

## [1.21.1] — 2026-07-18

### Fixed
- **Room creation silently cancelled near an adjacent room.** Snapping could
  pull the rectangle''s end corner back onto its own start edge, collapsing
  the box below the minimum size so nothing was created. A snap that would
  collapse the rectangle is now ignored, and a genuinely too-small drag says
  so instead of failing quietly.
- **Pasted (or multi-selected) ikons could not be dragged.** The group drag
  re-rendered all markers on every movement, detaching the element holding
  the pointer capture and ending the drag instantly. Group moves now update
  marker positions in place, with a single re-render on release.
- **Rooms that were merely close resized together.** The node-link tolerance
  was ~0.6% of the plan — wide enough to bind neighbouring-but-separate
  corners. Linking now requires true coincidence (nodes snapped exactly
  together), so only genuinely shared corners move as one.

## [1.21.0] — 2026-07-18

### Added
- **Copy & paste ikons.** Select one or more ikons and Ctrl/Cmd+C, then
  Ctrl/Cmd+V to drop copies (offset slightly, auto-selected) — pairs with
  marquee multi-select for quickly replicating a device cluster.
- **Auto-numbering.** Each placed ikon gets a per-device sequence shown as a
  small badge on the plan and printed as a code on exported sheets
  (e.g. SP-01, 4B-02, TH-03). **Toggle it off** in the View menu →
  Placement; turning it back on numbers everything consistently.
- **Split a wall.** Double-click a wall segment to insert a node exactly at
  the click point — branch a new corner or start a connected room from a
  precise spot. (Midpoint handles still add a centre node.)

## [1.20.0] — 2026-07-18

### Added
- **Linked rooms via shared nodes.** When two rooms share a corner (drop or
  snap one room''s corner onto another''s), that node is marked with a bronze
  ring, and dragging it moves *both* rooms'' corners together — adjacent
  rooms stay connected as you adjust the layout. Right-click / double-click a
  node to remove it, which unlinks the rooms there. Linked edits are undoable.

### Changed
- **Inverted the wall-drag ortho default:** dragging a wall now keeps it
  straight (moving only across itself) by default; **hold Shift** to move it
  freely in any direction. (Previously free by default, Shift for straight.)

## [1.19.0] — 2026-07-18

### Changed
- **Sheet legend redesigned as a categorized table.** Instead of a single
  wrapping row of pills, the legend groups devices by category (in library
  order) into balanced columns — each with a category header, device icon,
  name and quantity. Cleaner and easier to scan; the floor-plan area keeps
  its size (legend height is measured and reserved, plan never shrinks).
- **Excel FD sheet — device columns now follow the library category order**
  (4 Button Keypad first, matching the tool), with **device names rotated
  vertically** in the header, a **darker-25% fill** on the header, floor-
  title and totals rows, and a **white fill with thin borders** on every
  data cell for a clean gridded look.

### Removed
- The separate "device schedule by room" export page (introduced in 1.18.0)
  — it was cramped and redundant; the categorized legend and the Excel FD
  sheet cover it better.

## [1.18.1] — 2026-07-18

### Fixed
- **Room schedule sheet was missing from exports in 1.18.0.** A refactor
  collision removed the schedule renderer and its export wiring (and left a
  duplicated header/footer helper), so the PDF/PNG/package never actually
  included the per-room table. The renderer is restored and wired into all
  export paths; duplicate helpers removed.

### Changed
- **Out-of-scope is shown by cell fill only.** On the schedule sheet the
  out-of-scope row now gets a darker-25% fill (with a small "Out of scope"
  key) instead of a "(OUT OF SCOPE)" text tag, and other rows are plain
  white (no zebra striping). The Excel FD sheet matches: out-of-scope room
  rows are filled darker-25%, and the text tag is gone from the room name.

## [1.52.1] — 2026-08-21

### Removed
- **The reference quotation workbook is no longer included in the project.**
  It held commercially sensitive client and pricing information and should
  never have been copied in. It has been deleted, all identifying references
  scrubbed from the documentation, and a `.gitignore` now blocks spreadsheet
  files from being committed. Keep such files outside the repository and
  consult them locally.

## [1.63.1] — 2026-08-22

### Fixed
- **Device pins and chips disappeared in Futuristic mode.** The outline
  treatment hollowed them out while their symbols stayed white, so on a white
  plan there was nothing to see. A pin sits on someone else''s drawing, so it
  now always carries a solid fill and a contrasting ring in every mode — the
  modes differ by **shape, ring and glow**, never by hollowing the pin:
  - **Modern** — round, white ring, soft drop shadow, slightly bolder symbol.
  - **Retro** — square, dark hairline, hard offset shadow, blunt-capped symbol.
  - **Futuristic** — round with a **neon halo** in the device''s own colour,
    and a brighter one when selected.
- **Modes are listed by name and description only.** The colour chips beside
  them said nothing useful about a mode — colour themes keep theirs, since
  there the colour *is* the choice.

## [1.63.0] — 2026-08-22

### Added
- **Each mode now brings its own colours**, because a design ethos is not
  only shapes:
  - **Modern** — Apple''s system blue on near-white, almost no chroma
    anywhere else; true black at night.
  - **Retro** — a warm CRT: tan paper and burnt orange by day, **amber on
    black with a phosphor glow** at night.
  - **Futuristic** — monochrome with a single red, used sparingly and never
    decoratively.
  A mode paints only while the colour theme is set to **Match mode**;
  choosing any theme takes over, exactly as before. **Bronze** is now an
  explicit choice rather than the absence of one.
- **Icons take each mode''s hand** — 1.15px hairlines for Futuristic, 1.7px
  rounded for Modern, 2.4px square-capped for Retro — and device chips follow:
  soft shadowed squares, hard-shadowed blocks, or hollow rings.

### Fixed
- **The welcome mode row is centred** with the rest of the page.
- **The Futuristic title fits on one line** — the dot-matrix face needed a
  smaller size and tighter tracking than the others.
- **The colour chips beside the mode name are gone** from the toolbar, in
  favour of a plain glyph.

## [1.62.0] — 2026-08-22

### Changed
- **The welcome screen''s mode picker is now a quiet line of words**, aligned
  with everything else on the page, rather than a row of chips.
- **A plainly labelled Mode control sits in the toolbar**, showing which mode
  you are in and opening a menu to change it — no longer buried in Appearance.
- **The modes are far further apart.** Each now sets its own density, type
  scale, icon weight, pin shape, room-outline style and panel construction:
  - **Modern** — roomier throughout, a transparent toolbar of floating
    buttons, round pins with soft shadows, smooth room outlines, pill labels
    and toasts, rounded icon strokes.
  - **Retro** — compact and dense, two-pixel borders, panels topped by a
    title strip with ▪ ▪ ▪ in the corner, square pins with hard shadows,
    dashed room outlines, dotted row separators, square icon caps, and a
    scanline over the whole plan.
  - **Futuristic** — airy and stripped back, dot-matrix labels and figures,
    hollow ring pins, room outlines drawn as fine dots, hairline dotted
    separators, thin icon strokes, and a dot grid behind the plan.

## [1.61.0] — 2026-08-22

### Added
- **Mode is chosen on the welcome screen**, before you even open a project —
  the same four options, and the screen itself changes as you pick.
- **Each mode now moves differently**, which is most of why it feels like a
  different app:
  - **Modern** — long, settling easing; panels rise and scale in; buttons give
    slightly under a press.
  - **Retro** — no easing at all. Everything is instant and mechanical,
    buttons shift a pixel down-right as if depressed, toasts blink on, and a
    terminal caret blinks beside the wordmark.
  - **Futuristic** — fast and precise, with a faint blur as panels arrive,
    a glow on lit controls, and hairlines that sweep into place.
- Motion honours **reduced-motion** settings; all three fall still when asked.

## [1.60.0] — 2026-08-22

### Added
- **Three modes**, in Appearance → Mode, each changing shape, type, spacing
  and depth rather than just colour:
  - **Modern** — Apple''s softness and Google''s clarity with Japanese
    restraint: pill geometry, generous air, light weights, quiet depth.
  - **Retro** — the rack gear and terminals this trade grew up on: square
    corners, bevelled edges, engraved monospace labels, hard shadows and a
    faint scanline in the panels.
  - **Futuristic** — Nothing''s vocabulary: dot-matrix labels, hairline
    structure, translucency, circles where other interfaces use rectangles,
    and a dot grid behind the plan.
  Any mode combines with any colour theme, and **Original** restores the app
  exactly as it ships.

### Changed
- **Projects now save as `.ikon`** — shorter, and easier to say. Existing
  **`.ikonplan` files still open**; opening one says that saving will create
  a `.ikon` file and leaves the original untouched, rather than writing back
  over it.

## [1.59.3] — 2026-08-22

### Fixed
- **The pointer disappeared on white plans.** Rooms and Notes were using the
  system crosshair, which some setups draw in white — invisible against a
  white drawing. The app now draws its own: dark lines with a white halo, so
  it reads on any plan, in any theme, whatever the system is set to. The
  skribble ring is pinned to the same dark outline for the same reason.

## [1.59.2] — 2026-08-22

### Fixed
- **Choosing a leader tip was impossible to see in Mono.** The selected
  button drew its symbol in white on a fill that is itself white in that
  theme. Anything filled with the accent colour now takes its symbol from the
  background instead of a hard-coded white, so it stays legible in every
  theme — the same trap affected several other lit controls.
- **The brush ring is visible on any drawing**, with a dark ring inside a
  light one rather than relying on the accent colour.
- **Note boxes follow the theme again** — the Mono-specific overrides added
  in 1.59.1 have been dropped.

### Changed
- **Note text size is set in real pixel values** — presets of 12, 16, 20, 26
  and 34, plus a slider and a typed value, all kept in step with each other.

## [1.59.1] — 2026-08-22

### Fixed
- **The leader arrow pointed the wrong way.** Its base was set behind the
  point rather than back along the line, so it aimed away from what it was
  marking. It now points at its target, on screen and on the sheet.
- **Things floating over the plan no longer vanish in the Mono theme.** The
  brush cursor has a dark ring inside a light one, leader tips carry a light
  outline, and note boxes sit on solid ground — none of it now depends on an
  accent colour that may be pure white or pure black.
- **Selecting a leader point no longer hides the ikon beneath it.** The
  highlight is a ring rather than a filled patch.

### Added
- **Note text size** — set it in pixels, or from **S / M / L / XL** presets so
  a set of drawings stays consistent. The default is larger than before,
  since notes were unreadably small on big plans. The size is in plan
  pixels, so a note keeps its proportions when printed no matter how far
  you are zoomed in.

## [1.59.0] — 2026-08-22

### Fixed
- **Leader lines now meet the text box at its centre**, so they stay properly
  attached however the box is dragged — they used to stop at its left edge.
- **Long notes are readable in full.** Labels were cut off after a few lines;
  they now grow to fit, keep their line breaks, and wrap long words.
- **The text cursor is visible** in the note editor.

### Added
- **Choose how a leader ends** — a dot, an arrow that points along the line,
  or a numbered circle — and set its **size**.
- **More than one leader per note.** Add as many as you need, drag each point
  to whatever it should aim at, and the note reads once while pointing at
  several things. Existing notes carry over untouched.
- All of it prints on the exported sheets, tips included.

## [1.58.3] — 2026-08-22

### Changed
- **The radio starts far sooner.** The YouTube player library was only
  fetched at the moment you pressed play, so the first note waited on a
  download. It is now fetched quietly while the app is idle, and connections
  to YouTube are opened in advance, so playback begins almost at once.
  The pill shows **Connecting…** until sound actually starts, so the wait —
  whatever remains of it — is never silent and unexplained.
- The library is still only fetched when the radio is set to start with the
  app, and only ever once.

## [1.58.2] — 2026-08-22

### Fixed
- **The radio panel would not open from the welcome screen.** It opened and
  then closed itself: the same click carried on to the handler that dismisses
  the panel when you click away, which did not recognise the welcome button.
  Both radio buttons are now exempt, and the panel anchors beneath whichever
  one opened it rather than to the toolbar hidden behind the welcome screen.

## [1.58.1] — 2026-08-22

### Fixed
- **The ✕ on the radio panel was switching the whole radio off.** It now
  closes the panel only and the music keeps playing. Turning the radio off is
  its own action — **Turn the radio off** at the foot of the panel — and the
  note button returns to the toolbar so it can be brought back.
- **Clicking the pill reliably closes its panel again**; the controls on the
  pill no longer bubble up and reopen it.

### Added
- **Previous button** on the pill, alongside skip — both wrap around the list.

## [1.58.0] — 2026-08-22

### Added
- **Claude Music** joins the stations, and the first is now named
  **Tokyo Lofi** — also the default.
- **Skip button** on the now-playing pill: step to the next station, wrapping
  round at the end.
- **Mono theme** — black and white only, with no hue anywhere. Emphasis comes
  from contrast alone, which suits presenting and printing; lit controls
  invert rather than tint.

### Changed
- **The colour themes have far more life in them.** The muted set has been
  replaced by Indigo (electric blue), Green, Azure, Ember and Mono, each with
  a matching night version, and backgrounds now carry a hint of the accent
  instead of being uniformly grey.
- **Clicking the now-playing pill closes the panel again**, rather than only
  opening it.

## [1.57.1] — 2026-08-22

### Changed
- **The radio is now a "now playing" strip in the toolbar** — play/pause, four
  little bars that move only while something is actually playing, and the
  station name. Clicking the name drops a small panel beneath it for stations,
  volume, rename and the autostart switch; clicking away closes it. Closing
  turns the radio off entirely.
- **Fitting the plan needs a deliberate double middle-click.** Panning with
  the wheel button used to trip it: a middle click now only counts if the
  pointer did not move and the button was not held, so panning never fits the
  view by accident.

## [1.57.0] — 2026-08-22

### Changed
- **The radio is now a slim bar** — a small round player, play/pause, the
  station name, mute and close. Clicking the name expands it for the station
  list, volume and rename; everything else stays out of the way.

### Added
- **The radio starts with the app.** Browsers only allow sound once someone
  has interacted with the page, so it begins at your first click or key press
  rather than on load — near enough to opening that it feels automatic.
  **Start with the app** in the expanded panel turns it off, and the setting
  is remembered.

## [1.56.3] — 2026-08-22

### Fixed
- **The two channel stations would not play**, so they have been removed.
  Four verified streams remain, with **Lofi radio — focus** added and set as
  the default. A saved station that no longer exists now falls back to the
  default instead of failing silently.
- Pasting a **channel** link when adding a station still works — it plays
  whatever that channel is streaming at the time.

## [1.56.2] — 2026-08-21

### Added
- **Five stations**, including the working Lofi Girl beats stream and two
  channels — Lofi Tokyo and one other — added as **channel** stations rather
  than fixed video IDs, so they always play whatever that channel is
  streaming and cannot go stale when a stream restarts.
- **Rename any station** with the pencil in the radio header; names are
  remembered, so an unfamiliar channel can be labelled however you like.

## [1.56.1] — 2026-08-21

### Fixed
- **Two radio stations would not play.** Live-stream IDs change whenever a
  channel restarts its stream, and two of the four shipped were stale. Only
  verified streams now ship — **Synthwave** and **Sleep** — and rather than
  guess at others, **stations you add from a link are saved and stay in the
  list**, with a name of your choosing.

### Added
- **The radio is on the welcome screen too**, next to the appearance button.
  Opening it there starts the dark Synthwave stream straight away — that click
  is what browsers require before sound is allowed.

## [1.56.0] — 2026-08-21

### Changed
- **Dragging the plan now moves it**, as it already did on touch. Boxing a
  selection is **Shift-drag** — previously a plain drag started a selection
  box, which fought with simply moving around the plan.

### Added
- **Double-click the scroll wheel to fit the plan to the window.**
- **Focus radio** — a small background-music panel (toolbar, note icon) with
  Lofi Girl and Chillhop streams, play/pause, mute, volume, and the option to
  paste any YouTube link. Volume and station are remembered; nothing loads
  until the panel is opened, so it costs nothing at startup, and closing it
  stops the music.

## [1.55.1] — 2026-08-21

### Changed
- **Look sets removed; colour themes kept.** Changing corner shape, typeface
  and density altered the app''s character without making it better to use, so
  the choice is now simply a colour theme — Bronze, Indigo, Sage, Slate or
  Clay — each working in day or night.

### Fixed
- **The appearance button did nothing on the welcome screen.** The panel was
  opening behind it; it now sits above.
- **Dialogs have room to breathe** — more padding throughout, a proper rule
  under each title, and clearer spacing between fields and actions.

## [1.55.0] — 2026-08-21

### Added
- **Appearance panel**, from a palette button in the toolbar and on the
  welcome screen. Two independent choices:
  - **Look** — the app''s character: **Original** (rounded, warm),
    **Atelier** (drawing office), **Kinari** (soft and airy) or **Retro**
    (squared, rack-gear). Corner shape, typeface and density all change.
  - **Colour** — **Bronze**, **Indigo**, **Sage**, **Slate** or **Clay**.
  Any look combines with any colour, in day or night, and **Back to the
  original** clears everything in one click.
- **Appearance is remembered in the browser**, not in the project file, so
  the app looks the way you like it whichever project you open — while
  project files stay portable between people with different preferences.
- **Recent projects on the welcome screen** — name, client, floors, devices
  and when it was last edited. Each has a **✕** that removes it from the list
  only; the file itself is untouched.

### Changed
- The look and accent pickers added in 1.54 are superseded by the Appearance
  panel, which separates character from colour rather than bundling them.

## [1.54.0] — 2026-08-21

### Added
- **Look &amp; feel sets** (View menu): **Atelier** (limestone and indigo,
  drawing-office), **Kinari** (unbleached paper and sage) and **Slate** (cool
  neutral), alongside the **Original** warm bronze. A look is a palette only —
  nothing structural changes — and each works in both day and night.
- **Accent colour** can be set on its own, overriding whichever look is
  active, so the tool can carry a project or client colour.
- **"Back to the original look"** clears both in one click. Both settings save
  with the project.

### Fixed
- **Notes are properly multi-line.** They opened in a single-line browser
  prompt; there is now a real editor with a resizable text area, Ctrl/⌘+Enter
  to save, and a Delete button. Line breaks are kept on the plan and on the
  exported sheets.
- **Resizing a highlighted room no longer pans the plan.** Outside Rooms mode
  a near-miss on a handle landed on the plan and started a pan. Handles now
  have a wider catch there, and a press that lands close to one no longer
  pans at all.

## [1.53.2] — 2026-08-21

### Fixed
- **FD sheet colouring.** Every cell was being given a solid white fill, which
  flattened the sheet and painted over Excel''s own gridlines. Ordinary cells
  now carry no fill at all, exactly as the reference workbook does.
- **Floor rows stand out again.** Matching the reference removed their tint
  in 1.52, leaving floor sections hard to pick out in a long sheet. Floor
  titles and the totals row now sit on a faint grey band — enough to scan by,
  far lighter than the old heavy grey. Out-of-scope rooms keep their darker
  grey, so the two never read as the same thing.

## [1.53.1] — 2026-08-21

### Changed
- **Room names find a clear spot instead of sitting on the devices.** A label
  is now placed where the room is emptiest — furthest from the ikons inside it
  and from its own walls — rather than at the geometric centre, which is
  exactly where devices tend to cluster. Empty rooms still read centrally, and
  labels stay inside awkward shapes such as L-rooms.
- Labels are visually lighter, brighten on hover or when their room is
  highlighted, and fade further back while a device is armed for placement.

## [1.53.0] — 2026-08-21

### Added
- **Leader notes.** A note is now a target ring on the thing it describes,
  joined by a leader line to a label you can drag clear of the drawing — so
  one note can call out a single device, several items sharing one point, or a
  whole area. Both ends drag independently; leaders and wrapped label text
  print on the exported sheets.
- **Outdoor areas.** A room can be marked as an *outdoor area*: it surrounds
  other rooms instead of dividing them, draws beneath them with a dashed
  outline, and devices inside an inner room still belong to that room — only
  what falls outside them counts as the area''s. Skribble has an **Outdoor
  area** switch that lets the brush pass over existing rooms.
- **Wall thickness slider** (WALLS) for clearer boundaries, and **room fill
  strength** joins the always-visible toolbar group.

### Changed
- **Tapping a shared wall cycles through the rooms that meet along it** —
  tap once for one side, again for the other, with the room named each time.
- **"Linked walls" is now "Joined rooms move together"**, with a tooltip
  explaining that it keeps rooms attached when you drag a shared corner.

## [1.52.0] — 2026-08-21

### Changed
- **The Excel FD sheet now matches the ikonhouse quotation format:** header
  row 140pt deep with device names
  rotated 90°, bold, 10pt; the top row frozen; hairline borders on every cell;
  column widths 3.1 / 44 / 5.4; plain bold floor titles with a single rule
  beneath; a blank row between floors; and a **Total units** row of SUM
  formulas. Out-of-scope rooms keep their grey fill.
- **The device library is seeded in the workbook''s order** — 4 Button Keypad,
  8 Button Keypad, Touch Panel, Thermostat, HVAC Zones, lighting modules,
  curtain control, speakers and streaming, Wi-Fi, intercom and CCTV, then
  client-supplied items — with categories ordered to match. Rearranging the
  library still drives the FD column order, so the sequence stays yours.

## [1.51.0] — 2026-08-13

### Fixed
- **The room editor no longer jumps to the middle of the room.** Since labels
  moved to each room''s centre, every re-open — after a colour or scope change
  — re-anchored the panel there. It now stays where you put it while you keep
  working on the same room.
- **The custom out-of-scope colour is round again**, sized properly, and
  ringed with a colour wheel so it reads as a picker rather than a swatch.
  The device dialog''s custom colour matches.

### Changed
- **Skribbled rooms are now always square-walled.** Every wall comes out
  horizontal or vertical, which makes results predictable — an odd-shaped
  room is a couple of corner drags away afterwards. A genuinely triangular
  scribble still returns a shape rather than nothing.
- **Linked walls, greyscale, ikon size and opacity are back on the toolbar**
  as an always-visible group, since they are used constantly. Room fill
  strength, numbering size, auto-numbering and the out-of-scope colour stay in
  the Display panel. The group shrinks gracefully on narrow screens rather
  than disappearing.

## [1.50.0] — 2026-08-13

### Added
- **Notes.** Press <kbd>A</kbd> or tap **Notes**, then tap the plan to leave a
  comment — site conditions, client requests, anything worth remembering.
  Notes are numbered pins with their text beside them: drag to move, tap to
  edit, clear the text to delete. Fully undoable, they survive crop and
  rotate, save with the project, and print on the exported sheets.

### Fixed
- **Cropping is undoable — and now says so.** It always was, but nothing told
  you, so a bad crop felt permanent. Applying a crop now says that Undo brings
  the full plan back. (History is capped at 80 steps, since crop snapshots
  hold a whole plan image.)
- **Device names are no longer buried by their tools.** Names take the space
  they need and truncate cleanly; with a mouse the row tools stay hidden until
  you hover, and on touch they are compact and sit clear of the name.
- **The out-of-scope colour control** is properly round and has moved out of
  the tool row.

### Changed
- **Display settings are always a panel**, on every device, instead of
  sliders inline on desktop and a panel on tablets — one consistent layout
  and a much calmer toolbar at every width.
- **Skribble is straighter again** — wobble is absorbed more aggressively,
  and only a dominant edge near 45° keeps its angle.

## [1.49.0] — 2026-08-13

### Fixed
- **Adjusting one room of a joined pair.** Shared corners always moved both
  rooms, which made fine-tuning a boundary awkward. Hold **Ctrl/⌘** while
  dragging to move just the room you grabbed, or switch off **Linked walls**
  in Display to make that the default. A one-time note explains it the first
  time you take hold of a shared corner.
- **Floor tabs stay put.** They previously sat at the right of the tool row
  on wide screens and jumped to their own row on narrow ones. They now always
  occupy their own full-width row beneath the tools, in the same place at
  every size.

### Changed
- **A calmer toolbar.** Rotate left, rotate right and the room schedule order
  have moved into a **More** menu, leaving the row to the tools actually used
  while planning. Nothing was removed — and the keyboard shortcuts are
  unchanged.

## [1.48.0] — 2026-08-13

### Added
- **Show / hide devices and categories, like layers.** Every device row and
  every category header now has an eye: switch one off and those ikons leave
  the plan — and the exported sheets and their legend — so a plan can be
  presented one discipline at a time (lighting only, audio only, and so on).
  - Hiding is **presentation, not scope**: quantities in the BoQ, the Excel FD
    sheet and the room matrix are unaffected. Out-of-scope remains the way to
    exclude something from the numbers.
  - A category''s eye switches all of its devices together.
  - A standing reminder appears while anything is hidden, with **Show all** to
    restore everything in one click — so a hidden layer is never forgotten
    before an export.
  - Choosing a hidden device to place brings it back automatically.

## [1.47.0] — 2026-08-12

### Fixed
- **Floor tabs disappearing in a narrow window — at any screen size.** The
  toolbar was a fixed-height row that simply scrolled its contents out of
  sight, so on a smaller desktop window the floors were pushed off the end.
  The toolbar now **wraps**: when the floor tabs can no longer hold a sensible
  width they move to their own full-width row, separated by a rule, with
  larger tabs. This happens automatically at every width, so no manual
  resizing is needed.
- **Narrow desktop windows now get the grouped Display panel too** (below
  1400 px), instead of squeezing four sliders into the tool row.

## [1.46.0] — 2026-08-12

### Added
- **Select several rooms at once.** Shift/Ctrl-click room edges to build a
  selection (once one is picked, plain clicks keep adding). Selected rooms are
  outlined boldly and a bar appears with the actions that apply to all of them.
- **Mark rooms out of scope in bulk**, from that bar or with the <kbd>O</kbd>
  shortcut — which also works on a single highlighted room, and toggles back
  in scope. Each room''s own colour is remembered and restored.
- **Recolour several rooms at once** from the same bar. Recolouring a room
  that is currently out of scope stores the colour for when it returns, so the
  out-of-scope convention is never broken by accident.
- Tapping the plan or pressing <kbd>Esc</kbd> clears the selection.

## [1.45.0] — 2026-08-12

### Added
- **The out-of-scope colour is now yours to choose** — a swatch row (plus a
  full colour picker) beside the plan sliders, under **OUT**. Changing it
  restyles every out-of-scope room across all floors at once, leaves in-scope
  rooms alone, and keeps each room''s original colour remembered for when it
  comes back into scope. Saved with the project; red remains the default.

## [1.44.0] — 2026-08-12

### Changed
- **Skribble''s shortcut is now <kbd>K</kbd>**, and every tool key toggles —
  press it again to leave the tool. <kbd>C</kbd> now closes the crop frame as
  well as opening it.

### Added
- **Tap the plan to let a room go.** After resizing or highlighting a room, a
  plain tap anywhere on the plan clears the highlight and closes its editor —
  previously only a tap outside the plan did. Panning and dragging are
  unaffected, since only a tap that did not move counts.

## [1.43.0] — 2026-08-12

### Fixed
- **Floor tabs are properly visible on tablets and folds.** They were sharing
  one row with ten toolbar buttons and got squeezed to nothing. On compact
  screens they now sit on their own full-width row beneath the toolbar, with
  larger, higher-contrast tabs.

### Added
- **Keyboard shortcuts:** <kbd>R</kbd> rooms, <kbd>B</kbd> skribble,
  <kbd>C</kbd> crop, <kbd>G</kbd> greyscale, <kbd>N</kbd> numbering,
  <kbd>L</kbd> library, <kbd>?</kbd> the guide. They are ignored while typing.
- **A single, consistent way out of any tool on touch:** a floating **Done**
  button appears whenever Rooms or Skribble is active, naming the tool it will
  close. Esc and tapping the tool button again still work.

## [1.42.0] — 2026-08-12

### Fixed
- **Skribbling over an existing room selected it instead of painting.** The
  room layer sits above the plan and was intercepting the brush, so a stroke
  crossing a room grabbed and resized it. In Skribble mode the rooms no longer
  take pointer input at all — the brush always wins, and boundaries are still
  respected as before.
- **Floor names were hard to read on small screens** — higher contrast, larger
  type and roomier tabs on compact layouts.
- **Room names sat in a corner** — labels are now placed at each room''s area
  centroid, and stay inside awkward shapes such as L-rooms rather than
  drifting outside them.

### Changed
- **Skribble is boxier again.** Only a dominant edge at roughly 45° keeps its
  angle; slopes up to about 40° are squared up.

## [1.41.0] — 2026-08-11

### Fixed
- **The How-to-use guide stopped appearing at startup.** It was marked as seen
  permanently after the first dismissal; it now shows once **per release**, so
  each update surfaces it again. The **?** button opens it any time.

### Changed
- **Skribble prefers straight walls more strongly again.** Only a decisively
  diagonal wall — roughly 32° to 58° off square — keeps its angle; everything
  gentler, and everything close to vertical, is squared up. Rooms come out as
  clean blocks unless an angle was clearly intended.
- **The guide has room to breathe** — more padding throughout, wider steps
  with clearer numbering, and noticeably more space between sections.

## [1.52.1] — 2026-08-21

### Removed
- **The reference quotation workbook is no longer included in the project.**
  It held commercially sensitive client and pricing information and should
  never have been copied in. It has been deleted, all identifying references
  scrubbed from the documentation, and a `.gitignore` now blocks spreadsheet
  files from being committed. Keep such files outside the repository and
  consult them locally.

## [1.63.1] — 2026-08-22

### Fixed
- **Device pins and chips disappeared in Futuristic mode.** The outline
  treatment hollowed them out while their symbols stayed white, so on a white
  plan there was nothing to see. A pin sits on someone else''s drawing, so it
  now always carries a solid fill and a contrasting ring in every mode — the
  modes differ by **shape, ring and glow**, never by hollowing the pin:
  - **Modern** — round, white ring, soft drop shadow, slightly bolder symbol.
  - **Retro** — square, dark hairline, hard offset shadow, blunt-capped symbol.
  - **Futuristic** — round with a **neon halo** in the device''s own colour,
    and a brighter one when selected.
- **Modes are listed by name and description only.** The colour chips beside
  them said nothing useful about a mode — colour themes keep theirs, since
  there the colour *is* the choice.

## [1.63.0] — 2026-08-22

### Added
- **Each mode now brings its own colours**, because a design ethos is not
  only shapes:
  - **Modern** — Apple''s system blue on near-white, almost no chroma
    anywhere else; true black at night.
  - **Retro** — a warm CRT: tan paper and burnt orange by day, **amber on
    black with a phosphor glow** at night.
  - **Futuristic** — monochrome with a single red, used sparingly and never
    decoratively.
  A mode paints only while the colour theme is set to **Match mode**;
  choosing any theme takes over, exactly as before. **Bronze** is now an
  explicit choice rather than the absence of one.
- **Icons take each mode''s hand** — 1.15px hairlines for Futuristic, 1.7px
  rounded for Modern, 2.4px square-capped for Retro — and device chips follow:
  soft shadowed squares, hard-shadowed blocks, or hollow rings.

### Fixed
- **The welcome mode row is centred** with the rest of the page.
- **The Futuristic title fits on one line** — the dot-matrix face needed a
  smaller size and tighter tracking than the others.
- **The colour chips beside the mode name are gone** from the toolbar, in
  favour of a plain glyph.

## [1.62.0] — 2026-08-22

### Changed
- **The welcome screen''s mode picker is now a quiet line of words**, aligned
  with everything else on the page, rather than a row of chips.
- **A plainly labelled Mode control sits in the toolbar**, showing which mode
  you are in and opening a menu to change it — no longer buried in Appearance.
- **The modes are far further apart.** Each now sets its own density, type
  scale, icon weight, pin shape, room-outline style and panel construction:
  - **Modern** — roomier throughout, a transparent toolbar of floating
    buttons, round pins with soft shadows, smooth room outlines, pill labels
    and toasts, rounded icon strokes.
  - **Retro** — compact and dense, two-pixel borders, panels topped by a
    title strip with ▪ ▪ ▪ in the corner, square pins with hard shadows,
    dashed room outlines, dotted row separators, square icon caps, and a
    scanline over the whole plan.
  - **Futuristic** — airy and stripped back, dot-matrix labels and figures,
    hollow ring pins, room outlines drawn as fine dots, hairline dotted
    separators, thin icon strokes, and a dot grid behind the plan.

## [1.61.0] — 2026-08-22

### Added
- **Mode is chosen on the welcome screen**, before you even open a project —
  the same four options, and the screen itself changes as you pick.
- **Each mode now moves differently**, which is most of why it feels like a
  different app:
  - **Modern** — long, settling easing; panels rise and scale in; buttons give
    slightly under a press.
  - **Retro** — no easing at all. Everything is instant and mechanical,
    buttons shift a pixel down-right as if depressed, toasts blink on, and a
    terminal caret blinks beside the wordmark.
  - **Futuristic** — fast and precise, with a faint blur as panels arrive,
    a glow on lit controls, and hairlines that sweep into place.
- Motion honours **reduced-motion** settings; all three fall still when asked.

## [1.60.0] — 2026-08-22

### Added
- **Three modes**, in Appearance → Mode, each changing shape, type, spacing
  and depth rather than just colour:
  - **Modern** — Apple''s softness and Google''s clarity with Japanese
    restraint: pill geometry, generous air, light weights, quiet depth.
  - **Retro** — the rack gear and terminals this trade grew up on: square
    corners, bevelled edges, engraved monospace labels, hard shadows and a
    faint scanline in the panels.
  - **Futuristic** — Nothing''s vocabulary: dot-matrix labels, hairline
    structure, translucency, circles where other interfaces use rectangles,
    and a dot grid behind the plan.
  Any mode combines with any colour theme, and **Original** restores the app
  exactly as it ships.

### Changed
- **Projects now save as `.ikon`** — shorter, and easier to say. Existing
  **`.ikonplan` files still open**; opening one says that saving will create
  a `.ikon` file and leaves the original untouched, rather than writing back
  over it.

## [1.59.3] — 2026-08-22

### Fixed
- **The pointer disappeared on white plans.** Rooms and Notes were using the
  system crosshair, which some setups draw in white — invisible against a
  white drawing. The app now draws its own: dark lines with a white halo, so
  it reads on any plan, in any theme, whatever the system is set to. The
  skribble ring is pinned to the same dark outline for the same reason.

## [1.59.2] — 2026-08-22

### Fixed
- **Choosing a leader tip was impossible to see in Mono.** The selected
  button drew its symbol in white on a fill that is itself white in that
  theme. Anything filled with the accent colour now takes its symbol from the
  background instead of a hard-coded white, so it stays legible in every
  theme — the same trap affected several other lit controls.
- **The brush ring is visible on any drawing**, with a dark ring inside a
  light one rather than relying on the accent colour.
- **Note boxes follow the theme again** — the Mono-specific overrides added
  in 1.59.1 have been dropped.

### Changed
- **Note text size is set in real pixel values** — presets of 12, 16, 20, 26
  and 34, plus a slider and a typed value, all kept in step with each other.

## [1.59.1] — 2026-08-22

### Fixed
- **The leader arrow pointed the wrong way.** Its base was set behind the
  point rather than back along the line, so it aimed away from what it was
  marking. It now points at its target, on screen and on the sheet.
- **Things floating over the plan no longer vanish in the Mono theme.** The
  brush cursor has a dark ring inside a light one, leader tips carry a light
  outline, and note boxes sit on solid ground — none of it now depends on an
  accent colour that may be pure white or pure black.
- **Selecting a leader point no longer hides the ikon beneath it.** The
  highlight is a ring rather than a filled patch.

### Added
- **Note text size** — set it in pixels, or from **S / M / L / XL** presets so
  a set of drawings stays consistent. The default is larger than before,
  since notes were unreadably small on big plans. The size is in plan
  pixels, so a note keeps its proportions when printed no matter how far
  you are zoomed in.

## [1.59.0] — 2026-08-22

### Fixed
- **Leader lines now meet the text box at its centre**, so they stay properly
  attached however the box is dragged — they used to stop at its left edge.
- **Long notes are readable in full.** Labels were cut off after a few lines;
  they now grow to fit, keep their line breaks, and wrap long words.
- **The text cursor is visible** in the note editor.

### Added
- **Choose how a leader ends** — a dot, an arrow that points along the line,
  or a numbered circle — and set its **size**.
- **More than one leader per note.** Add as many as you need, drag each point
  to whatever it should aim at, and the note reads once while pointing at
  several things. Existing notes carry over untouched.
- All of it prints on the exported sheets, tips included.

## [1.58.3] — 2026-08-22

### Changed
- **The radio starts far sooner.** The YouTube player library was only
  fetched at the moment you pressed play, so the first note waited on a
  download. It is now fetched quietly while the app is idle, and connections
  to YouTube are opened in advance, so playback begins almost at once.
  The pill shows **Connecting…** until sound actually starts, so the wait —
  whatever remains of it — is never silent and unexplained.
- The library is still only fetched when the radio is set to start with the
  app, and only ever once.

## [1.58.2] — 2026-08-22

### Fixed
- **The radio panel would not open from the welcome screen.** It opened and
  then closed itself: the same click carried on to the handler that dismisses
  the panel when you click away, which did not recognise the welcome button.
  Both radio buttons are now exempt, and the panel anchors beneath whichever
  one opened it rather than to the toolbar hidden behind the welcome screen.

## [1.58.1] — 2026-08-22

### Fixed
- **The ✕ on the radio panel was switching the whole radio off.** It now
  closes the panel only and the music keeps playing. Turning the radio off is
  its own action — **Turn the radio off** at the foot of the panel — and the
  note button returns to the toolbar so it can be brought back.
- **Clicking the pill reliably closes its panel again**; the controls on the
  pill no longer bubble up and reopen it.

### Added
- **Previous button** on the pill, alongside skip — both wrap around the list.

## [1.58.0] — 2026-08-22

### Added
- **Claude Music** joins the stations, and the first is now named
  **Tokyo Lofi** — also the default.
- **Skip button** on the now-playing pill: step to the next station, wrapping
  round at the end.
- **Mono theme** — black and white only, with no hue anywhere. Emphasis comes
  from contrast alone, which suits presenting and printing; lit controls
  invert rather than tint.

### Changed
- **The colour themes have far more life in them.** The muted set has been
  replaced by Indigo (electric blue), Green, Azure, Ember and Mono, each with
  a matching night version, and backgrounds now carry a hint of the accent
  instead of being uniformly grey.
- **Clicking the now-playing pill closes the panel again**, rather than only
  opening it.

## [1.57.1] — 2026-08-22

### Changed
- **The radio is now a "now playing" strip in the toolbar** — play/pause, four
  little bars that move only while something is actually playing, and the
  station name. Clicking the name drops a small panel beneath it for stations,
  volume, rename and the autostart switch; clicking away closes it. Closing
  turns the radio off entirely.
- **Fitting the plan needs a deliberate double middle-click.** Panning with
  the wheel button used to trip it: a middle click now only counts if the
  pointer did not move and the button was not held, so panning never fits the
  view by accident.

## [1.57.0] — 2026-08-22

### Changed
- **The radio is now a slim bar** — a small round player, play/pause, the
  station name, mute and close. Clicking the name expands it for the station
  list, volume and rename; everything else stays out of the way.

### Added
- **The radio starts with the app.** Browsers only allow sound once someone
  has interacted with the page, so it begins at your first click or key press
  rather than on load — near enough to opening that it feels automatic.
  **Start with the app** in the expanded panel turns it off, and the setting
  is remembered.

## [1.56.3] — 2026-08-22

### Fixed
- **The two channel stations would not play**, so they have been removed.
  Four verified streams remain, with **Lofi radio — focus** added and set as
  the default. A saved station that no longer exists now falls back to the
  default instead of failing silently.
- Pasting a **channel** link when adding a station still works — it plays
  whatever that channel is streaming at the time.

## [1.56.2] — 2026-08-21

### Added
- **Five stations**, including the working Lofi Girl beats stream and two
  channels — Lofi Tokyo and one other — added as **channel** stations rather
  than fixed video IDs, so they always play whatever that channel is
  streaming and cannot go stale when a stream restarts.
- **Rename any station** with the pencil in the radio header; names are
  remembered, so an unfamiliar channel can be labelled however you like.

## [1.56.1] — 2026-08-21

### Fixed
- **Two radio stations would not play.** Live-stream IDs change whenever a
  channel restarts its stream, and two of the four shipped were stale. Only
  verified streams now ship — **Synthwave** and **Sleep** — and rather than
  guess at others, **stations you add from a link are saved and stay in the
  list**, with a name of your choosing.

### Added
- **The radio is on the welcome screen too**, next to the appearance button.
  Opening it there starts the dark Synthwave stream straight away — that click
  is what browsers require before sound is allowed.

## [1.56.0] — 2026-08-21

### Changed
- **Dragging the plan now moves it**, as it already did on touch. Boxing a
  selection is **Shift-drag** — previously a plain drag started a selection
  box, which fought with simply moving around the plan.

### Added
- **Double-click the scroll wheel to fit the plan to the window.**
- **Focus radio** — a small background-music panel (toolbar, note icon) with
  Lofi Girl and Chillhop streams, play/pause, mute, volume, and the option to
  paste any YouTube link. Volume and station are remembered; nothing loads
  until the panel is opened, so it costs nothing at startup, and closing it
  stops the music.

## [1.55.1] — 2026-08-21

### Changed
- **Look sets removed; colour themes kept.** Changing corner shape, typeface
  and density altered the app''s character without making it better to use, so
  the choice is now simply a colour theme — Bronze, Indigo, Sage, Slate or
  Clay — each working in day or night.

### Fixed
- **The appearance button did nothing on the welcome screen.** The panel was
  opening behind it; it now sits above.
- **Dialogs have room to breathe** — more padding throughout, a proper rule
  under each title, and clearer spacing between fields and actions.

## [1.55.0] — 2026-08-21

### Added
- **Appearance panel**, from a palette button in the toolbar and on the
  welcome screen. Two independent choices:
  - **Look** — the app''s character: **Original** (rounded, warm),
    **Atelier** (drawing office), **Kinari** (soft and airy) or **Retro**
    (squared, rack-gear). Corner shape, typeface and density all change.
  - **Colour** — **Bronze**, **Indigo**, **Sage**, **Slate** or **Clay**.
  Any look combines with any colour, in day or night, and **Back to the
  original** clears everything in one click.
- **Appearance is remembered in the browser**, not in the project file, so
  the app looks the way you like it whichever project you open — while
  project files stay portable between people with different preferences.
- **Recent projects on the welcome screen** — name, client, floors, devices
  and when it was last edited. Each has a **✕** that removes it from the list
  only; the file itself is untouched.

### Changed
- The look and accent pickers added in 1.54 are superseded by the Appearance
  panel, which separates character from colour rather than bundling them.

## [1.54.0] — 2026-08-21

### Added
- **Look &amp; feel sets** (View menu): **Atelier** (limestone and indigo,
  drawing-office), **Kinari** (unbleached paper and sage) and **Slate** (cool
  neutral), alongside the **Original** warm bronze. A look is a palette only —
  nothing structural changes — and each works in both day and night.
- **Accent colour** can be set on its own, overriding whichever look is
  active, so the tool can carry a project or client colour.
- **"Back to the original look"** clears both in one click. Both settings save
  with the project.

### Fixed
- **Notes are properly multi-line.** They opened in a single-line browser
  prompt; there is now a real editor with a resizable text area, Ctrl/⌘+Enter
  to save, and a Delete button. Line breaks are kept on the plan and on the
  exported sheets.
- **Resizing a highlighted room no longer pans the plan.** Outside Rooms mode
  a near-miss on a handle landed on the plan and started a pan. Handles now
  have a wider catch there, and a press that lands close to one no longer
  pans at all.

## [1.53.2] — 2026-08-21

### Fixed
- **FD sheet colouring.** Every cell was being given a solid white fill, which
  flattened the sheet and painted over Excel''s own gridlines. Ordinary cells
  now carry no fill at all, exactly as the reference workbook does.
- **Floor rows stand out again.** Matching the reference removed their tint
  in 1.52, leaving floor sections hard to pick out in a long sheet. Floor
  titles and the totals row now sit on a faint grey band — enough to scan by,
  far lighter than the old heavy grey. Out-of-scope rooms keep their darker
  grey, so the two never read as the same thing.

## [1.53.1] — 2026-08-21

### Changed
- **Room names find a clear spot instead of sitting on the devices.** A label
  is now placed where the room is emptiest — furthest from the ikons inside it
  and from its own walls — rather than at the geometric centre, which is
  exactly where devices tend to cluster. Empty rooms still read centrally, and
  labels stay inside awkward shapes such as L-rooms.
- Labels are visually lighter, brighten on hover or when their room is
  highlighted, and fade further back while a device is armed for placement.

## [1.53.0] — 2026-08-21

### Added
- **Leader notes.** A note is now a target ring on the thing it describes,
  joined by a leader line to a label you can drag clear of the drawing — so
  one note can call out a single device, several items sharing one point, or a
  whole area. Both ends drag independently; leaders and wrapped label text
  print on the exported sheets.
- **Outdoor areas.** A room can be marked as an *outdoor area*: it surrounds
  other rooms instead of dividing them, draws beneath them with a dashed
  outline, and devices inside an inner room still belong to that room — only
  what falls outside them counts as the area''s. Skribble has an **Outdoor
  area** switch that lets the brush pass over existing rooms.
- **Wall thickness slider** (WALLS) for clearer boundaries, and **room fill
  strength** joins the always-visible toolbar group.

### Changed
- **Tapping a shared wall cycles through the rooms that meet along it** —
  tap once for one side, again for the other, with the room named each time.
- **"Linked walls" is now "Joined rooms move together"**, with a tooltip
  explaining that it keeps rooms attached when you drag a shared corner.

## [1.52.0] — 2026-08-21

### Changed
- **The Excel FD sheet now matches the ikonhouse quotation format:** header
  row 140pt deep with device names
  rotated 90°, bold, 10pt; the top row frozen; hairline borders on every cell;
  column widths 3.1 / 44 / 5.4; plain bold floor titles with a single rule
  beneath; a blank row between floors; and a **Total units** row of SUM
  formulas. Out-of-scope rooms keep their grey fill.
- **The device library is seeded in the workbook''s order** — 4 Button Keypad,
  8 Button Keypad, Touch Panel, Thermostat, HVAC Zones, lighting modules,
  curtain control, speakers and streaming, Wi-Fi, intercom and CCTV, then
  client-supplied items — with categories ordered to match. Rearranging the
  library still drives the FD column order, so the sequence stays yours.

## [1.51.0] — 2026-08-13

### Fixed
- **The room editor no longer jumps to the middle of the room.** Since labels
  moved to each room''s centre, every re-open — after a colour or scope change
  — re-anchored the panel there. It now stays where you put it while you keep
  working on the same room.
- **The custom out-of-scope colour is round again**, sized properly, and
  ringed with a colour wheel so it reads as a picker rather than a swatch.
  The device dialog''s custom colour matches.

### Changed
- **Skribbled rooms are now always square-walled.** Every wall comes out
  horizontal or vertical, which makes results predictable — an odd-shaped
  room is a couple of corner drags away afterwards. A genuinely triangular
  scribble still returns a shape rather than nothing.
- **Linked walls, greyscale, ikon size and opacity are back on the toolbar**
  as an always-visible group, since they are used constantly. Room fill
  strength, numbering size, auto-numbering and the out-of-scope colour stay in
  the Display panel. The group shrinks gracefully on narrow screens rather
  than disappearing.

## [1.50.0] — 2026-08-13

### Added
- **Notes.** Press <kbd>A</kbd> or tap **Notes**, then tap the plan to leave a
  comment — site conditions, client requests, anything worth remembering.
  Notes are numbered pins with their text beside them: drag to move, tap to
  edit, clear the text to delete. Fully undoable, they survive crop and
  rotate, save with the project, and print on the exported sheets.

### Fixed
- **Cropping is undoable — and now says so.** It always was, but nothing told
  you, so a bad crop felt permanent. Applying a crop now says that Undo brings
  the full plan back. (History is capped at 80 steps, since crop snapshots
  hold a whole plan image.)
- **Device names are no longer buried by their tools.** Names take the space
  they need and truncate cleanly; with a mouse the row tools stay hidden until
  you hover, and on touch they are compact and sit clear of the name.
- **The out-of-scope colour control** is properly round and has moved out of
  the tool row.

### Changed
- **Display settings are always a panel**, on every device, instead of
  sliders inline on desktop and a panel on tablets — one consistent layout
  and a much calmer toolbar at every width.
- **Skribble is straighter again** — wobble is absorbed more aggressively,
  and only a dominant edge near 45° keeps its angle.

## [1.49.0] — 2026-08-13

### Fixed
- **Adjusting one room of a joined pair.** Shared corners always moved both
  rooms, which made fine-tuning a boundary awkward. Hold **Ctrl/⌘** while
  dragging to move just the room you grabbed, or switch off **Linked walls**
  in Display to make that the default. A one-time note explains it the first
  time you take hold of a shared corner.
- **Floor tabs stay put.** They previously sat at the right of the tool row
  on wide screens and jumped to their own row on narrow ones. They now always
  occupy their own full-width row beneath the tools, in the same place at
  every size.

### Changed
- **A calmer toolbar.** Rotate left, rotate right and the room schedule order
  have moved into a **More** menu, leaving the row to the tools actually used
  while planning. Nothing was removed — and the keyboard shortcuts are
  unchanged.

## [1.48.0] — 2026-08-13

### Added
- **Show / hide devices and categories, like layers.** Every device row and
  every category header now has an eye: switch one off and those ikons leave
  the plan — and the exported sheets and their legend — so a plan can be
  presented one discipline at a time (lighting only, audio only, and so on).
  - Hiding is **presentation, not scope**: quantities in the BoQ, the Excel FD
    sheet and the room matrix are unaffected. Out-of-scope remains the way to
    exclude something from the numbers.
  - A category''s eye switches all of its devices together.
  - A standing reminder appears while anything is hidden, with **Show all** to
    restore everything in one click — so a hidden layer is never forgotten
    before an export.
  - Choosing a hidden device to place brings it back automatically.

## [1.47.0] — 2026-08-12

### Fixed
- **Floor tabs disappearing in a narrow window — at any screen size.** The
  toolbar was a fixed-height row that simply scrolled its contents out of
  sight, so on a smaller desktop window the floors were pushed off the end.
  The toolbar now **wraps**: when the floor tabs can no longer hold a sensible
  width they move to their own full-width row, separated by a rule, with
  larger tabs. This happens automatically at every width, so no manual
  resizing is needed.
- **Narrow desktop windows now get the grouped Display panel too** (below
  1400 px), instead of squeezing four sliders into the tool row.

## [1.46.0] — 2026-08-12

### Added
- **Select several rooms at once.** Shift/Ctrl-click room edges to build a
  selection (once one is picked, plain clicks keep adding). Selected rooms are
  outlined boldly and a bar appears with the actions that apply to all of them.
- **Mark rooms out of scope in bulk**, from that bar or with the <kbd>O</kbd>
  shortcut — which also works on a single highlighted room, and toggles back
  in scope. Each room''s own colour is remembered and restored.
- **Recolour several rooms at once** from the same bar. Recolouring a room
  that is currently out of scope stores the colour for when it returns, so the
  out-of-scope convention is never broken by accident.
- Tapping the plan or pressing <kbd>Esc</kbd> clears the selection.

## [1.45.0] — 2026-08-12

### Added
- **The out-of-scope colour is now yours to choose** — a swatch row (plus a
  full colour picker) beside the plan sliders, under **OUT**. Changing it
  restyles every out-of-scope room across all floors at once, leaves in-scope
  rooms alone, and keeps each room''s original colour remembered for when it
  comes back into scope. Saved with the project; red remains the default.

## [1.44.0] — 2026-08-12

### Changed
- **Skribble''s shortcut is now <kbd>K</kbd>**, and every tool key toggles —
  press it again to leave the tool. <kbd>C</kbd> now closes the crop frame as
  well as opening it.

### Added
- **Tap the plan to let a room go.** After resizing or highlighting a room, a
  plain tap anywhere on the plan clears the highlight and closes its editor —
  previously only a tap outside the plan did. Panning and dragging are
  unaffected, since only a tap that did not move counts.

## [1.43.0] — 2026-08-12

### Fixed
- **Floor tabs are properly visible on tablets and folds.** They were sharing
  one row with ten toolbar buttons and got squeezed to nothing. On compact
  screens they now sit on their own full-width row beneath the toolbar, with
  larger, higher-contrast tabs.

### Added
- **Keyboard shortcuts:** <kbd>R</kbd> rooms, <kbd>B</kbd> skribble,
  <kbd>C</kbd> crop, <kbd>G</kbd> greyscale, <kbd>N</kbd> numbering,
  <kbd>L</kbd> library, <kbd>?</kbd> the guide. They are ignored while typing.
- **A single, consistent way out of any tool on touch:** a floating **Done**
  button appears whenever Rooms or Skribble is active, naming the tool it will
  close. Esc and tapping the tool button again still work.

## [1.42.0] — 2026-08-12

### Fixed
- **Skribbling over an existing room selected it instead of painting.** The
  room layer sits above the plan and was intercepting the brush, so a stroke
  crossing a room grabbed and resized it. In Skribble mode the rooms no longer
  take pointer input at all — the brush always wins, and boundaries are still
  respected as before.
- **Floor names were hard to read on small screens** — higher contrast, larger
  type and roomier tabs on compact layouts.
- **Room names sat in a corner** — labels are now placed at each room''s area
  centroid, and stay inside awkward shapes such as L-rooms rather than
  drifting outside them.

### Changed
- **Skribble is boxier again.** Only a dominant edge at roughly 45° keeps its
  angle; slopes up to about 40° are squared up.

## [1.41.0] — 2026-08-11

### Fixed
- **The "How to use" guide appears on startup again**, and now keeps doing so
  until you tick **"Don't show this on startup"** in its footer — previously
  it silenced itself after being closed once, so it vanished for good.
- **Exports no longer freeze the window.** Each sheet was encoded with a
  blocking call, so a multi-floor A3 set locked the interface for the whole
  render with nothing on screen. Encoding is now asynchronous, the window
  stays responsive, and progress is reported page by page.

### Changed
- **The guide has proper margins** — more padding, roomier steps and wider
  spacing between sections.
- **Skribble is boxier still.** Only a dominant edge at roughly 40° or more
  keeps its angle; anything gentler is treated as an unsteady hand and
  squared up, so rooms come out like building blocks unless an angle was
  clearly intended.

## [1.40.0] — 2026-08-11

### Fixed
- **A selection box no longer appears while panning on touch.** Gating it
  behind a hold was not enough — a slow pan could out-wait the timer. Marquee
  select is now mouse-only. On touch, **hold an ikon** to start selecting and
  then tap others to add or remove; tap the plan when done.

### Changed
- **Skribble strongly prefers straight walls.** Each edge is now judged by
  length as well as angle: short edges are treated as hand-wobble and squared
  up readily, while a long edge is only straightened if it was close to
  square already. Small diagonal chamfers left at corners are absorbed into
  the walls either side.
  - Wobbly rectangles come out as clean four-corner boxes, L-shapes keep
    exactly their notch, and gentle drift (under about 20°) is treated as an
    unsteady hand rather than intent.
  - A room genuinely brushed at an angle — roughly 35° or steeper — keeps its
    diagonal.

## [1.39.0] — 2026-08-11

### Added
- **Skribbled rooms click into place against their neighbours.** Once an
  outline is traced, any edge that came out straight is compared with the
  walls facing it and snapped flush — so rooms sit together like blocks
  rather than leaving hairline gaps, and rarely need tidying afterwards.
  - Only edges that are already straight are aligned; an edge you clearly
    brushed at an angle keeps its angle.
  - Walls only align to walls that actually face them, so unrelated rooms
    elsewhere on the plan never pull a shape out of position.
  - Remaining corner-sized gaps close onto real corners, which also links the
    rooms so they stay joined when either is edited.

## [1.38.1] — 2026-08-11

### Fixed
- **A selection box appeared while panning the plan on touch.** Marquee
  select fired on any drag, competing with panning. On touch it now needs a
  brief hold on empty plan first (a short buzz confirms) before dragging
  boxes a selection; moving straight away simply pans. Mouse drag-to-select
  is unchanged.

## [1.38.0] — 2026-08-11

### Fixed
- **Panning the plan no longer draws rooms on touch.** The previous fix tried
  to tell a swipe from a deliberate drag by speed, which misfired on larger
  screens. On touch, dragging now simply pans — rooms are made by tapping
  corners or with Skribble, both of which are better suited to a finger.
  Mouse drag still draws a box.
- **Room corners are much easier to grab.** Each handle now has a generous
  invisible target (about 2.4× its visible size on touch) with the small dot
  drawn on top, so a near-miss no longer moves the whole room instead of
  resizing it.

### Changed
- **The toolbar is calmer on small screens.** The four display sliders and the
  greyscale / auto-number toggles now live behind a single **Display** button
  on compact screens, laid out as a labelled panel. On desktop they stay
  inline as before.

## [1.37.1] — 2026-08-11

### Fixed
- **Skribbled rooms could still overlap a neighbour.** Clipping the brush kept
  the painted area clean, but squaring-up afterwards could push a straightened
  edge back over a boundary. The finished outline is now genuinely subtracted
  from existing rooms before the room is created, so shapes butt against each
  other along shared walls instead of overlapping.
- **The version now reads in full (e.g. V1.37.1)** on the welcome screen, and
  is taken directly from `APP_VERSION` rather than being typed separately —
  so it can no longer fall out of step with a release.

## [1.37.0] — 2026-08-11

### Added
- **Skribble respects existing rooms.** The brush is clipped to the area not
  already claimed, so paint simply stops at a neighbouring room''s wall as you
  draw — you can sweep straight over a boundary and the new room ends exactly
  where the other begins, sharing the wall instead of fighting for it. Rooms
  no longer overlap by accident, and device counts stay unambiguous.
  - **Hold Alt** while starting a stroke to ignore boundaries and overlap
    deliberately (for a zone spanning several rooms).
  - Brushing entirely inside an existing room now says so, rather than
    failing silently.

## [1.36.1] — 2026-08-11

### Changed
- **Skribble hands back to normal editing once a room is made.** The brush
  cursor used to stay active afterwards, getting in the way of adjusting the
  new room. Creating a room now leaves Skribble automatically, with the room
  selected and its editor open — tap Skribble again for the next one. The
  cursor also stands down over the room editor, panels and toolbars.
- **Out-of-scope rooms are now red** rather than grey, so excluded areas are
  obvious at a glance on the plan. (The Excel FD sheet keeps its grey fill,
  matching the quotation workbook convention.)

## [1.36.0] — 2026-08-11

### Added
- **Pick the room colour before you skribble** — a swatch row in the brush
  bar. The stroke paints in that colour and the room is created with it, so
  you can colour-code as you go instead of editing afterwards.
- **Brush footprint on the cursor** — a ring under the pointer showing the
  exact area the brush will cover, tinted to the chosen colour and resizing
  live with the thickness slider.

### Fixed
- **The skribble trail was too faint to follow.** It was drawn at 42% with a
  multiply blend, which sank into the drawing underneath. It now paints at
  full strength in the chosen colour, so it is obvious where you have been.

## [1.35.0] — 2026-08-11

### Added
- **“Apply to all plans” in the crop bar** — frames every floor plan exactly
  like the one in front of you, so pages match when flipping through the
  exported set. The framing is applied proportionally, so plans that came from
  the same source (a multi-page PDF, for instance) end up pixel-identical.
  Warns first if ikons would fall outside, and it is a single undo step.
- **The crop ratio is now sticky** — the aspect you pick carries to the next
  plan and is saved with the project, instead of resetting each time.

### Fixed
- **Cropping re-encoded plans as JPEG**, quietly undoing the lossless pipeline
  and softening line art with every crop. Crops are lossless PNG again, with
  high-quality resampling.

## [1.34.0] — 2026-08-11

### Changed
- **Out-of-scope rooms turn grey automatically.** Marking a room out of scope
  switches it to a neutral grey; unmarking restores the colour it had before,
  so scope reads at a glance without hunting through the palette.
- **Room fills are a little stronger** by default — clearly present without
  drowning the drawing underneath.

### Added
- **Room fill strength slider** (toolbar, "ROOM"): from barely-there to
  emphatic, covering fill, outline and out-of-scope hatching together.
- **Auto-number size slider** (toolbar, "No."): the sequence badges were too
  small to read on dense plans — they now scale from 70% to 220%, on screen
  and on exported sheets. Both settings save with the project.

## [1.33.0] — 2026-08-11

### Added
- **Skribble — brush an area to create a room.** A new toolbar mode: brush
  over part of the plan with your finger, stylus or mouse and release; the
  painted area becomes a room. Scribble back and forth to cover an odd shape
  in one continuous motion.
  - **Brush thickness** is adjustable from the bar at the bottom, with a live
    size dot — fine for a cupboard, broad for a lounge. Saved with the project.
  - The stroke is traced, simplified and **squared up**, so wobbly hand
    movements still produce clean, presentable outlines, and the result snaps
    to neighbouring rooms exactly like a drawn one.
  - The result is an ordinary polygon — the same corner, wall and linking
    tools apply afterwards.
  - Stray dabs are ignored (the largest painted area wins) and strokes too
    small to be a room are rejected rather than making slivers.
  - Deliberately shape-only: no wall detection, so it behaves identically on
    CAD linework, scans and photographed plans.

## [1.32.0] — 2026-08-11

### Changed
- **Placement toggles live in the toolbar.** Auto-numbering joins greyscale as
  a toolbar button that lights up when active, so both can be flipped mid-work
  without opening a menu. The View menu toggles remain and stay in sync.
- **Reordering now feels like picking something up.** Dragging a category, a
  device, or a room in the schedule lifts it toward you — a slight scale, a
  soft tilt and a real shadow — while the rest of the list recedes. Previously
  the dragged item just dimmed, which read as "disabled" rather than "held".
  Respects reduced-motion preferences.
- **The room schedule panel has room to breathe** — wider, more padding, and
  noticeably more space between rows, floor groups and the footer.

## [1.31.1] — 2026-08-11

### Changed
- **Greyscale is now a toolbar button**, next to the ikon sliders, instead of
  being buried in the View menu — it lights up when active, so it can be
  flipped while placing devices without leaving what you are doing. The View
  menu toggle remains and the two stay in sync.

## [1.31.0] — 2026-08-11

### Added
- **Greyscale floor plan** (View menu → Placement): drops the architect''s
  drawing to greyscale while ikons, rooms and labels keep their colour, so
  devices read clearly against a busy plan. Applies on screen and on the
  exported sheets, is saved with the project, and switches back at any time.

## [1.30.0] — 2026-08-11

### Added
- **Room schedule order panel** (toolbar button beside Rooms): every room on
  every floor in one list, showing its position, colour, ikon count and
  out-of-scope tag. **Drag a room** to move it, or use ▲▼ — the order is
  exactly what the Excel FD sheet and the BoQ breakdown use. Rooms stay within
  their own floor.
- **Sort by position** orders every floor the way a reader scans the plan —
  top to bottom, left to right within each band — as a one-click starting
  point before fine-tuning.
- The room editor''s order section now links straight through with
  **“Reorder all…”**.

## [1.29.0] — 2026-08-11

### Added
- **Order rooms in the schedule while you design.** The room editor gains an
  "Order in schedule" section — ▲▼ move a room earlier or later, with its
  position shown (e.g. "3 of 11"). That order is exactly the row order used in
  the Excel FD sheet and the BoQ room breakdown, so the client-facing schedule
  can follow the building rather than the order rooms happened to be drawn.

## [1.28.0] — 2026-07-26

### Fixed
- **The device dialog vanished when picking a custom ikon colour.** Choosing a
  colour rebuilt the whole swatch row, which replaced the `<input type="color">`
  element the OS picker was attached to — closing the picker (and appearing to
  close the dialog) mid-pick. The row now updates its selection in place.

### Added
- **Ikon opacity slider** next to the size slider: drop it to see walls and
  dimensions on the plan through the ikons. It applies on screen and on the
  exported sheets, and is saved with the project.

### Changed
- **Ikons can go much smaller.** The size slider starts at 20% (was 50%) and
  the hard 12px floor that quietly overrode it is now 5px — so ikons stay
  proportionate on dense or large-format plans.

## [1.27.1] — 2026-07-26

### Changed
- **Category headers are larger and better balanced** — more breathing room
  above each group, slightly bigger type with a little more contrast, and
  round 24px tool buttons (30px on touch) that no longer feel cramped. The
  tools now reserve their space instead of appearing on hover, so headers
  never shift as the pointer moves across them. Horizontal docks keep the
  compact spacing, where vertical space is scarce.

## [1.27.0] — 2026-07-26

### Added
- **Reorder devices within a category.** Each device row now has ▲▼ buttons
  (always visible on touch, on hover with a mouse), and dragging a device onto
  another drops it into that position — within its own category, or into
  another category if you drop it on a device there. Dropping on a category
  header still moves it to the end of that category, as before.
- The order is stored with the project and flows through to the exports, so
  the FD sheet''s column order follows the library exactly.

## [1.26.0] — 2026-07-25

### Added
- **"How to use" guide**, reachable from a **?** button in the toolbar (the
  gestures card was previously buried in the View menu). Three tabs:
  - **Quick start** — five steps from floor plan to client package, written as
    a walkthrough rather than a feature list.
  - **Gestures** — grouped by what you are doing, with keys shown as keycaps.
  - **Outputs** — what each export contains and when to reach for it.
- The guide **opens once automatically** the first time someone enters the
  workspace, and never again (dismissal is remembered locally). **Esc** or
  **Got it** closes it.

## [1.25.0] — 2026-07-25

### Added
- **Create a room from a node on desktop too.** Press and hold a corner with
  the mouse (~0.5s — slightly longer than touch, since pausing mid-click is
  common) then drag to size the new room; it shares the anchor corner, so the
  two rooms stay linked. **Ctrl/⌘-drag** from a corner does the same instantly,
  with no waiting.
- The node **pulses while the hold arms**, so it is clear which gesture is
  about to fire, and **Esc** cancels a spawn in progress.

## [1.24.1] — 2026-07-25

### Fixed
- **Pinch-to-zoom on the floor plan.** The zoom maths were correct, but three
  competing gesture handlers were fighting the pinch:
  - the one-finger pan only *paused* while a pinch was active, so when the
    second finger lifted it resumed from its original origin and snapped the
    plan back — undoing the zoom''s framing. A pinch now ends the pan outright.
  - in Rooms mode the plan is the SVG room layer, which sits outside
    `#planClick`, so the stage pan handler ran *alongside* the room layer''s own
    pan — two systems writing the same pan offsets from different origins.
  - marquee select ignored pinches entirely, drawing a selection box (and
    selecting ikons) during a two-finger gesture.
- Pinches with three or more fingers on screen are now recognised too.

## [1.24.0] — 2026-07-25

### Fixed
- **Panning the plan no longer draws rooms** (touch): a quick one-finger
  swipe on the plan now pans it — matching every photo/map app — while a
  deliberate, slower drag still draws a box. Tap-corners, pinch-zoom and
  hold-for-linked-room are unchanged.

### Added
- **Tap outside the plan to cancel** (Rooms mode): tapping the area around
  the floor plan clears the selected box and any in-progress outline —
  outside Rooms mode it clears a highlight.

### Changed
- **Room nodes slimmed further** (~20%) with thinner rings — visible and
  catchable without cluttering the outline.

## [1.23.0] — 2026-07-25

### Fixed
- **Press & hold on a corner deleted it and spawned a room (Android).** The
  browser''s long-press fires a context-menu event, which was mapped to
  right-click-delete — so holding a node triggered the delete *and* the
  new-room gesture together. Corner interactions are now one coherent
  handler: hold still → new linked room; move → drag the corner; and on
  touch the context menu is suppressed without deleting. Desktop right-click
  still deletes a node; double-tap deletes on touch.
- **Crop edge bars did not resize.** They were unwired (and fell through to
  the frame-move gesture). All four edge bars now resize their side —
  honouring the selected ratio about the frame''s centre — and the **Reset**
  button restores the recommended framing.
- **Room ✕ unreliable on touch** — the target was too small; it''s now
  26px on touch, clears any stale highlight, and confirms with an
  undo-able toast.

### Added
- **Gestures & tips** reference (View menu → Help) — every canvas, ikon,
  room, and library gesture on one card.
- **Done chip** in the Rooms-mode hint bar — an obvious exit on touch,
  alongside Esc.

## [1.22.0] — 2026-07-21

### Added
- **Tap outside to deselect a room.** After creating or selecting a room,
  tapping empty plan in Rooms mode clears the selection so you can start the
  next room immediately.
- **Grow a new room from a corner.** Press & hold an existing room''s node
  (~0.4s, a short buzz confirms), then drag: a new room is anchored at that
  exact corner, so the two rooms share the node and stay linked.
- **Category reorder arrows** (▲ ▼) on every category header — always
  visible on touch — alongside the existing press-and-hold drag.

### Changed
- **Crop is easier to handle**, especially on touch: draggable **edge
  handles** on all four sides (not just corners), a rule-of-thirds grid
  inside the frame, and a **Reset** button that restores the frame to the
  whole plan. Ratio presets and pinch/drag behaviour are unchanged.

## [1.21.1] — 2026-07-18

### Fixed
- **Room creation silently cancelled near an adjacent room.** Snapping could
  pull the rectangle''s end corner back onto its own start edge, collapsing
  the box below the minimum size so nothing was created. A snap that would
  collapse the rectangle is now ignored, and a genuinely too-small drag says
  so instead of failing quietly.
- **Pasted (or multi-selected) ikons could not be dragged.** The group drag
  re-rendered all markers on every movement, detaching the element holding
  the pointer capture and ending the drag instantly. Group moves now update
  marker positions in place, with a single re-render on release.
- **Rooms that were merely close resized together.** The node-link tolerance
  was ~0.6% of the plan — wide enough to bind neighbouring-but-separate
  corners. Linking now requires true coincidence (nodes snapped exactly
  together), so only genuinely shared corners move as one.

## [1.21.0] — 2026-07-18

### Added
- **Copy & paste ikons.** Select one or more ikons and Ctrl/Cmd+C, then
  Ctrl/Cmd+V to drop copies (offset slightly, auto-selected) — pairs with
  marquee multi-select for quickly replicating a device cluster.
- **Auto-numbering.** Each placed ikon gets a per-device sequence shown as a
  small badge on the plan and printed as a code on exported sheets
  (e.g. SP-01, 4B-02, TH-03). **Toggle it off** in the View menu →
  Placement; turning it back on numbers everything consistently.
- **Split a wall.** Double-click a wall segment to insert a node exactly at
  the click point — branch a new corner or start a connected room from a
  precise spot. (Midpoint handles still add a centre node.)

## [1.20.0] — 2026-07-18

### Added
- **Linked rooms via shared nodes.** When two rooms share a corner (drop or
  snap one room''s corner onto another''s), that node is marked with a bronze
  ring, and dragging it moves *both* rooms'' corners together — adjacent
  rooms stay connected as you adjust the layout. Right-click / double-click a
  node to remove it, which unlinks the rooms there. Linked edits are undoable.

### Changed
- **Inverted the wall-drag ortho default:** dragging a wall now keeps it
  straight (moving only across itself) by default; **hold Shift** to move it
  freely in any direction. (Previously free by default, Shift for straight.)

## [1.19.0] — 2026-07-18

### Changed
- **Scrapped the separate "device schedule by room" page** — it was cramped
  and hard to read. Removed from the PDF, PNG and package exports.
- **On-sheet legend is now a categorized table.** Devices are grouped under
  their library category headers (in the same order as the tool), each with
  its colour/icon, name and quantity, balanced across columns beneath the
  plan — the floor-plan layout and size are unchanged.

### Excel FD sheet
- Device columns now follow the **library category order** (4 Button Keypad
  first, etc.), header labels **rotated 90° upright**, in-scope cells filled
  white and **out-of-scope rooms filled grey (darker 25%)** with the plain
  room name — the "(OUT OF SCOPE)" text tag is gone. (These use the
  style-capable xlsx-js-style writer already bundled.)

## [1.18.0] — 2026-07-18

### Fixed
- **Room corners moved their neighbours.** The 4-corner "rectangle lock"
  dragged adjacent corners along to keep edges square, so a corner couldn''t
  be moved on its own. Corners are now fully independent — hold **Shift**
  while dragging a corner to square it to a neighbour on demand.

### Added
- **Multi-select ikons.** Drag a box on empty plan to marquee-select; Shift/
  Ctrl-click to add or remove individual ikons. Drag any selected ikon to
  move the whole group, or press Delete / Remove to delete them together.
  Click empty plan to clear.
- **Device schedule by room on the exported sheets.** Each floor plan is now
  followed by a printed rooms × devices table (with per-room totals and
  out-of-scope tags) in the PDF, the sheet PNGs, and the full package — so
  the plan set tells the whole story without opening the Excel file.

## [1.17.0] — 2026-07-17

### Changed
- **Free wall dragging.** A wall now moves freely in any direction — both
  corners translate together, so the edge stays straight and the same
  length. **Hold Shift** to constrain it to a straight (orthogonal) slide
  across itself; **Alt** still bypasses snapping. (Previously a wall could
  only move perpendicular to itself.)

## [1.16.0] — 2026-07-17

### Added
- **Drag walls to move them.** Selecting or highlighting a room now shows
  its edges as draggable segments — drag a wall and it slides perpendicular
  to itself, keeping the line perfectly straight and both corners together.
  Snaps to neighbouring walls (hold Alt to bypass).
- **Right-click a corner to delete it** (in addition to double-click); a
  room keeps a minimum of three corners.
- **Drag devices between categories** in the library — press-and-hold on
  touch, click-drag on desktop, onto any category header (which highlights
  as you hover). The move is saved with the project.
- **Save feedback:** Ctrl/Cmd+S now shows “Saving…” then “Saved ✓”.

### Changed
- The Touch Panel icon is now **landscape** (matching a wall-mounted panel).

## [1.15.2] — 2026-07-17

### Changed
- **Gentler snapping in Rooms mode:** magnet range reduced (5px base,
  walls slightly tighter, narrower straight-line guidance) so corners can
  be fine-tuned onto the floor plan''s own drawn walls without being yanked
  to a neighbouring room. Hold **Alt** while drawing or dragging a corner
  to disable snapping entirely.
- **Room nodes slimmed:** corner/midpoint handles reduced (~25% on touch,
  slightly on desktop) — still catchable, no longer bulky.

## [1.15.1] — 2026-07-17

### Fixed
- **Room creation completely broken in 1.15.0.** The drawing and corner-
  editing handlers referenced a variable whose declaration had been
  removed, throwing on the first movement — no box could be drawn and no
  corner grabbed. Both handlers were rebuilt and verified: drag-a-box,
  tap-corner polygons, pinch-abort, wall snapping and rectangle angle-lock
  all restored, with snap guide lines now shown while corners align.
- **Handles are finger-sized on touch:** room corner/midpoint handles are
  nearly twice as large on touch devices and keep their on-screen size as
  you zoom; crop corner handles grew to 36px. Missing a handle no longer
  sends the floor plan flying.

## [1.15.0] — 2026-07-17

### Added
- **Tap-corner room drawing.** In Rooms mode, tap corner after corner to
  outline any shape — L-shapes, notches, wrapped terraces — with a live
  dashed preview; tap the first corner (marked with a ring) or double-tap
  to close and name the room. Dragging still draws a quick box.
- **Straight-line guidance while tapping:** each new segment auto-aligns
  to horizontal/vertical when close, so outlines stay presentable without
  effort; clearly diagonal taps stay diagonal.
- **Wall snapping.** Corners now snap to neighbouring rooms'' *edges*, not
  just their corners — rooms butt flush along shared walls at any point,
  staying visually connected while remaining separate zones with their own
  device counts.

## [1.14.0] — 2026-07-17

### Changed
- **Snapping is now room-to-room only.** Corners and drawn rectangles no
  longer magnet to the plan boundary — they snap exclusively to existing
  room corners (neighbouring rooms, and the same room''s other corners),
  which is what alignment is actually for.

### Fixed
- **Two-finger zoom no longer creates accidental rooms** (Fold and other
  touch devices): starting a pinch instantly aborts any in-flight room
  draw, drawing cannot begin during a pinch, and a pinch that ends a
  gesture never opens the name prompt.

### Added
- **Click a room''s edge to work with it** — a generous invisible hit zone
  runs along every room outline (wider on touch). Single-click highlights
  (or selects in Rooms mode), double-click opens the editor, and in Rooms
  mode the edge drags the room just like its body. No more hunting for the
  name label.

## [1.13.1] — 2026-07-16

### Fixed
- **Newly created categories missing from the device dialog's category
  list.** The dropdown only read categories that already had a device in
  them, so an empty category created via "＋ Category" or "＋ New" never
  appeared until something was filed under it. It now includes empty and
  in-progress categories too.

### Changed
- **"Category" now comes first** and matches "New device" in width in the
  library footer — creating the container is the natural first step.

## [1.13.0] — 2026-07-16

### Added
- **Add devices straight from a category:** every category header has a ＋
  button (and empty categories a "＋ Add a device" action) that opens the
  device dialog with that category pre-filled.

### Fixed
- **Grip vanished when docked top/bottom on PC** — the drag handle lived in
  the title, which horizontal docks hide. The grip now stays visible in
  every dock, so you can always drag the library to another edge.
- **Compact screens: dock buttons caused confusion** (top/bottom "made the
  library disappear", right "showed a left window"). On small screens every
  dock is the slide-in Devices sheet by design, so the dock buttons are now
  replaced with a note explaining that; theme controls remain.
- **Touch category reordering interrupted by the browser's long-press
  menu** — the context menu is suppressed on category headers, so press &
  hold reliably picks the category up (short buzz confirms).

## [1.12.0] — 2026-07-16

### Fixed
- **Blank left panel reserving space on compact screens (Fold, Chrome).**
  The compact layout is no longer decided by CSS media queries alone: a
  JavaScript-computed `compact` class (viewport-measured, updated on every
  resize/fold) forces the sheet layout with authoritative overrides. On
  compact screens every dock becomes the slide-in Devices sheet and the
  plan always gets the full window.

### Added
- **Create categories from the library itself:** a dashed "Category" button
  next to "New device" creates an empty category, placed at the top of the
  list with a hint row until its first device arrives. Empty categories are
  saved with the project and graduate automatically once populated.
- **Touch: press & hold a category (~⅓s) to rearrange it** — a short buzz
  confirms pickup, list scrolling locks while dragging, and simply swiping
  still scrolls. Mouse drag is unchanged.
- A one-time desktop tip pointing out the ⠿ grip for drag-to-dock.

## [1.11.1] — 2026-07-16

### Fixed
- **Fold-class screens no longer get the desktop layout.** The Fold 7's
  inner display is wider than tall even held upright (~1092 CSS px), so it
  dodged both the 1024px and the portrait breakpoints and kept the docked
  panel over the plan. The compact layout now applies up to **1160px** in
  any orientation (portrait still up to 1280px) — the library lives in the
  toggleable Devices sheet there.
- **New-device dialog opened behind the library sheet** on compact screens
  (sheet z-index 130 vs dialog 100). Dialogs now sit above all panels.

### Added
- **“+ New” category button** in the device dialog — prompts for a name and
  fills the field; the category is created when the device is saved. Typing
  a new name directly still works.

## [1.11.0] — 2026-07-15

### Added
- **Visible drag grip on the library** (dot-grid button in its header):
  drag it to carry the panel immediately — no press-and-hold needed — with
  the same edge drop-zones to dock left/right/top/bottom, or drop in open
  space to float. Press-and-hold still works.
- **Room corners align to their own room:** dragging a node now snaps to
  the other corners of the same room as well as neighbouring rooms and the
  plan edges.

### Changed
- **New categories, made obvious:** the device dialog's category field now
  reads "Pick one, or type a new category" — typing any new name has always
  created it, now it says so.
- **Ikon alignment guides** (snapping a dragged ikon to others' rows and
  columns) now clear reliably on release.
- **Out-of-scope hatching heavier again** — denser diagonal bars at higher
  opacity with a solid outline.
- **Side docks are wider by default (304px)** so device names are readable
  immediately; drag the inner edge to taste as before.

### Fixed
- **Compact screens (incl. Fold portrait): the library can no longer camp
  on the plan.** The Devices sheet never starts open, and the Devices
  button now toggles it open/closed. Portrait widths up to 1280px use the
  compact layout (added in 1.10.0 — make sure the deployed site is up to
  date if a docked panel still appears in portrait).

## [1.10.0] — 2026-07-15

### Added
- **Drag the library to dock it.** While carrying the floating panel (by
  its grip, or fresh from a press-and-hold tear-off), the edges of the
  canvas become drop zones with a live dashed preview — release on the
  left, right, top or bottom edge to dock there; release anywhere else to
  leave it floating.

### Fixed
- **Portrait tablets lost plan space to the docked library.** Tablets with
  1025–1280 px portrait widths were getting the desktop layout, so a side
  dock consumed a quarter of an already-narrow screen. Portrait screens up
  to 1280 px now use the compact layout (slide-in Devices sheet for
  vertical docks); rotating to landscape restores the full desktop layout
  automatically.

## [1.9.1] — 2026-07-15

### Added
- **Middle-button panning while creating rooms.** In Rooms mode, hold the
  scroll-wheel button (or Space) and drag to pan the plan — over blank
  plan and over existing rooms alike; the left button keeps drawing and
  editing. Two-finger pan/pinch on touch was already available.

## [1.9.0] — 2026-07-15

### Added
- **Press & hold to dock / undock the library.** Hold the panel (header,
  footer, or empty list area) for half a second to tear it off into the
  floating panel at your pointer and keep dragging to place it; hold the
  floating panel to dock it back to the edge it came from. Movement cancels
  the hold, and buttons, rows, and the resizer are exempt. Desktop/large
  screens only — small screens keep the slide-in sheet.

### Changed
- The device library docks to the **left by default** again.

## [1.8.2] — 2026-07-14

### Fixed
- **Room label text blurred while zooming in the editor.** The canvas is
  scaled with a CSS transform, which stretches rasterized text; labels now
  counter-scale by the inverse zoom so their effective scale is always 1 —
  names stay pixel-crisp at any magnification (they keep a constant
  on-screen size as a result, like map labels).

### Changed
- PDF plans import at up to 4× resolution (was 3.5×) for more zoom headroom
  on the text printed within the drawing itself. Plans imported before
  v1.8 remain at their original resolution until re-imported.

## [1.8.1] — 2026-07-14

### Fixed
- **Sheets still softened when zooming into the exported PDF.** The final
  raster was embedded as JPEG, which smears one-pixel line art even at high
  quality. Sheets and covers now embed as **lossless PNG**, A3 renders at
  full **300 dpi** (matching A4), and the plan is resampled with
  high-quality interpolation — wall lines stay crisp under deep zoom.
  PDF file sizes grow somewhat; line-art pages compress efficiently.

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

## [1.52.1] — 2026-08-21

### Removed
- **The reference quotation workbook is no longer included in the project.**
  It held commercially sensitive client and pricing information and should
  never have been copied in. It has been deleted, all identifying references
  scrubbed from the documentation, and a `.gitignore` now blocks spreadsheet
  files from being committed. Keep such files outside the repository and
  consult them locally.

## [1.63.1] — 2026-08-22

### Fixed
- **Device pins and chips disappeared in Futuristic mode.** The outline
  treatment hollowed them out while their symbols stayed white, so on a white
  plan there was nothing to see. A pin sits on someone else''s drawing, so it
  now always carries a solid fill and a contrasting ring in every mode — the
  modes differ by **shape, ring and glow**, never by hollowing the pin:
  - **Modern** — round, white ring, soft drop shadow, slightly bolder symbol.
  - **Retro** — square, dark hairline, hard offset shadow, blunt-capped symbol.
  - **Futuristic** — round with a **neon halo** in the device''s own colour,
    and a brighter one when selected.
- **Modes are listed by name and description only.** The colour chips beside
  them said nothing useful about a mode — colour themes keep theirs, since
  there the colour *is* the choice.

## [1.63.0] — 2026-08-22

### Added
- **Each mode now brings its own colours**, because a design ethos is not
  only shapes:
  - **Modern** — Apple''s system blue on near-white, almost no chroma
    anywhere else; true black at night.
  - **Retro** — a warm CRT: tan paper and burnt orange by day, **amber on
    black with a phosphor glow** at night.
  - **Futuristic** — monochrome with a single red, used sparingly and never
    decoratively.
  A mode paints only while the colour theme is set to **Match mode**;
  choosing any theme takes over, exactly as before. **Bronze** is now an
  explicit choice rather than the absence of one.
- **Icons take each mode''s hand** — 1.15px hairlines for Futuristic, 1.7px
  rounded for Modern, 2.4px square-capped for Retro — and device chips follow:
  soft shadowed squares, hard-shadowed blocks, or hollow rings.

### Fixed
- **The welcome mode row is centred** with the rest of the page.
- **The Futuristic title fits on one line** — the dot-matrix face needed a
  smaller size and tighter tracking than the others.
- **The colour chips beside the mode name are gone** from the toolbar, in
  favour of a plain glyph.

## [1.62.0] — 2026-08-22

### Changed
- **The welcome screen''s mode picker is now a quiet line of words**, aligned
  with everything else on the page, rather than a row of chips.
- **A plainly labelled Mode control sits in the toolbar**, showing which mode
  you are in and opening a menu to change it — no longer buried in Appearance.
- **The modes are far further apart.** Each now sets its own density, type
  scale, icon weight, pin shape, room-outline style and panel construction:
  - **Modern** — roomier throughout, a transparent toolbar of floating
    buttons, round pins with soft shadows, smooth room outlines, pill labels
    and toasts, rounded icon strokes.
  - **Retro** — compact and dense, two-pixel borders, panels topped by a
    title strip with ▪ ▪ ▪ in the corner, square pins with hard shadows,
    dashed room outlines, dotted row separators, square icon caps, and a
    scanline over the whole plan.
  - **Futuristic** — airy and stripped back, dot-matrix labels and figures,
    hollow ring pins, room outlines drawn as fine dots, hairline dotted
    separators, thin icon strokes, and a dot grid behind the plan.

## [1.61.0] — 2026-08-22

### Added
- **Mode is chosen on the welcome screen**, before you even open a project —
  the same four options, and the screen itself changes as you pick.
- **Each mode now moves differently**, which is most of why it feels like a
  different app:
  - **Modern** — long, settling easing; panels rise and scale in; buttons give
    slightly under a press.
  - **Retro** — no easing at all. Everything is instant and mechanical,
    buttons shift a pixel down-right as if depressed, toasts blink on, and a
    terminal caret blinks beside the wordmark.
  - **Futuristic** — fast and precise, with a faint blur as panels arrive,
    a glow on lit controls, and hairlines that sweep into place.
- Motion honours **reduced-motion** settings; all three fall still when asked.

## [1.60.0] — 2026-08-22

### Added
- **Three modes**, in Appearance → Mode, each changing shape, type, spacing
  and depth rather than just colour:
  - **Modern** — Apple''s softness and Google''s clarity with Japanese
    restraint: pill geometry, generous air, light weights, quiet depth.
  - **Retro** — the rack gear and terminals this trade grew up on: square
    corners, bevelled edges, engraved monospace labels, hard shadows and a
    faint scanline in the panels.
  - **Futuristic** — Nothing''s vocabulary: dot-matrix labels, hairline
    structure, translucency, circles where other interfaces use rectangles,
    and a dot grid behind the plan.
  Any mode combines with any colour theme, and **Original** restores the app
  exactly as it ships.

### Changed
- **Projects now save as `.ikon`** — shorter, and easier to say. Existing
  **`.ikonplan` files still open**; opening one says that saving will create
  a `.ikon` file and leaves the original untouched, rather than writing back
  over it.

## [1.59.3] — 2026-08-22

### Fixed
- **The pointer disappeared on white plans.** Rooms and Notes were using the
  system crosshair, which some setups draw in white — invisible against a
  white drawing. The app now draws its own: dark lines with a white halo, so
  it reads on any plan, in any theme, whatever the system is set to. The
  skribble ring is pinned to the same dark outline for the same reason.

## [1.59.2] — 2026-08-22

### Fixed
- **Choosing a leader tip was impossible to see in Mono.** The selected
  button drew its symbol in white on a fill that is itself white in that
  theme. Anything filled with the accent colour now takes its symbol from the
  background instead of a hard-coded white, so it stays legible in every
  theme — the same trap affected several other lit controls.
- **The brush ring is visible on any drawing**, with a dark ring inside a
  light one rather than relying on the accent colour.
- **Note boxes follow the theme again** — the Mono-specific overrides added
  in 1.59.1 have been dropped.

### Changed
- **Note text size is set in real pixel values** — presets of 12, 16, 20, 26
  and 34, plus a slider and a typed value, all kept in step with each other.

## [1.59.1] — 2026-08-22

### Fixed
- **The leader arrow pointed the wrong way.** Its base was set behind the
  point rather than back along the line, so it aimed away from what it was
  marking. It now points at its target, on screen and on the sheet.
- **Things floating over the plan no longer vanish in the Mono theme.** The
  brush cursor has a dark ring inside a light one, leader tips carry a light
  outline, and note boxes sit on solid ground — none of it now depends on an
  accent colour that may be pure white or pure black.
- **Selecting a leader point no longer hides the ikon beneath it.** The
  highlight is a ring rather than a filled patch.

### Added
- **Note text size** — set it in pixels, or from **S / M / L / XL** presets so
  a set of drawings stays consistent. The default is larger than before,
  since notes were unreadably small on big plans. The size is in plan
  pixels, so a note keeps its proportions when printed no matter how far
  you are zoomed in.

## [1.59.0] — 2026-08-22

### Fixed
- **Leader lines now meet the text box at its centre**, so they stay properly
  attached however the box is dragged — they used to stop at its left edge.
- **Long notes are readable in full.** Labels were cut off after a few lines;
  they now grow to fit, keep their line breaks, and wrap long words.
- **The text cursor is visible** in the note editor.

### Added
- **Choose how a leader ends** — a dot, an arrow that points along the line,
  or a numbered circle — and set its **size**.
- **More than one leader per note.** Add as many as you need, drag each point
  to whatever it should aim at, and the note reads once while pointing at
  several things. Existing notes carry over untouched.
- All of it prints on the exported sheets, tips included.

## [1.58.3] — 2026-08-22

### Changed
- **The radio starts far sooner.** The YouTube player library was only
  fetched at the moment you pressed play, so the first note waited on a
  download. It is now fetched quietly while the app is idle, and connections
  to YouTube are opened in advance, so playback begins almost at once.
  The pill shows **Connecting…** until sound actually starts, so the wait —
  whatever remains of it — is never silent and unexplained.
- The library is still only fetched when the radio is set to start with the
  app, and only ever once.

## [1.58.2] — 2026-08-22

### Fixed
- **The radio panel would not open from the welcome screen.** It opened and
  then closed itself: the same click carried on to the handler that dismisses
  the panel when you click away, which did not recognise the welcome button.
  Both radio buttons are now exempt, and the panel anchors beneath whichever
  one opened it rather than to the toolbar hidden behind the welcome screen.

## [1.58.1] — 2026-08-22

### Fixed
- **The ✕ on the radio panel was switching the whole radio off.** It now
  closes the panel only and the music keeps playing. Turning the radio off is
  its own action — **Turn the radio off** at the foot of the panel — and the
  note button returns to the toolbar so it can be brought back.
- **Clicking the pill reliably closes its panel again**; the controls on the
  pill no longer bubble up and reopen it.

### Added
- **Previous button** on the pill, alongside skip — both wrap around the list.

## [1.58.0] — 2026-08-22

### Added
- **Claude Music** joins the stations, and the first is now named
  **Tokyo Lofi** — also the default.
- **Skip button** on the now-playing pill: step to the next station, wrapping
  round at the end.
- **Mono theme** — black and white only, with no hue anywhere. Emphasis comes
  from contrast alone, which suits presenting and printing; lit controls
  invert rather than tint.

### Changed
- **The colour themes have far more life in them.** The muted set has been
  replaced by Indigo (electric blue), Green, Azure, Ember and Mono, each with
  a matching night version, and backgrounds now carry a hint of the accent
  instead of being uniformly grey.
- **Clicking the now-playing pill closes the panel again**, rather than only
  opening it.

## [1.57.1] — 2026-08-22

### Changed
- **The radio is now a "now playing" strip in the toolbar** — play/pause, four
  little bars that move only while something is actually playing, and the
  station name. Clicking the name drops a small panel beneath it for stations,
  volume, rename and the autostart switch; clicking away closes it. Closing
  turns the radio off entirely.
- **Fitting the plan needs a deliberate double middle-click.** Panning with
  the wheel button used to trip it: a middle click now only counts if the
  pointer did not move and the button was not held, so panning never fits the
  view by accident.

## [1.57.0] — 2026-08-22

### Changed
- **The radio is now a slim bar** — a small round player, play/pause, the
  station name, mute and close. Clicking the name expands it for the station
  list, volume and rename; everything else stays out of the way.

### Added
- **The radio starts with the app.** Browsers only allow sound once someone
  has interacted with the page, so it begins at your first click or key press
  rather than on load — near enough to opening that it feels automatic.
  **Start with the app** in the expanded panel turns it off, and the setting
  is remembered.

## [1.56.3] — 2026-08-22

### Fixed
- **The two channel stations would not play**, so they have been removed.
  Four verified streams remain, with **Lofi radio — focus** added and set as
  the default. A saved station that no longer exists now falls back to the
  default instead of failing silently.
- Pasting a **channel** link when adding a station still works — it plays
  whatever that channel is streaming at the time.

## [1.56.2] — 2026-08-21

### Added
- **Five stations**, including the working Lofi Girl beats stream and two
  channels — Lofi Tokyo and one other — added as **channel** stations rather
  than fixed video IDs, so they always play whatever that channel is
  streaming and cannot go stale when a stream restarts.
- **Rename any station** with the pencil in the radio header; names are
  remembered, so an unfamiliar channel can be labelled however you like.

## [1.56.1] — 2026-08-21

### Fixed
- **Two radio stations would not play.** Live-stream IDs change whenever a
  channel restarts its stream, and two of the four shipped were stale. Only
  verified streams now ship — **Synthwave** and **Sleep** — and rather than
  guess at others, **stations you add from a link are saved and stay in the
  list**, with a name of your choosing.

### Added
- **The radio is on the welcome screen too**, next to the appearance button.
  Opening it there starts the dark Synthwave stream straight away — that click
  is what browsers require before sound is allowed.

## [1.56.0] — 2026-08-21

### Changed
- **Dragging the plan now moves it**, as it already did on touch. Boxing a
  selection is **Shift-drag** — previously a plain drag started a selection
  box, which fought with simply moving around the plan.

### Added
- **Double-click the scroll wheel to fit the plan to the window.**
- **Focus radio** — a small background-music panel (toolbar, note icon) with
  Lofi Girl and Chillhop streams, play/pause, mute, volume, and the option to
  paste any YouTube link. Volume and station are remembered; nothing loads
  until the panel is opened, so it costs nothing at startup, and closing it
  stops the music.

## [1.55.1] — 2026-08-21

### Changed
- **Look sets removed; colour themes kept.** Changing corner shape, typeface
  and density altered the app''s character without making it better to use, so
  the choice is now simply a colour theme — Bronze, Indigo, Sage, Slate or
  Clay — each working in day or night.

### Fixed
- **The appearance button did nothing on the welcome screen.** The panel was
  opening behind it; it now sits above.
- **Dialogs have room to breathe** — more padding throughout, a proper rule
  under each title, and clearer spacing between fields and actions.

## [1.55.0] — 2026-08-21

### Added
- **Appearance panel**, from a palette button in the toolbar and on the
  welcome screen. Two independent choices:
  - **Look** — the app''s character: **Original** (rounded, warm),
    **Atelier** (drawing office), **Kinari** (soft and airy) or **Retro**
    (squared, rack-gear). Corner shape, typeface and density all change.
  - **Colour** — **Bronze**, **Indigo**, **Sage**, **Slate** or **Clay**.
  Any look combines with any colour, in day or night, and **Back to the
  original** clears everything in one click.
- **Appearance is remembered in the browser**, not in the project file, so
  the app looks the way you like it whichever project you open — while
  project files stay portable between people with different preferences.
- **Recent projects on the welcome screen** — name, client, floors, devices
  and when it was last edited. Each has a **✕** that removes it from the list
  only; the file itself is untouched.

### Changed
- The look and accent pickers added in 1.54 are superseded by the Appearance
  panel, which separates character from colour rather than bundling them.

## [1.54.0] — 2026-08-21

### Added
- **Look &amp; feel sets** (View menu): **Atelier** (limestone and indigo,
  drawing-office), **Kinari** (unbleached paper and sage) and **Slate** (cool
  neutral), alongside the **Original** warm bronze. A look is a palette only —
  nothing structural changes — and each works in both day and night.
- **Accent colour** can be set on its own, overriding whichever look is
  active, so the tool can carry a project or client colour.
- **"Back to the original look"** clears both in one click. Both settings save
  with the project.

### Fixed
- **Notes are properly multi-line.** They opened in a single-line browser
  prompt; there is now a real editor with a resizable text area, Ctrl/⌘+Enter
  to save, and a Delete button. Line breaks are kept on the plan and on the
  exported sheets.
- **Resizing a highlighted room no longer pans the plan.** Outside Rooms mode
  a near-miss on a handle landed on the plan and started a pan. Handles now
  have a wider catch there, and a press that lands close to one no longer
  pans at all.

## [1.53.2] — 2026-08-21

### Fixed
- **FD sheet colouring.** Every cell was being given a solid white fill, which
  flattened the sheet and painted over Excel''s own gridlines. Ordinary cells
  now carry no fill at all, exactly as the reference workbook does.
- **Floor rows stand out again.** Matching the reference removed their tint
  in 1.52, leaving floor sections hard to pick out in a long sheet. Floor
  titles and the totals row now sit on a faint grey band — enough to scan by,
  far lighter than the old heavy grey. Out-of-scope rooms keep their darker
  grey, so the two never read as the same thing.

## [1.53.1] — 2026-08-21

### Changed
- **Room names find a clear spot instead of sitting on the devices.** A label
  is now placed where the room is emptiest — furthest from the ikons inside it
  and from its own walls — rather than at the geometric centre, which is
  exactly where devices tend to cluster. Empty rooms still read centrally, and
  labels stay inside awkward shapes such as L-rooms.
- Labels are visually lighter, brighten on hover or when their room is
  highlighted, and fade further back while a device is armed for placement.

## [1.53.0] — 2026-08-21

### Added
- **Leader notes.** A note is now a target ring on the thing it describes,
  joined by a leader line to a label you can drag clear of the drawing — so
  one note can call out a single device, several items sharing one point, or a
  whole area. Both ends drag independently; leaders and wrapped label text
  print on the exported sheets.
- **Outdoor areas.** A room can be marked as an *outdoor area*: it surrounds
  other rooms instead of dividing them, draws beneath them with a dashed
  outline, and devices inside an inner room still belong to that room — only
  what falls outside them counts as the area''s. Skribble has an **Outdoor
  area** switch that lets the brush pass over existing rooms.
- **Wall thickness slider** (WALLS) for clearer boundaries, and **room fill
  strength** joins the always-visible toolbar group.

### Changed
- **Tapping a shared wall cycles through the rooms that meet along it** —
  tap once for one side, again for the other, with the room named each time.
- **"Linked walls" is now "Joined rooms move together"**, with a tooltip
  explaining that it keeps rooms attached when you drag a shared corner.

## [1.52.0] — 2026-08-21

### Changed
- **The Excel FD sheet now matches the ikonhouse quotation format:** header
  row 140pt deep with device names
  rotated 90°, bold, 10pt; the top row frozen; hairline borders on every cell;
  column widths 3.1 / 44 / 5.4; plain bold floor titles with a single rule
  beneath; a blank row between floors; and a **Total units** row of SUM
  formulas. Out-of-scope rooms keep their grey fill.
- **The device library is seeded in the workbook''s order** — 4 Button Keypad,
  8 Button Keypad, Touch Panel, Thermostat, HVAC Zones, lighting modules,
  curtain control, speakers and streaming, Wi-Fi, intercom and CCTV, then
  client-supplied items — with categories ordered to match. Rearranging the
  library still drives the FD column order, so the sequence stays yours.

## [1.51.0] — 2026-08-13

### Fixed
- **The room editor no longer jumps to the middle of the room.** Since labels
  moved to each room''s centre, every re-open — after a colour or scope change
  — re-anchored the panel there. It now stays where you put it while you keep
  working on the same room.
- **The custom out-of-scope colour is round again**, sized properly, and
  ringed with a colour wheel so it reads as a picker rather than a swatch.
  The device dialog''s custom colour matches.

### Changed
- **Skribbled rooms are now always square-walled.** Every wall comes out
  horizontal or vertical, which makes results predictable — an odd-shaped
  room is a couple of corner drags away afterwards. A genuinely triangular
  scribble still returns a shape rather than nothing.
- **Linked walls, greyscale, ikon size and opacity are back on the toolbar**
  as an always-visible group, since they are used constantly. Room fill
  strength, numbering size, auto-numbering and the out-of-scope colour stay in
  the Display panel. The group shrinks gracefully on narrow screens rather
  than disappearing.

## [1.50.0] — 2026-08-13

### Added
- **Notes.** Press <kbd>A</kbd> or tap **Notes**, then tap the plan to leave a
  comment — site conditions, client requests, anything worth remembering.
  Notes are numbered pins with their text beside them: drag to move, tap to
  edit, clear the text to delete. Fully undoable, they survive crop and
  rotate, save with the project, and print on the exported sheets.

### Fixed
- **Cropping is undoable — and now says so.** It always was, but nothing told
  you, so a bad crop felt permanent. Applying a crop now says that Undo brings
  the full plan back. (History is capped at 80 steps, since crop snapshots
  hold a whole plan image.)
- **Device names are no longer buried by their tools.** Names take the space
  they need and truncate cleanly; with a mouse the row tools stay hidden until
  you hover, and on touch they are compact and sit clear of the name.
- **The out-of-scope colour control** is properly round and has moved out of
  the tool row.

### Changed
- **Display settings are always a panel**, on every device, instead of
  sliders inline on desktop and a panel on tablets — one consistent layout
  and a much calmer toolbar at every width.
- **Skribble is straighter again** — wobble is absorbed more aggressively,
  and only a dominant edge near 45° keeps its angle.

## [1.49.0] — 2026-08-13

### Fixed
- **Adjusting one room of a joined pair.** Shared corners always moved both
  rooms, which made fine-tuning a boundary awkward. Hold **Ctrl/⌘** while
  dragging to move just the room you grabbed, or switch off **Linked walls**
  in Display to make that the default. A one-time note explains it the first
  time you take hold of a shared corner.
- **Floor tabs stay put.** They previously sat at the right of the tool row
  on wide screens and jumped to their own row on narrow ones. They now always
  occupy their own full-width row beneath the tools, in the same place at
  every size.

### Changed
- **A calmer toolbar.** Rotate left, rotate right and the room schedule order
  have moved into a **More** menu, leaving the row to the tools actually used
  while planning. Nothing was removed — and the keyboard shortcuts are
  unchanged.

## [1.48.0] — 2026-08-13

### Added
- **Show / hide devices and categories, like layers.** Every device row and
  every category header now has an eye: switch one off and those ikons leave
  the plan — and the exported sheets and their legend — so a plan can be
  presented one discipline at a time (lighting only, audio only, and so on).
  - Hiding is **presentation, not scope**: quantities in the BoQ, the Excel FD
    sheet and the room matrix are unaffected. Out-of-scope remains the way to
    exclude something from the numbers.
  - A category''s eye switches all of its devices together.
  - A standing reminder appears while anything is hidden, with **Show all** to
    restore everything in one click — so a hidden layer is never forgotten
    before an export.
  - Choosing a hidden device to place brings it back automatically.

## [1.47.0] — 2026-08-12

### Fixed
- **Floor tabs disappearing in a narrow window — at any screen size.** The
  toolbar was a fixed-height row that simply scrolled its contents out of
  sight, so on a smaller desktop window the floors were pushed off the end.
  The toolbar now **wraps**: when the floor tabs can no longer hold a sensible
  width they move to their own full-width row, separated by a rule, with
  larger tabs. This happens automatically at every width, so no manual
  resizing is needed.
- **Narrow desktop windows now get the grouped Display panel too** (below
  1400 px), instead of squeezing four sliders into the tool row.

## [1.46.0] — 2026-08-12

### Added
- **Select several rooms at once.** Shift/Ctrl-click room edges to build a
  selection (once one is picked, plain clicks keep adding). Selected rooms are
  outlined boldly and a bar appears with the actions that apply to all of them.
- **Mark rooms out of scope in bulk**, from that bar or with the <kbd>O</kbd>
  shortcut — which also works on a single highlighted room, and toggles back
  in scope. Each room''s own colour is remembered and restored.
- **Recolour several rooms at once** from the same bar. Recolouring a room
  that is currently out of scope stores the colour for when it returns, so the
  out-of-scope convention is never broken by accident.
- Tapping the plan or pressing <kbd>Esc</kbd> clears the selection.

## [1.45.0] — 2026-08-12

### Added
- **The out-of-scope colour is now yours to choose** — a swatch row (plus a
  full colour picker) beside the plan sliders, under **OUT**. Changing it
  restyles every out-of-scope room across all floors at once, leaves in-scope
  rooms alone, and keeps each room''s original colour remembered for when it
  comes back into scope. Saved with the project; red remains the default.

## [1.44.0] — 2026-08-12

### Changed
- **Skribble''s shortcut is now <kbd>K</kbd>**, and every tool key toggles —
  press it again to leave the tool. <kbd>C</kbd> now closes the crop frame as
  well as opening it.

### Added
- **Tap the plan to let a room go.** After resizing or highlighting a room, a
  plain tap anywhere on the plan clears the highlight and closes its editor —
  previously only a tap outside the plan did. Panning and dragging are
  unaffected, since only a tap that did not move counts.

## [1.43.0] — 2026-08-12

### Fixed
- **Floor tabs are properly visible on tablets and folds.** They were sharing
  one row with ten toolbar buttons and got squeezed to nothing. On compact
  screens they now sit on their own full-width row beneath the toolbar, with
  larger, higher-contrast tabs.

### Added
- **Keyboard shortcuts:** <kbd>R</kbd> rooms, <kbd>B</kbd> skribble,
  <kbd>C</kbd> crop, <kbd>G</kbd> greyscale, <kbd>N</kbd> numbering,
  <kbd>L</kbd> library, <kbd>?</kbd> the guide. They are ignored while typing.
- **A single, consistent way out of any tool on touch:** a floating **Done**
  button appears whenever Rooms or Skribble is active, naming the tool it will
  close. Esc and tapping the tool button again still work.

## [1.42.0] — 2026-08-12

### Fixed
- **Skribbling over an existing room selected it instead of painting.** The
  room layer sits above the plan and was intercepting the brush, so a stroke
  crossing a room grabbed and resized it. In Skribble mode the rooms no longer
  take pointer input at all — the brush always wins, and boundaries are still
  respected as before.
- **Floor names were hard to read on small screens** — higher contrast, larger
  type and roomier tabs on compact layouts.
- **Room names sat in a corner** — labels are now placed at each room''s area
  centroid, and stay inside awkward shapes such as L-rooms rather than
  drifting outside them.

### Changed
- **Skribble is boxier again.** Only a dominant edge at roughly 45° keeps its
  angle; slopes up to about 40° are squared up.

## [1.41.0] — 2026-08-11

### Fixed
- **The How-to-use guide stopped appearing at startup.** It was marked as seen
  permanently after the first dismissal; it now shows once **per release**, so
  each update surfaces it again. The **?** button opens it any time.

### Changed
- **Skribble prefers straight walls more strongly again.** Only a decisively
  diagonal wall — roughly 32° to 58° off square — keeps its angle; everything
  gentler, and everything close to vertical, is squared up. Rooms come out as
  clean blocks unless an angle was clearly intended.
- **The guide has room to breathe** — more padding throughout, wider steps
  with clearer numbering, and noticeably more space between sections.

## [1.52.1] — 2026-08-21

### Removed
- **The reference quotation workbook is no longer included in the project.**
  It held commercially sensitive client and pricing information and should
  never have been copied in. It has been deleted, all identifying references
  scrubbed from the documentation, and a `.gitignore` now blocks spreadsheet
  files from being committed. Keep such files outside the repository and
  consult them locally.

## [1.63.1] — 2026-08-22

### Fixed
- **Device pins and chips disappeared in Futuristic mode.** The outline
  treatment hollowed them out while their symbols stayed white, so on a white
  plan there was nothing to see. A pin sits on someone else''s drawing, so it
  now always carries a solid fill and a contrasting ring in every mode — the
  modes differ by **shape, ring and glow**, never by hollowing the pin:
  - **Modern** — round, white ring, soft drop shadow, slightly bolder symbol.
  - **Retro** — square, dark hairline, hard offset shadow, blunt-capped symbol.
  - **Futuristic** — round with a **neon halo** in the device''s own colour,
    and a brighter one when selected.
- **Modes are listed by name and description only.** The colour chips beside
  them said nothing useful about a mode — colour themes keep theirs, since
  there the colour *is* the choice.

## [1.63.0] — 2026-08-22

### Added
- **Each mode now brings its own colours**, because a design ethos is not
  only shapes:
  - **Modern** — Apple''s system blue on near-white, almost no chroma
    anywhere else; true black at night.
  - **Retro** — a warm CRT: tan paper and burnt orange by day, **amber on
    black with a phosphor glow** at night.
  - **Futuristic** — monochrome with a single red, used sparingly and never
    decoratively.
  A mode paints only while the colour theme is set to **Match mode**;
  choosing any theme takes over, exactly as before. **Bronze** is now an
  explicit choice rather than the absence of one.
- **Icons take each mode''s hand** — 1.15px hairlines for Futuristic, 1.7px
  rounded for Modern, 2.4px square-capped for Retro — and device chips follow:
  soft shadowed squares, hard-shadowed blocks, or hollow rings.

### Fixed
- **The welcome mode row is centred** with the rest of the page.
- **The Futuristic title fits on one line** — the dot-matrix face needed a
  smaller size and tighter tracking than the others.
- **The colour chips beside the mode name are gone** from the toolbar, in
  favour of a plain glyph.

## [1.62.0] — 2026-08-22

### Changed
- **The welcome screen''s mode picker is now a quiet line of words**, aligned
  with everything else on the page, rather than a row of chips.
- **A plainly labelled Mode control sits in the toolbar**, showing which mode
  you are in and opening a menu to change it — no longer buried in Appearance.
- **The modes are far further apart.** Each now sets its own density, type
  scale, icon weight, pin shape, room-outline style and panel construction:
  - **Modern** — roomier throughout, a transparent toolbar of floating
    buttons, round pins with soft shadows, smooth room outlines, pill labels
    and toasts, rounded icon strokes.
  - **Retro** — compact and dense, two-pixel borders, panels topped by a
    title strip with ▪ ▪ ▪ in the corner, square pins with hard shadows,
    dashed room outlines, dotted row separators, square icon caps, and a
    scanline over the whole plan.
  - **Futuristic** — airy and stripped back, dot-matrix labels and figures,
    hollow ring pins, room outlines drawn as fine dots, hairline dotted
    separators, thin icon strokes, and a dot grid behind the plan.

## [1.61.0] — 2026-08-22

### Added
- **Mode is chosen on the welcome screen**, before you even open a project —
  the same four options, and the screen itself changes as you pick.
- **Each mode now moves differently**, which is most of why it feels like a
  different app:
  - **Modern** — long, settling easing; panels rise and scale in; buttons give
    slightly under a press.
  - **Retro** — no easing at all. Everything is instant and mechanical,
    buttons shift a pixel down-right as if depressed, toasts blink on, and a
    terminal caret blinks beside the wordmark.
  - **Futuristic** — fast and precise, with a faint blur as panels arrive,
    a glow on lit controls, and hairlines that sweep into place.
- Motion honours **reduced-motion** settings; all three fall still when asked.

## [1.60.0] — 2026-08-22

### Added
- **Three modes**, in Appearance → Mode, each changing shape, type, spacing
  and depth rather than just colour:
  - **Modern** — Apple''s softness and Google''s clarity with Japanese
    restraint: pill geometry, generous air, light weights, quiet depth.
  - **Retro** — the rack gear and terminals this trade grew up on: square
    corners, bevelled edges, engraved monospace labels, hard shadows and a
    faint scanline in the panels.
  - **Futuristic** — Nothing''s vocabulary: dot-matrix labels, hairline
    structure, translucency, circles where other interfaces use rectangles,
    and a dot grid behind the plan.
  Any mode combines with any colour theme, and **Original** restores the app
  exactly as it ships.

### Changed
- **Projects now save as `.ikon`** — shorter, and easier to say. Existing
  **`.ikonplan` files still open**; opening one says that saving will create
  a `.ikon` file and leaves the original untouched, rather than writing back
  over it.

## [1.59.3] — 2026-08-22

### Fixed
- **The pointer disappeared on white plans.** Rooms and Notes were using the
  system crosshair, which some setups draw in white — invisible against a
  white drawing. The app now draws its own: dark lines with a white halo, so
  it reads on any plan, in any theme, whatever the system is set to. The
  skribble ring is pinned to the same dark outline for the same reason.

## [1.59.2] — 2026-08-22

### Fixed
- **Choosing a leader tip was impossible to see in Mono.** The selected
  button drew its symbol in white on a fill that is itself white in that
  theme. Anything filled with the accent colour now takes its symbol from the
  background instead of a hard-coded white, so it stays legible in every
  theme — the same trap affected several other lit controls.
- **The brush ring is visible on any drawing**, with a dark ring inside a
  light one rather than relying on the accent colour.
- **Note boxes follow the theme again** — the Mono-specific overrides added
  in 1.59.1 have been dropped.

### Changed
- **Note text size is set in real pixel values** — presets of 12, 16, 20, 26
  and 34, plus a slider and a typed value, all kept in step with each other.

## [1.59.1] — 2026-08-22

### Fixed
- **The leader arrow pointed the wrong way.** Its base was set behind the
  point rather than back along the line, so it aimed away from what it was
  marking. It now points at its target, on screen and on the sheet.
- **Things floating over the plan no longer vanish in the Mono theme.** The
  brush cursor has a dark ring inside a light one, leader tips carry a light
  outline, and note boxes sit on solid ground — none of it now depends on an
  accent colour that may be pure white or pure black.
- **Selecting a leader point no longer hides the ikon beneath it.** The
  highlight is a ring rather than a filled patch.

### Added
- **Note text size** — set it in pixels, or from **S / M / L / XL** presets so
  a set of drawings stays consistent. The default is larger than before,
  since notes were unreadably small on big plans. The size is in plan
  pixels, so a note keeps its proportions when printed no matter how far
  you are zoomed in.

## [1.59.0] — 2026-08-22

### Fixed
- **Leader lines now meet the text box at its centre**, so they stay properly
  attached however the box is dragged — they used to stop at its left edge.
- **Long notes are readable in full.** Labels were cut off after a few lines;
  they now grow to fit, keep their line breaks, and wrap long words.
- **The text cursor is visible** in the note editor.

### Added
- **Choose how a leader ends** — a dot, an arrow that points along the line,
  or a numbered circle — and set its **size**.
- **More than one leader per note.** Add as many as you need, drag each point
  to whatever it should aim at, and the note reads once while pointing at
  several things. Existing notes carry over untouched.
- All of it prints on the exported sheets, tips included.

## [1.58.3] — 2026-08-22

### Changed
- **The radio starts far sooner.** The YouTube player library was only
  fetched at the moment you pressed play, so the first note waited on a
  download. It is now fetched quietly while the app is idle, and connections
  to YouTube are opened in advance, so playback begins almost at once.
  The pill shows **Connecting…** until sound actually starts, so the wait —
  whatever remains of it — is never silent and unexplained.
- The library is still only fetched when the radio is set to start with the
  app, and only ever once.

## [1.58.2] — 2026-08-22

### Fixed
- **The radio panel would not open from the welcome screen.** It opened and
  then closed itself: the same click carried on to the handler that dismisses
  the panel when you click away, which did not recognise the welcome button.
  Both radio buttons are now exempt, and the panel anchors beneath whichever
  one opened it rather than to the toolbar hidden behind the welcome screen.

## [1.58.1] — 2026-08-22

### Fixed
- **The ✕ on the radio panel was switching the whole radio off.** It now
  closes the panel only and the music keeps playing. Turning the radio off is
  its own action — **Turn the radio off** at the foot of the panel — and the
  note button returns to the toolbar so it can be brought back.
- **Clicking the pill reliably closes its panel again**; the controls on the
  pill no longer bubble up and reopen it.

### Added
- **Previous button** on the pill, alongside skip — both wrap around the list.

## [1.58.0] — 2026-08-22

### Added
- **Claude Music** joins the stations, and the first is now named
  **Tokyo Lofi** — also the default.
- **Skip button** on the now-playing pill: step to the next station, wrapping
  round at the end.
- **Mono theme** — black and white only, with no hue anywhere. Emphasis comes
  from contrast alone, which suits presenting and printing; lit controls
  invert rather than tint.

### Changed
- **The colour themes have far more life in them.** The muted set has been
  replaced by Indigo (electric blue), Green, Azure, Ember and Mono, each with
  a matching night version, and backgrounds now carry a hint of the accent
  instead of being uniformly grey.
- **Clicking the now-playing pill closes the panel again**, rather than only
  opening it.

## [1.57.1] — 2026-08-22

### Changed
- **The radio is now a "now playing" strip in the toolbar** — play/pause, four
  little bars that move only while something is actually playing, and the
  station name. Clicking the name drops a small panel beneath it for stations,
  volume, rename and the autostart switch; clicking away closes it. Closing
  turns the radio off entirely.
- **Fitting the plan needs a deliberate double middle-click.** Panning with
  the wheel button used to trip it: a middle click now only counts if the
  pointer did not move and the button was not held, so panning never fits the
  view by accident.

## [1.57.0] — 2026-08-22

### Changed
- **The radio is now a slim bar** — a small round player, play/pause, the
  station name, mute and close. Clicking the name expands it for the station
  list, volume and rename; everything else stays out of the way.

### Added
- **The radio starts with the app.** Browsers only allow sound once someone
  has interacted with the page, so it begins at your first click or key press
  rather than on load — near enough to opening that it feels automatic.
  **Start with the app** in the expanded panel turns it off, and the setting
  is remembered.

## [1.56.3] — 2026-08-22

### Fixed
- **The two channel stations would not play**, so they have been removed.
  Four verified streams remain, with **Lofi radio — focus** added and set as
  the default. A saved station that no longer exists now falls back to the
  default instead of failing silently.
- Pasting a **channel** link when adding a station still works — it plays
  whatever that channel is streaming at the time.

## [1.56.2] — 2026-08-21

### Added
- **Five stations**, including the working Lofi Girl beats stream and two
  channels — Lofi Tokyo and one other — added as **channel** stations rather
  than fixed video IDs, so they always play whatever that channel is
  streaming and cannot go stale when a stream restarts.
- **Rename any station** with the pencil in the radio header; names are
  remembered, so an unfamiliar channel can be labelled however you like.

## [1.56.1] — 2026-08-21

### Fixed
- **Two radio stations would not play.** Live-stream IDs change whenever a
  channel restarts its stream, and two of the four shipped were stale. Only
  verified streams now ship — **Synthwave** and **Sleep** — and rather than
  guess at others, **stations you add from a link are saved and stay in the
  list**, with a name of your choosing.

### Added
- **The radio is on the welcome screen too**, next to the appearance button.
  Opening it there starts the dark Synthwave stream straight away — that click
  is what browsers require before sound is allowed.

## [1.56.0] — 2026-08-21

### Changed
- **Dragging the plan now moves it**, as it already did on touch. Boxing a
  selection is **Shift-drag** — previously a plain drag started a selection
  box, which fought with simply moving around the plan.

### Added
- **Double-click the scroll wheel to fit the plan to the window.**
- **Focus radio** — a small background-music panel (toolbar, note icon) with
  Lofi Girl and Chillhop streams, play/pause, mute, volume, and the option to
  paste any YouTube link. Volume and station are remembered; nothing loads
  until the panel is opened, so it costs nothing at startup, and closing it
  stops the music.

## [1.55.1] — 2026-08-21

### Changed
- **Look sets removed; colour themes kept.** Changing corner shape, typeface
  and density altered the app''s character without making it better to use, so
  the choice is now simply a colour theme — Bronze, Indigo, Sage, Slate or
  Clay — each working in day or night.

### Fixed
- **The appearance button did nothing on the welcome screen.** The panel was
  opening behind it; it now sits above.
- **Dialogs have room to breathe** — more padding throughout, a proper rule
  under each title, and clearer spacing between fields and actions.

## [1.55.0] — 2026-08-21

### Added
- **Appearance panel**, from a palette button in the toolbar and on the
  welcome screen. Two independent choices:
  - **Look** — the app''s character: **Original** (rounded, warm),
    **Atelier** (drawing office), **Kinari** (soft and airy) or **Retro**
    (squared, rack-gear). Corner shape, typeface and density all change.
  - **Colour** — **Bronze**, **Indigo**, **Sage**, **Slate** or **Clay**.
  Any look combines with any colour, in day or night, and **Back to the
  original** clears everything in one click.
- **Appearance is remembered in the browser**, not in the project file, so
  the app looks the way you like it whichever project you open — while
  project files stay portable between people with different preferences.
- **Recent projects on the welcome screen** — name, client, floors, devices
  and when it was last edited. Each has a **✕** that removes it from the list
  only; the file itself is untouched.

### Changed
- The look and accent pickers added in 1.54 are superseded by the Appearance
  panel, which separates character from colour rather than bundling them.

## [1.54.0] — 2026-08-21

### Added
- **Look &amp; feel sets** (View menu): **Atelier** (limestone and indigo,
  drawing-office), **Kinari** (unbleached paper and sage) and **Slate** (cool
  neutral), alongside the **Original** warm bronze. A look is a palette only —
  nothing structural changes — and each works in both day and night.
- **Accent colour** can be set on its own, overriding whichever look is
  active, so the tool can carry a project or client colour.
- **"Back to the original look"** clears both in one click. Both settings save
  with the project.

### Fixed
- **Notes are properly multi-line.** They opened in a single-line browser
  prompt; there is now a real editor with a resizable text area, Ctrl/⌘+Enter
  to save, and a Delete button. Line breaks are kept on the plan and on the
  exported sheets.
- **Resizing a highlighted room no longer pans the plan.** Outside Rooms mode
  a near-miss on a handle landed on the plan and started a pan. Handles now
  have a wider catch there, and a press that lands close to one no longer
  pans at all.

## [1.53.2] — 2026-08-21

### Fixed
- **FD sheet colouring.** Every cell was being given a solid white fill, which
  flattened the sheet and painted over Excel''s own gridlines. Ordinary cells
  now carry no fill at all, exactly as the reference workbook does.
- **Floor rows stand out again.** Matching the reference removed their tint
  in 1.52, leaving floor sections hard to pick out in a long sheet. Floor
  titles and the totals row now sit on a faint grey band — enough to scan by,
  far lighter than the old heavy grey. Out-of-scope rooms keep their darker
  grey, so the two never read as the same thing.

## [1.53.1] — 2026-08-21

### Changed
- **Room names find a clear spot instead of sitting on the devices.** A label
  is now placed where the room is emptiest — furthest from the ikons inside it
  and from its own walls — rather than at the geometric centre, which is
  exactly where devices tend to cluster. Empty rooms still read centrally, and
  labels stay inside awkward shapes such as L-rooms.
- Labels are visually lighter, brighten on hover or when their room is
  highlighted, and fade further back while a device is armed for placement.

## [1.53.0] — 2026-08-21

### Added
- **Leader notes.** A note is now a target ring on the thing it describes,
  joined by a leader line to a label you can drag clear of the drawing — so
  one note can call out a single device, several items sharing one point, or a
  whole area. Both ends drag independently; leaders and wrapped label text
  print on the exported sheets.
- **Outdoor areas.** A room can be marked as an *outdoor area*: it surrounds
  other rooms instead of dividing them, draws beneath them with a dashed
  outline, and devices inside an inner room still belong to that room — only
  what falls outside them counts as the area''s. Skribble has an **Outdoor
  area** switch that lets the brush pass over existing rooms.
- **Wall thickness slider** (WALLS) for clearer boundaries, and **room fill
  strength** joins the always-visible toolbar group.

### Changed
- **Tapping a shared wall cycles through the rooms that meet along it** —
  tap once for one side, again for the other, with the room named each time.
- **"Linked walls" is now "Joined rooms move together"**, with a tooltip
  explaining that it keeps rooms attached when you drag a shared corner.

## [1.52.0] — 2026-08-21

### Changed
- **The Excel FD sheet now matches the ikonhouse quotation format:** header
  row 140pt deep with device names
  rotated 90°, bold, 10pt; the top row frozen; hairline borders on every cell;
  column widths 3.1 / 44 / 5.4; plain bold floor titles with a single rule
  beneath; a blank row between floors; and a **Total units** row of SUM
  formulas. Out-of-scope rooms keep their grey fill.
- **The device library is seeded in the workbook''s order** — 4 Button Keypad,
  8 Button Keypad, Touch Panel, Thermostat, HVAC Zones, lighting modules,
  curtain control, speakers and streaming, Wi-Fi, intercom and CCTV, then
  client-supplied items — with categories ordered to match. Rearranging the
  library still drives the FD column order, so the sequence stays yours.

## [1.51.0] — 2026-08-13

### Fixed
- **The room editor no longer jumps to the middle of the room.** Since labels
  moved to each room''s centre, every re-open — after a colour or scope change
  — re-anchored the panel there. It now stays where you put it while you keep
  working on the same room.
- **The custom out-of-scope colour is round again**, sized properly, and
  ringed with a colour wheel so it reads as a picker rather than a swatch.
  The device dialog''s custom colour matches.

### Changed
- **Skribbled rooms are now always square-walled.** Every wall comes out
  horizontal or vertical, which makes results predictable — an odd-shaped
  room is a couple of corner drags away afterwards. A genuinely triangular
  scribble still returns a shape rather than nothing.
- **Linked walls, greyscale, ikon size and opacity are back on the toolbar**
  as an always-visible group, since they are used constantly. Room fill
  strength, numbering size, auto-numbering and the out-of-scope colour stay in
  the Display panel. The group shrinks gracefully on narrow screens rather
  than disappearing.

## [1.50.0] — 2026-08-13

### Added
- **Notes.** Press <kbd>A</kbd> or tap **Notes**, then tap the plan to leave a
  comment — site conditions, client requests, anything worth remembering.
  Notes are numbered pins with their text beside them: drag to move, tap to
  edit, clear the text to delete. Fully undoable, they survive crop and
  rotate, save with the project, and print on the exported sheets.

### Fixed
- **Cropping is undoable — and now says so.** It always was, but nothing told
  you, so a bad crop felt permanent. Applying a crop now says that Undo brings
  the full plan back. (History is capped at 80 steps, since crop snapshots
  hold a whole plan image.)
- **Device names are no longer buried by their tools.** Names take the space
  they need and truncate cleanly; with a mouse the row tools stay hidden until
  you hover, and on touch they are compact and sit clear of the name.
- **The out-of-scope colour control** is properly round and has moved out of
  the tool row.

### Changed
- **Display settings are always a panel**, on every device, instead of
  sliders inline on desktop and a panel on tablets — one consistent layout
  and a much calmer toolbar at every width.
- **Skribble is straighter again** — wobble is absorbed more aggressively,
  and only a dominant edge near 45° keeps its angle.

## [1.49.0] — 2026-08-13

### Fixed
- **Adjusting one room of a joined pair.** Shared corners always moved both
  rooms, which made fine-tuning a boundary awkward. Hold **Ctrl/⌘** while
  dragging to move just the room you grabbed, or switch off **Linked walls**
  in Display to make that the default. A one-time note explains it the first
  time you take hold of a shared corner.
- **Floor tabs stay put.** They previously sat at the right of the tool row
  on wide screens and jumped to their own row on narrow ones. They now always
  occupy their own full-width row beneath the tools, in the same place at
  every size.

### Changed
- **A calmer toolbar.** Rotate left, rotate right and the room schedule order
  have moved into a **More** menu, leaving the row to the tools actually used
  while planning. Nothing was removed — and the keyboard shortcuts are
  unchanged.

## [1.48.0] — 2026-08-13

### Added
- **Show / hide devices and categories, like layers.** Every device row and
  every category header now has an eye: switch one off and those ikons leave
  the plan — and the exported sheets and their legend — so a plan can be
  presented one discipline at a time (lighting only, audio only, and so on).
  - Hiding is **presentation, not scope**: quantities in the BoQ, the Excel FD
    sheet and the room matrix are unaffected. Out-of-scope remains the way to
    exclude something from the numbers.
  - A category''s eye switches all of its devices together.
  - A standing reminder appears while anything is hidden, with **Show all** to
    restore everything in one click — so a hidden layer is never forgotten
    before an export.
  - Choosing a hidden device to place brings it back automatically.

## [1.47.0] — 2026-08-12

### Fixed
- **Floor tabs disappearing in a narrow window — at any screen size.** The
  toolbar was a fixed-height row that simply scrolled its contents out of
  sight, so on a smaller desktop window the floors were pushed off the end.
  The toolbar now **wraps**: when the floor tabs can no longer hold a sensible
  width they move to their own full-width row, separated by a rule, with
  larger tabs. This happens automatically at every width, so no manual
  resizing is needed.
- **Narrow desktop windows now get the grouped Display panel too** (below
  1400 px), instead of squeezing four sliders into the tool row.

## [1.46.0] — 2026-08-12

### Added
- **Select several rooms at once.** Shift/Ctrl-click room edges to build a
  selection (once one is picked, plain clicks keep adding). Selected rooms are
  outlined boldly and a bar appears with the actions that apply to all of them.
- **Mark rooms out of scope in bulk**, from that bar or with the <kbd>O</kbd>
  shortcut — which also works on a single highlighted room, and toggles back
  in scope. Each room''s own colour is remembered and restored.
- **Recolour several rooms at once** from the same bar. Recolouring a room
  that is currently out of scope stores the colour for when it returns, so the
  out-of-scope convention is never broken by accident.
- Tapping the plan or pressing <kbd>Esc</kbd> clears the selection.

## [1.45.0] — 2026-08-12

### Added
- **The out-of-scope colour is now yours to choose** — a swatch row (plus a
  full colour picker) beside the plan sliders, under **OUT**. Changing it
  restyles every out-of-scope room across all floors at once, leaves in-scope
  rooms alone, and keeps each room''s original colour remembered for when it
  comes back into scope. Saved with the project; red remains the default.

## [1.44.0] — 2026-08-12

### Changed
- **Skribble''s shortcut is now <kbd>K</kbd>**, and every tool key toggles —
  press it again to leave the tool. <kbd>C</kbd> now closes the crop frame as
  well as opening it.

### Added
- **Tap the plan to let a room go.** After resizing or highlighting a room, a
  plain tap anywhere on the plan clears the highlight and closes its editor —
  previously only a tap outside the plan did. Panning and dragging are
  unaffected, since only a tap that did not move counts.

## [1.43.0] — 2026-08-12

### Fixed
- **Floor tabs are properly visible on tablets and folds.** They were sharing
  one row with ten toolbar buttons and got squeezed to nothing. On compact
  screens they now sit on their own full-width row beneath the toolbar, with
  larger, higher-contrast tabs.

### Added
- **Keyboard shortcuts:** <kbd>R</kbd> rooms, <kbd>B</kbd> skribble,
  <kbd>C</kbd> crop, <kbd>G</kbd> greyscale, <kbd>N</kbd> numbering,
  <kbd>L</kbd> library, <kbd>?</kbd> the guide. They are ignored while typing.
- **A single, consistent way out of any tool on touch:** a floating **Done**
  button appears whenever Rooms or Skribble is active, naming the tool it will
  close. Esc and tapping the tool button again still work.

## [1.42.0] — 2026-08-12

### Fixed
- **Skribbling over an existing room selected it instead of painting.** The
  room layer sits above the plan and was intercepting the brush, so a stroke
  crossing a room grabbed and resized it. In Skribble mode the rooms no longer
  take pointer input at all — the brush always wins, and boundaries are still
  respected as before.
- **Floor names were hard to read on small screens** — higher contrast, larger
  type and roomier tabs on compact layouts.
- **Room names sat in a corner** — labels are now placed at each room''s area
  centroid, and stay inside awkward shapes such as L-rooms rather than
  drifting outside them.

### Changed
- **Skribble is boxier again.** Only a dominant edge at roughly 45° keeps its
  angle; slopes up to about 40° are squared up.

## [1.41.0] — 2026-08-11

### Fixed
- **The "How to use" guide appears on startup again**, and now keeps doing so
  until you tick **"Don't show this on startup"** in its footer — previously
  it silenced itself after being closed once, so it vanished for good.
- **Exports no longer freeze the window.** Each sheet was encoded with a
  blocking call, so a multi-floor A3 set locked the interface for the whole
  render with nothing on screen. Encoding is now asynchronous, the window
  stays responsive, and progress is reported page by page.

### Changed
- **The guide has proper margins** — more padding, roomier steps and wider
  spacing between sections.
- **Skribble is boxier still.** Only a dominant edge at roughly 40° or more
  keeps its angle; anything gentler is treated as an unsteady hand and
  squared up, so rooms come out like building blocks unless an angle was
  clearly intended.

## [1.40.0] — 2026-08-11

### Fixed
- **A selection box no longer appears while panning on touch.** Gating it
  behind a hold was not enough — a slow pan could out-wait the timer. Marquee
  select is now mouse-only. On touch, **hold an ikon** to start selecting and
  then tap others to add or remove; tap the plan when done.

### Changed
- **Skribble strongly prefers straight walls.** Each edge is now judged by
  length as well as angle: short edges are treated as hand-wobble and squared
  up readily, while a long edge is only straightened if it was close to
  square already. Small diagonal chamfers left at corners are absorbed into
  the walls either side.
  - Wobbly rectangles come out as clean four-corner boxes, L-shapes keep
    exactly their notch, and gentle drift (under about 20°) is treated as an
    unsteady hand rather than intent.
  - A room genuinely brushed at an angle — roughly 35° or steeper — keeps its
    diagonal.

## [1.39.0] — 2026-08-11

### Added
- **Skribbled rooms click into place against their neighbours.** Once an
  outline is traced, any edge that came out straight is compared with the
  walls facing it and snapped flush — so rooms sit together like blocks
  rather than leaving hairline gaps, and rarely need tidying afterwards.
  - Only edges that are already straight are aligned; an edge you clearly
    brushed at an angle keeps its angle.
  - Walls only align to walls that actually face them, so unrelated rooms
    elsewhere on the plan never pull a shape out of position.
  - Remaining corner-sized gaps close onto real corners, which also links the
    rooms so they stay joined when either is edited.

## [1.38.1] — 2026-08-11

### Fixed
- **A selection box appeared while panning the plan on touch.** Marquee
  select fired on any drag, competing with panning. On touch it now needs a
  brief hold on empty plan first (a short buzz confirms) before dragging
  boxes a selection; moving straight away simply pans. Mouse drag-to-select
  is unchanged.

## [1.38.0] — 2026-08-11

### Fixed
- **Panning the plan no longer draws rooms on touch.** The previous fix tried
  to tell a swipe from a deliberate drag by speed, which misfired on larger
  screens. On touch, dragging now simply pans — rooms are made by tapping
  corners or with Skribble, both of which are better suited to a finger.
  Mouse drag still draws a box.
- **Room corners are much easier to grab.** Each handle now has a generous
  invisible target (about 2.4× its visible size on touch) with the small dot
  drawn on top, so a near-miss no longer moves the whole room instead of
  resizing it.

### Changed
- **The toolbar is calmer on small screens.** The four display sliders and the
  greyscale / auto-number toggles now live behind a single **Display** button
  on compact screens, laid out as a labelled panel. On desktop they stay
  inline as before.

## [1.37.1] — 2026-08-11

### Fixed
- **Skribbled rooms could still overlap a neighbour.** Clipping the brush kept
  the painted area clean, but squaring-up afterwards could push a straightened
  edge back over a boundary. The finished outline is now genuinely subtracted
  from existing rooms before the room is created, so shapes butt against each
  other along shared walls instead of overlapping.
- **The version now reads in full (e.g. V1.37.1)** on the welcome screen, and
  is taken directly from `APP_VERSION` rather than being typed separately —
  so it can no longer fall out of step with a release.

## [1.37.0] — 2026-08-11

### Added
- **Skribble respects existing rooms.** The brush is clipped to the area not
  already claimed, so paint simply stops at a neighbouring room''s wall as you
  draw — you can sweep straight over a boundary and the new room ends exactly
  where the other begins, sharing the wall instead of fighting for it. Rooms
  no longer overlap by accident, and device counts stay unambiguous.
  - **Hold Alt** while starting a stroke to ignore boundaries and overlap
    deliberately (for a zone spanning several rooms).
  - Brushing entirely inside an existing room now says so, rather than
    failing silently.

## [1.36.1] — 2026-08-11

### Changed
- **Skribble hands back to normal editing once a room is made.** The brush
  cursor used to stay active afterwards, getting in the way of adjusting the
  new room. Creating a room now leaves Skribble automatically, with the room
  selected and its editor open — tap Skribble again for the next one. The
  cursor also stands down over the room editor, panels and toolbars.
- **Out-of-scope rooms are now red** rather than grey, so excluded areas are
  obvious at a glance on the plan. (The Excel FD sheet keeps its grey fill,
  matching the quotation workbook convention.)

## [1.36.0] — 2026-08-11

### Added
- **Pick the room colour before you skribble** — a swatch row in the brush
  bar. The stroke paints in that colour and the room is created with it, so
  you can colour-code as you go instead of editing afterwards.
- **Brush footprint on the cursor** — a ring under the pointer showing the
  exact area the brush will cover, tinted to the chosen colour and resizing
  live with the thickness slider.

### Fixed
- **The skribble trail was too faint to follow.** It was drawn at 42% with a
  multiply blend, which sank into the drawing underneath. It now paints at
  full strength in the chosen colour, so it is obvious where you have been.

## [1.35.0] — 2026-08-11

### Added
- **“Apply to all plans” in the crop bar** — frames every floor plan exactly
  like the one in front of you, so pages match when flipping through the
  exported set. The framing is applied proportionally, so plans that came from
  the same source (a multi-page PDF, for instance) end up pixel-identical.
  Warns first if ikons would fall outside, and it is a single undo step.
- **The crop ratio is now sticky** — the aspect you pick carries to the next
  plan and is saved with the project, instead of resetting each time.

### Fixed
- **Cropping re-encoded plans as JPEG**, quietly undoing the lossless pipeline
  and softening line art with every crop. Crops are lossless PNG again, with
  high-quality resampling.

## [1.34.0] — 2026-08-11

### Changed
- **Out-of-scope rooms turn grey automatically.** Marking a room out of scope
  switches it to a neutral grey; unmarking restores the colour it had before,
  so scope reads at a glance without hunting through the palette.
- **Room fills are a little stronger** by default — clearly present without
  drowning the drawing underneath.

### Added
- **Room fill strength slider** (toolbar, "ROOM"): from barely-there to
  emphatic, covering fill, outline and out-of-scope hatching together.
- **Auto-number size slider** (toolbar, "No."): the sequence badges were too
  small to read on dense plans — they now scale from 70% to 220%, on screen
  and on exported sheets. Both settings save with the project.

## [1.33.0] — 2026-08-11

### Added
- **Skribble — brush an area to create a room.** A new toolbar mode: brush
  over part of the plan with your finger, stylus or mouse and release; the
  painted area becomes a room. Scribble back and forth to cover an odd shape
  in one continuous motion.
  - **Brush thickness** is adjustable from the bar at the bottom, with a live
    size dot — fine for a cupboard, broad for a lounge. Saved with the project.
  - The stroke is traced, simplified and **squared up**, so wobbly hand
    movements still produce clean, presentable outlines, and the result snaps
    to neighbouring rooms exactly like a drawn one.
  - The result is an ordinary polygon — the same corner, wall and linking
    tools apply afterwards.
  - Stray dabs are ignored (the largest painted area wins) and strokes too
    small to be a room are rejected rather than making slivers.
  - Deliberately shape-only: no wall detection, so it behaves identically on
    CAD linework, scans and photographed plans.

## [1.32.0] — 2026-08-11

### Changed
- **Placement toggles live in the toolbar.** Auto-numbering joins greyscale as
  a toolbar button that lights up when active, so both can be flipped mid-work
  without opening a menu. The View menu toggles remain and stay in sync.
- **Reordering now feels like picking something up.** Dragging a category, a
  device, or a room in the schedule lifts it toward you — a slight scale, a
  soft tilt and a real shadow — while the rest of the list recedes. Previously
  the dragged item just dimmed, which read as "disabled" rather than "held".
  Respects reduced-motion preferences.
- **The room schedule panel has room to breathe** — wider, more padding, and
  noticeably more space between rows, floor groups and the footer.

## [1.31.1] — 2026-08-11

### Changed
- **Greyscale is now a toolbar button**, next to the ikon sliders, instead of
  being buried in the View menu — it lights up when active, so it can be
  flipped while placing devices without leaving what you are doing. The View
  menu toggle remains and the two stay in sync.

## [1.31.0] — 2026-08-11

### Added
- **Greyscale floor plan** (View menu → Placement): drops the architect''s
  drawing to greyscale while ikons, rooms and labels keep their colour, so
  devices read clearly against a busy plan. Applies on screen and on the
  exported sheets, is saved with the project, and switches back at any time.

## [1.30.0] — 2026-08-11

### Added
- **Room schedule order panel** (toolbar button beside Rooms): every room on
  every floor in one list, showing its position, colour, ikon count and
  out-of-scope tag. **Drag a room** to move it, or use ▲▼ — the order is
  exactly what the Excel FD sheet and the BoQ breakdown use. Rooms stay within
  their own floor.
- **Sort by position** orders every floor the way a reader scans the plan —
  top to bottom, left to right within each band — as a one-click starting
  point before fine-tuning.
- The room editor''s order section now links straight through with
  **“Reorder all…”**.

## [1.29.0] — 2026-08-11

### Added
- **Order rooms in the schedule while you design.** The room editor gains an
  "Order in schedule" section — ▲▼ move a room earlier or later, with its
  position shown (e.g. "3 of 11"). That order is exactly the row order used in
  the Excel FD sheet and the BoQ room breakdown, so the client-facing schedule
  can follow the building rather than the order rooms happened to be drawn.

## [1.28.0] — 2026-07-26

### Fixed
- **The device dialog vanished when picking a custom ikon colour.** Choosing a
  colour rebuilt the whole swatch row, which replaced the `<input type="color">`
  element the OS picker was attached to — closing the picker (and appearing to
  close the dialog) mid-pick. The row now updates its selection in place.

### Added
- **Ikon opacity slider** next to the size slider: drop it to see walls and
  dimensions on the plan through the ikons. It applies on screen and on the
  exported sheets, and is saved with the project.

### Changed
- **Ikons can go much smaller.** The size slider starts at 20% (was 50%) and
  the hard 12px floor that quietly overrode it is now 5px — so ikons stay
  proportionate on dense or large-format plans.

## [1.27.1] — 2026-07-26

### Changed
- **Category headers are larger and better balanced** — more breathing room
  above each group, slightly bigger type with a little more contrast, and
  round 24px tool buttons (30px on touch) that no longer feel cramped. The
  tools now reserve their space instead of appearing on hover, so headers
  never shift as the pointer moves across them. Horizontal docks keep the
  compact spacing, where vertical space is scarce.

## [1.27.0] — 2026-07-26

### Added
- **Reorder devices within a category.** Each device row now has ▲▼ buttons
  (always visible on touch, on hover with a mouse), and dragging a device onto
  another drops it into that position — within its own category, or into
  another category if you drop it on a device there. Dropping on a category
  header still moves it to the end of that category, as before.
- The order is stored with the project and flows through to the exports, so
  the FD sheet''s column order follows the library exactly.

## [1.26.0] — 2026-07-25

### Added
- **"How to use" guide**, reachable from a **?** button in the toolbar (the
  gestures card was previously buried in the View menu). Three tabs:
  - **Quick start** — five steps from floor plan to client package, written as
    a walkthrough rather than a feature list.
  - **Gestures** — grouped by what you are doing, with keys shown as keycaps.
  - **Outputs** — what each export contains and when to reach for it.
- The guide **opens once automatically** the first time someone enters the
  workspace, and never again (dismissal is remembered locally). **Esc** or
  **Got it** closes it.

## [1.25.0] — 2026-07-25

### Added
- **Create a room from a node on desktop too.** Press and hold a corner with
  the mouse (~0.5s — slightly longer than touch, since pausing mid-click is
  common) then drag to size the new room; it shares the anchor corner, so the
  two rooms stay linked. **Ctrl/⌘-drag** from a corner does the same instantly,
  with no waiting.
- The node **pulses while the hold arms**, so it is clear which gesture is
  about to fire, and **Esc** cancels a spawn in progress.

## [1.24.1] — 2026-07-25

### Fixed
- **Pinch-to-zoom on the floor plan.** The zoom maths were correct, but three
  competing gesture handlers were fighting the pinch:
  - the one-finger pan only *paused* while a pinch was active, so when the
    second finger lifted it resumed from its original origin and snapped the
    plan back — undoing the zoom''s framing. A pinch now ends the pan outright.
  - in Rooms mode the plan is the SVG room layer, which sits outside
    `#planClick`, so the stage pan handler ran *alongside* the room layer''s own
    pan — two systems writing the same pan offsets from different origins.
  - marquee select ignored pinches entirely, drawing a selection box (and
    selecting ikons) during a two-finger gesture.
- Pinches with three or more fingers on screen are now recognised too.

## [1.24.0] — 2026-07-25

### Fixed
- **Panning the plan no longer draws rooms** (touch): a quick one-finger
  swipe on the plan now pans it — matching every photo/map app — while a
  deliberate, slower drag still draws a box. Tap-corners, pinch-zoom and
  hold-for-linked-room are unchanged.

### Added
- **Tap outside the plan to cancel** (Rooms mode): tapping the area around
  the floor plan clears the selected box and any in-progress outline —
  outside Rooms mode it clears a highlight.

### Changed
- **Room nodes slimmed further** (~20%) with thinner rings — visible and
  catchable without cluttering the outline.

## [1.23.0] — 2026-07-25

### Fixed
- **Press & hold on a corner deleted it and spawned a room (Android).** The
  browser''s long-press fires a context-menu event, which was mapped to
  right-click-delete — so holding a node triggered the delete *and* the
  new-room gesture together. Corner interactions are now one coherent
  handler: hold still → new linked room; move → drag the corner; and on
  touch the context menu is suppressed without deleting. Desktop right-click
  still deletes a node; double-tap deletes on touch.
- **Crop edge bars did not resize.** They were unwired (and fell through to
  the frame-move gesture). All four edge bars now resize their side —
  honouring the selected ratio about the frame''s centre — and the **Reset**
  button restores the recommended framing.
- **Room ✕ unreliable on touch** — the target was too small; it''s now
  26px on touch, clears any stale highlight, and confirms with an
  undo-able toast.

### Added
- **Gestures & tips** reference (View menu → Help) — every canvas, ikon,
  room, and library gesture on one card.
- **Done chip** in the Rooms-mode hint bar — an obvious exit on touch,
  alongside Esc.

## [1.22.0] — 2026-07-21

### Added
- **Tap outside to deselect a room.** After creating or selecting a room,
  tapping empty plan in Rooms mode clears the selection so you can start the
  next room immediately.
- **Grow a new room from a corner.** Press & hold an existing room''s node
  (~0.4s, a short buzz confirms), then drag: a new room is anchored at that
  exact corner, so the two rooms share the node and stay linked.
- **Category reorder arrows** (▲ ▼) on every category header — always
  visible on touch — alongside the existing press-and-hold drag.

### Changed
- **Crop is easier to handle**, especially on touch: draggable **edge
  handles** on all four sides (not just corners), a rule-of-thirds grid
  inside the frame, and a **Reset** button that restores the frame to the
  whole plan. Ratio presets and pinch/drag behaviour are unchanged.

## [1.21.1] — 2026-07-18

### Fixed
- **Room creation silently cancelled near an adjacent room.** Snapping could
  pull the rectangle''s end corner back onto its own start edge, collapsing
  the box below the minimum size so nothing was created. A snap that would
  collapse the rectangle is now ignored, and a genuinely too-small drag says
  so instead of failing quietly.
- **Pasted (or multi-selected) ikons could not be dragged.** The group drag
  re-rendered all markers on every movement, detaching the element holding
  the pointer capture and ending the drag instantly. Group moves now update
  marker positions in place, with a single re-render on release.
- **Rooms that were merely close resized together.** The node-link tolerance
  was ~0.6% of the plan — wide enough to bind neighbouring-but-separate
  corners. Linking now requires true coincidence (nodes snapped exactly
  together), so only genuinely shared corners move as one.

## [1.21.0] — 2026-07-18

### Added
- **Copy & paste ikons.** Select one or more ikons and Ctrl/Cmd+C, then
  Ctrl/Cmd+V to drop copies (offset slightly, auto-selected) — pairs with
  marquee multi-select for quickly replicating a device cluster.
- **Auto-numbering.** Each placed ikon gets a per-device sequence shown as a
  small badge on the plan and printed as a code on exported sheets
  (e.g. SP-01, 4B-02, TH-03). **Toggle it off** in the View menu →
  Placement; turning it back on numbers everything consistently.
- **Split a wall.** Double-click a wall segment to insert a node exactly at
  the click point — branch a new corner or start a connected room from a
  precise spot. (Midpoint handles still add a centre node.)

## [1.20.0] — 2026-07-18

### Added
- **Linked rooms via shared nodes.** When two rooms share a corner (drop or
  snap one room''s corner onto another''s), that node is marked with a bronze
  ring, and dragging it moves *both* rooms'' corners together — adjacent
  rooms stay connected as you adjust the layout. Right-click / double-click a
  node to remove it, which unlinks the rooms there. Linked edits are undoable.

### Changed
- **Inverted the wall-drag ortho default:** dragging a wall now keeps it
  straight (moving only across itself) by default; **hold Shift** to move it
  freely in any direction. (Previously free by default, Shift for straight.)

## [1.19.0] — 2026-07-18

### Changed
- **Sheet legend redesigned as a categorized table.** Instead of a single
  wrapping row of pills, the legend groups devices by category (in library
  order) into balanced columns — each with a category header, device icon,
  name and quantity. Cleaner and easier to scan; the floor-plan area keeps
  its size (legend height is measured and reserved, plan never shrinks).
- **Excel FD sheet — device columns now follow the library category order**
  (4 Button Keypad first, matching the tool), with **device names rotated
  vertically** in the header, a **darker-25% fill** on the header, floor-
  title and totals rows, and a **white fill with thin borders** on every
  data cell for a clean gridded look.

### Removed
- The separate "device schedule by room" export page (introduced in 1.18.0)
  — it was cramped and redundant; the categorized legend and the Excel FD
  sheet cover it better.

## [1.18.1] — 2026-07-18

### Fixed
- **Room schedule sheet was missing from exports in 1.18.0.** A refactor
  collision removed the schedule renderer and its export wiring (and left a
  duplicated header/footer helper), so the PDF/PNG/package never actually
  included the per-room table. The renderer is restored and wired into all
  export paths; duplicate helpers removed.

### Changed
- **Out-of-scope is shown by cell fill only.** On the schedule sheet the
  out-of-scope row now gets a darker-25% fill (with a small "Out of scope"
  key) instead of a "(OUT OF SCOPE)" text tag, and other rows are plain
  white (no zebra striping). The Excel FD sheet matches: out-of-scope room
  rows are filled darker-25%, and the text tag is gone from the room name.

## [1.52.1] — 2026-08-21

### Removed
- **The reference quotation workbook is no longer included in the project.**
  It held commercially sensitive client and pricing information and should
  never have been copied in. It has been deleted, all identifying references
  scrubbed from the documentation, and a `.gitignore` now blocks spreadsheet
  files from being committed. Keep such files outside the repository and
  consult them locally.

## [1.63.1] — 2026-08-22

### Fixed
- **Device pins and chips disappeared in Futuristic mode.** The outline
  treatment hollowed them out while their symbols stayed white, so on a white
  plan there was nothing to see. A pin sits on someone else''s drawing, so it
  now always carries a solid fill and a contrasting ring in every mode — the
  modes differ by **shape, ring and glow**, never by hollowing the pin:
  - **Modern** — round, white ring, soft drop shadow, slightly bolder symbol.
  - **Retro** — square, dark hairline, hard offset shadow, blunt-capped symbol.
  - **Futuristic** — round with a **neon halo** in the device''s own colour,
    and a brighter one when selected.
- **Modes are listed by name and description only.** The colour chips beside
  them said nothing useful about a mode — colour themes keep theirs, since
  there the colour *is* the choice.

## [1.63.0] — 2026-08-22

### Added
- **Each mode now brings its own colours**, because a design ethos is not
  only shapes:
  - **Modern** — Apple''s system blue on near-white, almost no chroma
    anywhere else; true black at night.
  - **Retro** — a warm CRT: tan paper and burnt orange by day, **amber on
    black with a phosphor glow** at night.
  - **Futuristic** — monochrome with a single red, used sparingly and never
    decoratively.
  A mode paints only while the colour theme is set to **Match mode**;
  choosing any theme takes over, exactly as before. **Bronze** is now an
  explicit choice rather than the absence of one.
- **Icons take each mode''s hand** — 1.15px hairlines for Futuristic, 1.7px
  rounded for Modern, 2.4px square-capped for Retro — and device chips follow:
  soft shadowed squares, hard-shadowed blocks, or hollow rings.

### Fixed
- **The welcome mode row is centred** with the rest of the page.
- **The Futuristic title fits on one line** — the dot-matrix face needed a
  smaller size and tighter tracking than the others.
- **The colour chips beside the mode name are gone** from the toolbar, in
  favour of a plain glyph.

## [1.62.0] — 2026-08-22

### Changed
- **The welcome screen''s mode picker is now a quiet line of words**, aligned
  with everything else on the page, rather than a row of chips.
- **A plainly labelled Mode control sits in the toolbar**, showing which mode
  you are in and opening a menu to change it — no longer buried in Appearance.
- **The modes are far further apart.** Each now sets its own density, type
  scale, icon weight, pin shape, room-outline style and panel construction:
  - **Modern** — roomier throughout, a transparent toolbar of floating
    buttons, round pins with soft shadows, smooth room outlines, pill labels
    and toasts, rounded icon strokes.
  - **Retro** — compact and dense, two-pixel borders, panels topped by a
    title strip with ▪ ▪ ▪ in the corner, square pins with hard shadows,
    dashed room outlines, dotted row separators, square icon caps, and a
    scanline over the whole plan.
  - **Futuristic** — airy and stripped back, dot-matrix labels and figures,
    hollow ring pins, room outlines drawn as fine dots, hairline dotted
    separators, thin icon strokes, and a dot grid behind the plan.

## [1.61.0] — 2026-08-22

### Added
- **Mode is chosen on the welcome screen**, before you even open a project —
  the same four options, and the screen itself changes as you pick.
- **Each mode now moves differently**, which is most of why it feels like a
  different app:
  - **Modern** — long, settling easing; panels rise and scale in; buttons give
    slightly under a press.
  - **Retro** — no easing at all. Everything is instant and mechanical,
    buttons shift a pixel down-right as if depressed, toasts blink on, and a
    terminal caret blinks beside the wordmark.
  - **Futuristic** — fast and precise, with a faint blur as panels arrive,
    a glow on lit controls, and hairlines that sweep into place.
- Motion honours **reduced-motion** settings; all three fall still when asked.

## [1.60.0] — 2026-08-22

### Added
- **Three modes**, in Appearance → Mode, each changing shape, type, spacing
  and depth rather than just colour:
  - **Modern** — Apple''s softness and Google''s clarity with Japanese
    restraint: pill geometry, generous air, light weights, quiet depth.
  - **Retro** — the rack gear and terminals this trade grew up on: square
    corners, bevelled edges, engraved monospace labels, hard shadows and a
    faint scanline in the panels.
  - **Futuristic** — Nothing''s vocabulary: dot-matrix labels, hairline
    structure, translucency, circles where other interfaces use rectangles,
    and a dot grid behind the plan.
  Any mode combines with any colour theme, and **Original** restores the app
  exactly as it ships.

### Changed
- **Projects now save as `.ikon`** — shorter, and easier to say. Existing
  **`.ikonplan` files still open**; opening one says that saving will create
  a `.ikon` file and leaves the original untouched, rather than writing back
  over it.

## [1.59.3] — 2026-08-22

### Fixed
- **The pointer disappeared on white plans.** Rooms and Notes were using the
  system crosshair, which some setups draw in white — invisible against a
  white drawing. The app now draws its own: dark lines with a white halo, so
  it reads on any plan, in any theme, whatever the system is set to. The
  skribble ring is pinned to the same dark outline for the same reason.

## [1.59.2] — 2026-08-22

### Fixed
- **Choosing a leader tip was impossible to see in Mono.** The selected
  button drew its symbol in white on a fill that is itself white in that
  theme. Anything filled with the accent colour now takes its symbol from the
  background instead of a hard-coded white, so it stays legible in every
  theme — the same trap affected several other lit controls.
- **The brush ring is visible on any drawing**, with a dark ring inside a
  light one rather than relying on the accent colour.
- **Note boxes follow the theme again** — the Mono-specific overrides added
  in 1.59.1 have been dropped.

### Changed
- **Note text size is set in real pixel values** — presets of 12, 16, 20, 26
  and 34, plus a slider and a typed value, all kept in step with each other.

## [1.59.1] — 2026-08-22

### Fixed
- **The leader arrow pointed the wrong way.** Its base was set behind the
  point rather than back along the line, so it aimed away from what it was
  marking. It now points at its target, on screen and on the sheet.
- **Things floating over the plan no longer vanish in the Mono theme.** The
  brush cursor has a dark ring inside a light one, leader tips carry a light
  outline, and note boxes sit on solid ground — none of it now depends on an
  accent colour that may be pure white or pure black.
- **Selecting a leader point no longer hides the ikon beneath it.** The
  highlight is a ring rather than a filled patch.

### Added
- **Note text size** — set it in pixels, or from **S / M / L / XL** presets so
  a set of drawings stays consistent. The default is larger than before,
  since notes were unreadably small on big plans. The size is in plan
  pixels, so a note keeps its proportions when printed no matter how far
  you are zoomed in.

## [1.59.0] — 2026-08-22

### Fixed
- **Leader lines now meet the text box at its centre**, so they stay properly
  attached however the box is dragged — they used to stop at its left edge.
- **Long notes are readable in full.** Labels were cut off after a few lines;
  they now grow to fit, keep their line breaks, and wrap long words.
- **The text cursor is visible** in the note editor.

### Added
- **Choose how a leader ends** — a dot, an arrow that points along the line,
  or a numbered circle — and set its **size**.
- **More than one leader per note.** Add as many as you need, drag each point
  to whatever it should aim at, and the note reads once while pointing at
  several things. Existing notes carry over untouched.
- All of it prints on the exported sheets, tips included.

## [1.58.3] — 2026-08-22

### Changed
- **The radio starts far sooner.** The YouTube player library was only
  fetched at the moment you pressed play, so the first note waited on a
  download. It is now fetched quietly while the app is idle, and connections
  to YouTube are opened in advance, so playback begins almost at once.
  The pill shows **Connecting…** until sound actually starts, so the wait —
  whatever remains of it — is never silent and unexplained.
- The library is still only fetched when the radio is set to start with the
  app, and only ever once.

## [1.58.2] — 2026-08-22

### Fixed
- **The radio panel would not open from the welcome screen.** It opened and
  then closed itself: the same click carried on to the handler that dismisses
  the panel when you click away, which did not recognise the welcome button.
  Both radio buttons are now exempt, and the panel anchors beneath whichever
  one opened it rather than to the toolbar hidden behind the welcome screen.

## [1.58.1] — 2026-08-22

### Fixed
- **The ✕ on the radio panel was switching the whole radio off.** It now
  closes the panel only and the music keeps playing. Turning the radio off is
  its own action — **Turn the radio off** at the foot of the panel — and the
  note button returns to the toolbar so it can be brought back.
- **Clicking the pill reliably closes its panel again**; the controls on the
  pill no longer bubble up and reopen it.

### Added
- **Previous button** on the pill, alongside skip — both wrap around the list.

## [1.58.0] — 2026-08-22

### Added
- **Claude Music** joins the stations, and the first is now named
  **Tokyo Lofi** — also the default.
- **Skip button** on the now-playing pill: step to the next station, wrapping
  round at the end.
- **Mono theme** — black and white only, with no hue anywhere. Emphasis comes
  from contrast alone, which suits presenting and printing; lit controls
  invert rather than tint.

### Changed
- **The colour themes have far more life in them.** The muted set has been
  replaced by Indigo (electric blue), Green, Azure, Ember and Mono, each with
  a matching night version, and backgrounds now carry a hint of the accent
  instead of being uniformly grey.
- **Clicking the now-playing pill closes the panel again**, rather than only
  opening it.

## [1.57.1] — 2026-08-22

### Changed
- **The radio is now a "now playing" strip in the toolbar** — play/pause, four
  little bars that move only while something is actually playing, and the
  station name. Clicking the name drops a small panel beneath it for stations,
  volume, rename and the autostart switch; clicking away closes it. Closing
  turns the radio off entirely.
- **Fitting the plan needs a deliberate double middle-click.** Panning with
  the wheel button used to trip it: a middle click now only counts if the
  pointer did not move and the button was not held, so panning never fits the
  view by accident.

## [1.57.0] — 2026-08-22

### Changed
- **The radio is now a slim bar** — a small round player, play/pause, the
  station name, mute and close. Clicking the name expands it for the station
  list, volume and rename; everything else stays out of the way.

### Added
- **The radio starts with the app.** Browsers only allow sound once someone
  has interacted with the page, so it begins at your first click or key press
  rather than on load — near enough to opening that it feels automatic.
  **Start with the app** in the expanded panel turns it off, and the setting
  is remembered.

## [1.56.3] — 2026-08-22

### Fixed
- **The two channel stations would not play**, so they have been removed.
  Four verified streams remain, with **Lofi radio — focus** added and set as
  the default. A saved station that no longer exists now falls back to the
  default instead of failing silently.
- Pasting a **channel** link when adding a station still works — it plays
  whatever that channel is streaming at the time.

## [1.56.2] — 2026-08-21

### Added
- **Five stations**, including the working Lofi Girl beats stream and two
  channels — Lofi Tokyo and one other — added as **channel** stations rather
  than fixed video IDs, so they always play whatever that channel is
  streaming and cannot go stale when a stream restarts.
- **Rename any station** with the pencil in the radio header; names are
  remembered, so an unfamiliar channel can be labelled however you like.

## [1.56.1] — 2026-08-21

### Fixed
- **Two radio stations would not play.** Live-stream IDs change whenever a
  channel restarts its stream, and two of the four shipped were stale. Only
  verified streams now ship — **Synthwave** and **Sleep** — and rather than
  guess at others, **stations you add from a link are saved and stay in the
  list**, with a name of your choosing.

### Added
- **The radio is on the welcome screen too**, next to the appearance button.
  Opening it there starts the dark Synthwave stream straight away — that click
  is what browsers require before sound is allowed.

## [1.56.0] — 2026-08-21

### Changed
- **Dragging the plan now moves it**, as it already did on touch. Boxing a
  selection is **Shift-drag** — previously a plain drag started a selection
  box, which fought with simply moving around the plan.

### Added
- **Double-click the scroll wheel to fit the plan to the window.**
- **Focus radio** — a small background-music panel (toolbar, note icon) with
  Lofi Girl and Chillhop streams, play/pause, mute, volume, and the option to
  paste any YouTube link. Volume and station are remembered; nothing loads
  until the panel is opened, so it costs nothing at startup, and closing it
  stops the music.

## [1.55.1] — 2026-08-21

### Changed
- **Look sets removed; colour themes kept.** Changing corner shape, typeface
  and density altered the app''s character without making it better to use, so
  the choice is now simply a colour theme — Bronze, Indigo, Sage, Slate or
  Clay — each working in day or night.

### Fixed
- **The appearance button did nothing on the welcome screen.** The panel was
  opening behind it; it now sits above.
- **Dialogs have room to breathe** — more padding throughout, a proper rule
  under each title, and clearer spacing between fields and actions.

## [1.55.0] — 2026-08-21

### Added
- **Appearance panel**, from a palette button in the toolbar and on the
  welcome screen. Two independent choices:
  - **Look** — the app''s character: **Original** (rounded, warm),
    **Atelier** (drawing office), **Kinari** (soft and airy) or **Retro**
    (squared, rack-gear). Corner shape, typeface and density all change.
  - **Colour** — **Bronze**, **Indigo**, **Sage**, **Slate** or **Clay**.
  Any look combines with any colour, in day or night, and **Back to the
  original** clears everything in one click.
- **Appearance is remembered in the browser**, not in the project file, so
  the app looks the way you like it whichever project you open — while
  project files stay portable between people with different preferences.
- **Recent projects on the welcome screen** — name, client, floors, devices
  and when it was last edited. Each has a **✕** that removes it from the list
  only; the file itself is untouched.

### Changed
- The look and accent pickers added in 1.54 are superseded by the Appearance
  panel, which separates character from colour rather than bundling them.

## [1.54.0] — 2026-08-21

### Added
- **Look &amp; feel sets** (View menu): **Atelier** (limestone and indigo,
  drawing-office), **Kinari** (unbleached paper and sage) and **Slate** (cool
  neutral), alongside the **Original** warm bronze. A look is a palette only —
  nothing structural changes — and each works in both day and night.
- **Accent colour** can be set on its own, overriding whichever look is
  active, so the tool can carry a project or client colour.
- **"Back to the original look"** clears both in one click. Both settings save
  with the project.

### Fixed
- **Notes are properly multi-line.** They opened in a single-line browser
  prompt; there is now a real editor with a resizable text area, Ctrl/⌘+Enter
  to save, and a Delete button. Line breaks are kept on the plan and on the
  exported sheets.
- **Resizing a highlighted room no longer pans the plan.** Outside Rooms mode
  a near-miss on a handle landed on the plan and started a pan. Handles now
  have a wider catch there, and a press that lands close to one no longer
  pans at all.

## [1.53.2] — 2026-08-21

### Fixed
- **FD sheet colouring.** Every cell was being given a solid white fill, which
  flattened the sheet and painted over Excel''s own gridlines. Ordinary cells
  now carry no fill at all, exactly as the reference workbook does.
- **Floor rows stand out again.** Matching the reference removed their tint
  in 1.52, leaving floor sections hard to pick out in a long sheet. Floor
  titles and the totals row now sit on a faint grey band — enough to scan by,
  far lighter than the old heavy grey. Out-of-scope rooms keep their darker
  grey, so the two never read as the same thing.

## [1.53.1] — 2026-08-21

### Changed
- **Room names find a clear spot instead of sitting on the devices.** A label
  is now placed where the room is emptiest — furthest from the ikons inside it
  and from its own walls — rather than at the geometric centre, which is
  exactly where devices tend to cluster. Empty rooms still read centrally, and
  labels stay inside awkward shapes such as L-rooms.
- Labels are visually lighter, brighten on hover or when their room is
  highlighted, and fade further back while a device is armed for placement.

## [1.53.0] — 2026-08-21

### Added
- **Leader notes.** A note is now a target ring on the thing it describes,
  joined by a leader line to a label you can drag clear of the drawing — so
  one note can call out a single device, several items sharing one point, or a
  whole area. Both ends drag independently; leaders and wrapped label text
  print on the exported sheets.
- **Outdoor areas.** A room can be marked as an *outdoor area*: it surrounds
  other rooms instead of dividing them, draws beneath them with a dashed
  outline, and devices inside an inner room still belong to that room — only
  what falls outside them counts as the area''s. Skribble has an **Outdoor
  area** switch that lets the brush pass over existing rooms.
- **Wall thickness slider** (WALLS) for clearer boundaries, and **room fill
  strength** joins the always-visible toolbar group.

### Changed
- **Tapping a shared wall cycles through the rooms that meet along it** —
  tap once for one side, again for the other, with the room named each time.
- **"Linked walls" is now "Joined rooms move together"**, with a tooltip
  explaining that it keeps rooms attached when you drag a shared corner.

## [1.52.0] — 2026-08-21

### Changed
- **The Excel FD sheet now matches the ikonhouse quotation format:** header
  row 140pt deep with device names
  rotated 90°, bold, 10pt; the top row frozen; hairline borders on every cell;
  column widths 3.1 / 44 / 5.4; plain bold floor titles with a single rule
  beneath; a blank row between floors; and a **Total units** row of SUM
  formulas. Out-of-scope rooms keep their grey fill.
- **The device library is seeded in the workbook''s order** — 4 Button Keypad,
  8 Button Keypad, Touch Panel, Thermostat, HVAC Zones, lighting modules,
  curtain control, speakers and streaming, Wi-Fi, intercom and CCTV, then
  client-supplied items — with categories ordered to match. Rearranging the
  library still drives the FD column order, so the sequence stays yours.

## [1.51.0] — 2026-08-13

### Fixed
- **The room editor no longer jumps to the middle of the room.** Since labels
  moved to each room''s centre, every re-open — after a colour or scope change
  — re-anchored the panel there. It now stays where you put it while you keep
  working on the same room.
- **The custom out-of-scope colour is round again**, sized properly, and
  ringed with a colour wheel so it reads as a picker rather than a swatch.
  The device dialog''s custom colour matches.

### Changed
- **Skribbled rooms are now always square-walled.** Every wall comes out
  horizontal or vertical, which makes results predictable — an odd-shaped
  room is a couple of corner drags away afterwards. A genuinely triangular
  scribble still returns a shape rather than nothing.
- **Linked walls, greyscale, ikon size and opacity are back on the toolbar**
  as an always-visible group, since they are used constantly. Room fill
  strength, numbering size, auto-numbering and the out-of-scope colour stay in
  the Display panel. The group shrinks gracefully on narrow screens rather
  than disappearing.

## [1.50.0] — 2026-08-13

### Added
- **Notes.** Press <kbd>A</kbd> or tap **Notes**, then tap the plan to leave a
  comment — site conditions, client requests, anything worth remembering.
  Notes are numbered pins with their text beside them: drag to move, tap to
  edit, clear the text to delete. Fully undoable, they survive crop and
  rotate, save with the project, and print on the exported sheets.

### Fixed
- **Cropping is undoable — and now says so.** It always was, but nothing told
  you, so a bad crop felt permanent. Applying a crop now says that Undo brings
  the full plan back. (History is capped at 80 steps, since crop snapshots
  hold a whole plan image.)
- **Device names are no longer buried by their tools.** Names take the space
  they need and truncate cleanly; with a mouse the row tools stay hidden until
  you hover, and on touch they are compact and sit clear of the name.
- **The out-of-scope colour control** is properly round and has moved out of
  the tool row.

### Changed
- **Display settings are always a panel**, on every device, instead of
  sliders inline on desktop and a panel on tablets — one consistent layout
  and a much calmer toolbar at every width.
- **Skribble is straighter again** — wobble is absorbed more aggressively,
  and only a dominant edge near 45° keeps its angle.

## [1.49.0] — 2026-08-13

### Fixed
- **Adjusting one room of a joined pair.** Shared corners always moved both
  rooms, which made fine-tuning a boundary awkward. Hold **Ctrl/⌘** while
  dragging to move just the room you grabbed, or switch off **Linked walls**
  in Display to make that the default. A one-time note explains it the first
  time you take hold of a shared corner.
- **Floor tabs stay put.** They previously sat at the right of the tool row
  on wide screens and jumped to their own row on narrow ones. They now always
  occupy their own full-width row beneath the tools, in the same place at
  every size.

### Changed
- **A calmer toolbar.** Rotate left, rotate right and the room schedule order
  have moved into a **More** menu, leaving the row to the tools actually used
  while planning. Nothing was removed — and the keyboard shortcuts are
  unchanged.

## [1.48.0] — 2026-08-13

### Added
- **Show / hide devices and categories, like layers.** Every device row and
  every category header now has an eye: switch one off and those ikons leave
  the plan — and the exported sheets and their legend — so a plan can be
  presented one discipline at a time (lighting only, audio only, and so on).
  - Hiding is **presentation, not scope**: quantities in the BoQ, the Excel FD
    sheet and the room matrix are unaffected. Out-of-scope remains the way to
    exclude something from the numbers.
  - A category''s eye switches all of its devices together.
  - A standing reminder appears while anything is hidden, with **Show all** to
    restore everything in one click — so a hidden layer is never forgotten
    before an export.
  - Choosing a hidden device to place brings it back automatically.

## [1.47.0] — 2026-08-12

### Fixed
- **Floor tabs disappearing in a narrow window — at any screen size.** The
  toolbar was a fixed-height row that simply scrolled its contents out of
  sight, so on a smaller desktop window the floors were pushed off the end.
  The toolbar now **wraps**: when the floor tabs can no longer hold a sensible
  width they move to their own full-width row, separated by a rule, with
  larger tabs. This happens automatically at every width, so no manual
  resizing is needed.
- **Narrow desktop windows now get the grouped Display panel too** (below
  1400 px), instead of squeezing four sliders into the tool row.

## [1.46.0] — 2026-08-12

### Added
- **Select several rooms at once.** Shift/Ctrl-click room edges to build a
  selection (once one is picked, plain clicks keep adding). Selected rooms are
  outlined boldly and a bar appears with the actions that apply to all of them.
- **Mark rooms out of scope in bulk**, from that bar or with the <kbd>O</kbd>
  shortcut — which also works on a single highlighted room, and toggles back
  in scope. Each room''s own colour is remembered and restored.
- **Recolour several rooms at once** from the same bar. Recolouring a room
  that is currently out of scope stores the colour for when it returns, so the
  out-of-scope convention is never broken by accident.
- Tapping the plan or pressing <kbd>Esc</kbd> clears the selection.

## [1.45.0] — 2026-08-12

### Added
- **The out-of-scope colour is now yours to choose** — a swatch row (plus a
  full colour picker) beside the plan sliders, under **OUT**. Changing it
  restyles every out-of-scope room across all floors at once, leaves in-scope
  rooms alone, and keeps each room''s original colour remembered for when it
  comes back into scope. Saved with the project; red remains the default.

## [1.44.0] — 2026-08-12

### Changed
- **Skribble''s shortcut is now <kbd>K</kbd>**, and every tool key toggles —
  press it again to leave the tool. <kbd>C</kbd> now closes the crop frame as
  well as opening it.

### Added
- **Tap the plan to let a room go.** After resizing or highlighting a room, a
  plain tap anywhere on the plan clears the highlight and closes its editor —
  previously only a tap outside the plan did. Panning and dragging are
  unaffected, since only a tap that did not move counts.

## [1.43.0] — 2026-08-12

### Fixed
- **Floor tabs are properly visible on tablets and folds.** They were sharing
  one row with ten toolbar buttons and got squeezed to nothing. On compact
  screens they now sit on their own full-width row beneath the toolbar, with
  larger, higher-contrast tabs.

### Added
- **Keyboard shortcuts:** <kbd>R</kbd> rooms, <kbd>B</kbd> skribble,
  <kbd>C</kbd> crop, <kbd>G</kbd> greyscale, <kbd>N</kbd> numbering,
  <kbd>L</kbd> library, <kbd>?</kbd> the guide. They are ignored while typing.
- **A single, consistent way out of any tool on touch:** a floating **Done**
  button appears whenever Rooms or Skribble is active, naming the tool it will
  close. Esc and tapping the tool button again still work.

## [1.42.0] — 2026-08-12

### Fixed
- **Skribbling over an existing room selected it instead of painting.** The
  room layer sits above the plan and was intercepting the brush, so a stroke
  crossing a room grabbed and resized it. In Skribble mode the rooms no longer
  take pointer input at all — the brush always wins, and boundaries are still
  respected as before.
- **Floor names were hard to read on small screens** — higher contrast, larger
  type and roomier tabs on compact layouts.
- **Room names sat in a corner** — labels are now placed at each room''s area
  centroid, and stay inside awkward shapes such as L-rooms rather than
  drifting outside them.

### Changed
- **Skribble is boxier again.** Only a dominant edge at roughly 45° keeps its
  angle; slopes up to about 40° are squared up.

## [1.41.0] — 2026-08-11

### Fixed
- **The How-to-use guide stopped appearing at startup.** It was marked as seen
  permanently after the first dismissal; it now shows once **per release**, so
  each update surfaces it again. The **?** button opens it any time.

### Changed
- **Skribble prefers straight walls more strongly again.** Only a decisively
  diagonal wall — roughly 32° to 58° off square — keeps its angle; everything
  gentler, and everything close to vertical, is squared up. Rooms come out as
  clean blocks unless an angle was clearly intended.
- **The guide has room to breathe** — more padding throughout, wider steps
  with clearer numbering, and noticeably more space between sections.

## [1.52.1] — 2026-08-21

### Removed
- **The reference quotation workbook is no longer included in the project.**
  It held commercially sensitive client and pricing information and should
  never have been copied in. It has been deleted, all identifying references
  scrubbed from the documentation, and a `.gitignore` now blocks spreadsheet
  files from being committed. Keep such files outside the repository and
  consult them locally.

## [1.63.1] — 2026-08-22

### Fixed
- **Device pins and chips disappeared in Futuristic mode.** The outline
  treatment hollowed them out while their symbols stayed white, so on a white
  plan there was nothing to see. A pin sits on someone else''s drawing, so it
  now always carries a solid fill and a contrasting ring in every mode — the
  modes differ by **shape, ring and glow**, never by hollowing the pin:
  - **Modern** — round, white ring, soft drop shadow, slightly bolder symbol.
  - **Retro** — square, dark hairline, hard offset shadow, blunt-capped symbol.
  - **Futuristic** — round with a **neon halo** in the device''s own colour,
    and a brighter one when selected.
- **Modes are listed by name and description only.** The colour chips beside
  them said nothing useful about a mode — colour themes keep theirs, since
  there the colour *is* the choice.

## [1.63.0] — 2026-08-22

### Added
- **Each mode now brings its own colours**, because a design ethos is not
  only shapes:
  - **Modern** — Apple''s system blue on near-white, almost no chroma
    anywhere else; true black at night.
  - **Retro** — a warm CRT: tan paper and burnt orange by day, **amber on
    black with a phosphor glow** at night.
  - **Futuristic** — monochrome with a single red, used sparingly and never
    decoratively.
  A mode paints only while the colour theme is set to **Match mode**;
  choosing any theme takes over, exactly as before. **Bronze** is now an
  explicit choice rather than the absence of one.
- **Icons take each mode''s hand** — 1.15px hairlines for Futuristic, 1.7px
  rounded for Modern, 2.4px square-capped for Retro — and device chips follow:
  soft shadowed squares, hard-shadowed blocks, or hollow rings.

### Fixed
- **The welcome mode row is centred** with the rest of the page.
- **The Futuristic title fits on one line** — the dot-matrix face needed a
  smaller size and tighter tracking than the others.
- **The colour chips beside the mode name are gone** from the toolbar, in
  favour of a plain glyph.

## [1.62.0] — 2026-08-22

### Changed
- **The welcome screen''s mode picker is now a quiet line of words**, aligned
  with everything else on the page, rather than a row of chips.
- **A plainly labelled Mode control sits in the toolbar**, showing which mode
  you are in and opening a menu to change it — no longer buried in Appearance.
- **The modes are far further apart.** Each now sets its own density, type
  scale, icon weight, pin shape, room-outline style and panel construction:
  - **Modern** — roomier throughout, a transparent toolbar of floating
    buttons, round pins with soft shadows, smooth room outlines, pill labels
    and toasts, rounded icon strokes.
  - **Retro** — compact and dense, two-pixel borders, panels topped by a
    title strip with ▪ ▪ ▪ in the corner, square pins with hard shadows,
    dashed room outlines, dotted row separators, square icon caps, and a
    scanline over the whole plan.
  - **Futuristic** — airy and stripped back, dot-matrix labels and figures,
    hollow ring pins, room outlines drawn as fine dots, hairline dotted
    separators, thin icon strokes, and a dot grid behind the plan.

## [1.61.0] — 2026-08-22

### Added
- **Mode is chosen on the welcome screen**, before you even open a project —
  the same four options, and the screen itself changes as you pick.
- **Each mode now moves differently**, which is most of why it feels like a
  different app:
  - **Modern** — long, settling easing; panels rise and scale in; buttons give
    slightly under a press.
  - **Retro** — no easing at all. Everything is instant and mechanical,
    buttons shift a pixel down-right as if depressed, toasts blink on, and a
    terminal caret blinks beside the wordmark.
  - **Futuristic** — fast and precise, with a faint blur as panels arrive,
    a glow on lit controls, and hairlines that sweep into place.
- Motion honours **reduced-motion** settings; all three fall still when asked.

## [1.60.0] — 2026-08-22

### Added
- **Three modes**, in Appearance → Mode, each changing shape, type, spacing
  and depth rather than just colour:
  - **Modern** — Apple''s softness and Google''s clarity with Japanese
    restraint: pill geometry, generous air, light weights, quiet depth.
  - **Retro** — the rack gear and terminals this trade grew up on: square
    corners, bevelled edges, engraved monospace labels, hard shadows and a
    faint scanline in the panels.
  - **Futuristic** — Nothing''s vocabulary: dot-matrix labels, hairline
    structure, translucency, circles where other interfaces use rectangles,
    and a dot grid behind the plan.
  Any mode combines with any colour theme, and **Original** restores the app
  exactly as it ships.

### Changed
- **Projects now save as `.ikon`** — shorter, and easier to say. Existing
  **`.ikonplan` files still open**; opening one says that saving will create
  a `.ikon` file and leaves the original untouched, rather than writing back
  over it.

## [1.59.3] — 2026-08-22

### Fixed
- **The pointer disappeared on white plans.** Rooms and Notes were using the
  system crosshair, which some setups draw in white — invisible against a
  white drawing. The app now draws its own: dark lines with a white halo, so
  it reads on any plan, in any theme, whatever the system is set to. The
  skribble ring is pinned to the same dark outline for the same reason.

## [1.59.2] — 2026-08-22

### Fixed
- **Choosing a leader tip was impossible to see in Mono.** The selected
  button drew its symbol in white on a fill that is itself white in that
  theme. Anything filled with the accent colour now takes its symbol from the
  background instead of a hard-coded white, so it stays legible in every
  theme — the same trap affected several other lit controls.
- **The brush ring is visible on any drawing**, with a dark ring inside a
  light one rather than relying on the accent colour.
- **Note boxes follow the theme again** — the Mono-specific overrides added
  in 1.59.1 have been dropped.

### Changed
- **Note text size is set in real pixel values** — presets of 12, 16, 20, 26
  and 34, plus a slider and a typed value, all kept in step with each other.

## [1.59.1] — 2026-08-22

### Fixed
- **The leader arrow pointed the wrong way.** Its base was set behind the
  point rather than back along the line, so it aimed away from what it was
  marking. It now points at its target, on screen and on the sheet.
- **Things floating over the plan no longer vanish in the Mono theme.** The
  brush cursor has a dark ring inside a light one, leader tips carry a light
  outline, and note boxes sit on solid ground — none of it now depends on an
  accent colour that may be pure white or pure black.
- **Selecting a leader point no longer hides the ikon beneath it.** The
  highlight is a ring rather than a filled patch.

### Added
- **Note text size** — set it in pixels, or from **S / M / L / XL** presets so
  a set of drawings stays consistent. The default is larger than before,
  since notes were unreadably small on big plans. The size is in plan
  pixels, so a note keeps its proportions when printed no matter how far
  you are zoomed in.

## [1.59.0] — 2026-08-22

### Fixed
- **Leader lines now meet the text box at its centre**, so they stay properly
  attached however the box is dragged — they used to stop at its left edge.
- **Long notes are readable in full.** Labels were cut off after a few lines;
  they now grow to fit, keep their line breaks, and wrap long words.
- **The text cursor is visible** in the note editor.

### Added
- **Choose how a leader ends** — a dot, an arrow that points along the line,
  or a numbered circle — and set its **size**.
- **More than one leader per note.** Add as many as you need, drag each point
  to whatever it should aim at, and the note reads once while pointing at
  several things. Existing notes carry over untouched.
- All of it prints on the exported sheets, tips included.

## [1.58.3] — 2026-08-22

### Changed
- **The radio starts far sooner.** The YouTube player library was only
  fetched at the moment you pressed play, so the first note waited on a
  download. It is now fetched quietly while the app is idle, and connections
  to YouTube are opened in advance, so playback begins almost at once.
  The pill shows **Connecting…** until sound actually starts, so the wait —
  whatever remains of it — is never silent and unexplained.
- The library is still only fetched when the radio is set to start with the
  app, and only ever once.

## [1.58.2] — 2026-08-22

### Fixed
- **The radio panel would not open from the welcome screen.** It opened and
  then closed itself: the same click carried on to the handler that dismisses
  the panel when you click away, which did not recognise the welcome button.
  Both radio buttons are now exempt, and the panel anchors beneath whichever
  one opened it rather than to the toolbar hidden behind the welcome screen.

## [1.58.1] — 2026-08-22

### Fixed
- **The ✕ on the radio panel was switching the whole radio off.** It now
  closes the panel only and the music keeps playing. Turning the radio off is
  its own action — **Turn the radio off** at the foot of the panel — and the
  note button returns to the toolbar so it can be brought back.
- **Clicking the pill reliably closes its panel again**; the controls on the
  pill no longer bubble up and reopen it.

### Added
- **Previous button** on the pill, alongside skip — both wrap around the list.

## [1.58.0] — 2026-08-22

### Added
- **Claude Music** joins the stations, and the first is now named
  **Tokyo Lofi** — also the default.
- **Skip button** on the now-playing pill: step to the next station, wrapping
  round at the end.
- **Mono theme** — black and white only, with no hue anywhere. Emphasis comes
  from contrast alone, which suits presenting and printing; lit controls
  invert rather than tint.

### Changed
- **The colour themes have far more life in them.** The muted set has been
  replaced by Indigo (electric blue), Green, Azure, Ember and Mono, each with
  a matching night version, and backgrounds now carry a hint of the accent
  instead of being uniformly grey.
- **Clicking the now-playing pill closes the panel again**, rather than only
  opening it.

## [1.57.1] — 2026-08-22

### Changed
- **The radio is now a "now playing" strip in the toolbar** — play/pause, four
  little bars that move only while something is actually playing, and the
  station name. Clicking the name drops a small panel beneath it for stations,
  volume, rename and the autostart switch; clicking away closes it. Closing
  turns the radio off entirely.
- **Fitting the plan needs a deliberate double middle-click.** Panning with
  the wheel button used to trip it: a middle click now only counts if the
  pointer did not move and the button was not held, so panning never fits the
  view by accident.

## [1.57.0] — 2026-08-22

### Changed
- **The radio is now a slim bar** — a small round player, play/pause, the
  station name, mute and close. Clicking the name expands it for the station
  list, volume and rename; everything else stays out of the way.

### Added
- **The radio starts with the app.** Browsers only allow sound once someone
  has interacted with the page, so it begins at your first click or key press
  rather than on load — near enough to opening that it feels automatic.
  **Start with the app** in the expanded panel turns it off, and the setting
  is remembered.

## [1.56.3] — 2026-08-22

### Fixed
- **The two channel stations would not play**, so they have been removed.
  Four verified streams remain, with **Lofi radio — focus** added and set as
  the default. A saved station that no longer exists now falls back to the
  default instead of failing silently.
- Pasting a **channel** link when adding a station still works — it plays
  whatever that channel is streaming at the time.

## [1.56.2] — 2026-08-21

### Added
- **Five stations**, including the working Lofi Girl beats stream and two
  channels — Lofi Tokyo and one other — added as **channel** stations rather
  than fixed video IDs, so they always play whatever that channel is
  streaming and cannot go stale when a stream restarts.
- **Rename any station** with the pencil in the radio header; names are
  remembered, so an unfamiliar channel can be labelled however you like.

## [1.56.1] — 2026-08-21

### Fixed
- **Two radio stations would not play.** Live-stream IDs change whenever a
  channel restarts its stream, and two of the four shipped were stale. Only
  verified streams now ship — **Synthwave** and **Sleep** — and rather than
  guess at others, **stations you add from a link are saved and stay in the
  list**, with a name of your choosing.

### Added
- **The radio is on the welcome screen too**, next to the appearance button.
  Opening it there starts the dark Synthwave stream straight away — that click
  is what browsers require before sound is allowed.

## [1.56.0] — 2026-08-21

### Changed
- **Dragging the plan now moves it**, as it already did on touch. Boxing a
  selection is **Shift-drag** — previously a plain drag started a selection
  box, which fought with simply moving around the plan.

### Added
- **Double-click the scroll wheel to fit the plan to the window.**
- **Focus radio** — a small background-music panel (toolbar, note icon) with
  Lofi Girl and Chillhop streams, play/pause, mute, volume, and the option to
  paste any YouTube link. Volume and station are remembered; nothing loads
  until the panel is opened, so it costs nothing at startup, and closing it
  stops the music.

## [1.55.1] — 2026-08-21

### Changed
- **Look sets removed; colour themes kept.** Changing corner shape, typeface
  and density altered the app''s character without making it better to use, so
  the choice is now simply a colour theme — Bronze, Indigo, Sage, Slate or
  Clay — each working in day or night.

### Fixed
- **The appearance button did nothing on the welcome screen.** The panel was
  opening behind it; it now sits above.
- **Dialogs have room to breathe** — more padding throughout, a proper rule
  under each title, and clearer spacing between fields and actions.

## [1.55.0] — 2026-08-21

### Added
- **Appearance panel**, from a palette button in the toolbar and on the
  welcome screen. Two independent choices:
  - **Look** — the app''s character: **Original** (rounded, warm),
    **Atelier** (drawing office), **Kinari** (soft and airy) or **Retro**
    (squared, rack-gear). Corner shape, typeface and density all change.
  - **Colour** — **Bronze**, **Indigo**, **Sage**, **Slate** or **Clay**.
  Any look combines with any colour, in day or night, and **Back to the
  original** clears everything in one click.
- **Appearance is remembered in the browser**, not in the project file, so
  the app looks the way you like it whichever project you open — while
  project files stay portable between people with different preferences.
- **Recent projects on the welcome screen** — name, client, floors, devices
  and when it was last edited. Each has a **✕** that removes it from the list
  only; the file itself is untouched.

### Changed
- The look and accent pickers added in 1.54 are superseded by the Appearance
  panel, which separates character from colour rather than bundling them.

## [1.54.0] — 2026-08-21

### Added
- **Look &amp; feel sets** (View menu): **Atelier** (limestone and indigo,
  drawing-office), **Kinari** (unbleached paper and sage) and **Slate** (cool
  neutral), alongside the **Original** warm bronze. A look is a palette only —
  nothing structural changes — and each works in both day and night.
- **Accent colour** can be set on its own, overriding whichever look is
  active, so the tool can carry a project or client colour.
- **"Back to the original look"** clears both in one click. Both settings save
  with the project.

### Fixed
- **Notes are properly multi-line.** They opened in a single-line browser
  prompt; there is now a real editor with a resizable text area, Ctrl/⌘+Enter
  to save, and a Delete button. Line breaks are kept on the plan and on the
  exported sheets.
- **Resizing a highlighted room no longer pans the plan.** Outside Rooms mode
  a near-miss on a handle landed on the plan and started a pan. Handles now
  have a wider catch there, and a press that lands close to one no longer
  pans at all.

## [1.53.2] — 2026-08-21

### Fixed
- **FD sheet colouring.** Every cell was being given a solid white fill, which
  flattened the sheet and painted over Excel''s own gridlines. Ordinary cells
  now carry no fill at all, exactly as the reference workbook does.
- **Floor rows stand out again.** Matching the reference removed their tint
  in 1.52, leaving floor sections hard to pick out in a long sheet. Floor
  titles and the totals row now sit on a faint grey band — enough to scan by,
  far lighter than the old heavy grey. Out-of-scope rooms keep their darker
  grey, so the two never read as the same thing.

## [1.53.1] — 2026-08-21

### Changed
- **Room names find a clear spot instead of sitting on the devices.** A label
  is now placed where the room is emptiest — furthest from the ikons inside it
  and from its own walls — rather than at the geometric centre, which is
  exactly where devices tend to cluster. Empty rooms still read centrally, and
  labels stay inside awkward shapes such as L-rooms.
- Labels are visually lighter, brighten on hover or when their room is
  highlighted, and fade further back while a device is armed for placement.

## [1.53.0] — 2026-08-21

### Added
- **Leader notes.** A note is now a target ring on the thing it describes,
  joined by a leader line to a label you can drag clear of the drawing — so
  one note can call out a single device, several items sharing one point, or a
  whole area. Both ends drag independently; leaders and wrapped label text
  print on the exported sheets.
- **Outdoor areas.** A room can be marked as an *outdoor area*: it surrounds
  other rooms instead of dividing them, draws beneath them with a dashed
  outline, and devices inside an inner room still belong to that room — only
  what falls outside them counts as the area''s. Skribble has an **Outdoor
  area** switch that lets the brush pass over existing rooms.
- **Wall thickness slider** (WALLS) for clearer boundaries, and **room fill
  strength** joins the always-visible toolbar group.

### Changed
- **Tapping a shared wall cycles through the rooms that meet along it** —
  tap once for one side, again for the other, with the room named each time.
- **"Linked walls" is now "Joined rooms move together"**, with a tooltip
  explaining that it keeps rooms attached when you drag a shared corner.

## [1.52.0] — 2026-08-21

### Changed
- **The Excel FD sheet now matches the ikonhouse quotation format:** header
  row 140pt deep with device names
  rotated 90°, bold, 10pt; the top row frozen; hairline borders on every cell;
  column widths 3.1 / 44 / 5.4; plain bold floor titles with a single rule
  beneath; a blank row between floors; and a **Total units** row of SUM
  formulas. Out-of-scope rooms keep their grey fill.
- **The device library is seeded in the workbook''s order** — 4 Button Keypad,
  8 Button Keypad, Touch Panel, Thermostat, HVAC Zones, lighting modules,
  curtain control, speakers and streaming, Wi-Fi, intercom and CCTV, then
  client-supplied items — with categories ordered to match. Rearranging the
  library still drives the FD column order, so the sequence stays yours.

## [1.51.0] — 2026-08-13

### Fixed
- **The room editor no longer jumps to the middle of the room.** Since labels
  moved to each room''s centre, every re-open — after a colour or scope change
  — re-anchored the panel there. It now stays where you put it while you keep
  working on the same room.
- **The custom out-of-scope colour is round again**, sized properly, and
  ringed with a colour wheel so it reads as a picker rather than a swatch.
  The device dialog''s custom colour matches.

### Changed
- **Skribbled rooms are now always square-walled.** Every wall comes out
  horizontal or vertical, which makes results predictable — an odd-shaped
  room is a couple of corner drags away afterwards. A genuinely triangular
  scribble still returns a shape rather than nothing.
- **Linked walls, greyscale, ikon size and opacity are back on the toolbar**
  as an always-visible group, since they are used constantly. Room fill
  strength, numbering size, auto-numbering and the out-of-scope colour stay in
  the Display panel. The group shrinks gracefully on narrow screens rather
  than disappearing.

## [1.50.0] — 2026-08-13

### Added
- **Notes.** Press <kbd>A</kbd> or tap **Notes**, then tap the plan to leave a
  comment — site conditions, client requests, anything worth remembering.
  Notes are numbered pins with their text beside them: drag to move, tap to
  edit, clear the text to delete. Fully undoable, they survive crop and
  rotate, save with the project, and print on the exported sheets.

### Fixed
- **Cropping is undoable — and now says so.** It always was, but nothing told
  you, so a bad crop felt permanent. Applying a crop now says that Undo brings
  the full plan back. (History is capped at 80 steps, since crop snapshots
  hold a whole plan image.)
- **Device names are no longer buried by their tools.** Names take the space
  they need and truncate cleanly; with a mouse the row tools stay hidden until
  you hover, and on touch they are compact and sit clear of the name.
- **The out-of-scope colour control** is properly round and has moved out of
  the tool row.

### Changed
- **Display settings are always a panel**, on every device, instead of
  sliders inline on desktop and a panel on tablets — one consistent layout
  and a much calmer toolbar at every width.
- **Skribble is straighter again** — wobble is absorbed more aggressively,
  and only a dominant edge near 45° keeps its angle.

## [1.49.0] — 2026-08-13

### Fixed
- **Adjusting one room of a joined pair.** Shared corners always moved both
  rooms, which made fine-tuning a boundary awkward. Hold **Ctrl/⌘** while
  dragging to move just the room you grabbed, or switch off **Linked walls**
  in Display to make that the default. A one-time note explains it the first
  time you take hold of a shared corner.
- **Floor tabs stay put.** They previously sat at the right of the tool row
  on wide screens and jumped to their own row on narrow ones. They now always
  occupy their own full-width row beneath the tools, in the same place at
  every size.

### Changed
- **A calmer toolbar.** Rotate left, rotate right and the room schedule order
  have moved into a **More** menu, leaving the row to the tools actually used
  while planning. Nothing was removed — and the keyboard shortcuts are
  unchanged.

## [1.48.0] — 2026-08-13

### Added
- **Show / hide devices and categories, like layers.** Every device row and
  every category header now has an eye: switch one off and those ikons leave
  the plan — and the exported sheets and their legend — so a plan can be
  presented one discipline at a time (lighting only, audio only, and so on).
  - Hiding is **presentation, not scope**: quantities in the BoQ, the Excel FD
    sheet and the room matrix are unaffected. Out-of-scope remains the way to
    exclude something from the numbers.
  - A category''s eye switches all of its devices together.
  - A standing reminder appears while anything is hidden, with **Show all** to
    restore everything in one click — so a hidden layer is never forgotten
    before an export.
  - Choosing a hidden device to place brings it back automatically.

## [1.47.0] — 2026-08-12

### Fixed
- **Floor tabs disappearing in a narrow window — at any screen size.** The
  toolbar was a fixed-height row that simply scrolled its contents out of
  sight, so on a smaller desktop window the floors were pushed off the end.
  The toolbar now **wraps**: when the floor tabs can no longer hold a sensible
  width they move to their own full-width row, separated by a rule, with
  larger tabs. This happens automatically at every width, so no manual
  resizing is needed.
- **Narrow desktop windows now get the grouped Display panel too** (below
  1400 px), instead of squeezing four sliders into the tool row.

## [1.46.0] — 2026-08-12

### Added
- **Select several rooms at once.** Shift/Ctrl-click room edges to build a
  selection (once one is picked, plain clicks keep adding). Selected rooms are
  outlined boldly and a bar appears with the actions that apply to all of them.
- **Mark rooms out of scope in bulk**, from that bar or with the <kbd>O</kbd>
  shortcut — which also works on a single highlighted room, and toggles back
  in scope. Each room''s own colour is remembered and restored.
- **Recolour several rooms at once** from the same bar. Recolouring a room
  that is currently out of scope stores the colour for when it returns, so the
  out-of-scope convention is never broken by accident.
- Tapping the plan or pressing <kbd>Esc</kbd> clears the selection.

## [1.45.0] — 2026-08-12

### Added
- **The out-of-scope colour is now yours to choose** — a swatch row (plus a
  full colour picker) beside the plan sliders, under **OUT**. Changing it
  restyles every out-of-scope room across all floors at once, leaves in-scope
  rooms alone, and keeps each room''s original colour remembered for when it
  comes back into scope. Saved with the project; red remains the default.

## [1.44.0] — 2026-08-12

### Changed
- **Skribble''s shortcut is now <kbd>K</kbd>**, and every tool key toggles —
  press it again to leave the tool. <kbd>C</kbd> now closes the crop frame as
  well as opening it.

### Added
- **Tap the plan to let a room go.** After resizing or highlighting a room, a
  plain tap anywhere on the plan clears the highlight and closes its editor —
  previously only a tap outside the plan did. Panning and dragging are
  unaffected, since only a tap that did not move counts.

## [1.43.0] — 2026-08-12

### Fixed
- **Floor tabs are properly visible on tablets and folds.** They were sharing
  one row with ten toolbar buttons and got squeezed to nothing. On compact
  screens they now sit on their own full-width row beneath the toolbar, with
  larger, higher-contrast tabs.

### Added
- **Keyboard shortcuts:** <kbd>R</kbd> rooms, <kbd>B</kbd> skribble,
  <kbd>C</kbd> crop, <kbd>G</kbd> greyscale, <kbd>N</kbd> numbering,
  <kbd>L</kbd> library, <kbd>?</kbd> the guide. They are ignored while typing.
- **A single, consistent way out of any tool on touch:** a floating **Done**
  button appears whenever Rooms or Skribble is active, naming the tool it will
  close. Esc and tapping the tool button again still work.

## [1.42.0] — 2026-08-12

### Fixed
- **Skribbling over an existing room selected it instead of painting.** The
  room layer sits above the plan and was intercepting the brush, so a stroke
  crossing a room grabbed and resized it. In Skribble mode the rooms no longer
  take pointer input at all — the brush always wins, and boundaries are still
  respected as before.
- **Floor names were hard to read on small screens** — higher contrast, larger
  type and roomier tabs on compact layouts.
- **Room names sat in a corner** — labels are now placed at each room''s area
  centroid, and stay inside awkward shapes such as L-rooms rather than
  drifting outside them.

### Changed
- **Skribble is boxier again.** Only a dominant edge at roughly 45° keeps its
  angle; slopes up to about 40° are squared up.

## [1.41.0] — 2026-08-11

### Fixed
- **The "How to use" guide appears on startup again**, and now keeps doing so
  until you tick **"Don't show this on startup"** in its footer — previously
  it silenced itself after being closed once, so it vanished for good.
- **Exports no longer freeze the window.** Each sheet was encoded with a
  blocking call, so a multi-floor A3 set locked the interface for the whole
  render with nothing on screen. Encoding is now asynchronous, the window
  stays responsive, and progress is reported page by page.

### Changed
- **The guide has proper margins** — more padding, roomier steps and wider
  spacing between sections.
- **Skribble is boxier still.** Only a dominant edge at roughly 40° or more
  keeps its angle; anything gentler is treated as an unsteady hand and
  squared up, so rooms come out like building blocks unless an angle was
  clearly intended.

## [1.40.0] — 2026-08-11

### Fixed
- **A selection box no longer appears while panning on touch.** Gating it
  behind a hold was not enough — a slow pan could out-wait the timer. Marquee
  select is now mouse-only. On touch, **hold an ikon** to start selecting and
  then tap others to add or remove; tap the plan when done.

### Changed
- **Skribble strongly prefers straight walls.** Each edge is now judged by
  length as well as angle: short edges are treated as hand-wobble and squared
  up readily, while a long edge is only straightened if it was close to
  square already. Small diagonal chamfers left at corners are absorbed into
  the walls either side.
  - Wobbly rectangles come out as clean four-corner boxes, L-shapes keep
    exactly their notch, and gentle drift (under about 20°) is treated as an
    unsteady hand rather than intent.
  - A room genuinely brushed at an angle — roughly 35° or steeper — keeps its
    diagonal.

## [1.39.0] — 2026-08-11

### Added
- **Skribbled rooms click into place against their neighbours.** Once an
  outline is traced, any edge that came out straight is compared with the
  walls facing it and snapped flush — so rooms sit together like blocks
  rather than leaving hairline gaps, and rarely need tidying afterwards.
  - Only edges that are already straight are aligned; an edge you clearly
    brushed at an angle keeps its angle.
  - Walls only align to walls that actually face them, so unrelated rooms
    elsewhere on the plan never pull a shape out of position.
  - Remaining corner-sized gaps close onto real corners, which also links the
    rooms so they stay joined when either is edited.

## [1.38.1] — 2026-08-11

### Fixed
- **A selection box appeared while panning the plan on touch.** Marquee
  select fired on any drag, competing with panning. On touch it now needs a
  brief hold on empty plan first (a short buzz confirms) before dragging
  boxes a selection; moving straight away simply pans. Mouse drag-to-select
  is unchanged.

## [1.38.0] — 2026-08-11

### Fixed
- **Panning the plan no longer draws rooms on touch.** The previous fix tried
  to tell a swipe from a deliberate drag by speed, which misfired on larger
  screens. On touch, dragging now simply pans — rooms are made by tapping
  corners or with Skribble, both of which are better suited to a finger.
  Mouse drag still draws a box.
- **Room corners are much easier to grab.** Each handle now has a generous
  invisible target (about 2.4× its visible size on touch) with the small dot
  drawn on top, so a near-miss no longer moves the whole room instead of
  resizing it.

### Changed
- **The toolbar is calmer on small screens.** The four display sliders and the
  greyscale / auto-number toggles now live behind a single **Display** button
  on compact screens, laid out as a labelled panel. On desktop they stay
  inline as before.

## [1.37.1] — 2026-08-11

### Fixed
- **Skribbled rooms could still overlap a neighbour.** Clipping the brush kept
  the painted area clean, but squaring-up afterwards could push a straightened
  edge back over a boundary. The finished outline is now genuinely subtracted
  from existing rooms before the room is created, so shapes butt against each
  other along shared walls instead of overlapping.
- **The version now reads in full (e.g. V1.37.1)** on the welcome screen, and
  is taken directly from `APP_VERSION` rather than being typed separately —
  so it can no longer fall out of step with a release.

## [1.37.0] — 2026-08-11

### Added
- **Skribble respects existing rooms.** The brush is clipped to the area not
  already claimed, so paint simply stops at a neighbouring room''s wall as you
  draw — you can sweep straight over a boundary and the new room ends exactly
  where the other begins, sharing the wall instead of fighting for it. Rooms
  no longer overlap by accident, and device counts stay unambiguous.
  - **Hold Alt** while starting a stroke to ignore boundaries and overlap
    deliberately (for a zone spanning several rooms).
  - Brushing entirely inside an existing room now says so, rather than
    failing silently.

## [1.36.1] — 2026-08-11

### Changed
- **Skribble hands back to normal editing once a room is made.** The brush
  cursor used to stay active afterwards, getting in the way of adjusting the
  new room. Creating a room now leaves Skribble automatically, with the room
  selected and its editor open — tap Skribble again for the next one. The
  cursor also stands down over the room editor, panels and toolbars.
- **Out-of-scope rooms are now red** rather than grey, so excluded areas are
  obvious at a glance on the plan. (The Excel FD sheet keeps its grey fill,
  matching the quotation workbook convention.)

## [1.36.0] — 2026-08-11

### Added
- **Pick the room colour before you skribble** — a swatch row in the brush
  bar. The stroke paints in that colour and the room is created with it, so
  you can colour-code as you go instead of editing afterwards.
- **Brush footprint on the cursor** — a ring under the pointer showing the
  exact area the brush will cover, tinted to the chosen colour and resizing
  live with the thickness slider.

### Fixed
- **The skribble trail was too faint to follow.** It was drawn at 42% with a
  multiply blend, which sank into the drawing underneath. It now paints at
  full strength in the chosen colour, so it is obvious where you have been.

## [1.35.0] — 2026-08-11

### Added
- **“Apply to all plans” in the crop bar** — frames every floor plan exactly
  like the one in front of you, so pages match when flipping through the
  exported set. The framing is applied proportionally, so plans that came from
  the same source (a multi-page PDF, for instance) end up pixel-identical.
  Warns first if ikons would fall outside, and it is a single undo step.
- **The crop ratio is now sticky** — the aspect you pick carries to the next
  plan and is saved with the project, instead of resetting each time.

### Fixed
- **Cropping re-encoded plans as JPEG**, quietly undoing the lossless pipeline
  and softening line art with every crop. Crops are lossless PNG again, with
  high-quality resampling.

## [1.34.0] — 2026-08-11

### Changed
- **Out-of-scope rooms turn grey automatically.** Marking a room out of scope
  switches it to a neutral grey; unmarking restores the colour it had before,
  so scope reads at a glance without hunting through the palette.
- **Room fills are a little stronger** by default — clearly present without
  drowning the drawing underneath.

### Added
- **Room fill strength slider** (toolbar, "ROOM"): from barely-there to
  emphatic, covering fill, outline and out-of-scope hatching together.
- **Auto-number size slider** (toolbar, "No."): the sequence badges were too
  small to read on dense plans — they now scale from 70% to 220%, on screen
  and on exported sheets. Both settings save with the project.

## [1.33.0] — 2026-08-11

### Added
- **Skribble — brush an area to create a room.** A new toolbar mode: brush
  over part of the plan with your finger, stylus or mouse and release; the
  painted area becomes a room. Scribble back and forth to cover an odd shape
  in one continuous motion.
  - **Brush thickness** is adjustable from the bar at the bottom, with a live
    size dot — fine for a cupboard, broad for a lounge. Saved with the project.
  - The stroke is traced, simplified and **squared up**, so wobbly hand
    movements still produce clean, presentable outlines, and the result snaps
    to neighbouring rooms exactly like a drawn one.
  - The result is an ordinary polygon — the same corner, wall and linking
    tools apply afterwards.
  - Stray dabs are ignored (the largest painted area wins) and strokes too
    small to be a room are rejected rather than making slivers.
  - Deliberately shape-only: no wall detection, so it behaves identically on
    CAD linework, scans and photographed plans.

## [1.32.0] — 2026-08-11

### Changed
- **Placement toggles live in the toolbar.** Auto-numbering joins greyscale as
  a toolbar button that lights up when active, so both can be flipped mid-work
  without opening a menu. The View menu toggles remain and stay in sync.
- **Reordering now feels like picking something up.** Dragging a category, a
  device, or a room in the schedule lifts it toward you — a slight scale, a
  soft tilt and a real shadow — while the rest of the list recedes. Previously
  the dragged item just dimmed, which read as "disabled" rather than "held".
  Respects reduced-motion preferences.
- **The room schedule panel has room to breathe** — wider, more padding, and
  noticeably more space between rows, floor groups and the footer.

## [1.31.1] — 2026-08-11

### Changed
- **Greyscale is now a toolbar button**, next to the ikon sliders, instead of
  being buried in the View menu — it lights up when active, so it can be
  flipped while placing devices without leaving what you are doing. The View
  menu toggle remains and the two stay in sync.

## [1.31.0] — 2026-08-11

### Added
- **Greyscale floor plan** (View menu → Placement): drops the architect''s
  drawing to greyscale while ikons, rooms and labels keep their colour, so
  devices read clearly against a busy plan. Applies on screen and on the
  exported sheets, is saved with the project, and switches back at any time.

## [1.30.0] — 2026-08-11

### Added
- **Room schedule order panel** (toolbar button beside Rooms): every room on
  every floor in one list, showing its position, colour, ikon count and
  out-of-scope tag. **Drag a room** to move it, or use ▲▼ — the order is
  exactly what the Excel FD sheet and the BoQ breakdown use. Rooms stay within
  their own floor.
- **Sort by position** orders every floor the way a reader scans the plan —
  top to bottom, left to right within each band — as a one-click starting
  point before fine-tuning.
- The room editor''s order section now links straight through with
  **“Reorder all…”**.

## [1.29.0] — 2026-08-11

### Added
- **Order rooms in the schedule while you design.** The room editor gains an
  "Order in schedule" section — ▲▼ move a room earlier or later, with its
  position shown (e.g. "3 of 11"). That order is exactly the row order used in
  the Excel FD sheet and the BoQ room breakdown, so the client-facing schedule
  can follow the building rather than the order rooms happened to be drawn.

## [1.28.0] — 2026-07-26

### Fixed
- **The device dialog vanished when picking a custom ikon colour.** Choosing a
  colour rebuilt the whole swatch row, which replaced the `<input type="color">`
  element the OS picker was attached to — closing the picker (and appearing to
  close the dialog) mid-pick. The row now updates its selection in place.

### Added
- **Ikon opacity slider** next to the size slider: drop it to see walls and
  dimensions on the plan through the ikons. It applies on screen and on the
  exported sheets, and is saved with the project.

### Changed
- **Ikons can go much smaller.** The size slider starts at 20% (was 50%) and
  the hard 12px floor that quietly overrode it is now 5px — so ikons stay
  proportionate on dense or large-format plans.

## [1.27.1] — 2026-07-26

### Changed
- **Category headers are larger and better balanced** — more breathing room
  above each group, slightly bigger type with a little more contrast, and
  round 24px tool buttons (30px on touch) that no longer feel cramped. The
  tools now reserve their space instead of appearing on hover, so headers
  never shift as the pointer moves across them. Horizontal docks keep the
  compact spacing, where vertical space is scarce.

## [1.27.0] — 2026-07-26

### Added
- **Reorder devices within a category.** Each device row now has ▲▼ buttons
  (always visible on touch, on hover with a mouse), and dragging a device onto
  another drops it into that position — within its own category, or into
  another category if you drop it on a device there. Dropping on a category
  header still moves it to the end of that category, as before.
- The order is stored with the project and flows through to the exports, so
  the FD sheet''s column order follows the library exactly.

## [1.26.0] — 2026-07-25

### Added
- **"How to use" guide**, reachable from a **?** button in the toolbar (the
  gestures card was previously buried in the View menu). Three tabs:
  - **Quick start** — five steps from floor plan to client package, written as
    a walkthrough rather than a feature list.
  - **Gestures** — grouped by what you are doing, with keys shown as keycaps.
  - **Outputs** — what each export contains and when to reach for it.
- The guide **opens once automatically** the first time someone enters the
  workspace, and never again (dismissal is remembered locally). **Esc** or
  **Got it** closes it.

## [1.25.0] — 2026-07-25

### Added
- **Create a room from a node on desktop too.** Press and hold a corner with
  the mouse (~0.5s — slightly longer than touch, since pausing mid-click is
  common) then drag to size the new room; it shares the anchor corner, so the
  two rooms stay linked. **Ctrl/⌘-drag** from a corner does the same instantly,
  with no waiting.
- The node **pulses while the hold arms**, so it is clear which gesture is
  about to fire, and **Esc** cancels a spawn in progress.

## [1.24.1] — 2026-07-25

### Fixed
- **Pinch-to-zoom on the floor plan.** The zoom maths were correct, but three
  competing gesture handlers were fighting the pinch:
  - the one-finger pan only *paused* while a pinch was active, so when the
    second finger lifted it resumed from its original origin and snapped the
    plan back — undoing the zoom''s framing. A pinch now ends the pan outright.
  - in Rooms mode the plan is the SVG room layer, which sits outside
    `#planClick`, so the stage pan handler ran *alongside* the room layer''s own
    pan — two systems writing the same pan offsets from different origins.
  - marquee select ignored pinches entirely, drawing a selection box (and
    selecting ikons) during a two-finger gesture.
- Pinches with three or more fingers on screen are now recognised too.

## [1.24.0] — 2026-07-25

### Fixed
- **Panning the plan no longer draws rooms** (touch): a quick one-finger
  swipe on the plan now pans it — matching every photo/map app — while a
  deliberate, slower drag still draws a box. Tap-corners, pinch-zoom and
  hold-for-linked-room are unchanged.

### Added
- **Tap outside the plan to cancel** (Rooms mode): tapping the area around
  the floor plan clears the selected box and any in-progress outline —
  outside Rooms mode it clears a highlight.

### Changed
- **Room nodes slimmed further** (~20%) with thinner rings — visible and
  catchable without cluttering the outline.

## [1.23.0] — 2026-07-25

### Fixed
- **Press & hold on a corner deleted it and spawned a room (Android).** The
  browser''s long-press fires a context-menu event, which was mapped to
  right-click-delete — so holding a node triggered the delete *and* the
  new-room gesture together. Corner interactions are now one coherent
  handler: hold still → new linked room; move → drag the corner; and on
  touch the context menu is suppressed without deleting. Desktop right-click
  still deletes a node; double-tap deletes on touch.
- **Crop edge bars did not resize.** They were unwired (and fell through to
  the frame-move gesture). All four edge bars now resize their side —
  honouring the selected ratio about the frame''s centre — and the **Reset**
  button restores the recommended framing.
- **Room ✕ unreliable on touch** — the target was too small; it''s now
  26px on touch, clears any stale highlight, and confirms with an
  undo-able toast.

### Added
- **Gestures & tips** reference (View menu → Help) — every canvas, ikon,
  room, and library gesture on one card.
- **Done chip** in the Rooms-mode hint bar — an obvious exit on touch,
  alongside Esc.

## [1.22.0] — 2026-07-21

### Added
- **Tap outside to deselect a room.** After creating or selecting a room,
  tapping empty plan in Rooms mode clears the selection so you can start the
  next room immediately.
- **Grow a new room from a corner.** Press & hold an existing room''s node
  (~0.4s, a short buzz confirms), then drag: a new room is anchored at that
  exact corner, so the two rooms share the node and stay linked.
- **Category reorder arrows** (▲ ▼) on every category header — always
  visible on touch — alongside the existing press-and-hold drag.

### Changed
- **Crop is easier to handle**, especially on touch: draggable **edge
  handles** on all four sides (not just corners), a rule-of-thirds grid
  inside the frame, and a **Reset** button that restores the frame to the
  whole plan. Ratio presets and pinch/drag behaviour are unchanged.

## [1.21.1] — 2026-07-18

### Fixed
- **Room creation silently cancelled near an adjacent room.** Snapping could
  pull the rectangle''s end corner back onto its own start edge, collapsing
  the box below the minimum size so nothing was created. A snap that would
  collapse the rectangle is now ignored, and a genuinely too-small drag says
  so instead of failing quietly.
- **Pasted (or multi-selected) ikons could not be dragged.** The group drag
  re-rendered all markers on every movement, detaching the element holding
  the pointer capture and ending the drag instantly. Group moves now update
  marker positions in place, with a single re-render on release.
- **Rooms that were merely close resized together.** The node-link tolerance
  was ~0.6% of the plan — wide enough to bind neighbouring-but-separate
  corners. Linking now requires true coincidence (nodes snapped exactly
  together), so only genuinely shared corners move as one.

## [1.21.0] — 2026-07-18

### Added
- **Copy & paste ikons.** Select one or more ikons and Ctrl/Cmd+C, then
  Ctrl/Cmd+V to drop copies (offset slightly, auto-selected) — pairs with
  marquee multi-select for quickly replicating a device cluster.
- **Auto-numbering.** Each placed ikon gets a per-device sequence shown as a
  small badge on the plan and printed as a code on exported sheets
  (e.g. SP-01, 4B-02, TH-03). **Toggle it off** in the View menu →
  Placement; turning it back on numbers everything consistently.
- **Split a wall.** Double-click a wall segment to insert a node exactly at
  the click point — branch a new corner or start a connected room from a
  precise spot. (Midpoint handles still add a centre node.)

## [1.20.0] — 2026-07-18

### Added
- **Linked rooms via shared nodes.** When two rooms share a corner (drop or
  snap one room''s corner onto another''s), that node is marked with a bronze
  ring, and dragging it moves *both* rooms'' corners together — adjacent
  rooms stay connected as you adjust the layout. Right-click / double-click a
  node to remove it, which unlinks the rooms there. Linked edits are undoable.

### Changed
- **Inverted the wall-drag ortho default:** dragging a wall now keeps it
  straight (moving only across itself) by default; **hold Shift** to move it
  freely in any direction. (Previously free by default, Shift for straight.)

## [1.19.0] — 2026-07-18

### Changed
- **Scrapped the separate "device schedule by room" page** — it was cramped
  and hard to read. Removed from the PDF, PNG and package exports.
- **On-sheet legend is now a categorized table.** Devices are grouped under
  their library category headers (in the same order as the tool), each with
  its colour/icon, name and quantity, balanced across columns beneath the
  plan — the floor-plan layout and size are unchanged.

### Excel FD sheet
- Device columns now follow the **library category order** (4 Button Keypad
  first, etc.), header labels **rotated 90° upright**, in-scope cells filled
  white and **out-of-scope rooms filled grey (darker 25%)** with the plain
  room name — the "(OUT OF SCOPE)" text tag is gone. (These use the
  style-capable xlsx-js-style writer already bundled.)

## [1.18.0] — 2026-07-18

### Fixed
- **Room corners moved their neighbours.** The 4-corner "rectangle lock"
  dragged adjacent corners along to keep edges square, so a corner couldn''t
  be moved on its own. Corners are now fully independent — hold **Shift**
  while dragging a corner to square it to a neighbour on demand.

### Added
- **Multi-select ikons.** Drag a box on empty plan to marquee-select; Shift/
  Ctrl-click to add or remove individual ikons. Drag any selected ikon to
  move the whole group, or press Delete / Remove to delete them together.
  Click empty plan to clear.
- **Device schedule by room on the exported sheets.** Each floor plan is now
  followed by a printed rooms × devices table (with per-room totals and
  out-of-scope tags) in the PDF, the sheet PNGs, and the full package — so
  the plan set tells the whole story without opening the Excel file.

## [1.17.0] — 2026-07-17

### Changed
- **Free wall dragging.** A wall now moves freely in any direction — both
  corners translate together, so the edge stays straight and the same
  length. **Hold Shift** to constrain it to a straight (orthogonal) slide
  across itself; **Alt** still bypasses snapping. (Previously a wall could
  only move perpendicular to itself.)

## [1.16.0] — 2026-07-17

### Added
- **Drag walls to move them.** Selecting or highlighting a room now shows
  its edges as draggable segments — drag a wall and it slides perpendicular
  to itself, keeping the line perfectly straight and both corners together.
  Snaps to neighbouring walls (hold Alt to bypass).
- **Right-click a corner to delete it** (in addition to double-click); a
  room keeps a minimum of three corners.
- **Drag devices between categories** in the library — press-and-hold on
  touch, click-drag on desktop, onto any category header (which highlights
  as you hover). The move is saved with the project.
- **Save feedback:** Ctrl/Cmd+S now shows “Saving…” then “Saved ✓”.

### Changed
- The Touch Panel icon is now **landscape** (matching a wall-mounted panel).

## [1.15.2] — 2026-07-17

### Changed
- **Gentler snapping in Rooms mode:** magnet range reduced (5px base,
  walls slightly tighter, narrower straight-line guidance) so corners can
  be fine-tuned onto the floor plan''s own drawn walls without being yanked
  to a neighbouring room. Hold **Alt** while drawing or dragging a corner
  to disable snapping entirely.
- **Room nodes slimmed:** corner/midpoint handles reduced (~25% on touch,
  slightly on desktop) — still catchable, no longer bulky.

## [1.15.1] — 2026-07-17

### Fixed
- **Room creation completely broken in 1.15.0.** The drawing and corner-
  editing handlers referenced a variable whose declaration had been
  removed, throwing on the first movement — no box could be drawn and no
  corner grabbed. Both handlers were rebuilt and verified: drag-a-box,
  tap-corner polygons, pinch-abort, wall snapping and rectangle angle-lock
  all restored, with snap guide lines now shown while corners align.
- **Handles are finger-sized on touch:** room corner/midpoint handles are
  nearly twice as large on touch devices and keep their on-screen size as
  you zoom; crop corner handles grew to 36px. Missing a handle no longer
  sends the floor plan flying.

## [1.15.0] — 2026-07-17

### Added
- **Tap-corner room drawing.** In Rooms mode, tap corner after corner to
  outline any shape — L-shapes, notches, wrapped terraces — with a live
  dashed preview; tap the first corner (marked with a ring) or double-tap
  to close and name the room. Dragging still draws a quick box.
- **Straight-line guidance while tapping:** each new segment auto-aligns
  to horizontal/vertical when close, so outlines stay presentable without
  effort; clearly diagonal taps stay diagonal.
- **Wall snapping.** Corners now snap to neighbouring rooms'' *edges*, not
  just their corners — rooms butt flush along shared walls at any point,
  staying visually connected while remaining separate zones with their own
  device counts.

## [1.14.0] — 2026-07-17

### Changed
- **Snapping is now room-to-room only.** Corners and drawn rectangles no
  longer magnet to the plan boundary — they snap exclusively to existing
  room corners (neighbouring rooms, and the same room''s other corners),
  which is what alignment is actually for.

### Fixed
- **Two-finger zoom no longer creates accidental rooms** (Fold and other
  touch devices): starting a pinch instantly aborts any in-flight room
  draw, drawing cannot begin during a pinch, and a pinch that ends a
  gesture never opens the name prompt.

### Added
- **Click a room''s edge to work with it** — a generous invisible hit zone
  runs along every room outline (wider on touch). Single-click highlights
  (or selects in Rooms mode), double-click opens the editor, and in Rooms
  mode the edge drags the room just like its body. No more hunting for the
  name label.

## [1.13.1] — 2026-07-16

### Fixed
- **Newly created categories missing from the device dialog's category
  list.** The dropdown only read categories that already had a device in
  them, so an empty category created via "＋ Category" or "＋ New" never
  appeared until something was filed under it. It now includes empty and
  in-progress categories too.

### Changed
- **"Category" now comes first** and matches "New device" in width in the
  library footer — creating the container is the natural first step.

## [1.13.0] — 2026-07-16

### Added
- **Add devices straight from a category:** every category header has a ＋
  button (and empty categories a "＋ Add a device" action) that opens the
  device dialog with that category pre-filled.

### Fixed
- **Grip vanished when docked top/bottom on PC** — the drag handle lived in
  the title, which horizontal docks hide. The grip now stays visible in
  every dock, so you can always drag the library to another edge.
- **Compact screens: dock buttons caused confusion** (top/bottom "made the
  library disappear", right "showed a left window"). On small screens every
  dock is the slide-in Devices sheet by design, so the dock buttons are now
  replaced with a note explaining that; theme controls remain.
- **Touch category reordering interrupted by the browser's long-press
  menu** — the context menu is suppressed on category headers, so press &
  hold reliably picks the category up (short buzz confirms).

## [1.12.0] — 2026-07-16

### Fixed
- **Blank left panel reserving space on compact screens (Fold, Chrome).**
  The compact layout is no longer decided by CSS media queries alone: a
  JavaScript-computed `compact` class (viewport-measured, updated on every
  resize/fold) forces the sheet layout with authoritative overrides. On
  compact screens every dock becomes the slide-in Devices sheet and the
  plan always gets the full window.

### Added
- **Create categories from the library itself:** a dashed "Category" button
  next to "New device" creates an empty category, placed at the top of the
  list with a hint row until its first device arrives. Empty categories are
  saved with the project and graduate automatically once populated.
- **Touch: press & hold a category (~⅓s) to rearrange it** — a short buzz
  confirms pickup, list scrolling locks while dragging, and simply swiping
  still scrolls. Mouse drag is unchanged.
- A one-time desktop tip pointing out the ⠿ grip for drag-to-dock.

## [1.11.1] — 2026-07-16

### Fixed
- **Fold-class screens no longer get the desktop layout.** The Fold 7's
  inner display is wider than tall even held upright (~1092 CSS px), so it
  dodged both the 1024px and the portrait breakpoints and kept the docked
  panel over the plan. The compact layout now applies up to **1160px** in
  any orientation (portrait still up to 1280px) — the library lives in the
  toggleable Devices sheet there.
- **New-device dialog opened behind the library sheet** on compact screens
  (sheet z-index 130 vs dialog 100). Dialogs now sit above all panels.

### Added
- **“+ New” category button** in the device dialog — prompts for a name and
  fills the field; the category is created when the device is saved. Typing
  a new name directly still works.

## [1.11.0] — 2026-07-15

### Added
- **Visible drag grip on the library** (dot-grid button in its header):
  drag it to carry the panel immediately — no press-and-hold needed — with
  the same edge drop-zones to dock left/right/top/bottom, or drop in open
  space to float. Press-and-hold still works.
- **Room corners align to their own room:** dragging a node now snaps to
  the other corners of the same room as well as neighbouring rooms and the
  plan edges.

### Changed
- **New categories, made obvious:** the device dialog's category field now
  reads "Pick one, or type a new category" — typing any new name has always
  created it, now it says so.
- **Ikon alignment guides** (snapping a dragged ikon to others' rows and
  columns) now clear reliably on release.
- **Out-of-scope hatching heavier again** — denser diagonal bars at higher
  opacity with a solid outline.
- **Side docks are wider by default (304px)** so device names are readable
  immediately; drag the inner edge to taste as before.

### Fixed
- **Compact screens (incl. Fold portrait): the library can no longer camp
  on the plan.** The Devices sheet never starts open, and the Devices
  button now toggles it open/closed. Portrait widths up to 1280px use the
  compact layout (added in 1.10.0 — make sure the deployed site is up to
  date if a docked panel still appears in portrait).

## [1.10.0] — 2026-07-15

### Added
- **Drag the library to dock it.** While carrying the floating panel (by
  its grip, or fresh from a press-and-hold tear-off), the edges of the
  canvas become drop zones with a live dashed preview — release on the
  left, right, top or bottom edge to dock there; release anywhere else to
  leave it floating.

### Fixed
- **Portrait tablets lost plan space to the docked library.** Tablets with
  1025–1280 px portrait widths were getting the desktop layout, so a side
  dock consumed a quarter of an already-narrow screen. Portrait screens up
  to 1280 px now use the compact layout (slide-in Devices sheet for
  vertical docks); rotating to landscape restores the full desktop layout
  automatically.

## [1.9.1] — 2026-07-15

### Added
- **Middle-button panning while creating rooms.** In Rooms mode, hold the
  scroll-wheel button (or Space) and drag to pan the plan — over blank
  plan and over existing rooms alike; the left button keeps drawing and
  editing. Two-finger pan/pinch on touch was already available.

## [1.9.0] — 2026-07-15

### Added
- **Press & hold to dock / undock the library.** Hold the panel (header,
  footer, or empty list area) for half a second to tear it off into the
  floating panel at your pointer and keep dragging to place it; hold the
  floating panel to dock it back to the edge it came from. Movement cancels
  the hold, and buttons, rows, and the resizer are exempt. Desktop/large
  screens only — small screens keep the slide-in sheet.

### Changed
- The device library docks to the **left by default** again.

## [1.8.2] — 2026-07-14

### Fixed
- **Room label text blurred while zooming in the editor.** The canvas is
  scaled with a CSS transform, which stretches rasterized text; labels now
  counter-scale by the inverse zoom so their effective scale is always 1 —
  names stay pixel-crisp at any magnification (they keep a constant
  on-screen size as a result, like map labels).

### Changed
- PDF plans import at up to 4× resolution (was 3.5×) for more zoom headroom
  on the text printed within the drawing itself. Plans imported before
  v1.8 remain at their original resolution until re-imported.

## [1.8.1] — 2026-07-14

### Fixed
- **Sheets still softened when zooming into the exported PDF.** The final
  raster was embedded as JPEG, which smears one-pixel line art even at high
  quality. Sheets and covers now embed as **lossless PNG**, A3 renders at
  full **300 dpi** (matching A4), and the plan is resampled with
  high-quality interpolation — wall lines stay crisp under deep zoom.
  PDF file sizes grow somewhat; line-art pages compress efficiently.

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
