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

### v1.1.4 — Fix: tabs + cyberpunk text glow *(2026-05-31)*
- **Fix (definitivo):** Tabs now switch correctly using manual jQuery click handlers — no dependency on FVTT `defaultOptions.tabs` or `this._tabs` (removed/refactored in v12)
- **Fix:** Cyberpunk text glow (`text-shadow` with `--nv-glow-*`) across all dialog tabs

### v1.1.3 — PP Upgrade Indicator + Character Improvement Dialog *(2026-05-31)*
- **PP notification button** — amber cross icon over the portrait that glows with a pulse animation when IP exceeds the configurable threshold (default 20)
- **Character Improvement dialog** — new window with 3 tabs accessible by clicking the PP button
- **Stats tab** — reference guide on which character stats can/cannot be improved (imported from Stats Rule.html)
- **Skills tab** — full interactive list of the actor's skills with +/− buttons to plan PP spending; each row shows skill name, difficulty (x2), current level, and PP cost for the upgrade
- **Role Ability section** — role abilities of active roles with +/− buttons for rank upgrades
- **Real-time remaining PP counter** — floating counter at the top of the skills tab updates as you add/remove upgrades
- **Save/Cancel** — changes are previewed in the dialog and only applied on save; failed saves show an error notification
- **IP Ledger integration** — each save automatically creates a ledger entry via `deltaLedgerProperty`
- **Configurable notification threshold** — the guide tab has an input to set the PP threshold per character (stored in actor flags)

### v1.1.2 — Combat tab styling + Gear tab action buttons fix *(2026-05-30)*
- **Fight tab grid layout** — `.fight-tab` now uses CSS Grid with `grid-template-areas: "injuries armor weapon"` for proper Meatspace layout
- **Weapon grid** — complete CSS Grid layout with `weapon-image`, `weapon-name`, `weapon-ammo`, `weapon-info`, `weapon-mode`, `weapon-actions`, `weapon-attack`, `weapon-damage` grid areas
- **Armor grid** — complete CSS Grid layout with `armor-image`, `armor-name`, `armor-1/2-location`, `armor-1/2-stats`, `armor-1/2-type`, `armor-1/2-actions` grid areas
- **Injuries grid** — complete CSS Grid layout with `injuries-image`, `injuries-name`, `injuries-desc`, `injuries-actions`, `injuries-effects` grid areas
- **Netrunning grids** — `.cyberdeck-installed-software-list` and `.cyberdeck-rezzed-software-list` now have proper CSS Grid with all program area assignments
- **Action buttons fixed** — `.character-vertical-sheet .items-list .item.flexrow` now uses `flex-wrap: wrap` to prevent sub-list overflow; `.item-detail.gear-actions` uses `overflow: visible` so action buttons are always accessible on items with installed upgrades
- **Rolefight tab layout** — `.rolefight-tab-content` and `.combat-section` now use `display: flex; flex-direction: column; gap` for consistent spacing
- **All colors use --nv-* variables** — fully compatible with Chameleon Mode (theme-adaptive)

### v1.1.1 — Gear Tab: Fix invisible items with installed upgrades *(2026-05-30)*
- **Fixed sub-list items background** — `.items-list .sub-list li` now respects `transparent` background instead of being overridden by the vertical sheet's glass background
- **Fixed toggle chevron visibility** — `.toggle-installed-visibility` now has `opacity: 1`, explicit `color`, and `hover` glow to ensure it's always clickable and visible
- **Fixed overflow clipping** — `.character-vertical-sheet .items-list .item-name` now uses `overflow: visible` so the toggle button isn't clipped when item names are long
- **Fixed sub-list grid layout** — `.items-list .sub-list` explicitly sets `display: grid` and `min-width: 100%` for reliable expand/collapse animation
- **New Section 76** in `scifiui.css` dedicated to installed upgrades/sub-list fixes

### v1.1.0 — Netrunning Sections in Role & Combat Tab *(2026-05-30)*
- **Meatspace/Netspace toggle** added to the top of the Role & Combat tab when a cyberdeck is equipped
- **Interface Abilities section** — scanner, backdoor, cloak, control, eyedee, pathfinder, slide, virus, zap, defense, speed — visible in Netspace mode
- **Installed Programs section** — list installed programs grouped by class (booster, defender, blackice, antipersonnel, antiprogram), with rez/de-rez, attack, defense, and damage roll buttons
- **Rezzed Programs section** — active programs with ATK/DEF/REZ/PER/SPD stats, rez decrement/reset controls, Black ICE attack/defense/damage actions for mooks
- **CSS updated** — Section 24.5 (Fight State Nav) + Section 25 extended to cover `.rolefight-tab-content` context alongside `.fight-tab`

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
