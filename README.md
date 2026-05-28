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

### v1.0.10 — CP2077 Glow + Combat Tracker + Hotbar *(2026-05-28)*
- **Wound indicator moved over portrait** — heart icon positioned bottom-right (opposite shield); portrait spans 3 grid rows
- **Portrait wider** — `calc(4rem + 6px)` for better proportion; wound overlay has semi-transparent dark bg
- **CP2077 glow consistency** — sidebar tabs, directory items, folder headers, sheet tabs, HUD controls, chat action links, dialog buttons, player list, popout buttons, dice tray — all use `border-left: 2px solid --nv-accent` + `linear-gradient` + `box-shadow` glow on hover/active
- **Window chrome** — `.window-app` gets subtle outer glow; header border-bottom uses `--nv-glow-020`; header buttons get left-border glow
- **Combat Tracker** — full CP2077 styling: glass bg, amber border, combatant entries with left-border glow + gradient on hover/active, initiative text glow
- **Hotbar** — full CP2077 styling: glass bg, amber top-border, macro slots with left-border glow + gradient on hover/active, macro-key text glow
- **Critical Wounds section** — added to Role & Combat tab (below role skills, above armor/weapons) with create/edit/delete/roll support

### v1.0.9 — Cyberpunk 2077 Styling *(2026-05-28)*
- **Tab buttons** — redesigned with left amber border glow + gradient on active/hover (CP2077 inspired)
- **Portrait +2px wider** — `calc(4rem + 2px)` for better proportion
- **Glass background** — window-content lowered to 25% opacity with `backdrop-filter: blur(6px)` for dark glass HUD effect
- **Wound label hidden** — "Nivel de herido" text removed; heart icon + tooltip remain
- **Name/role input font-size fixed** — `0.7rem` to prevent text overflow inside `1.25rem` inputs

### v1.0.8 — Death Save UI Fix *(2026-05-28)*
- **Fixed death save alignment** in the vertical sheet — added explicit `display: flex`, `align-items: center`, and proper spacing
- **Reset penalty button restored** — `fa-arrow-rotate-left` icon now visible with `cursor: pointer`
- **Consistent meta items** — IP, reputation, and eurobucks rows now share the same flex layout as death save

### v1.0.7 — Personaje (Vertical) *(2026-05-28)*
- **New sheet style**: "Nova-Red: Personaje (Vertical)" selectable from the actor sheet style menu
- **Dimensions 625×690** — compact sheet optimized for narrow screens
- **Vertical layout with sidebar** — side tabs (Skills, Role/Combat, Gear, Cyberware, Lifepath, Effects)
- **Old system header** — exact copy of the inspiration version's header design with portrait, stats bar, HP/humanity, death save, IP, reputation, and eurobucks
- **Registered via `Actors.registerSheet`** — does not modify the system, player chooses which style to use
- **Specific CSS** — section 75 with glass/amber styles for the entire vertical sheet

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
