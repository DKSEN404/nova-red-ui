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
