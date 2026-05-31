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

> **🌐 Español** · [English](README.md)

# Nova Red UI

> **Tema ámbar sobre negro para Cyberpunk RED Core (Foundry VTT).**  
> Glass interface, layout vertical, estética terminal Nova Red.

---

## Instalación

Agrega este manifiesto en Foundry VTT:

```
https://github.com/DKSEN404/nova-red-ui/releases/latest/download/module.json
```

**Módulo:** `Sistema → Módulos → Instalar módulo → Pegar URL del manifiesto`

---

## Características

- **Glass Interface** — Ventanas, sidebar y paneles con transparencia y blur(4px)
- **Layout Vertical** — Hojas de personaje y mook con navegación por pestañas laterales
- **Override completo** — Variables CSS `--cpr-*` sobrescritas — funciona sin modificar el sistema
- **Templates propios** — 7 templates Handlebars que reemplazan los del sistema vía `registerPartial`
- **100% CSS/JS** — Sin imágenes externas, sin dependencias adicionales
- **Compatible** — Foundry VTT v12, Cyberpunk RED Core v0.92.4+

---

## Preview

| | |
|:---:|:---:|
| ![Preview](./previo/ss1.png) | ![Preview](./previo/ss2.png) |
| ![Preview](./previo/ss3.png) | ![Preview](./previo/ss4.png) |

---

## Changelog

### v1.1.3 — Indicador de PP + Ventana de Mejora de Personaje *(2026-05-31)*
- **Botón de notificación de PP** — cruz ámbar sobre el retrato que brilla con animación de pulso cuando los IP superan el umbral configurable (default 20)
- **Ventana de Mejora de Personaje** — nuevo diálogo con 3 pestañas accesible al hacer clic en el botón PP
- **Pestaña Estadísticas** — guía de referencia sobre qué estadísticas del personaje se pueden o no mejorar (importada de Stats Rule.html)
- **Pestaña Habilidades** — lista interactiva completa de las habilidades del actor con botones +/− para planificar gasto de PP; cada fila muestra nombre, dificultad (x2), nivel actual y coste PP de la mejora
- **Sección de Aptitud de rol** — aptitudes de rol de los roles activos con botones +/− para subir de rango
- **Contador de PP restante en tiempo real** — contador flotante en la parte superior de la pestaña habilidades que se actualiza al añadir/eliminar mejoras
- **Guardar/Cancelar** — los cambios se previsualizan en el diálogo y solo se aplican al guardar; los fallos muestran notificación de error
- **Integración con Ledger de PP** — cada guardado crea automáticamente un registro en el ledger via `deltaLedgerProperty`
- **Umbral de notificación configurable** — la pestaña Guía tiene un campo para ajustar el umbral de PP por personaje (almacenado en flags del actor)

### v1.1.2 — Estilizado de pestaña Combate + Fix botones de acción en Gear tab *(2026-05-30)*
- **Grid layout del Fight tab** — `.fight-tab` ahora usa CSS Grid con `grid-template-areas: "injuries armor weapon"` para layout correcto de Meatspace
- **Grilla de armas** — CSS Grid completo con áreas `weapon-image`, `weapon-name`, `weapon-ammo`, `weapon-info`, `weapon-mode`, `weapon-actions`, `weapon-attack`, `weapon-damage`
- **Grilla de armaduras** — CSS Grid completo con áreas `armor-image`, `armor-name`, `armor-1/2-location`, `armor-1/2-stats`, `armor-1/2-type`, `armor-1/2-actions`
- **Grilla de heridas** — CSS Grid completo con áreas `injuries-image`, `injuries-name`, `injuries-desc`, `injuries-actions`, `injuries-effects`
- **Grillas de Netrunning** — `.cyberdeck-installed-software-list` y `.cyberdeck-rezzed-software-list` ahora tienen CSS Grid con todas las áreas de programa asignadas
- **Botones de acción corregidos** — `.character-vertical-sheet .items-list .item.flexrow` ahora usa `flex-wrap: wrap` para evitar desborde del sub-list; `.item-detail.gear-actions` usa `overflow: visible` para que los botones de acción siempre sean accesibles en ítems con upgrades instalados
- **Layout de pestaña Role/Combate** — `.rolefight-tab-content` y `.combat-section` ahora usan `display: flex; flex-direction: column; gap` para espaciado consistente
- **Todos los colores usan variables --nv-*** — completamente compatible con Modo Camaleón (adaptable al tema)

