/* Chuletas imprimibles. app.js llama a mountChuleta(nodo, curso). */
(function () {
  "use strict";
  const BIO = {
    title: "Biología general · Resumen de repaso",
    sub: "Temas 1 a 7",
    trickTitle: "Para el examen",
    sections: [
      { n: 1, c: "#0E9F8E", t: "Fundamentos de la Biología", l: [
        "<b>Biología:</b> bios (vida) + logos (estudio). Origen, evolución, estructura y funcionamiento de los seres vivos.",
        "<b>Enfoque:</b> observación, experimentación y análisis. <b>Integradora:</b> química, física y geología.",
        "<b>Seres vivos:</b> organización, nutrición, crecimiento, reproducción, homeostasis y evolución.",
        "<b>Niveles:</b> molécula → célula → tejido → órgano → organismo.",
        "<b>Ramas:</b> botánica, zoología, genética, ecología, microbiología, anatomía.",
        "<b>Teoría celular:</b> formados por células · unidad estructural y funcional · toda célula proviene de otra preexistente.",
        "<b>Importancia:</b> medicina, agricultura y conservación.",
      ]},
      { n: 2, c: "#6B4EFF", t: "Introducción a la biología", l: [
        "<b>Método científico:</b> observación → pregunta → hipótesis → experimento → análisis → conclusión. No es rígido.",
        "<b>Generación espontánea</b> refutada por Redi (1668) y Pasteur (1862). <b>Biogénesis:</b> la vida viene de vida.",
        "<b>Oparin (1938):</b> evolución química. <b>Miller y Urey (1953):</b> síntesis orgánica en condiciones primitivas. <b>Arrhenius (1908):</b> panspermia.",
        "<b>Irritabilidad:</b> respuesta a estímulos. <b>12 niveles:</b> de lo subatómico a la biosfera.",
      ]},
      { n: 3, c: "#2F80ED", t: "Principios químicos de la vida", l: [
        "<b>Agua:</b> polar, puentes de hidrógeno, alto calor específico, cohesión y adhesión.",
        "<b>Sales:</b> iones; presión osmótica, pH y enzimas. Macro y micro.",
        "<b>Carbohidratos</b> (energía y estructura), <b>lípidos</b> (reserva, membrana, esteroides), <b>proteínas</b> (primaria a cuaternaria).",
        "<b>ADN:</b> doble hélice, A-T y C-G. <b>ARN:</b> simple, A-U y C-G.",
      ]},
      { n: 4, c: "#E63E8B", t: "La célula", l: [
        "<b>Historia:</b> Hooke 1665 · Leeuwenhoek 1674 · Schleiden 1838 · Schwann 1839 · Virchow 1855.",
        "<b>Procariota:</b> sin núcleo, nucleoide, 70S, pared de peptidoglicano. <b>Eucariota:</b> núcleo, organelos, 80S.",
        "<b>Organelos:</b> núcleo, mitocondria (ATP), RE rugoso y liso, Golgi, lisosomas, cloroplastos, citoesqueleto.",
        "<b>Membrana:</b> mosaico fluido. <b>Pasivo</b> (difusión, facilitada, ósmosis) · <b>activo</b> (bomba Na/K, ATP) · endocitosis y exocitosis.",
      ]},
      { n: 5, c: "#F08A24", t: "Procesos metabólicos", l: [
        "<b>Enzimas:</b> bajan la energía de activación. Las altera el calor, el pH y la cantidad de sustrato.",
        "<b>Respiración:</b> glucólisis (2 ATP) → Krebs → cadena. Unos 36-38 ATP. <b>Fermentación:</b> 2 ATP; láctica o alcohólica.",
        "<b>Fotosíntesis:</b> fase luminosa en tilacoides (O2, ATP, NADPH) y Calvin en el estroma (glucosa).",
      ]},
      { n: 6, c: "#3FA34D", t: "Biología molecular y herencia", l: [
        "<b>Dogma:</b> ADN → ARN → proteína. Transcripción en el núcleo; traducción en el ribosoma. AUG inicia. Código degenerado.",
        "<b>Mendel:</b> segregación y distribución independiente. Aa × Aa → fenotipos 3:1.",
        "<b>Genotipo</b> (alelos) ≠ <b>fenotipo</b> (lo observable, genotipo + ambiente). Humanos: 46 cromosomas en células somáticas.",
      ]},
      { n: 7, c: "#D9A400", t: "Ciclo celular y reproducción", l: [
        "<b>Ciclo:</b> G1 → S → G2 → M. Neuronas maduras en G0.",
        "<b>Mitosis:</b> 2 células idénticas, 2n. Crecer y reparar. <b>Meiosis:</b> 4 haploides distintas, n. Entrecruzamiento.",
        "<b>Asexual:</b> un progenitor, sin gametos. <b>Sexual:</b> meiosis + fecundación. Desarrollo: cigoto → segmentación → gastrulación → diferenciación.",
      ]},
    ],
    tricks: [
      "<b>Caso del examen:</b> herida que cicatriza = mitosis. Hijos parecidos pero distintos = meiosis + fecundación. Asexual = un solo progenitor.",
      "<b>No confundir:</b> mitosis / meiosis · ADN / ARN · procariota / eucariota · genotipo / fenotipo.",
      "<b>V/F:</b> desconfía de siempre, nunca y solo.",
    ],
  };
  const RED = {
    title: "Redacción y comprensión de textos · Unidad I",
    sub: "Sesiones 1 a 7",
    trickTitle: "Para no mezclar conceptos",
    sections: [
      { n: 1, c: "#0E9F8E", t: "El curso y los hábitos", l: [
        "<b>Curso:</b> teórico-práctico. Comprender textos y usar lenguaje académico. Unidad I: Información y argumentos.",
        "<b>Competencia general:</b> ampliar el saber disciplinar. <b>Específica:</b> gestionar la enseñanza-aprendizaje.",
        "<b>Foro:</b> hábitos, fortalezas, dificultades y una meta concreta (acción + cómo comprobarla).",
        "<b>Cierre:</b> ¿qué aprendí? ¿cómo? ¿para qué me sirve?",
        "<b>Autores base:</b> Solé (estrategias), Mateos y Ríos (metacognición), Belinchón et al. (psicología del lenguaje).",
      ]},
      { n: 2, c: "#6B4EFF", t: "Estructura e ideas", l: [
        "<b>Introducción</b> presenta y delimita. <b>Desarrollo</b> explica (Cassany: planificar y revisar). <b>Conclusión</b> integra y no abre un tema nuevo.",
        "<b>Tema:</b> frase breve. <b>Idea principal:</b> afirmación completa; explícita o implícita. <b>Secundarias:</b> explican, ejemplifican, causas o consecuencias.",
        "Ejemplo: «la lectura fortalece el aprendizaje universitario» es la idea; el porque son apoyos.",
      ]},
      { n: 3, c: "#2F80ED", t: "Nivel literal", l: [
        "<b>Literal</b> (lo dicho) → <b>inferencial</b> (lo sugerido) → <b>crítico</b> (evaluar). Sin lo literal no hay base.",
        "Lo explícito es <b>verificable, objetivo y textual</b>. Preguntas: qué, quién, cómo, cuándo, dónde, por qué.",
        "<b>Rastreo</b> busca un dato. Proceso: lectura general → identificación → verificación. No es copiar sin comprender.",
        "«Es una excelente docente» o «estaban emocionados», si no está escrito, <b>no</b> es literal.",
      ]},
      { n: 4, c: "#E63E8B", t: "Inferencias", l: [
        "Conclusión <b>justificada</b> con pistas. El saber previo ayuda y <b>no sustituye</b> al texto.",
        "<b>I-R-I-J-V:</b> identificar, relacionar, inferir, justificar, verificar.",
        "Correlacional = <b>asociación, no causa</b>. «Pudo contribuir» ≠ «fue la única causa».",
        "15 participantes limitan la generalización; no declaran solo por eso que el estudio es inválido.",
      ]},
      { n: 5, c: "#F08A24", t: "Tesis, razones, evidencias", l: [
        "<b>Tema</b> ¿de qué trata? <b>Tesis</b> ¿qué sostiene? <b>Razón</b> ¿por qué? <b>Evidencia</b> ¿con qué? <b>Inferencia</b> ¿qué concluyo?",
        "Esquema: <b>evidencia → razón → tesis</b>.",
        "Evaluar: <b>pertinencia, suficiencia, coherencia, credibilidad</b>. Una anécdota no representa a todos.",
        "Comprender, según Belinchón et al., es construir coherencia, no solo localizar.",
      ]},
      { n: 6, c: "#3FA34D", t: "Lectura eficiente", l: [
        "No es una carrera: se <b>acelera o se frena</b> según la dificultad. Eficiencia = velocidad + comprensión.",
        "<b>Previsualizar</b> (¿qué voy a encontrar?) → <b>skimming</b> (¿de qué trata?; pierde detalle, Rayner) → <b>scanning</b> (¿dónde está el dato?) → lectura profunda.",
        "<b>PPM</b> = palabras ÷ minutos. 600 en 3 min = 200 ppm. Referencia adulta: unos 200-400 ppm.",
        "Frenos: voz alta, subvocalizar, regresiones por hábito. <b>Valeria</b> fue más eficiente que <b>Camila</b>. Releer un párrafo difícil no es leer mal.",
      ]},
      { n: 7, c: "#D9A400", t: "Resumen, síntesis, metacognición", l: [
        "<b>Resumen:</b> un texto. <b>Síntesis:</b> varias fuentes. Ninguno es copiar.",
        "<b>Suprimir</b> detalles · <b>generalizar</b> a una categoría · <b>integrar</b> pasos en una idea.",
        "<b>Antes</b> planificar · <b>durante</b> monitorear · <b>después</b> evaluar.",
        "<b>Paráfrasis:</b> reconstruir la idea y <b>citar</b>. Cambiar sinónimos no basta.",
      ]},
    ],
    tricks: [
      "<b>No confundas:</b> tema / idea principal / tesis · explícito / inferido · razón / evidencia · resumen / síntesis · skimming / scanning.",
      "<b>Límites:</b> correlación ≠ causa · una anécdota ≠ todos · la conclusión no estrena temas · suprimir no borra la idea principal.",
      "<b>Análisis en 4 pasos:</b> nivel → pista textual → una oración → qué no permite afirmar el texto.",
    ],
  };

  const css = `
#chu{--cols:2;--fs:9.5pt}
.chu-bar{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:0 0 16px}
.chu-bar label{font-weight:600;font-size:.9rem;display:flex;gap:6px;align-items:center}
.chu-bar select{padding:6px 8px;border:2px solid var(--line);border-radius:10px;background:var(--card);color:var(--ink)}
.chu-paper{background:#fff;color:#14213D;border:2px solid var(--line);border-radius:12px;padding:14px;box-shadow:4px 4px 0 var(--shadow)}
.chu-title{font:800 15pt/1.1 var(--f-display);margin:0 0 8px;display:flex;justify-content:space-between;gap:10px;align-items:baseline}
.chu-title small{font:500 8pt var(--f-body);color:#51617A}
.chu-cols{column-count:var(--cols);column-gap:12px;font-size:var(--fs);line-height:1.4}
.chu-t{break-inside:avoid;margin:0 0 12px;border:1.5px solid #14213D;border-radius:8px;overflow:hidden;background:#fff}
.chu-t h3{margin:0;padding:4px 10px;font:800 10.5pt/1.2 var(--f-display);color:#fff;letter-spacing:0}
.chu-t ul{margin:0;padding:8px 10px 4px 22px}
.chu-t li{margin:0 0 5px}
.chu-t b{font-weight:800}
.chu-trick{border-style:dashed}
.chu-trick h3{background:#14213D}
@media screen and (max-width:900px){#chu{--cols:1!important}}
@media print{
  @page{size:A4;margin:7mm}
  body{background:#fff!important}
  header.top,nav.side,.scrim,.chu-bar,.chu-head,.skip{display:none!important}
  .shell{display:block!important}
  main{padding:0!important;max-width:none!important}
  .chu-paper{border:0;box-shadow:none;padding:0;border-radius:0}
  .chu-t,.chu-t h3{-webkit-print-color-adjust:exact;print-color-adjust:exact}
}`;
  if (!document.getElementById("chu-style")) {
    const st = document.createElement("style");
    st.id = "chu-style";
    st.textContent = css;
    document.head.appendChild(st);
  }

  window.mountChuleta = function (root, course) {
    const pack = course === "redaccion" ? RED : BIO;
    const secs = pack.sections
      .map(
        (x) =>
          `<section class="chu-t"><h3 style="background:${x.c}">${x.n}. ${x.t}</h3><ul>${x.l
            .map((i) => `<li>${i}</li>`)
            .join("")}</ul></section>`,
      )
      .join("");
    const trick = `<section class="chu-t chu-trick"><h3>${pack.trickTitle}</h3><ul>${pack.tricks
      .map((i) => `<li>${i}</li>`)
      .join("")}</ul></section>`;
    root.innerHTML = `<div id="chu">
      <div class="chu-head"><h1 style="margin-bottom:.3em">Resumen para imprimir</h1>
      <p class="muted" style="margin-top:0">En el cuadro de impresión elige A4 y «Guardar como PDF». El menú no sale en el papel.</p></div>
      <div class="chu-bar">
        <button class="btn" type="button" id="chuPrint">Imprimir o guardar PDF</button>
        <label>Letra <select id="chuFs"><option value="8.6pt">Pequeña</option><option value="9.5pt" selected>Normal</option><option value="11pt">Grande</option></select></label>
        <label>Columnas <select id="chuCols"><option value="1">1</option><option value="2" selected>2</option><option value="3">3</option></select></label>
      </div>
      <div class="chu-paper">
        <div class="chu-title"><span>${pack.title}</span><small>${pack.sub}</small></div>
        <div class="chu-cols">${secs}${trick}</div>
      </div></div>`;
    const box = root.querySelector("#chu");
    root.querySelector("#chuPrint").onclick = () => window.print();
    root.querySelector("#chuFs").onchange = (e) => box.style.setProperty("--fs", e.target.value);
    root.querySelector("#chuCols").onchange = (e) => box.style.setProperty("--cols", e.target.value);
  };
})();
