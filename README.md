# ikonhouse — AV Pre-Sales Studio
**Version 1.16** · Developed by Jassim Alfonso with Claude · see CHANGELOG.md

A lightweight, browser-based pre-sales tool for AV integration projects.
Upload or paste a floor plan, crop it to a print-ready format, place devices
from a customizable library, and export a client-ready package: cover page,
branded A-series layout sheets with a device legend, and an Excel Bill of
Quantities.

No installation and no server — open `index.html` in any modern browser
(Chrome, Edge, Safari, Firefox). Works on desktop, tablet and mobile.

The device library is **dockable**: use the dock control at the bottom of
the library panel to pin it to the left, top, bottom or right edge, pop it
out as a floating panel you can drag anywhere, or hide it entirely for a
full-window canvas (the Devices button brings it back). You can also
**press & hold** the panel to tear it off into floating mode, and press &
hold the floating panel to dock it back. Your choice is saved inside
project files.

---

## Quick start

1. Open `index.html` — a short welcome flow collects the project details
   (client, location, prepared by, reference); these appear on the cover,
   sheet headers and the Excel BoQ, and can be edited anytime via the
   pencil icon next to the project name.
3. Add a floor plan: click **Plan**, drag a file onto the canvas, or paste a
   screenshot with `Ctrl+V` / `Cmd+V`. PDFs import every page as its own
   floor tab (double-click a tab to rename it).
4. Optionally **Crop** the plan — the A-series ratio is recommended so the
   plan fills the exported sheet edge-to-edge.
5. Click a device in the library, then click on the plan to place — keep
   clicking to keep placing. `Esc` (or the ✕ in the pill) stops.
6. **Export** → cover page, layout sheets (A4 / A3 / A1), Excel BoQ, or save
   the whole project as an `.ikonplan` file for the team.

## Controls

| Action | Desktop | Touch |
|---|---|---|
| Place a device | Click device → click plan | Tap device → tap plan |
| Stop placing | `Esc` or right-click | Tap the "Placing…" pill |
| Move an ikon | Drag it | Drag it |
| Remove an ikon | Right-click it, or select + `Delete` | Tap it → **Remove ikon** |
| Undo add/remove | `Ctrl+Z` / `Cmd+Z` | — |
| Zoom | `Ctrl` + scroll, or − / + / FIT | Pinch with two fingers |
| Pan | `Space` + drag, or middle-mouse | One-finger drag |
| Crop a plan | **Crop** in the toolbar, pick a ratio, drag the frame, **Apply** | same |
| Device library (small screens) | — | **Devices** button in the toolbar |

## Exports

Sheets and the cover export as **PDF or PNG** (choose in the export dialog);
"all floors" as PDF produces one multi-page document.

- **Full package** (`.zip`) — one download containing a combined PDF
  (cover + every sheet), the individual PNG sheets and the Excel BoQ —
  ready to send to a client.
- **Cover page** — minimalist portrait cover: ikonhouse identity, project
  title, client, location, date and reference.
- **Layout sheets** — one per floor (or all at once) on A4, A3 or A1.
  Orientation follows the plan automatically (all A-sizes share the same
  √2 aspect ratio — the paper size choice sets the export resolution).
  Each sheet carries the branded header, the plan with its ikons, a legend of
  every placed device with its count, and a sheet index footer.
- **Excel BoQ** — two tabs: an **FD (Field Device) sheet** in the client's
  reference format — devices as rotated column headers, one row per floor,
  blank for zero, and a bold "Total units" row of live SUM formulas — plus
  a priced **BoQ Summary** with per-floor columns, unit prices and amounts.
- **Project file** (`.ikonplan`) — the full project including plans, ikons,
  library and details; portable between team members.

## Cropping and ikons

Cropping remaps existing ikons (device markers) to the new frame automatically. Ikons that fall
outside the crop are removed (you're asked to confirm first, and the undo
history is reset after a crop).

## Branding

- **Logo** — the official ikonhouse logo ships in `assets/img/` (`logo.svg`
  preferred, `logo.png` fallback). It appears in the app header, on layout
  sheets and on the cover. To swap it, replace those files or click the logo
  in the header and upload another (uploaded logos are saved in project files).
- **Dark mode** — the monochrome logo auto-inverts to white on the dark
  theme. Using a colored logo? Remove the `.auto-invert` rule near the top
  of `assets/css/app.css`.
- **Colors / fonts** — the full colorway (light and dark) lives as CSS
  variables at the top of `assets/css/app.css`.

## Working offline

The app itself is fully offline, and the official logo is embedded in the
code, so exports work even when the `assets/img` files can't be read (e.g.
when running straight from `file://`). Three optional libraries load on
demand: SheetJS (Excel), pdf.js (PDF import) and JSZip (full-package export).
The app looks for them locally first, then falls back to a CDN. For a fully
offline setup, download these once into `assets/vendor/`:

- `xlsx-js-style.min.js` — https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.min.js
  (preferred: writes the styled FD sheet — fonts and rotated headers)
- `xlsx.full.min.js` — https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js
  (fallback: same data and formulas, plain styling)
- `pdf.min.js` — https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js
- `pdf.worker.min.js` — https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js
- `jszip.min.js` — https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js
- `jspdf.umd.min.js` — https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js

(Google Fonts load when online; offline, the app falls back to system fonts.
Exported sheets render best with fonts loaded, so run exports online or
after the fonts have cached.)

## Folder structure

```
ikonhouse-av-planner/
├── index.html            App entry point
├── README.md
└── assets/
    ├── css/
    │   └── app.css       Colorway tokens (light/dark) + all styles
    ├── js/
    │   └── app.js        Application logic
    ├── img/
    │   ├── logo.svg      Official logo (preferred)
    │   └── logo.png      Fallback raster logo
    └── vendor/           (optional) local copies of xlsx / pdf.js
```

## Sharing with the team

Zip or copy the whole folder to a shared drive. Projects are portable
`.ikonplan` files (they embed the floor-plan images), so anyone with the app
folder can open, edit and re-export a colleague's project — on a laptop,
tablet or phone.

## Deploying to the web (GitHub + Netlify)

This is a static site — no build step, no server code — so hosting is simple:

1. **GitHub**: create a repository (e.g. `ikonhouse-av-planner`), then upload
   the contents of this folder (`index.html` at the repo root, plus `assets/`).
   Either drag-and-drop in GitHub's web UI ("Add file → Upload files") or:
   ```
   git init && git add . && git commit -m "AV Pre-Sales Tool"
   git branch -M main
   git remote add origin https://github.com/<your-user>/ikonhouse-av-planner.git
   git push -u origin main
   ```
2. **Netlify**: sign in with your GitHub account → *Add new site →
   Import an existing project* → pick the repo. Leave **build command empty**
   and set **publish directory** to the repo root (`/`). Deploy.
3. Your team gets a URL like `https://<name>.netlify.app` — every `git push`
   redeploys automatically. Add a custom domain (e.g.
   `planner.ikonhouse.com`) under *Domain settings*; HTTPS is automatic.

No-GitHub shortcut: drag this folder onto **https://app.netlify.com/drop**
for an instant site (no auto-updates, but zero setup).

Hosting also removes the `file://` quirks: vendor libraries and fonts load
normally, and nothing needs to be emailed around when the tool is updated.
