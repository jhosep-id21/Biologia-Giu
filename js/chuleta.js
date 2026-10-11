/* Chuleta imprimible · Biología general
   Se agrega con UNA línea en index.html, DESPUÉS de app.js:
   <script src="js/chuleta.js"></script>
   No modifica ningún otro archivo. */
(function(){
'use strict';
const ROUTE='#/chuleta';

/* ───────── Contenido (editable) ───────── */
const T=[
 {n:1,c:'#0E9F8E',t:'Fundamentos de la Biología',l:[
  '<b>Biología:</b> del griego <i>bios</i> (vida) + <i>logos</i> (estudio). Ciencia natural que estudia el origen, la evolución, la estructura y el funcionamiento de los seres vivos.',
  '<b>Enfoque científico:</b> observación, experimentación y análisis de datos. <b>Carácter integrador:</b> se relaciona con la química, la física y la geología.',
  '<b>Características de los seres vivos:</b> organización, nutrición, crecimiento, reproducción, <b>homeostasis</b> (equilibrio interno) y evolución.',
  '<b>Niveles de organización:</b> molécula → célula → tejido → órgano → organismo.',
  '<b>Ramas:</b> Botánica (plantas) · Zoología (animales) · Genética (herencia y variación) · Ecología (seres vivos y su ambiente) · Microbiología (microorganismos) · Anatomía (estructura de los organismos).',
  '<b>Teoría celular:</b> 1) todos los seres vivos están formados por una o más células; 2) la célula es la unidad estructural y funcional de la vida; 3) toda célula proviene de otra célula preexistente.',
  '<b>Importancia:</b> medicina · agricultura · conservación.']},
 {n:2,c:'#6B4EFF',t:'Introducción a la biología',l:[
  '<b>Método científico:</b> da conocimiento objetivo, verificable y replicable. Pasos: observación → pregunta → hipótesis → experimento → análisis → conclusión. <i>No es rígido ni lineal.</i>',
  '<b>Generación espontánea:</b> la vida surgiría de materia inerte. <b>Refutada</b> por <b>Redi (1668)</b> y <b>Pasteur (1862)</b>.',
  '<b>Biogénesis:</b> todo ser vivo proviene de otro ser vivo preexistente.',
  '<b>Oparin (1938), teoría bioquímica:</b> la vida surgió por la evolución gradual de moléculas orgánicas en la atmósfera primitiva.',
  '<b>Miller y Urey (1953):</b> demostraron experimentalmente la síntesis de compuestos orgánicos en condiciones simuladas de la Tierra primitiva.',
  '<b>Arrhenius (1908):</b> la vida, o sus precursores, pudo llegar del espacio exterior (panspermia).',
  '<b>Características:</b> organización celular, homeostasis, crecimiento y desarrollo, reproducción y herencia, <b>irritabilidad</b> (respuesta a estímulos), adaptación y evolución.',
  '<b>12 niveles de organización:</b> subatómico, atómico, molecular, celular, tisular, órgano, sistema de órganos, organismo, población, comunidad, ecosistema, biosfera.']},
 {n:3,c:'#2F80ED',t:'Principios químicos de la vida',l:[
  '<b>Agua (~70 % del cuerpo):</b> disolvente universal. Sus propiedades: <b>polaridad</b> (disuelve solutos iónicos y polares) · <b>puentes de hidrógeno</b> (cohesión) · <b>elevado calor específico</b> (estabiliza la temperatura) · <b>cohesión y adhesión</b> (capilaridad).',
  '<b>Sales minerales:</b> se separan en iones (electrolitos) y regulan la presión osmótica, el pH y la actividad enzimática. <b>Macro:</b> huesos y músculos, equilibrio hídrico y nervios. <b>Micro:</b> oxígeno en la hemoglobina, hormonas tiroideas, cofactores de enzimas.',
  '<b>Carbohidratos:</b> C, H y O (1 : 2 : 1); energía y estructura. Mono: glucosa, fructosa · Di: sacarosa, lactosa · Poli: glucógeno, almidón, celulosa.',
  '<b>Lípidos:</b> apolares e hidrofóbicos. Triglicéridos (reserva) · fosfolípidos (bicapa de la membrana) · esteroides (hormonas, colesterol).',
  '<b>Proteínas:</b> su secuencia de aminoácidos (estructura primaria) decide el plegamiento. Niveles: primaria, secundaria, terciaria y cuaternaria. <i>Estructura correcta = función correcta.</i>',
  '<b>ADN:</b> doble cadena helicoidal, A–T y C–G, almacena la información genética. <b>ARN:</b> cadena simple, A–U y C–G, transcribe y traduce.']},
 {n:4,c:'#E63E8B',t:'La célula',l:[
  '<b>Teoría celular:</b> unidad estructural · unidad funcional · continuidad celular (<i>omnis cellula e cellula</i>).',
  '<b>Historia:</b> Hooke 1665 (nombró «células» en el corcho) · Leeuwenhoek 1674 (células vivas) · Schleiden 1838 (plantas) · Schwann 1839 (animales) · Virchow 1855 (toda célula viene de otra).',
  '<b>Procariota:</b> sin núcleo definido (ADN en el <b>nucleoide</b>), 1–10 µm, sin organelos membranosos, pared de peptidoglicano, ribosomas <b>70S</b>. Ej.: bacterias, arqueas.',
  '<b>Eucariota:</b> núcleo verdadero (con envoltura nuclear), 10–100 µm, organelos membranosos, ribosomas <b>80S</b>. Ej.: animales, plantas, hongos, protistas.',
  '<b>Organelos:</b> Núcleo (ADN, regula la célula) · Mitocondria (respiración celular, ATP) · RE rugoso (proteínas) y liso (lípidos, detoxificación) · Golgi (modifica, clasifica y empaqueta) · Lisosomas (digieren) · Cloroplastos (fotosíntesis) · Citoesqueleto (soporte y movimiento).',
  '<b>Membrana:</b> modelo del mosaico fluido (Singer y Nicolson): bicapa fosfolipídica con proteínas.',
  '<b>Transporte pasivo</b> (sin ATP, a favor del gradiente): difusión simple, difusión facilitada, ósmosis. <b>Activo</b> (con ATP, en contra): bomba Na⁺/K⁺. <b>En masa:</b> endocitosis (fagocitosis, pinocitosis) y exocitosis.']},
 {n:5,c:'#F08A24',t:'Procesos metabólicos',l:[
  '<b>Enzimas:</b> proteínas catalizadoras; bajan la <b>energía de activación</b> (ajuste inducido). Dependen de la temperatura (el exceso desnaturaliza), el pH y la concentración de sustrato.',
  '<b>ATP:</b> moneda energética de la célula. ATP + H₂O → ADP + Pi + energía.',
  '<b>Respiración celular</b> (con O₂): glucólisis (citoplasma, 2 ATP) → ciclo de Krebs (matriz mitocondrial) → cadena transportadora (membrana interna). Total: ~36–38 ATP.',
  '<b>Fermentación</b> (sin O₂, 2 ATP): <b>láctica</b> (ácido láctico: músculo, yogur) · <b>alcohólica</b> (etanol + CO₂: levaduras, pan, vino).',
  '<b>Fotosíntesis:</b> <b>fase luminosa</b> (tilacoides: luz y agua → O₂, ATP y NADPH) · <b>fase oscura o ciclo de Calvin</b> (estroma: CO₂ → glucosa).',
  '<b>Comparación:</b> respiración = con O₂, mitocondria, ~36–38 ATP · fermentación = sin O₂, citoplasma, 2 ATP · fotosíntesis = libera O₂, cloroplasto, produce glucosa.']},
 {n:6,c:'#3FA34D',t:'Biología molecular y herencia',l:[
  '<b>ADN:</b> nucleótidos (desoxirribosa + fosfato + base A, T, C o G), doble hélice. Complementariedad A–T y C–G (A-T-C-G → T-A-G-C).',
  '<b>ARN:</b> ARNm (lleva la información del ADN a los ribosomas) · ARNr (forma los ribosomas). Tiene <b>uracilo (U)</b> en vez de timina.',
  '<b>Gen:</b> segmento de ADN con la información para una proteína o un ARN. <b>Cromosoma:</b> ADN + histonas; organiza y compacta. Humanos: 46 en células somáticas.',
  '<b>Dogma central:</b> ADN → ARN → proteína. <b>Transcripción</b> (núcleo): ADN → ARNm. <b>Traducción</b> (ribosoma): los <b>codones</b> (3 bases) forman los aminoácidos.',
  '<b>AUG</b> inicia la traducción. El código genético es <b>degenerado</b> (varios codones = el mismo aminoácido). Un cambio en una base puede alterar la proteína.',
  '<b>Mendel</b> (guisantes): <b>segregación</b> (los alelos se separan al formar gametos; cada gameto recibe uno) y <b>distribución independiente</b>.',
  '<b>Cruce monohíbrido</b> (A amarilla dominante, a verde recesiva): Aa × Aa → 1 AA : 2 Aa : 1 aa; fenotipos 3 : 1 (proporción teórica).',
  '<b>Genotipo:</b> alelos que posee (AA, Aa, aa). <b>Fenotipo:</b> característica observable (genotipo + ambiente).']},
 {n:7,c:'#D9A400',t:'Ciclo celular y reproducción',l:[
  '<b>Ciclo celular:</b> G1 (crecimiento) → S (copia del ADN) → G2 (preparación) → M (división). Puntos de control: G1/S, G2/M y huso mitótico. Neuronas maduras: G0.',
  '<b>Mitosis:</b> división del núcleo → 2 células hijas idénticas (2n = 46). Sirve para crecer y reparar tejidos. Profase → Metafase → Anafase → Telofase → citocinesis.',
  '<b>Meiosis:</b> reduce a la mitad los cromosomas. Meiosis I (separa homólogos) y Meiosis II (separa cromátidas). Resultado: 4 células haploides distintas (n = 23). Variabilidad por <b>entrecruzamiento</b> y distribución independiente.',
  '<b>Mitosis vs. meiosis:</b> somáticas | germinales · 1 división | 2 divisiones · 2 idénticas | 4 distintas · 2n | n · sin variabilidad | alta variabilidad.',
  '<b>Reproducción asexual:</b> un progenitor, sin gametos, descendencia similar. Fisión (bacterias) · gemación (levaduras) · fragmentación · vegetativa (estolones de fresa).',
  '<b>Reproducción sexual:</b> gametos (meiosis) → fecundación → cigoto → desarrollo. Genera combinaciones genéticas nuevas.',
  '<b>Desarrollo biológico:</b> fecundación → cigoto → segmentación → gastrulación → diferenciación. <b>Continuidad de la vida:</b> transmisión del material genético entre generaciones.']}
];
const TRICK=[
 '<b>Casos en 4 pasos:</b> 1) subraya las pistas · 2) nombra el concepto · 3) explica qué es, qué hace y su resultado · 4) concluye y responde la pregunta.',
 '<b>Caso del examen:</b> la herida que cicatriza = <b>mitosis</b> (misma cantidad de cromosomas) · hijos parecidos pero distintos = <b>meiosis + fecundación</b> (reproducción sexual) · asexual = un solo progenitor, sin gametos.',
 '<b>Verdadero/Falso:</b> desconfía de «siempre», «nunca» y «solo».',
 '<b>No confundir:</b> mitosis ≠ meiosis · ADN ≠ ARN · procariota ≠ eucariota · genotipo ≠ fenotipo.'
];

/* ───────── Estilos (pantalla + impresión) ───────── */
const css=`
#chu{--cols:2;--fs:9.5pt}
.chu-bar{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:0 0 16px}
.chu-bar label{font-weight:600;font-size:.9rem;display:flex;gap:6px;align-items:center}
.chu-bar select{padding:4px 8px;border:2px solid var(--line);border-radius:10px;background:var(--card);color:var(--ink)}
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
@media screen and (min-width:901px) and (max-width:1200px){#chu{--cols:2!important}}
@media print{
  @page{size:A4;margin:7mm}
  body{background:#fff!important}
  header.top,nav.side,.scrim,.chu-bar,.chu-head,.skip{display:none!important}
  .shell{display:block!important}
  main{padding:0!important;max-width:none!important}
  .chu-paper{border:0;box-shadow:none;padding:0;border-radius:0}
  .chu-t,.chu-t h3{-webkit-print-color-adjust:exact;print-color-adjust:exact}
}`;
const st=document.createElement('style');st.textContent=css;document.head.append(st);

/* ───────── Vista ───────── */
function render(){
  const link=document.getElementById('lnkChuleta');
  if(location.hash!==ROUTE){if(link)link.classList.remove('on');return;}
  if(link)link.classList.add('on');
  const main=document.getElementById('main');
  const secs=T.map(x=>`<section class="chu-t"><h3 style="background:${x.c}">Tema ${x.n} · ${x.t}</h3><ul>${x.l.map(i=>`<li>${i}</li>`).join('')}</ul></section>`).join('');
  const trick=`<section class="chu-t chu-trick"><h3>Para resolver tu vida okno, es para el examen.</h3><ul>${TRICK.map(i=>`<li>${i}</li>`).join('')}</ul></section>`;
  main.innerHTML=`<div id="chu">
    <div class="chu-head"><h1 style="margin-bottom:.3em">Resumen para imprimir</h1>
    <p class="muted" style="margin-top:0">Ojalá apruebes jajaja. En el cuadro de impresión elige «Guardar como PDF» o tu impresora, tamaño A4 y, si quieres ahorrar, activa «Escala de grises».</p></div>
    <div class="chu-bar">
      <button class="btn" type="button" id="chuPrint">🖨️ Imprimir / guardar PDF</button>
      <label>Letra <select id="chuFs"><option value="8.6pt">Pequeña</option><option value="9.5pt" selected>Normal</option><option value="11pt">Grande</option></select></label>
      <label>Columnas <select id="chuCols"><option value="2" selected>2</option><option value="3">3</option></select></label>
    </div>
    <div class="chu-paper">
      <div class="chu-title"><span>Biología general · Resumen de repaso</span><small>Temas 1 a 7</small></div>
      <div class="chu-cols">${secs}${trick}</div>
    </div></div>`;
  const root=document.getElementById('chu');
  document.getElementById('chuPrint').onclick=()=>window.print();
  document.getElementById('chuFs').onchange=e=>root.style.setProperty('--fs',e.target.value);
  document.getElementById('chuCols').onchange=e=>{root.style.setProperty('--cols',e.target.value);};
  document.title='Chuleta · Biología general';window.scrollTo(0,0);
}

/* ───────── Enlace en el menú ───────── */
function addLink(){
  const nav=document.getElementById('side');
  if(!nav||document.getElementById('lnkChuleta'))return;
  const a=document.createElement('a');a.id='lnkChuleta';a.className='side-link';a.href=ROUTE;a.textContent='Resumen para imprimir';
  nav.append(a);
}
window.addEventListener('hashchange',render);
addLink();render();
})();