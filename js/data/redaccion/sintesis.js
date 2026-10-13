/* Práctica de resumen → síntesis (Redacción). Se carga DESPUÉS de redaccion/temas.js.
   Añade t.sintesis a cada tema y amplía la guía con tips de síntesis. */
(function(){
'use strict';
const T = window.REDACCION_TEMAS || [];
const by = id => T.find(t => t.id === id);

by(1).sintesis = [{
 id:'s1', titulo:'Resume la sumilla', desc:'Del texto base haz primero tu resumen (qué dice) y luego tu síntesis en una oración (qué concluyes tú, citando).',
 fuentes:[{ref:'Texto base · sumilla del curso', texto:'Redacción y comprensión de textos es un curso teórico-práctico de formación general. Desarrolla competencias cognitivas para comprender textos escritos y usar el lenguaje académico con precisión. No basta con leer rápido ni con copiar: hay que relacionar ideas y escribir con sentido.'}],
 consigna:['1) Escribe tu resumen en 2 o 3 líneas: conserva lo esencial y elimina lo secundario.','2) Escribe tu síntesis en 1 oración: tu conclusión a partir del texto, citando la fuente.'],
 claves:[
  {label:'Menciona que es teórico-práctico', words:['teorico-practico','teórico-práctico','teorico practico']},
  {label:'Menciona comprender textos / lenguaje académico', words:['comprender','lenguaje academico','lenguaje académico']},
  {label:'Dice que no basta leer rápido ni copiar', words:['no basta','copiar','leer rapido','leer rápido']},
  {label:'Menciona relacionar ideas', words:['relacionar','relacion']}
 ],
 modeloResumen:'El curso, teórico-práctico, busca desarrollar la comprensión de textos y el uso preciso del lenguaje académico, relacionando ideas en vez de leer rápido o copiar.',
 modeloSintesis:'Comprender un texto exige un trabajo activo con las ideas, no solo velocidad o copia (Sumilla del curso).',
 tips:['Resume con tus palabras: si solo copiaste oraciones, vuelve a intentarlo.','Tu síntesis debe decir algo que el texto por sí solo no dice literalmente, pero sin contradecirlo.']
}];

by(2).sintesis = [{
 id:'s2', titulo:'Resume y quédate con la idea', desc:'Resume el párrafo y formula su idea principal en una oración completa.',
 fuentes:[{ref:'Texto base · párrafo de práctica', texto:'La lectura es fundamental para el aprendizaje. Permite adquirir nuevos conocimientos y mejorar la comprensión. Además, ayuda a desarrollar el pensamiento crítico. En conclusión, leer es una actividad esencial.'}],
 consigna:['1) Resume el párrafo en 1 o 2 líneas (suprime ejemplos y repeticiones).','2) Formula la idea principal como afirmación completa.'],
 claves:[
  {label:'Conserva que la lectura es fundamental / esencial', words:['fundamental','esencial']},
  {label:'Menciona conocimientos o comprensión', words:['conocimiento','comprension','comprensión']},
  {label:'Menciona pensamiento crítico', words:['pensamiento critico','pensamiento crítico','critico']},
  {label:'No introduce un tema nuevo', words:['lectura','leer']}
 ],
 modeloResumen:'La lectura es fundamental para el aprendizaje porque da conocimientos, mejora la comprensión y desarrolla el pensamiento crítico.',
 modeloSintesis:'Idea principal: la lectura fortalece el aprendizaje universitario.',
 tips:['Si tu resumen es más largo que el texto, suprime más.','La idea principal es UNA afirmación: si escribiste tres, jerarquiza.']
}];

by(3).sintesis = [{
 id:'s3', titulo:'Resumen literal con evidencia', desc:'Resume solo lo que el texto dice, sin opinar ni inferir.',
 fuentes:[{ref:'Texto base · campaña de lectura', texto:'Durante el mes de agosto, un grupo de estudiantes de Educación Inicial realizó una campaña de promoción de la lectura en una institución educativa de Trujillo. La actividad estuvo dirigida a niños de cinco años. Las estudiantes utilizaron cuentos ilustrados, títeres y tarjetas con imágenes. Al finalizar, cada niño eligió el cuento que más le había gustado.'}],
 consigna:['1) Resume el texto en 2 líneas con datos verificables (cuándo, quiénes, qué, cierre).','2) Escribe una oración de síntesis: qué demuestra este caso sobre la promoción lectora.'],
 claves:[
  {label:'Fecha: agosto', words:['agosto']},
  {label:'Destinatarios: niños de cinco años', words:['cinco']},
  {label:'Materiales: cuentos, títeres y tarjetas', words:['cuento','titere','títere','tarjeta']},
  {label:'Cierre: cada niño eligió un cuento', words:['elig']}
 ],
 modeloResumen:'En agosto, estudiantes de Inicial hicieron en Trujillo una campaña para niños de cinco años con cuentos, títeres y tarjetas; al final cada niño eligió su cuento.',
 modeloSintesis:'El caso muestra que la promoción lectora funciona con materiales variados y elección libre del niño.',
 tips:['Todo dato de tu resumen debe poder señalarse en el texto.','«Estaban emocionados» NO es literal si el texto no lo dice: bórralo.']
}];

by(4).sintesis = [{
 id:'s4', titulo:'Del resumen a la inferencia', desc:'Resume lo explícito y formula UNA inferencia justificada con su pista.',
 fuentes:[{ref:'Texto base · dos grupos de lectura', texto:'Diversos estudiantes manifiestan dificultades con textos académicos extensos. Quienes hacían lectura rápida y continua recordaban algunos datos, pero les costaba explicar las relaciones entre las ideas. Quienes hacían pausas para preguntar, relacionar y comprobar explicaban mejor las ideas centrales y notaban cuándo releer.'}],
 consigna:['1) Resume en 2 líneas lo que el texto dice de cada grupo.','2) Formula tu inferencia en 1 oración + la pista que la sostiene.'],
 claves:[
  {label:'Contrasta lectura rápida continua y lectura con pausas', words:['rapida','rápida','pausa','pregunt']},
  {label:'Dice que unos recuerdan datos y otros explican relaciones', words:['datos','relacion','explica']},
  {label:'Menciona estrategias o releer', words:['estrateg','releer']}
 ],
 modeloResumen:'La lectura rápida deja datos sueltos sin explicar relaciones; pausar para preguntar, relacionar y comprobar permite explicar mejor y saber qué releer.',
 modeloSintesis:'Infiero que comprender depende de las estrategias durante la lectura, no solo de avanzar rápido; la pista es que el segundo grupo explica y detecta qué releer.',
 tips:['Tu inferencia necesita pista citada: sin pista es adivinanza.','Usa «pudo contribuir» en vez de «fue la única causa».']
}];

by(5).sintesis = [{
 id:'s5', titulo:'Resume el argumento', desc:'Resume tesis, razones y evidencias, y cierra con tu síntesis valorativa.',
 fuentes:[{ref:'Texto base · celulares en clase', texto:'Los estudiantes usan todo el tiempo recursos digitales para estudiar. Por ello, la alfabetización digital debe incorporarse en toda la universidad. Quienes usan estrategias para evaluar lo que leen comprenden mejor, según un estudio que comparó su desempeño antes y después de entrenarlas.'}],
 consigna:['1) Resume en 2-3 líneas: tesis, razón y evidencia.','2) Sintetiza en 1 oración: ¿la evidencia basta para la tesis?'],
 claves:[
  {label:'Tesis: alfabetización digital en toda la universidad', words:['alfabetizacion','alfabetización','universidad']},
  {label:'Razón: usan recursos digitales / evaluar lo que leen', words:['digital','evaluar']},
  {label:'Evidencia: estudio antes-después', words:['estudio','antes','despues','después','desempeño']},
  {label:'Valora si la evidencia es suficiente', words:['suficiente','insuficiente','basta','no basta','limite','límite']}
 ],
 modeloResumen:'La tesis es incorporar la alfabetización digital en la universidad porque los estudiantes estudian con recursos digitales y quienes evalúan lo que leen comprenden mejor, según un estudio antes-después.',
 modeloSintesis:'La razón es pertinente, pero la evidencia citada es parcial: habría que ver muestra y contexto antes de generalizar a toda la universidad.',
 tips:['Separa con etiquetas: Tesis / Razón / Evidencia / Mi valoración.','Una anécdota o un estudio sin datos no basta para un «todos».']
}];

by(6).sintesis = [{
 id:'s6', titulo:'Resume con skimming y verifica con scanning', desc:'Primero capta lo global, luego verifica un dato puntual.',
 fuentes:[{ref:'Texto base · artículo sobre juego', texto:'La importancia del juego en el desarrollo infantil. El juego libre con materiales simples desarrolla el lenguaje, la autorregulación y el pensamiento simbólico. En aulas andinas la naturaleza y la comunidad son los primeros mediadores; en aulas urbanas, la diversidad del grupo. El artículo se publicó en 2021 y cita un seguimiento de tres años a 120 niños.'}],
 consigna:['1) Resume la idea global en 2 líneas (skimming: ¿de qué trata?).','2) Responde con scanning: ¿año, muestra y duración del seguimiento?'],
 claves:[
  {label:'Idea global: juego y desarrollo infantil', words:['juego','desarrollo']},
  {label:'Menciona lenguaje, autorregulación o simbólico', words:['lenguaje','autorregulacion','autorregulación','simbolico','simbólico']},
  {label:'Dato: 2021', words:['2021']},
  {label:'Dato: 120 niños y tres años', words:['120','tres','3']}
 ],
 modeloResumen:'El artículo sostiene que el juego libre desarrolla lenguaje, autorregulación y pensamiento simbólico, con mediadores distintos según el territorio.',
 modeloSintesis:'Lo global se capta con skimming; los datos (2021, 120 niños, tres años) solo se aseguran con scanning.',
 tips:['Skimming responde «¿de qué trata?»; scanning responde «¿dónde está el dato?».','Si tu resumen trae cifras que no verificaste, márcalas y vuelve al texto.']
}];

by(7).sintesis = [
 {
  id:'s7a', titulo:'Aplica las macrorreglas', desc:'Reduce el ejemplo sin perder la idea: suprime, generaliza e integra.',
  fuentes:[{ref:'Texto base · ejemplo de clase', texto:'María compró lápices rojos, azules, verdes y amarillos para realizar su trabajo. Los niños utilizaron témperas, crayones y plumones en el taller. La estudiante buscó información, la seleccionó y redactó su informe.'}],
  consigna:['1) Reescribe cada oración aplicando suprimir, generalizar e integrar.','2) Explica qué macrorregla usaste en cada caso.'],
  claves:[
   {label:'Suprime colores: María compró lápices para su trabajo', words:['maria','maría','lapices','lápices','trabajo']},
   {label:'Generaliza: materiales artísticos', words:['materiales','artisticos','artísticos']},
   {label:'Integra: investigó / hizo su informe', words:['investigo','investigó','informe','redacto','redactó','seleccion']}
  ],
  modeloResumen:'María compró lápices para su trabajo. Los niños usaron materiales artísticos. La estudiante investigó y redactó su informe.',
  modeloSintesis:'Suprimir quita detalles, generalizar agrupa en una categoría e integrar funde pasos en una idea.',
  tips:['Suprimir no borra la idea principal: si desapareció, te pasaste.','Generalizar exige una categoría real, no una palabra comodín.']
 },
 {
  id:'s7b', titulo:'Síntesis de dos autores + paráfrasis', desc:'Integra dos voces en un párrafo tuyo, con citas y sin copiar.',
  fuentes:[
   {ref:'Autor A · Cassany (1999)', texto:'Escribir se construye planificando y revisando; no basta acumular información.'},
   {ref:'Autor B · Solé (2012)', texto:'La competencia lectora sigue desarrollándose según las situaciones de aprendizaje.'}
  ],
  consigna:['1) Resume cada autor en 1 línea con tus palabras (paráfrasis + cita).','2) Redacta tu síntesis: relaciona ambas ideas en un párrafo con las dos citas.'],
  claves:[
   {label:'Resume a Cassany: planificar y revisar', words:['cassany','planific','revisar']},
   {label:'Resume a Solé: la lectura se sigue desarrollando', words:['sole','solé','desarrolla']},
   {label:'Relaciona escritura y lectura', words:['relacion','integra','lectura','escritura']},
   {label:'Menciona citar a ambos', words:['cit','1999','2012']}
  ],
  modeloResumen:'Cassany (1999): escribir exige planificar y revisar, no acumular. Solé (2012): la competencia lectora evoluciona con cada situación.',
  modeloSintesis:'Planificar y revisar lo escrito (Cassany, 1999) exige una lectura que también se regula y sigue desarrollándose en cada situación (Solé, 2012).',
  tips:['Pegar dos frases no es síntesis: tu oración final debe relacionarlas.','Paráfrasis = reconstruir la idea + citar; cambiar sinónimos no basta.','Planifica, monitorea y evalúa tu lectura: si no puedes explicar la relación, relee.']
 }
];

/* ── Guía ampliada: tips de síntesis ── */
if (window.GUIA_RED) {
 const G = window.GUIA_RED;
 G.trucos = [
  ['Completar','Lee la oración entera. Casi siempre falta un término de la sesión: estructura, literal, inferencia, tesis, skimming o macrorregla. Si dudas, pregunta qué concepto repetía esa clase.'],
  ['Marcar','Descarta lo que cambia de nivel. Los trucos clásicos son <b>tema / idea principal / tesis</b>, <b>explícito / inferido</b>, <b>razón / evidencia</b> y <b>resumen / síntesis</b>.'],
  ['Verdadero o falso','Desconfía de <b>siempre</b>, <b>nunca</b>, <b>solo</b> y <b>basta con</b>. «Releer es leer mal» o «correlación es causa» suelen ser falsos.'],
  ['Resumir','Aplica las macrorreglas: <b>suprime</b> detalles, <b>generaliza</b> en categorías e <b>integra</b> pasos en una idea. Si tu resumen es más largo que el texto, suprime más.'],
  ['Sintetizar','Relaciona dos o más fuentes en <b>tu</b> oración + <b>citas</b>. Pegar frases no es síntesis. La paráfrasis también se cita.'],
  ['No copiar','Escribe con tus palabras y verifica: ¿se mantiene la idea del autor? ¿cité cada voz? ¿mi conclusión no contradice las fuentes?']
 ];
 G.sintesis = {
  pasos:[
   ['Resume cada fuente','Una fuente por vez: idea esencial con tus palabras, sin copiar oraciones. Usa suprimir, generalizar e integrar.'],
   ['Compara las voces','¿Coinciden, se complementan o se tensan? Nombra la relación en una frase: «ambos piden regular el proceso», «A pone el plan y B el desarrollo».'],
   ['Redacta tu síntesis','Un párrafo tuyo que integre: la relación + cada idea con su cita (Autor, año). Tu voz organiza; las fuentes respaldan.'],
   ['Verifica integridad','¿Cité cada idea ajena? ¿La paráfrasis reconstruye de verdad? ¿Mi conclusión no va más allá de lo que las fuentes permiten?']
  ],
  checklist:['Mi resumen es más corto que el texto','No copié oraciones enteras','Cada idea ajena tiene su cita','Mi oración final relaciona, no solo junta','Puedo explicar la relación sin leer'],
  plantilla:'RESUMEN (fuente 1): ______ (2 líneas, idea esencial).\nSÍNTESIS: ______ (mi oración que relaciona) (Autor A, año; Autor B, año).\nVERIFICO: ¿cité todo? ¿no copié? ¿no me pasé?'
 };
}
/* ── Bancos para el examen general: resumen, síntesis e ideas (sin repetir) ── */
window.RED_EXAMEN = {
 resumen: T.flatMap(t => (t.sintesis || []).slice(0, 1).map(s => ({
  id: 'r-' + s.id, tid: t.id, titulo: s.titulo,
  fuente: s.fuentes[0], claves: s.claves, modelo: s.modeloResumen
 }))),
 sintesis: T.flatMap(t => (t.sintesis || []).map(s => ({ id: s.id, tid: t.id, data: s }))),
 ideas: [
  {id:'i1', tid:1, titulo:'Idea del sílabo',
   texto:'Redacción y comprensión de textos es un curso teórico-práctico de formación general. Desarrolla competencias cognitivas para comprender textos escritos y usar el lenguaje académico con precisión. No basta con leer rápido ni con copiar: hay que relacionar ideas y escribir con sentido.',
   principal:{label:'Idea principal: el curso desarrolla comprensión y lenguaje académico', words:['comprension','comprensión','lenguaje academico','lenguaje académico']},
   secundarias:[
    {label:'Es teórico-práctico', words:['teorico-practico','teórico-práctico','teorico practico']},
    {label:'Hay que relacionar ideas, no copiar', words:['relacionar','copiar','no basta']}
   ],
   modeloPrincipal:'El curso desarrolla la comprensión de textos y el uso preciso del lenguaje académico.',
   modeloSecundarias:'Es teórico-práctico; exige relacionar ideas en vez de leer rápido o copiar.'},
  {id:'i2', tid:2, titulo:'Idea del párrafo',
   texto:'La lectura es fundamental para el aprendizaje. Permite adquirir nuevos conocimientos y mejorar la comprensión. Además, ayuda a desarrollar el pensamiento crítico. En conclusión, leer es una actividad esencial.',
   principal:{label:'Idea principal: la lectura fortalece el aprendizaje', words:['fundamental','fortalece','esencial','aprendizaje']},
   secundarias:[
    {label:'Da conocimientos y comprensión', words:['conocimiento','comprension','comprensión']},
    {label:'Desarrolla el pensamiento crítico', words:['pensamiento critico','pensamiento crítico','critico']}
   ],
   modeloPrincipal:'La lectura fortalece el aprendizaje universitario.',
   modeloSecundarias:'Aporta conocimientos, mejora la comprensión y desarrolla el pensamiento crítico.'},
  {id:'i3', tid:3, titulo:'Idea de la campaña',
   texto:'Durante el mes de agosto, un grupo de estudiantes de Educación Inicial realizó una campaña de promoción de la lectura en una institución educativa de Trujillo. La actividad estuvo dirigida a niños de cinco años. Las estudiantes utilizaron cuentos ilustrados, títeres y tarjetas con imágenes. Al finalizar, cada niño eligió el cuento que más le había gustado.',
   principal:{label:'Idea principal: campaña de agosto para niños de cinco años', words:['agosto','cinco','campaña']},
   secundarias:[
    {label:'Materiales: cuentos, títeres y tarjetas', words:['cuento','titere','títere','tarjeta']},
    {label:'Cierre: cada niño eligió un cuento', words:['elig']}
   ],
   modeloPrincipal:'En agosto se hizo en Trujillo una campaña lectora para niños de cinco años.',
   modeloSecundarias:'Usaron cuentos, títeres y tarjetas; al final cada niño eligió su cuento.'},
  {id:'i4', tid:4, titulo:'Idea de los dos grupos',
   texto:'Diversos estudiantes manifiestan dificultades con textos académicos extensos. Quienes hacían lectura rápida y continua recordaban algunos datos, pero les costaba explicar las relaciones entre las ideas. Quienes hacían pausas para preguntar, relacionar y comprobar explicaban mejor las ideas centrales y notaban cuándo releer.',
   principal:{label:'Idea principal: las estrategias explican la comprensión', words:['estrateg','comprension','comprensión','explica']},
   secundarias:[
    {label:'La lectura rápida deja solo datos', words:['rapida','rápida','datos']},
    {label:'Las pausas permiten explicar y releer', words:['pausa','releer','explica']}
   ],
   modeloPrincipal:'Comprender depende de las estrategias usadas durante la lectura.',
   modeloSecundarias:'Lo rápido deja datos sueltos; pausar para preguntar y comprobar permite explicar y releer.'},
  {id:'i5', tid:5, titulo:'Idea del argumento',
   texto:'Los estudiantes usan todo el tiempo recursos digitales para estudiar. Por ello, la alfabetización digital debe incorporarse en toda la universidad. Quienes usan estrategias para evaluar lo que leen comprenden mejor, según un estudio que comparó su desempeño antes y después de entrenarlas.',
   principal:{label:'Idea principal: alfabetización digital en la universidad', words:['alfabetizacion','alfabetización','universidad']},
   secundarias:[
    {label:'Estudian con recursos digitales', words:['digital']},
    {label:'Un estudio antes-después lo respalda', words:['estudio','antes','despues','después']}
   ],
   modeloPrincipal:'La alfabetización digital debe incorporarse en toda la universidad.',
   modeloSecundarias:'Los estudiantes estudian en digital y un estudio antes-después muestra mejor comprensión.'},
  {id:'i6', tid:6, titulo:'Idea del juego',
   texto:'La importancia del juego en el desarrollo infantil. El juego libre con materiales simples desarrolla el lenguaje, la autorregulación y el pensamiento simbólico. En aulas andinas la naturaleza y la comunidad son los primeros mediadores; en aulas urbanas, la diversidad del grupo. El artículo se publicó en 2021 y cita un seguimiento de tres años a 120 niños.',
   principal:{label:'Idea principal: el juego libre desarrolla al niño', words:['juego','desarrollo','desarrolla']},
   secundarias:[
    {label:'Lenguaje, autorregulación y simbólico', words:['lenguaje','autorregulacion','autorregulación','simbolico','simbólico']},
    {label:'Mediadores según el territorio', words:['andina','urbana','amazonica','amazónica','territorio','mediador']}
   ],
   modeloPrincipal:'El juego libre desarrolla el lenguaje, la autorregulación y lo simbólico.',
   modeloSecundarias:'Los mediadores cambian por territorio; el dato viene de un seguimiento de tres años.'},
  {id:'i7', tid:7, titulo:'Idea de resumir y sintetizar',
   texto:'Resumir es seleccionar y reconstruir lo esencial de un texto con tus palabras. Sintetizar es relacionar información de varias fuentes en un criterio nuevo. Ambos requieren comprender y reorganizar; ninguno consiste en copiar información.',
   principal:{label:'Idea principal: resumir y sintetizar exigen comprender, no copiar', words:['comprender','comprender','copiar','reorganizar']},
   secundarias:[
    {label:'Resumen: un texto, lo esencial', words:['resumen','resumir','esencial','texto']},
    {label:'Síntesis: varias fuentes relacionadas', words:['sintesis','síntesis','fuente','relacionar','relacion']}
   ],
   modeloPrincipal:'Resumir y sintetizar exigen comprender y reorganizar, nunca copiar.',
   modeloSecundarias:'El resumen trabaja un texto; la síntesis relaciona varias fuentes.'}
 ]
};
})();