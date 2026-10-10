window.GUIA={
 trucos:[
  ['✍️ Completar palabras','Lee la oración entera antes de escribir. Casi siempre falta un <b>término clave</b> del resumen (un organelo, un proceso, un autor). Si dudas, piensa: «¿qué palabra repetía la profesora en esta diapositiva?».'],
  ['☑️ Marcar','Descarta primero las alternativas que sabes que son falsas. Cuidado con las parecidas: <b>mitosis / meiosis</b>, <b>ADN / ARN</b>, <b>procariota / eucariota</b>. Lee todas las opciones antes de marcar.'],
  ['⚖️ Verdadero o falso','Desconfía de las palabras absolutas: <b>«siempre», «nunca», «solo», «todas»</b>. Y revisa que un dato esté en el lugar correcto (por ejemplo, la fotosíntesis ocurre en el cloroplasto, no en la mitocondria). Basta una parte falsa para que toda la frase sea falsa.'],
  ['🔬 Casos científicos','No se trata de memorizar: se trata de <b>usar</b> lo que sabes para explicar una situación. Sigue siempre los 4 pasos de abajo y escribe en frases completas.']
 ],
 metodo:[
  ['Lee y subraya las pistas','Lee el caso dos veces. Subraya <b>qué ocurre</b> (hechos) y <b>qué se pregunta</b>. Si hay varias situaciones, sepáralas (situación 1, situación 2).'],
  ['Nombra los conceptos','Cada pista apunta a un tema de clase. Escribe al lado el concepto: «cicatriza → mitosis», «hijos distintos → meiosis y fecundación». Pregúntate: ¿de qué tema de la clase viene esto?'],
  ['Explica el mecanismo','Para cada concepto responde en una o dos frases: <b>qué es</b>, <b>qué hace</b> y <b>cuál es el resultado</b> (número de células, número de cromosomas, si son iguales o distintas).'],
  ['Concluye y responde la pregunta','Cierra juntando todo: compara los procesos y responde exactamente lo que pregunta el caso. Una conclusión de 2 o 3 líneas basta.']
 ],
 modelo:{
  situacion:[
   'En una clase de Biología General, un grupo de estudiantes observa dos situaciones. En la primera, ',
   {t:'una herida superficial de la piel comienza a cicatrizar',pista:'Hay reparación de un tejido → piensa en MITOSIS.'},
   ' y, después de algunos días, se observa ',
   {t:'la formación de nuevas células semejantes a las que ya existían',pista:'Células hijas iguales a la madre → MITOSIS (mismo número de cromosomas).'},
   '. En la segunda, una pareja humana tiene descendencia, y los estudiantes analizan por qué ',
   {t:'los hijos presentan características heredadas de ambos progenitores',pista:'Participan dos progenitores → REPRODUCCIÓN SEXUAL: la fecundación une el material genético de ambos.'},
   ' y, al mismo tiempo, ',
   {t:'son genéticamente diferentes de ellos',pista:'Aparecen combinaciones nuevas → VARIABILIDAD GENÉTICA: MEIOSIS (gametos) + fecundación.'},
   '.'
  ],
  pasos:[
   ['Situación 1: la herida que cicatriza','Pistas: «herida», «cicatrizar», «nuevas células semejantes a las que ya existían». Concepto: <b>mitosis</b>. Mecanismo: de una célula salen dos células hijas con la <b>misma cantidad de cromosomas</b> (2n = 46 en humanos). Sirve para el crecimiento, la renovación y la <b>reparación de tejidos</b>.'],
   ['Situación 2: los hijos se parecen, pero son distintos','Pistas: «ambos progenitores» y «genéticamente diferentes». Conceptos: <b>meiosis</b> y <b>reproducción sexual</b>. La meiosis forma gametos con la <b>mitad de cromosomas</b> (n = 23) y mezcla genes (entrecruzamiento y distribución independiente). La <b>fecundación</b> une espermatozoide + óvulo y restablece 2n = 46 con una combinación nueva.'],
   ['Contraste con la reproducción asexual','El caso menciona «continuidad de la vida». En la <b>reproducción asexual</b> un solo progenitor origina descendencia sin unir gametos, así que los hijos son casi idénticos al progenitor. Aquí NO ocurre eso, porque los hijos son diferentes.'],
   ['Conclusión','Mitosis y meiosis son procesos <b>diferentes pero complementarios</b>: la mitosis aporta crecimiento, desarrollo y reparación; la meiosis forma gametos y da variabilidad genética. Juntas, con la fecundación, hacen posible la continuidad de la vida.']
  ],
  respuesta:'La primera situación se relaciona principalmente con la <b>mitosis</b>, proceso de división celular que permite el crecimiento, la renovación y la reparación de los tejidos; a partir de una célula se originan células hijas con la misma cantidad de cromosomas. La segunda situación se relaciona con la <b>meiosis</b> y la <b>reproducción sexual</b>: la meiosis forma células sexuales con la mitad de cromosomas y la fecundación reúne el material genético de dos progenitores, generando una nueva combinación genética. Por tanto, mitosis y meiosis son procesos diferentes pero fundamentales para la continuidad de la vida. La reproducción asexual, en cambio, origina nuevos organismos a partir de un solo progenitor y no requiere la unión de gametos.'
 },
 plantilla:'1) La situación se relaciona con ______ (concepto) porque ______ (pista del caso).\n2) Este proceso consiste en ______ (definición corta) y ocurre en ______ (lugar o células).\n3) El resultado es ______ (cuántas células / cuántos cromosomas / iguales o distintas).\n4) Por tanto, ______ (responde la pregunta del caso y compara con el otro concepto).'
};
window.TEMAS=window.TEMAS||[];
