/* Banco de autores (Teorías pedagógicas). Se carga DESPUÉS de teoria/temas.js.
   Refuerza lo que más pesa en el examen: qué dijo cada autor y en qué obra. */
(function(){
'use strict';
const T = window.TEORIA_TEMAS || [];
const by = id => T.find(t => t.id === id);
function add(id, more){
 const t = by(id); if(!t) return;
 ['marcar','vf','tarjetas'].forEach(k=>{ if(more[k]&&more[k].length) t[k]=(t[k]||[]).concat(more[k]); });
}

add(1,{
 marcar:[
  {q:'Pozo (2023) sostiene que la pedagogía es…',o:['Un don vocacional que no se estudia','Una ciencia social y humana que reflexiona críticamente sobre lo educativo','Solo una técnica de aula','Un recetario de fichas'],a:1,why:'Aprender en tiempos revueltos: la psicología de la educación ante el cambio.'},
  {q:'Alba-Pastor (2021) aporta al curso…',o:['El Diseño Universal para el Aprendizaje, para una educación inclusiva de calidad','La caja de Skinner','Los estadios de Piaget','La Didáctica Magna'],a:0,why:'Modelo teórico-práctico de inclusión.'},
  {q:'Bodrova y Leong (2020) trabajan…',o:['El aprendizaje vygotskyano en educación infantil con Herramientas de la mente','El condicionamiento clásico','La memoria de trabajo','La panspermia'],a:0,why:'Herramientas de la mente, 3.ª ed.'},
  {q:'García-Sampedro y Martínez (2023) proponen…',o:['Deconstruir el adultocentrismo en las aulas iniciales','Más castigos','Eliminar el juego','Solo fichas'],a:0,why:'Epistemología de la educación infantil.'},
  {q:'Tardif (2021) es citado por…',o:['Los saberes del docente y su desarrollo profesional','La ley del efecto','La tabula rasa','El skimming'],a:0,why:'Los saberes que sostienen la praxis.'},
  {q:'La decisión docente informada articula…',o:['Solo la vocación','Neurociencia y evolutiva, sociología y ética','Solo el horario','Solo el premio'],a:1,why:'El diagrama de la sesión 1: tres círculos.'},
  {q:'La finalidad del lente epistemológico es…',o:['Llenar fichas','La transformación social y superar el adultocentrismo','Repetir sin pensar','Callar al niño'],a:1,why:'Objeto, métodos y finalidad.'}
 ],
 vf:[
  {q:'Pozo (2023) defiende la improvisación sin teoría.',a:false,why:'Pide reflexión crítica sobre el fenómeno educativo.'},
  {q:'El DUA busca una educación inclusiva de calidad.',a:true,why:'Alba-Pastor (2021).'},
  {q:'Deconstruir el adultocentrismo es mirar el aula solo con ojos de adulto.',a:false,why:'Es lo contrario: devolver la agencia al niño.'}
 ],
 tarjetas:[
  ['Pozo (2023): idea en una frase','La pedagogía es ciencia social y humana que reflexiona críticamente sobre lo educativo.'],
  ['Tres círculos de la decisión informada','Neurociencia y evolutiva, sociología y ética.']
 ]
});

add(2,{
 marcar:[
  {q:'La paideia es un aporte de…',o:['La Ilustración','La Antigüedad clásica griega','La Escuela Nueva','El conductismo'],a:1,why:'Formación integral del ciudadano.'},
  {q:'La mayéutica es el método de…',o:['Comenio','Sócrates','Skinner','Baddeley'],a:1,why:'Preguntar para parir ideas.'},
  {q:'La Didáctica Magna (enseñar todo a todos) es de…',o:['Rousseau','Comenio','Montessori','Freire'],a:1,why:'Orden y gradualidad.'},
  {q:'Emilio, o seguir la naturaleza del niño, es de…',o:['Herbart','Rousseau','Pavlov','Thorndike'],a:1,why:'Educación natural.'},
  {q:'Cabeza, corazón y mano es la fórmula de…',o:['Pestalozzi','Watson','Locke','Aristóteles'],a:0,why:'Educación integral del pueblo.'},
  {q:'El ambiente preparado y los materiales sensoriales son de…',o:['Decroly','Montessori','Dewey','Freinet'],a:1,why:'Autonomía con material autocorrectivo.'},
  {q:'Los centros de interés y la globalización son de…',o:['Montessori','Decroly','Skinner','Piaget'],a:1,why:'Ideas asociadas alrededor de un interés.'}
 ],
 vf:[
  {q:'Gauthier y Tardif (2020) escriben historia de la pedagogía desde la Antigüedad.',a:true,why:'Referencia base de la sesión 2.'},
  {q:'Varela y Álvarez-Uría hacen arqueología de la escuela.',a:true,why:'Mirada crítica a la institución escolar.'},
  {q:'Bowen (2021) es referencia de historia de la educación occidental.',a:true,why:'Vol. 3, el occidente moderno.'}
 ],
 tarjetas:[
  ['Comenio en una frase','Didáctica Magna: enseñar todo a todos, con orden.'],
  ['Dewey en una frase','Aprender haciendo: experiencia antes que lección.']
 ]
});

add(3,{
 marcar:[
  {q:'El condicionamiento clásico (perro y campana) es de…',o:['Skinner','Pavlov','Thorndike','Watson'],a:1,why:'Asociación de estímulos EI-EN.'},
  {q:'El pequeño Albert (miedo condicionado) es el caso de…',o:['Pavlov','Thorndike','Watson','Skinner'],a:2,why:'Con Rayner: emparejó rata y ruido.'},
  {q:'La ley del efecto (lo satisfactorio se repite) es de…',o:['Thorndike','Pavlov','Skinner','Watson'],a:0,why:'Gatos en la caja-problema.'},
  {q:'La caja con palanca y el condicionamiento operante son de…',o:['Watson','Pavlov','Thorndike','Skinner'],a:3,why:'La consecuencia moldea la respuesta.'},
  {q:'Schunk (2020) es en el curso…',o:['El manual de teorías del aprendizaje con perspectiva educativa','Un autor de biología','Un poeta','Un pintor'],a:0,why:'8.ª ed., Pearson.'},
  {q:'Woolfolk (2021) aporta…',o:['Psicología educativa','Astronomía','Cocina','Nada'],a:0,why:'14.ª ed., referencia de la sesión.'},
  {q:'Maldonado (2021) escribe sobre…',o:['Aprendizaje, condicionamiento y cognición','El sistema solar','El relieve','Nada'],a:0,why:'3.ª ed., Pirámide.'}
 ],
 vf:[
  {q:'Graham (2021) firma la entrada Behaviorism en Stanford.',a:true,why:'Enciclopedia de filosofía.'},
  {q:'Todd (2020) historiza a B. F. Skinner y el análisis de conducta.',a:true,why:'Referencia de la sesión 3.'},
  {q:'En lo clásico se asocia respuesta con consecuencia.',a:false,why:'Eso es operante; lo clásico asocia estímulos.'}
 ],
 tarjetas:[
  ['Pavlov vs Skinner en una frase','Pavlov asocia estímulos; Skinner moldea con consecuencias.'],
  ['Watson en una frase','Todo hábito se aprende: caso Albert.']
 ]
});

add(4,{
 marcar:[
  {q:'El análisis aplicado de conducta para maestros (ABA) es de…',o:['Alberto y Troutman (2022)','Piaget','Ausubel','Locke'],a:0,why:'10.ª ed., Pearson.'},
  {q:'Dar sticker por guardar es, según la sesión,…',o:['Castigo positivo','Refuerzo positivo','Extinción','Nada'],a:1,why:'Se añade algo agradable.'},
  {q:'Quitar el recreo por interrumpir es…',o:['Refuerzo positivo','Castigo negativo','Refuerzo negativo','Generalización'],a:1,why:'Se retira algo agradable.'},
  {q:'Si al sentarse cesa un ruido molesto, hubo…',o:['Castigo','Refuerzo negativo','Extinción','Nada'],a:1,why:'Se retiró lo aversivo.'},
  {q:'El estallido de extinción significa que…',o:['La conducta mejora de golpe','La conducta empeora antes de apagarse','Nunca cambia','Se generaliza sola'],a:1,why:'Hay que sostenerlo sin ceder.'},
  {q:'El modelo ABC se lee como…',o:['Antecedente, conducta y consecuencia','Aula, banco y cuaderno','Año, bimestre y curso','Nada'],a:0,why:'Funcional de la conducta en contexto.'},
  {q:'La trampa del refuerzo negativo atrapa porque…',o:['El adulto evita el malestar calmando ya y refuerza la interrupción','El niño es malo','No hay teoría','Falta premio'],a:0,why:'Gana hoy, pierde mañana.'}
 ],
 vf:[
  {q:'Negativo en refuerzo negativo significa malo.',a:false,why:'Significa retirar.'},
  {q:'El castigo por sí solo enseña autorregulación.',a:false,why:'Frena sin enseñar la conducta deseada.'},
  {q:'La discriminación responde solo a la señal correcta.',a:true,why:'Frente a la generalización.'}
 ],
 tarjetas:[
  ['Refuerzo vs castigo en una frase','Refuerzo suma conducta; castigo la resta.'],
  ['ABC en una frase','Qué pasó antes, qué hizo y qué lo mantiene.']
 ]
});

add(5,{
 marcar:[
  {q:'Developing constructivist early childhood curriculum es de…',o:['DeVries, Zan, Hildebrandt, Edmiaston y Sales (2018)','Skinner','Pavlov','Watson'],a:0,why:'Principios y actividades constructivistas.'},
  {q:'La economía de fichas es…',o:['Puntos canjeables por premio','Un cuento','Un juego libre','Nada'],a:0,why:'Técnica conductista de aula.'},
  {q:'El tiempo fuera consiste en…',o:['Retiro breve sin estímulos','Más recreo','Un premio','Una canción'],a:0,why:'Tras la conducta, sin audiencia.'},
  {q:'El semáforo con foto al WhatsApp genera…',o:['Autorregulación','Sumisión por miedo y daño al vínculo','Juego simbólico','Nada'],a:1,why:'Dilema ético de la sesión.'},
  {q:'Un límite del conductismo es…',o:['Ver demasiado la emoción','El reduccionismo: solo conducta observable','Dar autonomía','Escuchar al niño'],a:1,why:'No entra a comprensión ni afecto.'},
  {q:'Sin premio la conducta cae: hubo…',o:['Motivación intrínseca','Motivación extrínseca dependiente','Aprendizaje significativo','Andamiaje'],a:1,why:'Dependencia del control externo.'},
  {q:'La alternativa ética propone…',o:['Más humillación','Reparar, enseñar la rutina y reforzar lo deseado','Más fotos','Más gritos'],a:1,why:'Vínculo antes que premio.'}
 ],
 vf:[
  {q:'El conductismo estructura bien rutinas y hábitos.',a:true,why:'Su aporte real.'},
  {q:'Exponer en rojo a un niño de 5 años es éticamente neutro.',a:false,why:'Daña autoestima y vínculo.'},
  {q:'El informe de la sesión exige alternativa sustentada.',a:true,why:'Crítica + propuesta contextualizada.'}
 ],
 tarjetas:[
  ['Aporte vs límite del conductismo','Aporta rutinas; limita por reduccionismo y premio-dependencia.'],
  ['Ética en una frase','Reparar y enseñar, no exponer ni humillar.']
 ]
});

add(6,{
 marcar:[
  {q:'La memoria de trabajo en contexto es el tema de…',o:['Baddeley (2020)','Pavlov','Comenio','Locke'],a:0,why:'Working memory in context.'},
  {q:'El pensamiento infantil y diferencias individuales es de…',o:['Bjorklund (2022)','Skinner','Watson','Freinet'],a:0,why:'Children’s thinking, 7.ª ed.'},
  {q:'Funciones ejecutivas y metacognición en inicial es de…',o:['Matías y Fuentes (2022)','Thorndike','Rousseau','Herbart'],a:0,why:'Revista interdisciplinaria, 14(2).'},
  {q:'El desarrollo de la memoria en la infancia lo firma…',o:['Schneider (2021)','Pestalozzi','Decroly','Montessori'],a:0,why:'Journal of Educational Psychology.'},
  {q:'El bucle fonológico maneja…',o:['Imágenes','Lo verbal-sonoro','Solo notas','Nada'],a:1,why:'La agenda visual lleva lo espacial.'},
  {q:'Ante triple consigna oral en 4 años, lo primero es…',o:['Gritar','Un paso a la vez con apoyo visual','Quitar el recreo','Dictar más'],a:1,why:'La memoria de trabajo se satura.'},
  {q:'La representación enactiva es…',o:['Palabra abstracta','Acción y cuerpo','Solo copia','Nada'],a:1,why:'Antes que la imagen y el símbolo.'}
 ],
 vf:[
  {q:'La memoria de trabajo maneja muchos elementos a la vez.',a:false,why:'Pocos; consigna corta.'},
  {q:'Toda distracción en 4 años es desinterés.',a:false,why:'Puede ser límite de filtro o memoria.'},
  {q:'Planificar, monitorear y evaluar son momentos metacognitivos.',a:true,why:'Antes, durante y después.'}
 ],
 tarjetas:[
  ['Baddeley en una frase','Memoria de trabajo: ejecutiva, bucle y agenda.'],
  ['Metacognición en una frase','Pensar el propio pensar: ¿entendí? ¿qué releo?']
 ]
});

add(7,{
 marcar:[
  {q:'Asimilación, acomodación y equilibrio son de…',o:['Bruner','Piaget','Ausubel','Skinner'],a:1,why:'Motor de la construcción por estadios.'},
  {q:'El estadio preoperacional (2-7) se reconoce por…',o:['Lógica formal','Egocentrismo, centración y juego simbólico','Operaciones abstractas','Nada'],a:1,why:'Pensar con acción e imagen.'},
  {q:'Descubrimiento guiado, andamiaje y espiral son de…',o:['Piaget','Bruner','Ausubel','Pavlov'],a:1,why:'Ayuda que se retira.'},
  {q:'Saberes previos, organizador previo y actitud son de…',o:['Bruner','Piaget','Ausubel','Watson'],a:2,why:'Aprendizaje significativo.'},
  {q:'El paradigma constructivista en la práctica contemporánea es de…',o:['Linares y González (2021)','Skinner','Thorndike','Locke'],a:0,why:'Editorial Graó.'},
  {q:'El constructivismo hoy: enfoques en educación es de…',o:['Serrano y Pons (2020)','Pavlov','Watson','Comenio'],a:0,why:'Revista electrónica, 22(1).'},
  {q:'Del constructivismo al conectivismo en primera infancia es de…',o:['Zapata-Ros (2021)','Montessori','Decroly','Herbart'],a:0,why:'Era digital y primera infancia.'}
 ],
 vf:[
  {q:'El andamiaje se mantiene para siempre.',a:false,why:'Se retira cuando el niño puede solo.'},
  {q:'Sin actitud de relacionar solo hay memoria mecánica.',a:true,why:'Ausubel: sin disposición no hay anclaje.'},
  {q:'Los tres coinciden en el niño activo.',a:true,why:'Construcción, no copia.'}
 ],
 tarjetas:[
  ['Piaget-Bruner-Ausubel en una frase','Piaget construye por etapas, Bruner descubre con ayuda, Ausubel ancla en lo previo.'],
  ['Secuencia breve en una frase','Saberes, experiencia, representación y cierre.']
 ]
});
})();
