```text
╔══════════════════════════════════════════════════════════╗
║        █▄▄▄ █ █ ▄▀▄ ▄▀▄   █▀▄▄▀█ ██ █ █▀▄             ║
║        █▄▄  █▄█ ▀▄▀ ▀▄▀   █ ▀▀ █ █▄█ █ █▀              ║
║                                                          ║
║    █▀▄▀█ █▀▀█ █▀▀  █ █   █▀▀ █▀▀█ █▀▀  █▀▀█            ║
║    █ ▀ █ █▄▄█ ▀▀█  █▄█   █   █▄▄█ ▀▀█  █▄▄█            ║
║    ▀   ▀ ▀  ▀ ▀▀▀  ▄▀▄   ▀▀▀ ▀  ▀ ▀▀▀  ▀  ▀            ║
╚══════════════════════════════════════════════════════════╝
```

![Foundry VTT v12](https://img.shields.io/badge/Foundry_VTT-v12-amber?style=flat-square&logo=foundryvirtualtabletop&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Handlebars](https://img.shields.io/badge/Handlebars.js-000000?style=flat-square&logo=handlebarsdotjs&logoColor=white)
![Cyberpunk RED](https://img.shields.io/badge/Cyberpunk_RED-ff0000?style=flat-square)
![CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-313131?style=flat-square)

> **🌐 English** · [Español](README.es.md)

# Nova Red UI

> **Amber-on-black theme for Cyberpunk RED Core (Foundry VTT).**  
> Glass interface, vertical layout, Nova Red terminal aesthetic.

---

## Installation

Add this manifest URL in Foundry VTT:

```
https://github.com/DKSEN404/nova-red-ui/releases/latest/download/module.json
```

**Module:** `System → Modules → Install Module → Paste manifest URL`

---

## Features

- **Glass Interface** — Windows, sidebar, and panels with transparency and blur(4px)
- **Vertical Layout** — Character and mook sheets with side-tab navigation
- **Full Override** — CSS `--cpr-*` variables overwritten — works without modifying the system
- **Custom Templates** — 7 Handlebars templates replacing system ones via `registerPartial`
- **100% CSS/JS** — No external images, no additional dependencies
- **Compatible** — Foundry VTT v12, Cyberpunk RED Core v0.92.4+

---

## Preview

| | |
|:---:|:---:|
| ![Preview](./previo/ss1.png) | ![Preview](./previo/ss2.png) |
| ![Preview](./previo/ss3.png) | ![Preview](./previo/ss4.png) |

---

## Changelog

### v1.0.6 — Pure CSS Theme *(2026-05-28)*
- **Monkey-patch removed** — the module no longer overrides character/mook sheet templates or forces vertical layout
- **Pure CSS theme** — works as a visual overlay only, without modifying system sheet behavior
- **Vertical layout CSS removed** — orphaned sections 7b (Glass Effect) eliminated from the stylesheet
- **Partial registration preserved** — templates remain available for system compatibility
- **Note:** Actor sheets return to the native Cyberpunk RED Core horizontal layout

### v1.0.5 — Player UI & Semantic Colors *(2026-05-28)*
- **Player List** — sidebar `#players` estilizado con glass, bordes y hover
- **Player Config** — ventana de permisos con grilla, selects y botón aceptar en verde
- **User Management** — tabla de usuarios con filas alternadas, controles y botón guardar
- **Colores semánticos** — variables `--nv-color-success` (verde) y `--nv-color-danger` (rojo) que se adaptan al tema
- **Corrección Chameleon**: death saves, wounded, fallos → rojo; éxitos, online, aceptar → verde
- **Botones danger** — `.kick-player`, `.delete-user`, `button.delete` en rojo

### v1.0.4 — Theme-Neutral: Chameleon Mode *(2026-05-28)*
- **Chameleon Mode** — module no longer forces the amber theme, adapts to the user's theme color
- Removed all `--cpr-*` declarations from `:root` that were overriding the system theme
- `--nv-accent`, `--nv-border`, `--nv-bg-*`, `--nv-text-*` variables referencing the system's `--cpr-*` variables
- Glows and shadows adapt to theme via `color-mix()` with amber fallback for legacy browsers
- 521+ hardcoded colors replaced with CSS variable references
- Compatible with amber, blue, green, red themes — any color works automatically

### v1.0.3 — Glass Effect in Vertical Layout *(2026-05-28)*
- Full glass/transparency effect in character and mook vertical layout
- Complete coverage: `.character-vertical`, `.mook-sheet-vertical`, `.sheet-vertical`, `.profile-header`, `.stats-bar`, `.mook-header`, `.navtabs-side`, tab-content, skills, combat, equipment, notes
- `backdrop-filter: blur(4px)` on main vertical layout containers
- `--nv-glass-*` variables applied to all inner panels of the vertical layout
- Inputs, selects, and buttons keep solid background for usability

### v1.0.2 — Vertical Layout & Theme Override *(2026-05-28)*
- New vertical layout for character (`.character-vertical`) and mook (`.mook-sheet-vertical`) sheets
- 7 custom module templates for system independence:
  - `cpr-character-sheet.hbs`, `cpr-mook-sheet.hbs`
  - `character/cpr-sheet-header.hbs`, `cpr-profile-tab.hbs`, `cpr-rolefight-tab.hbs`
  - `mook/cpr-mook-tab1.hbs`, `cpr-mook-tab2.hbs`
- Full CSS `--cpr-*` variable override for amber/black theme without modifying the system
- Cyberpunk grid pattern background (`html[data-cpr-theme="default"]`)
- Partial registration via `Handlebars.registerPartial` for clean installations
- Monkey-patch of sheet templates to use the module's templates
- 100% compatibility with Foundry VTT v12, no external dependencies

### v1.0.1 — Glass Interface *(2026-05-28)*
- Glass/transparency effect with `backdrop-filter: blur(4px)` on all system windows
- Sidebar, actor sheets, item sheets, dialogs, journal, notifications, chat tooltips
- 4 customizable CSS variables: `--nv-glass-{deep,dark,mid,light}`
- Interactive elements (inputs, buttons, selects) keep solid background for usability
- Clean code: CSS only, no extra JS, no images

---

## Credits

| Resource | Source |
|----------|--------|
| Original module | **scifi-ui** by iotech |
| Tab Icons | Rexard 7000 Icons Bundle (licensed) |
| Tables | Font Awesome via Wikimedia Commons (CC BY) |
| Chat bubble | Adapted from CoreUI Icons (CC BY) |
| Sidebar frame | Original by iotech |
| Left/Right arrows | Hexagonal Icon (CC BY SA) |
| Buttons | imacat — Public Domain (OpenGameArt) |
| Denim075 | Atropos (FoundryVTT) |

## License

This work (except graphics) is licensed under **CC BY 4.0**.  
https://creativecommons.org/licenses/by/4.0/
