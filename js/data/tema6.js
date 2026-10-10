window.TEMAS.push({
 id:6,titulo:'Biología molecular y herencia',corto:'ADN, ARN, síntesis de proteínas, genes, cromosomas y leyes de Mendel.',
 objetivo:'ADN, ARN, síntesis de proteínas, genes, cromosomas y principios mendelianos. Evidencia: informe de caso genético que representa la transmisión de un carácter y explica del gen a la proteína.',
 resumen:[
  {ico:'🧬',h:'ADN: estructura y función',body:'<p>El <b>ADN</b> (ácido desoxirribonucleico) almacena la información genética. Está formado por <b>nucleótidos</b> y tiene forma de <b>doble hélice</b>.</p><ul><li>Cada nucleótido: <b>desoxirribosa + grupo fosfato + base nitrogenada</b> (A, T, C o G).</li><li><b>Complementariedad:</b> A–T y C–G; permite copiar la información.</li><li>Ejemplo: si una hebra es A-T-C-G, la complementaria es <b>T-A-G-C</b>.</li></ul>'},
  {ico:'📨',h:'ARN: tipos y función',body:'<ul><li><b>ARNm (mensajero):</b> lleva la información del ADN a los ribosomas para fabricar proteínas.</li><li><b>ARNr (ribosómico):</b> forma parte de los ribosomas y participa en la síntesis de proteínas.</li><li>(Y el <b>ARNt</b> o de transferencia lleva los aminoácidos.)</li></ul><p><b>Diferencia clave:</b> el ARN tiene <b>uracilo (U)</b> en lugar de timina (T).</p>'},
  {ico:'📍',h:'Genes y cromosomas',body:'<ul><li><b>Gen:</b> segmento de ADN con la información para producir un producto funcional (una proteína o un ARN).</li><li><b>Cromosoma:</b> ADN asociado a proteínas (histonas); organiza y compacta el material genético.</li><li>Los genes están ubicados en los cromosomas. Las células somáticas humanas tienen <b>46 cromosomas</b>.</li></ul>'},
  {ico:'🏭',h:'Síntesis de proteínas: del ADN a la proteína',body:'<ol><li><b>Transcripción</b> (en el núcleo): la información de un gen se copia del ADN al ARNm.</li><li><b>Traducción</b> (en el ribosoma): el ARNm se lee en grupos de 3 bases, los <b>codones</b>; cada codón especifica un aminoácido.</li><li><b>Resultado:</b> los aminoácidos se unen y forman una proteína funcional.</li></ol><p><b>Dogma central: ADN → ARN → proteína.</b></p><p>Ejemplo: AUG–GCU–UUU. <b>AUG inicia</b> la traducción. El código es <b>degenerado</b>: varios codones codifican el mismo aminoácido. Un cambio de una base puede alterar un codón y, a veces, la proteína.</p>',tip:'<b>Transcripción</b> = «transcribir» (copiar) en el mismo idioma (ADN→ARN). <b>Traducción</b> = cambiar de idioma (bases → aminoácidos).'},
  {ico:'🌼',h:'Principios mendelianos',body:'<p><b>Gregor Mendel</b>, monje y naturalista, es considerado fundador de la genética; estudió la herencia en <b>plantas de guisante</b>.</p><ul><li><b>Ley de segregación:</b> los dos alelos de un gen se separan al formar los gametos; cada gameto recibe uno.</li><li><b>Distribución independiente:</b> los alelos de genes distintos pueden distribuirse independientemente (si no están ligados).</li></ul>'},
  {ico:'🌱',h:'Cruce monohíbrido, genotipo y fenotipo',body:'<p>A = semilla amarilla (dominante); a = semilla verde (recesiva). Aa × Aa →</p><ul><li><b>Genotipos:</b> 1 AA : 2 Aa : 1 aa</li><li><b>Fenotipos:</b> 3 dominantes : 1 recesivo</li></ul><p><b>Genotipo:</b> los alelos que posee un organismo (AA, Aa, aa). <b>Fenotipo:</b> la característica observable, resultado del genotipo y el ambiente.</p><p>Ojo: es una proporción <b>teórica</b>, no una garantía para cada familia, y no todos los rasgos humanos son mendelianos simples.</p>',tip:'Genotipo = «genes» (letras). Fenotipo = «fenómeno» (lo que se ve).'}
 ],
 widgets:[{k:'dna',h:'Del ADN a la proteína'},{k:'punnett',h:'Cuadro de Punnett'}],
 tarjetas:[
  ['¿Qué almacena el ADN?','La información genética.'],
  ['Componentes de un nucleótido de ADN','Desoxirribosa, grupo fosfato y una base nitrogenada.'],
  ['Regla de complementariedad','A–T y C–G (en el ARN, A–U).'],
  ['Si una hebra es A-T-C-G, ¿cuál es la complementaria?','T-A-G-C.'],
  ['¿Qué lleva el ARN mensajero?','La información del ADN hacia los ribosomas.'],
  ['Diferencia clave entre ARN y ADN en las bases','El ARN tiene uracilo (U) en lugar de timina (T).'],
  ['¿Qué es un gen?','Un segmento de ADN con información para un producto funcional (proteína o ARN).'],
  ['¿Qué es un cromosoma?','ADN asociado a proteínas (histonas) que organiza y compacta el material genético.'],
  ['Cromosomas en una célula somática humana','46.'],
  ['Dogma central','ADN → ARN → proteína.'],
  ['¿Dónde ocurre la transcripción y dónde la traducción?','Transcripción en el núcleo; traducción en el ribosoma.'],
  ['¿Qué es un codón?','Grupo de 3 bases del ARNm que especifica un aminoácido.'],
  ['Codón de inicio','AUG.'],
  ['¿Qué significa que el código genético es degenerado?','Varios codones pueden codificar el mismo aminoácido.'],
  ['Ley de segregación','Los dos alelos de un gen se separan al formar gametos; cada gameto recibe uno.'],
  ['Proporciones de un cruce Aa × Aa','Genotipos 1 AA : 2 Aa : 1 aa; fenotipos 3 : 1.']
 ],
 completar:[
  'El {{ADN}} almacena la información genética en forma de doble hélice.',
  'En el ADN, la adenina (A) se une con la {{timina}} (T).',
  'El ARN {{mensajero|mensajero (ARNm)|ARNm}} lleva la información del ADN a los ribosomas.',
  'La {{transcripción|transcripcion}} copia la información de un gen del ADN al ARNm.',
  'En el ribosoma ocurre la {{traducción|traduccion}} del ARNm a proteína.',
  'Cada grupo de tres bases del ARNm se llama {{codón|codon}}.',
  'Mendel estudió la herencia en plantas de {{guisante|arveja|chícharo}}.',
  'El {{fenotipo}} es la característica observable de un organismo.'
 ],
 marcar:[
  {q:'La hebra complementaria de A-T-C-G es…',o:['T-A-G-C','A-T-C-G','U-A-G-C','G-C-T-A'],a:0,why:'A–T y C–G. T-A-G-C.'},
  {q:'¿Cuál es la secuencia de la dogma central?',o:['Proteína → ARN → ADN','ADN → ARN → proteína','ARN → ADN → proteína','ADN → proteína → ARN'],a:1,why:'ADN → ARN → proteína.'},
  {q:'En un cruce Aa × Aa, ¿qué proporción fenotípica se espera?',o:['1 : 1','3 : 1','1 : 2 : 1','4 : 0'],a:1,why:'3 dominantes : 1 recesivo.'},
  {q:'¿Qué codón inicia la traducción?',o:['UAA','GCU','AUG','UUU'],a:2,why:'AUG, que codifica metionina.'},
  {q:'El genotipo Aa se llama…',o:['Homocigoto dominante','Heterocigoto','Homocigoto recesivo','Fenotipo'],a:1,why:'Tiene dos alelos distintos.'},
  {q:'Los genes se ubican en…',o:['Los ribosomas','Los cromosomas','Los lisosomas','La membrana'],a:1,why:'Los cromosomas organizan el ADN.'},
  {q:'¿Qué ARN forma parte de los ribosomas?',o:['ARNm','ARNr','ADN','Histona'],a:1,why:'ARN ribosómico.'}
 ],
 vf:[
  {q:'El ARN contiene timina.',a:false,why:'Contiene uracilo.'},
  {q:'La traducción ocurre en el ribosoma.',a:true,why:'Allí se lee el ARNm en codones.'},
  {q:'El código genético es degenerado: varios codones pueden codificar el mismo aminoácido.',a:true,why:'Exacto.'},
  {q:'Un cambio en una base nunca puede alterar una proteína.',a:false,why:'Puede cambiar un codón y, en algunos casos, alterar la proteína.'},
  {q:'Una célula somática humana normalmente tiene 46 cromosomas.',a:true,why:'Los gametos tienen 23.'},
  {q:'El fenotipo es el conjunto de alelos que posee un organismo.',a:false,why:'Eso es el genotipo.'},
  {q:'Un cruce Aa × Aa garantiza que en cada familia habrá exactamente 3 hijos dominantes por cada recesivo.',a:false,why:'Es una proporción teórica, no una garantía.'}
 ],
 ordenar:[{title:'Ordena el flujo de la información genética',steps:['ADN (gen)','Transcripción','ARNm','Traducción en el ribosoma','Proteína']}],
 relacionar:[{title:'Relaciona cada término con su descripción',pairs:[['Gen','Segmento de ADN que codifica un producto funcional'],['Cromosoma','ADN con histonas que compacta el material genético'],['Genotipo','Alelos que posee un organismo'],['Fenotipo','Característica observable'],['Codón','Tres bases del ARNm = un aminoácido']]}],
 casos:[
  {id:'t6c1',titulo:'Las semillas de guisante',resumen:'Cruce monohíbrido de Mendel.',
   situacion:'En un huerto escolar, dos plantas de guisante con semillas amarillas (heterocigotas, Aa) se cruzan. El color amarillo (A) es dominante sobre el verde (a). Los niños recogen 400 semillas y se preguntan cuántas deberían ser verdes y por qué algunas semillas son verdes si ambos padres son amarillos.',
   guia:['¿Cuáles son los gametos de cada planta?','¿Qué genotipos y fenotipos resultan?','¿Por qué aparece el carácter verde?'],
   claves:[{label:'Gametos A y a (ley de segregación)',words:['segregacion','segregación','gameto']},{label:'Genotipos 1 AA : 2 Aa : 1 aa',words:['1 aa','1:2:1','1 : 2 : 1']},{label:'Proporción fenotípica 3 : 1',words:['3:1','3 : 1','tres a uno','3 a 1','3 amarillas','3 dominantes']},{label:'El carácter verde es recesivo y aparece en el homocigoto aa',words:['recesiv']},{label:'Aprox. 100 semillas verdes (un cuarto del total)',words:['100','un cuarto','25']}],
   pasos:[['Pistas','Aa × Aa; amarillo dominante; verde recesivo.'],['Conceptos','<b>Ley de segregación</b>, genotipo, fenotipo, dominante y recesivo.'],['Explicación','Cada planta produce gametos <b>A</b> y <b>a</b>. Cuadro de Punnett: 1 AA : 2 Aa : 1 aa. Fenotipos: 3 amarillas : 1 verde (aa).'],['Conclusión','Esperaríamos ~1/4 verdes = <b>100 semillas</b> de 400 (teóricamente). El verde aparece porque el alelo recesivo «a» se esconde en los heterocigotos y se expresa en aa.']],
   modelo:'Según la ley de segregación, cada planta Aa forma gametos A y a. El cruce Aa × Aa da genotipos 1 AA : 2 Aa : 1 aa y fenotipos 3 amarillas : 1 verde. Las semillas verdes (aa) aparecen porque el alelo recesivo, oculto en los heterocigotos, se expresa cuando se heredan dos copias. De 400 semillas se esperarían unas 100 verdes, aunque es una proporción teórica.'},
  {id:'t6c2',titulo:'Una mutación en el gen',resumen:'De la secuencia de ADN a la proteína.',
   situacion:'Un laboratorio estudia un gen cuya hebra molde de ADN es TAC-CGA-AAA. El ARNm resultante se traduce en una proteína. Luego se detecta que en un paciente la primera base de la segunda tripleta cambió (C pasó a T). Los estudiantes deben explicar cómo se obtiene la proteína y qué podría ocurrir con el cambio.',
   guia:['¿Qué ARNm se forma y cómo se llama este proceso?','¿Cómo se lee el ARNm y qué producen los codones?','¿Qué efecto puede tener el cambio de una base?'],
   claves:[{label:'Transcripción: ARNm AUG-GCU-UUU',words:['transcripcion','transcripción','aug']},{label:'Traducción en el ribosoma por codones',words:['traduccion','traducción','ribosoma','codon','codón']},{label:'Dogma central ADN → ARN → proteína',words:['dogma','adn','proteina','proteína']},{label:'El cambio de base modifica un codón y puede alterar el aminoácido/la proteína',words:['mutacion','mutación','cambio','altera','modifica']}],
   pasos:[['Pistas','Hebra molde TAC-CGA-AAA y un cambio de una base.'],['Conceptos','<b>Transcripción</b>, <b>traducción</b>, codones y mutación.'],['Explicación','Transcripción: TAC-CGA-AAA → ARNm <b>AUG-GCU-UUU</b> (A–U, T–A, C–G, G–C). Traducción: AUG (inicio, Met) – GCU (Ala) – UUU (Phe). Si la 2.ª tripleta cambia a TGA, el ARNm sería ACU (Thr) y se alteraría el aminoácido.'],['Conclusión','Un cambio en una sola base puede modificar un codón y, en algunos casos, alterar la proteína (aunque, como el código es degenerado, a veces no cambia).']],
   modelo:'En la transcripción, la hebra molde TAC-CGA-AAA se copia al ARNm AUG-GCU-UUU. En la traducción, el ribosoma lee los codones y une los aminoácidos para formar la proteína (ADN → ARN → proteína). El cambio de una base en la segunda tripleta modifica el codón correspondiente y, en algunos casos, el aminoácido, lo que puede alterar la proteína; sin embargo, como el código genético es degenerado, a veces el cambio no modifica el aminoácido.'}
 ]
});
