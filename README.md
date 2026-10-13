# Estudios Giu · Guía de estudio (Biología + Redacción + Teorías pedagógicas)

Sitio estático (HTML + CSS + JavaScript puro, localStorage). No necesita instalar nada ni servidor.

## Cómo usarlo
- **Local:** abre `index.html` con doble clic (funciona sin internet; solo las tipografías de Google Fonts requieren conexión y, si faltan, se usan tipografías del sistema).
- **Publicarlo gratis** (elige una):
  - **Netlify Drop:** entra a app.netlify.com/drop y arrastra la carpeta completa.
  - **GitHub Pages:** sube la carpeta a un repositorio → Settings → Pages → Branch `main` / root.
  - **Vercel / Cloudflare Pages:** importa el repositorio, sin comando de build y con la raíz como carpeta de salida.

## Rutas (hash, sin servidor)
- `#/` → selector de curso (3 cards: Biología / Redacción / Teorías)
- `#/biologia` → home de Biología · `#/redaccion` → home de Redacción · `#/teoria` → home de Teorías
- `#/biologia/tema/1` · `#/redaccion/tema/3/tarjetas`, etc.
- `#/biologia/simulacro` · `#/redaccion/simulacro` (examen general por curso)
- `#/biologia/casos` · `#/redaccion/casos` (guía de método por curso)
- `#/biologia/chuleta` · `#/redaccion/chuleta` · `#/teoria/chuleta` (resumen imprimible por curso, A4 → PDF)

URLs viejas (`#/tema/1`, `#/casos`…) redirigen solas a `#/biologia/…`.

## Estructura
- `index.html` — página única + carga de datos en orden (guía → temas → banco → redacción → widgets → chuleta → app).
- `css/styles.css` — estilos (incluye `.courses` / `.course` del selector).
- `js/app.js` — router por curso, actividades (completar, marcar, V/F, ordenar, relacionar), casos/análisis, simulacro. Progreso separado por curso (`b`/`r`) en localStorage.
- `js/widgets.js` — célula que se divide, célula interactiva, rueda del ciclo celular, ADN→proteína, cuadro de Punnett.
- `js/chuleta.js` — `mountChuleta(root, curso)`: imprime BIO, RED o TEO según el curso activo.
- `js/data/guia.js` — `window.GUIA` (biología) + `window.TEMAS`.
- `js/data/temaN.js` — contenido de cada tema de biología (1–7).
- `js/data/banco-extra.js` — preguntas/casos extra + fija `window.BIOLOGIA_TEMAS`.
- `js/data/redaccion/temas.js` — 7 sesiones de Redacción (Unidad I: Información y argumentos) + `window.GUIA_RED`.
- `js/data/teoria/temas.js` — 7 sesiones de Teorías y enfoques pedagógicos (UCT Inicial) + `window.GUIA_TEORIA`.

## Cómo añadir preguntas
Abre `js/data/temaN.js` (o `js/data/redaccion/temas.js`) y copia el formato:
- Completar: `'La {{mitosis}} produce dos células.'` (alternativas con `|`: `{{fecundación|fecundacion}}`).
- Marcar: `{q:'…', o:['a','b','c','d'], a:1, why:'explicación'}` (`a` = posición de la correcta, desde 0).
- V/F: `{q:'…', a:true, why:'…'}`.

El progreso se guarda en el navegador (localStorage, clave `bf_progress_v1`), separado por curso para no cruzar Biología y Redacción.
