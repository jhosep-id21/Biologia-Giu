window.TEMAS=window.TEMAS||[];
window.TEMAS.push({
 id:1,titulo:'Fundamentos de la Biología',corto:'Qué es la biología, ramas, características de la vida y teoría celular.',
 objetivo:'Sesión 1 · Sílabo e introducción al curso. Competencia: gestiona saberes para ampliar el conocimiento disciplinar. Capacidad: analiza los procesos biológicos fundamentales relacionados con la estructura, composición y funcionamiento de los seres vivos.',
 resumen:[
  {ico:'🧬',h:'¿Qué es la biología?',body:'<p>Viene del griego <b>bios</b> (vida) y <b>logos</b> (estudio). Es la <b>ciencia natural</b> que investiga el origen, la evolución, la estructura y el funcionamiento de los seres vivos.</p><ul><li><b>Objeto de estudio:</b> los seres vivos y sus interacciones con el ambiente.</li><li><b>Enfoque científico:</b> observación, experimentación y análisis de datos.</li><li><b>Carácter integrador:</b> se relaciona con la química, la física y la geología.</li></ul>',tip:'Truco: <b>bios = vida</b>, <b>logos = estudio</b>. Biología = «estudio de la vida».'},
  {ico:'🌱',h:'Características de los seres vivos',body:'<p>Los seres vivos comparten seis rasgos:</p><ul><li><b>Organización:</b> están formados por células.</li><li><b>Nutrición:</b> obtienen materia y energía.</li><li><b>Crecimiento:</b> aumentan de tamaño y se desarrollan.</li><li><b>Reproducción:</b> producen nuevos individuos.</li><li><b>Homeostasis:</b> mantienen su equilibrio interno.</li><li><b>Evolución:</b> las poblaciones cambian con el tiempo.</li></ul>',tip:'Regla para recordar: <b>O-N-C-R-H-E</b> → Organización, Nutrición, Crecimiento, Reproducción, Homeostasis, Evolución.'},
  {ico:'🪜',h:'Niveles de organización biológica',body:'<p>De lo más simple a lo más complejo: <b>molécula → célula → tejido → órgano → organismo</b>. Cada nivel surge de la interacción organizada del nivel anterior.</p>'},
  {ico:'🌿',h:'Ramas de la biología',body:'<ul><li><b>Botánica:</b> estudio de las plantas.</li><li><b>Zoología:</b> estudio de los animales.</li><li><b>Genética:</b> herencia y variación.</li><li><b>Ecología:</b> seres vivos y su ambiente.</li><li><b>Microbiología:</b> microorganismos.</li><li><b>Anatomía:</b> estructura de los organismos.</li></ul>'},
  {ico:'🔬',h:'Teoría celular',body:'<ol><li>Todos los seres vivos están formados por una o más células.</li><li>La célula es la unidad estructural y funcional de la vida.</li><li>Toda célula proviene de otra célula preexistente.</li></ol>',tip:'Los 3 postulados en 3 palabras: <b>formados, unidad, proviene</b>.'},
  {ico:'🩺',h:'Importancia de la biología',body:'<ul><li><b>Medicina:</b> diagnóstico, tratamiento y prevención de enfermedades.</li><li><b>Agricultura:</b> mejora de cultivos y seguridad alimentaria.</li><li><b>Conservación:</b> protección de la biodiversidad y los ecosistemas.</li></ul><p><i>Comprender la vida es la base para cuidarla.</i></p>'}
 ],
 tarjetas:[
  ['¿Qué significa «biología» según su origen griego?','Bios = vida; logos = estudio.'],
  ['Menciona las 6 características de los seres vivos','Organización, nutrición, crecimiento, reproducción, homeostasis y evolución.'],
  ['¿Qué es la homeostasis?','La capacidad de mantener un equilibrio interno estable.'],
  ['¿Qué estudia la botánica?','Las plantas.'],['¿Qué estudia la zoología?','Los animales.'],
  ['¿Qué estudia la genética?','La herencia y la variación.'],['¿Qué estudia la ecología?','Los seres vivos y su ambiente.'],
  ['¿Qué estudia la microbiología?','Los microorganismos.'],['¿Qué estudia la anatomía?','La estructura de los organismos.'],
  ['Tercer postulado de la teoría celular','Toda célula proviene de otra célula preexistente.'],
  ['¿Con qué ciencias se relaciona la biología?','Con la química, la física y la geología (carácter integrador).'],
  ['Tres áreas donde es importante la biología','Medicina, agricultura y conservación.']
 ],
 completar:[
  'La biología es la ciencia {{natural}} que estudia a los seres vivos.',
  'La palabra biología viene de {{bios}} (vida) y {{logos}} (estudio).',
  'La {{homeostasis}} es la capacidad de mantener el equilibrio interno.',
  'La {{botánica}} es la rama de la biología que estudia las plantas.',
  'La unidad estructural y funcional de la vida es la {{célula|celula}}.',
  'La {{genética|genetica}} estudia la herencia y la variación.',
  'La {{microbiología|microbiologia}} estudia los microorganismos.',
  'Toda célula proviene de otra célula {{preexistente}}.'
 ],
 marcar:[
  {q:'¿Qué estudia la zoología?',o:['Las plantas','Los animales','Los microorganismos','La herencia'],a:1,why:'Zoología = estudio de los animales.'},
  {q:'La biología se relaciona con la química, la física y la geología. Esto muestra su carácter…',o:['Integrador','Aislado','Exclusivo','Experimental únicamente'],a:0,why:'Es una ciencia integradora porque se conecta con otras ciencias.'},
  {q:'¿Cuál NO es una característica de los seres vivos?',o:['Homeostasis','Reproducción','Crecimiento','Ser de metal'],a:3,why:'Las características son organización, nutrición, crecimiento, reproducción, homeostasis y evolución.'},
  {q:'¿Qué rama estudia a los seres vivos y su ambiente?',o:['Anatomía','Ecología','Botánica','Genética'],a:1,why:'Ecología = seres vivos y su ambiente.'},
  {q:'Según la teoría celular, la célula es…',o:['Solo una estructura','Solo una función','La unidad estructural y funcional','Un tipo de tejido'],a:2,why:'Es la unidad estructural Y funcional de la vida.'},
  {q:'¿En qué área se aplica la biología para mejorar cultivos y la seguridad alimentaria?',o:['Medicina','Agricultura','Conservación','Anatomía'],a:1,why:'La agricultura usa la biología para mejorar cultivos.'}
 ],
 vf:[
  {q:'La biología solo estudia a los animales.',a:false,why:'Estudia todos los seres vivos: plantas, animales, microorganismos, etc.'},
  {q:'La homeostasis es mantener el equilibrio interno.',a:true,why:'Exacto.'},
  {q:'La genética estudia la herencia y la variación.',a:true,why:'Exacto.'},
  {q:'Según la teoría celular, las células pueden surgir de materia sin vida.',a:false,why:'Toda célula proviene de otra célula preexistente.'},
  {q:'La microbiología estudia las plantas.',a:false,why:'Estudia los microorganismos; las plantas las estudia la botánica.'},
  {q:'La biología tiene carácter integrador porque se relaciona con otras ciencias.',a:true,why:'Se relaciona con química, física y geología.'},
  {q:'El enfoque científico de la biología incluye observación, experimentación y análisis de datos.',a:true,why:'Exacto.'}
 ],
 ordenar:[{title:'Ordena los niveles de organización, de lo más simple a lo más complejo',steps:['Molécula','Célula','Tejido','Órgano','Organismo']}],
 relacionar:[{title:'Relaciona cada rama con lo que estudia',pairs:[['Botánica','Las plantas'],['Zoología','Los animales'],['Genética','Herencia y variación'],['Ecología','Seres vivos y su ambiente'],['Microbiología','Los microorganismos'],['Anatomía','Estructura de los organismos']]}],
 casos:[
  {id:'t1c1',titulo:'Organismos en el charco',resumen:'¿Aparecen «solos» o vienen de otra célula?',
   situacion:'Una estudiante observa al microscopio una gota de agua de un charco y ve organismos diminutos que se mueven, se alimentan y algunos se dividen en dos. Su compañero asegura que esos organismos aparecieron «solos» porque el charco es sucio. Ella quiere explicarle, usando la teoría celular, por qué eso no es posible.',
   guia:['¿Qué hacen los organismos que se observan (qué características de la vida muestran)?','¿Qué dice el tercer postulado de la teoría celular?','¿Cómo responderías a la idea de que aparecen «solos»?'],
   claves:[{label:'Menciona la teoría celular',words:['teoria celular','teoría celular']},{label:'Dice que toda célula proviene de otra célula preexistente',words:['preexistente','otra celula','otra célula']},{label:'Identifica características de la vida (nutrición, reproducción, movimiento/respuesta, organización)',words:['nutri','reproduc','crecimiento','homeostasis']},{label:'Concluye que son seres vivos (unicelulares)',words:['ser vivo','seres vivos','unicelular','una celula','una célula']}],
   pasos:[['Pistas del caso','Se mueven, se alimentan y se dividen: muestran <b>nutrición, reproducción</b> y respuesta al ambiente. La idea de que aparecen «solos» es la antigua <b>generación espontánea</b>.'],['Concepto que aplica','<b>Teoría celular</b>: todo ser vivo está formado por células y <b>toda célula proviene de otra célula preexistente</b>.'],['Explicación','Los organismos del charco son seres vivos unicelulares. Se originaron por <b>división</b> de células anteriores, no por materia sin vida.'],['Conclusión','El compañero está equivocado: la vida surge de vida preexistente (biogénesis, apoyada por la teoría celular).']],
   modelo:'Los organismos observados muestran características de los seres vivos como la nutrición y la reproducción, por lo que son seres vivos unicelulares. Según la teoría celular, toda célula proviene de otra célula preexistente; por eso esos organismos no aparecen solos, sino que se originan por división de células anteriores. Por tanto, la idea de que surgen espontáneamente en el charco es incorrecta.'},
  {id:'t1c2',titulo:'La plantita que crece',resumen:'Características de los seres vivos en un caso cotidiano.',
   situacion:'Una niña de inicial siembra un frijol en un vaso con algodón. Al cabo de unos días observa que la semilla germina, la plantita crece hacia la luz de la ventana y, semanas después, produce flores. La maestra pide que expliquen por qué el frijol es un ser vivo.',
   guia:['Identifica qué cambios ocurren en la plantita.','¿A qué característica de los seres vivos corresponde cada cambio?','¿Qué rama de la biología estudia a este organismo?'],
   claves:[{label:'Menciona crecimiento y desarrollo',words:['crecimiento','crece','desarrollo']},{label:'Menciona la respuesta a estímulos (crece hacia la luz) o irritabilidad',words:['luz','estimulo','estímulo','irritabilidad','responde']},{label:'Menciona la reproducción (flores/semillas)',words:['reproduc','flores','semilla']},{label:'Menciona que está formada por células / organización',words:['celula','célula','organiza']},{label:'Nombra la botánica',words:['botanica','botánica']}],
   pasos:[['Pistas','Germina, crece, se orienta a la luz, produce flores.'],['Conceptos','<b>Crecimiento y desarrollo</b>; respuesta a estímulos (la luz); <b>reproducción</b> (flores); <b>organización celular</b>.'],['Explicación','El frijol cumple las características de la vida: está formado por células, crece, responde al ambiente y se reproduce.'],['Conclusión','Es un ser vivo; la rama que lo estudia es la <b>botánica</b>.']],
   modelo:'El frijol es un ser vivo porque presenta crecimiento y desarrollo (germina y crece), responde a estímulos (se orienta hacia la luz), se reproduce (produce flores) y está formado por células. La rama de la biología que estudia a las plantas es la botánica.'}
 ]
});
