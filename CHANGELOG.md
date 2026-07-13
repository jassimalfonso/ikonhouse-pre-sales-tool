# Changelog

All notable changes to the ikonhouse AV Pre-Sales Tool.
Format follows [Keep a Changelog](https://keepachangelog.com); versioning
follows [Semantic Versioning](https://semver.org).

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