### v1.1.1 — Gear Tab: Fix ítems invisibles con mejoras instaladas *(2026-05-30)*
- **Fondo de sub-list corregido** — `.items-list .sub-list li` ahora respeta `transparent` en lugar de ser pisado por el glass background de la hoja vertical
- **Visibilidad del toggle chevron asegurada** — `.toggle-installed-visibility` ahora tiene `opacity: 1`, `color` explícito y glow en hover para garantizar que siempre sea visible y clickeable
- **Overflow clipping corregido** — `.character-vertical-sheet .items-list .item-name` ahora usa `overflow: visible` para que el botón toggle no se clipee con nombres largos
- **Grid layout del sub-list corregido** — `.items-list .sub-list` establece explícitamente `display: grid` y `min-width: 100%` para animación expand/colapso confiable
- **Nueva Sección 76** en `scifiui.css` dedicada a fixes de upgrades instalados/sub-list

### v1.1.0 — Secciones de Combate Red en Pestaña Rol & Combate *(2026-05-30)*
- **Toggle Carne/Red** agregado al inicio de la pestaña Rol & Combate cuando hay un cyberdeck equipado
- **Sección de Habilidades de Interfaz** — scanner, backdoor, cloak, control, eyedee, pathfinder, slide, virus, zap, defensa, velocidad — visible en modo Red
- **Sección de Programas Instalados** — lista de programas instalados agrupados por clase (booster, defender, blackice, antipersona, antiprograma), con botones para rezze/derezze, ataque, defensa y daño
- **Sección de Programas Rezzados** — programas activos con estadísticas ATK/DEF/REZ/PER/SPD, controles de decremento/reset de REZ, acciones de ataque/defensa/daño de Black ICE para mooks
- **CSS actualizado** — Sección 24.5 (Fight State Nav) + Sección 25 ampliada para cubrir contexto `.rolefight-tab-content` junto a `.fight-tab`

### v1.0.10 — CP2077 Glow + Combat Tracker + Hotbar *(2026-05-28)*
- **Indicador de herida sobre el retrato** — corazón en esquina inferior derecha (opuesto al escudo); retrato ocupa 3 filas del grid
- **Retrato más ancho** — `calc(4rem + 6px)`; overlay de herida con fondo semitransparente oscuro
- **Glow CP2077 consistente** — pestañas del sidebar, elementos de directorio, folders, pestañas de hoja, controles HUD, links de chat, botones de diálogo, lista de jugadores, botones popout, dice tray — todos con `border-left: 2px solid --nv-accent` + `linear-gradient` + `box-shadow` glow en hover/active
- **Chrome de ventanas** — `.window-app` con glow exterior sutil; header con `border-bottom: 2px solid --nv-glow-020`; botones de header con left-border glow
- **Combat Tracker** — estilo CP2077 completo: glass bg, borde ambar, entradas con left-border glow + gradient en hover/active, iniciativa con text-shadow glow
- **Hotbar** — estilo CP2077 completo: glass bg, borde superior ambar, macros con left-border glow + gradient en hover/active, tecla con text-shadow glow
- **Sección de Heridas Críticas** — agregada a la pestaña Rol & Combate (debajo de habilidades de rol, arriba de armadura/armas) con soporte para crear/editar/borrar/tirar

### v1.0.9 — Estilo Cyberpunk 2077 *(2026-05-28)*
- **Botones de pestaña** — rediseñados con borde izquierdo ambar + glow y gradiente en active/hover (inspirado CP2077)
- **Retrato +2px más ancho** — `calc(4rem + 2px)` para mejor proporción
- **Fondo glass** — ventana al 25% de opacidad con `backdrop-filter: blur(6px)` para efecto HUD oscuro cyberpunk
- **Texto de herida oculto** — "Nivel de herido" eliminado; solo el corazón con tooltip al hover
- **Tamaño input nombre/rol corregido** — `0.7rem` para evitar desborde

### v1.0.8 — Death Save UI Fix *(2026-05-28)*
- **Alineación de death save corregida** — se agregó `display: flex`, `align-items: center` y espaciado explícito
- **Botón de restablecer penalizador restaurado** — el icono `fa-arrow-rotate-left` ahora es visible con `cursor: pointer`
- **Items de meta consistentes** — IP, reputación y eurobucks ahora comparten el mismo layout flex que death save

### v1.0.7 — Personaje (Vertical) *(2026-05-28)*
- **Nuevo estilo de hoja**: "Nova-Red: Personaje (Vertical)" seleccionable desde el menú de estilo de hoja del actor
- **Dimensiones 625×690** — hoja compacta optimizada para pantallas estrechas
- **Layout vertical con sidebar** — pestañas laterales (Habilidades, Rol/Combate, Equipamiento, Cyberware, Vida pasada, Efectos)
- **Header del viejo sistema** — copia exacta del diseño de header de la versión de inspiración con portrait, stats bar, HP/humanidad, death save, IP, reputación y eurobucks
- **Registro vía `Actors.registerSheet`** — no modifica el sistema, el jugador elige qué estilo usar
- **CSS específico** — sección 75 con estilos glass/ámbar para toda la hoja vertical

