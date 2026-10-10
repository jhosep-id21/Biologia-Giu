window.TEMAS.push({
 id:5,titulo:'Procesos metabólicos',corto:'Enzimas, ATP, respiración celular, fermentación y fotosíntesis.',
 objetivo:'Enzimas, ATP, respiración celular, fermentación y fotosíntesis. Evidencia: diagrama de procesos que explica la transformación de materia y energía y compara respiración, fermentación y fotosíntesis.',
 resumen:[
  {ico:'🔑',h:'Enzimas: catalizadores biológicos',body:'<p>Son <b>proteínas</b> (a veces ARN) que aumentan la velocidad de las reacciones químicas <b>sin consumirse</b>. Bajan la <b>energía de activación</b> mediante el modelo de <b>ajuste inducido</b> entre enzima y sustrato.</p><ul><li><b>Temperatura:</b> cada enzima tiene una temperatura óptima; el exceso de calor la <b>desnaturaliza</b>.</li><li><b>pH:</b> cada enzima trabaja mejor en un rango de pH (p. ej., la pepsina en pH ácido).</li><li><b>Concentración de sustrato:</b> a más sustrato, más velocidad, hasta saturar la enzima.</li></ul><p>Ejemplo: la <b>amilasa salival</b> degrada el almidón en maltosa en la boca.</p>'},
  {ico:'🔋',h:'ATP: la moneda energética',body:'<p>El <b>ATP</b> (adenosín trifosfato) es el intermediario energético universal. El último enlace fosfato es de alta energía: al romperse por hidrólisis libera energía.</p><p><b>ATP + H₂O → ADP + Pi + energía</b> (~7,3 kcal/mol).</p><p>Se usa en el transporte activo, la síntesis de biomoléculas y el movimiento celular (p. ej., contracción muscular).</p>'},
  {ico:'🏃',h:'Respiración celular (aerobia)',body:'<p>Obtiene energía de la glucosa <b>con oxígeno</b>. Ocurre en 3 etapas:</p><ol><li><b>Glucólisis</b> (citoplasma): la glucosa se divide en 2 piruvatos; 2 ATP netos.</li><li><b>Ciclo de Krebs</b> (matriz mitocondrial): el piruvato se oxida por completo; libera CO₂ y genera NADH y FADH₂.</li><li><b>Cadena transportadora de electrones</b> (membrana interna mitocondrial): se produce la mayor parte del ATP.</li></ol><p><b>C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ~36–38 ATP</b></p>',tip:'Orden: <b>G</b>lucólisis → <b>K</b>rebs → <b>C</b>adena. («Gato Kon Cola»).'},
  {ico:'🍞',h:'Fermentación (anaerobia)',body:'<p>Sin suficiente oxígeno, regenera <b>NAD⁺ a partir de NADH</b> para que la glucólisis continúe produciendo ATP.</p><ul><li><b>Láctica:</b> el piruvato pasa a ácido láctico. En músculos con ejercicio intenso y en bacterias (<i>Lactobacillus</i>: yogur y queso).</li><li><b>Alcohólica:</b> el piruvato pasa a etanol y CO₂. La realizan las levaduras (<i>Saccharomyces cerevisiae</i>: pan, vino y cerveza).</li></ul>'},
  {ico:'🌞',h:'Fotosíntesis',body:'<p>Plantas, algas y cianobacterias convierten energía luminosa en energía química (glucosa).</p><ul><li><b>Fase luminosa</b> (tilacoides): la clorofila capta la luz; el agua se descompone liberando O₂; se genera ATP y NADPH.</li><li><b>Fase oscura / ciclo de Calvin</b> (estroma): con ese ATP y NADPH, el CO₂ se fija y se transforma en glucosa.</li></ul><p><b>6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂</b></p>'}
 ],
 tablas:[{h:'Comparación de los procesos',cols:['Proceso','¿Requiere O₂?','Lugar','Producto energético'],rows:[['Respiración celular','Sí','Mitocondria','~36–38 ATP por glucosa'],['Fermentación','No','Citoplasma','2 ATP por glucosa'],['Fotosíntesis','Libera O₂','Cloroplasto','Glucosa (energía química)']],tip:'Las enzimas y el ATP están en los tres procesos: las enzimas catalizan cada reacción y el ATP almacena y transporta la energía.'}],
 tarjetas:[
  ['¿Qué es una enzima?','Un catalizador biológico (proteína o a veces ARN) que acelera reacciones sin consumirse.'],
  ['¿Cómo actúan las enzimas?','Reducen la energía de activación (modelo de ajuste inducido).'],
  ['Tres factores que afectan a las enzimas','Temperatura, pH y concentración de sustrato.'],
  ['¿Qué hace la amilasa salival?','Degrada el almidón en maltosa.'],
  ['¿Qué es el ATP?','La moneda energética de la célula (adenosín trifosfato).'],
  ['Reacción de hidrólisis del ATP','ATP + H₂O → ADP + Pi + energía (~7,3 kcal/mol).'],
  ['Etapas de la respiración celular','Glucólisis, ciclo de Krebs y cadena transportadora de electrones.'],
  ['¿Dónde ocurre la glucólisis?','En el citoplasma (2 ATP netos).'],
  ['¿Dónde ocurre el ciclo de Krebs?','En la matriz mitocondrial.'],
  ['¿En qué etapa se produce la mayor parte del ATP?','En la cadena transportadora (membrana interna de la mitocondria).'],
  ['Dos tipos de fermentación','Láctica y alcohólica.'],
  ['¿Qué producen las levaduras al fermentar?','Etanol y CO₂ (pan, vino, cerveza).'],
  ['Fases de la fotosíntesis','Luminosa (tilacoides) y oscura o ciclo de Calvin (estroma).'],
  ['Ecuación de la fotosíntesis','6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂.']
 ],
 completar:[
  'Las {{enzimas}} son catalizadores biológicos que reducen la energía de activación.',
  'El {{ATP}} es la moneda energética de la célula.',
  'La {{glucólisis|glucolisis}} ocurre en el citoplasma y produce 2 ATP netos.',
  'El ciclo de {{Krebs}} ocurre en la matriz mitocondrial.',
  'La fermentación {{láctica|lactica}} produce ácido láctico.',
  'Las levaduras realizan la fermentación {{alcohólica|alcoholica}}.',
  'La fase luminosa de la fotosíntesis ocurre en los {{tilacoides}}.',
  'El ciclo de {{Calvin}} transforma el CO₂ en glucosa en el estroma.'
 ],
 marcar:[
  {q:'¿Cuántos ATP produce la fermentación por glucosa?',o:['2','10','36–38','0'],a:0,why:'Solo los de la glucólisis: 2 ATP.'},
  {q:'La mayor parte del ATP de la respiración celular se produce en…',o:['La glucólisis','El ciclo de Krebs','La cadena transportadora','La fermentación'],a:2,why:'Membrana interna mitocondrial.'},
  {q:'¿Qué ocurre con una enzima expuesta a temperatura excesiva?',o:['Se hace más eficiente','Se desnaturaliza','Se convierte en ATP','Se vuelve ARN'],a:1,why:'Pierde su forma y su función.'},
  {q:'¿Qué organismo produce el CO₂ y etanol que hacen crecer el pan?',o:['Lactobacillus','Saccharomyces cerevisiae','Escherichia coli','Una espinaca'],a:1,why:'La levadura (fermentación alcohólica).'},
  {q:'En la fase luminosa de la fotosíntesis se libera…',o:['CO₂','O₂','Glucosa','Etanol'],a:1,why:'El agua se descompone y libera oxígeno.'},
  {q:'La respiración celular ocurre principalmente en…',o:['Cloroplasto','Mitocondria','Lisosoma','Núcleo'],a:1,why:'(Glucólisis en el citoplasma, Krebs y cadena en la mitocondria.)'},
  {q:'Los yogures y quesos se producen por fermentación…',o:['Láctica','Alcohólica','Fotosintética','Aerobia'],a:0,why:'Lactobacillus fermenta la lactosa.'}
 ],
 vf:[
  {q:'La fermentación requiere oxígeno.',a:false,why:'Es una vía anaerobia.'},
  {q:'La respiración celular produce unos 36–38 ATP por glucosa.',a:true,why:'La fermentación solo produce 2.'},
  {q:'La fotosíntesis ocurre en la mitocondria.',a:false,why:'Ocurre en el cloroplasto.'},
  {q:'Las enzimas se consumen al terminar la reacción.',a:false,why:'No se consumen en el proceso.'},
  {q:'El ATP libera energía al hidrolizarse su último fosfato.',a:true,why:'ATP → ADP + Pi + energía.'},
  {q:'La fermentación láctica puede ocurrir en células musculares con ejercicio intenso.',a:true,why:'Cuando falta oxígeno.'},
  {q:'La pepsina trabaja mejor en pH ácido.',a:true,why:'Cada enzima tiene su rango de pH óptimo.'}
 ],
 ordenar:[{title:'Ordena las etapas de la respiración celular',steps:['Glucólisis (citoplasma)','Ciclo de Krebs (matriz mitocondrial)','Cadena transportadora (membrana interna)']}],
 relacionar:[{title:'Relaciona el proceso con su dato clave',pairs:[['Respiración celular','~36–38 ATP por glucosa'],['Fermentación','Citoplasma, sin oxígeno, 2 ATP'],['Fotosíntesis','Produce glucosa y libera O₂'],['Enzimas','Bajan la energía de activación'],['ATP','Moneda energética']]}],
 casos:[
  {id:'t5c1',titulo:'El corredor de maratón',resumen:'Respiración aerobia vs. fermentación láctica.',
   situacion:'Durante una carrera, un corredor al inicio trota tranquilo. En el último tramo hace un sprint y empieza a sentir un fuerte ardor en las piernas y fatiga. El entrenador explica que sus músculos pasaron de un tipo de obtención de energía a otro porque el oxígeno no llegaba tan rápido como el esfuerzo lo exigía.',
   guia:['¿Cómo obtienen energía las células musculares con suficiente oxígeno?','¿Qué pasa cuando el oxígeno es insuficiente?','¿Qué sustancia se acumula y cuántos ATP se obtienen?'],
   claves:[{label:'Respiración celular aerobia (con O₂, en la mitocondria)',words:['respiracion','respiración','aerobi','mitocondria']},{label:'Fermentación láctica',words:['fermentacion lactica','fermentación láctica','lactica','láctica']},{label:'Ácido láctico',words:['acido lactico','ácido láctico']},{label:'Diferencia de ATP (36–38 vs. 2)',words:['36','38','2 atp','dos atp']},{label:'Regenerar NAD⁺ para que continúe la glucólisis',words:['nad']}],
   pasos:[['Pistas','Trote (hay oxígeno) vs. sprint (poco oxígeno); ardor y fatiga.'],['Conceptos','<b>Respiración celular</b> y <b>fermentación láctica</b>.'],['Explicación','Con oxígeno: glucólisis, Krebs y cadena transportadora producen ~36–38 ATP. Con poco oxígeno: el piruvato se convierte en <b>ácido láctico</b>, se regenera NAD⁺ y la glucólisis sigue dando solo <b>2 ATP</b>.'],['Conclusión','Los músculos cambiaron de respiración aerobia a fermentación láctica durante el sprint.']],
   modelo:'En el trote hay suficiente oxígeno, por lo que los músculos obtienen energía por respiración celular aerobia (glucólisis, ciclo de Krebs y cadena transportadora), produciendo unos 36–38 ATP por glucosa. En el sprint el oxígeno es insuficiente y las células recurren a la fermentación láctica: el piruvato se convierte en ácido láctico y se regenera NAD⁺ para que la glucólisis continúe, pero solo se obtienen 2 ATP por glucosa.'},
  {id:'t5c2',titulo:'La panadería y la planta',resumen:'Fermentación alcohólica y fotosíntesis.',
   situacion:'Un panadero mezcla harina, agua y levadura y deja reposar la masa; después de una hora la masa ha crecido. En el patio de la panadería, una planta de espinaca, expuesta al sol, produce su propio alimento. Un estudiante debe explicar qué proceso ocurre en cada caso y comparar si necesitan oxígeno.',
   guia:['¿Qué proceso hace crecer la masa y qué gas lo causa?','¿Qué proceso realiza la espinaca y en qué organelo?','¿Cuál de los dos libera O₂ y cuál no lo necesita?'],
   claves:[{label:'Fermentación alcohólica en la masa (levadura)',words:['fermentacion alcoholica','fermentación alcohólica','levadura']},{label:'CO₂ hace crecer la masa / etanol',words:['co2','co₂','dioxido','dióxido','etanol']},{label:'Fotosíntesis en la espinaca',words:['fotosintesis','fotosíntesis']},{label:'Cloroplasto / clorofila',words:['cloroplasto','clorofila']},{label:'Fermentación sin O₂; la fotosíntesis libera O₂',words:['no requiere','sin oxigeno','sin oxígeno','anaerob','libera']}],
   pasos:[['Pistas','Levadura + masa que crece; planta al sol.'],['Conceptos','<b>Fermentación alcohólica</b> y <b>fotosíntesis</b>.'],['Explicación','La levadura (<i>Saccharomyces cerevisiae</i>) fermenta la glucosa y produce <b>CO₂</b> y etanol; el CO₂ hace crecer la masa. La espinaca capta luz con la clorofila en el <b>cloroplasto</b> y convierte CO₂ y H₂O en glucosa liberando O₂.'],['Conclusión','La fermentación no requiere O₂ (2 ATP, citoplasma); la fotosíntesis libera O₂ y produce glucosa.']],
   modelo:'En la masa ocurre fermentación alcohólica realizada por la levadura: el piruvato se transforma en etanol y CO₂, y el CO₂ hace crecer la masa; no requiere oxígeno. La espinaca realiza fotosíntesis en sus cloroplastos: la clorofila capta la luz, y con CO₂ y agua se produce glucosa y se libera O₂.'}
 ]
});