### v1.0.6 — Tema CSS Puro *(2026-05-28)*
- **Monkey-patch eliminado** — el módulo ya no sobreescribe los templates de personaje/mook ni fuerza el layout vertical
- **Tema CSS puro** — funciona solo como capa visual, sin modificar el comportamiento de las hojas del sistema
- **CSS de layout vertical eliminado** — secciones 7b (Glass Effect) huérfanas eliminadas de la hoja de estilos
- **Registro de partials preservado** — los templates siguen disponibles para compatibilidad con el sistema
- **Nota:** Las hojas de actor vuelven al layout horizontal nativo de Cyberpunk RED Core

### v1.0.5 — Player UI & Colores Semánticos *(2026-05-28)*
- **Player List** — sidebar `#players` estilizado con glass, bordes y hover
- **Player Config** — ventana de permisos con grilla, selects y botón aceptar en verde
- **User Management** — tabla de usuarios con filas alternadas, controles y botón guardar
- **Colores semánticos** — variables `--nv-color-success` (verde) y `--nv-color-danger` (rojo) que se adaptan al tema
- **Corrección Camaleón**: death saves, wounded, fallos → rojo; éxitos, online, aceptar → verde
- **Botones danger** — `.kick-player`, `.delete-user`, `button.delete` en rojo

### v1.0.4 — Theme-Neutral: Modo Camaleón *(2026-05-28)*
- **Modo Camaleón** — el módulo ya no fuerza el tema ámbar, se adapta al color del tema del usuario
- Eliminadas todas las declaraciones `--cpr-*` del `:root` que pisaban el tema del sistema
- Variables `--nv-accent`, `--nv-border`, `--nv-bg-*`, `--nv-text-*` que referencian las variables `--cpr-*` del sistema
- Glows y sombras se adaptan al tema via `color-mix()` con fallback ámbar para navegadores antiguos
- 521+ colores hardcodeados reemplazados por referencias a variables CSS
- Compatibilidad: temas ámbar, azul, verde, rojo — cualquier color funciona automáticamente

### v1.0.3 — Glass Effect en Layout Vertical *(2026-05-28)*
- Efecto glass/transparencia completo en layout vertical de personaje y mook
- Cobertura total: `.character-vertical`, `.mook-sheet-vertical`, `.sheet-vertical`, `.profile-header`, `.stats-bar`, `.mook-header`, `.navtabs-side`, tab-content, skills, combat, equipment, notes
- `backdrop-filter: blur(4px)` en contenedores principales del layout vertical
- Variables `--nv-glass-*` aplicadas a todos los paneles internos del layout vertical
- Inputs, selects y botones mantienen fondo sólido para usabilidad

### v1.0.2 — Vertical Layout y Theme Override *(2026-05-28)*
- Nuevo layout vertical para hojas de personaje (`.character-vertical`) y mook (`.mook-sheet-vertical`)
- 7 templates propios del módulo para independencia del sistema:
  - `cpr-character-sheet.hbs`, `cpr-mook-sheet.hbs`
  - `character/cpr-sheet-header.hbs`, `cpr-profile-tab.hbs`, `cpr-rolefight-tab.hbs`
  - `mook/cpr-mook-tab1.hbs`, `cpr-mook-tab2.hbs`
- Override completo de variables CSS `--cpr-*` para tema ámbar/negro sin modificar el sistema
- Patrón de cuadrícula cyberpunk en fondo (`html[data-cpr-theme="default"]`)
- Registro de partials vía `Handlebars.registerPartial` para instalaciones limpias
- Monkey-patch de sheet templates para usar las plantillas del módulo
- Compatibilidad 100% con Foundry VTT v12 sin dependencias externas

### v1.0.1 — Glass Interface *(2026-05-28)*
- Efecto glass/transparencia con `backdrop-filter: blur(4px)` en todas las ventanas del sistema
- Sidebar, ventanas de actor, hojas de item, diálogos, journal, notificaciones, chat tooltips
- 4 variables CSS personalizables: `--nv-glass-{deep,dark,mid,light}`
- Elementos interactivos (inputs, botones, selects) mantienen fondo sólido para usabilidad
- Código limpio: solo CSS, sin JS adicional, sin imágenes

---

## Créditos

| Recurso | Fuente |
|---------|--------|
| Módulo original | **scifi-ui** por iotech |
| Tab Icons | Rexard 7000 Icons Bundle (licenciado) |
| Tablas | Font Awesome vía Wikimedia Commons (CC BY) |
| Chat bubble | Adaptado de CoreUI Icons (CC BY) |
| Sidebar frame | Original por iotech |
| Flechas izq/der | Hexagonal Icon (CC BY SA) |
| Botones | imacat — Public Domain (OpenGameArt) |
| Denim075 | Atropos (FoundryVTT) |

## Licencia

Este trabajo (excepto gráficos) está bajo **CC BY 4.0**.  
https://creativecommons.org/licenses/by/4.0/
