/* Banco extra: más preguntas y casos para que el examen general
   y los simulacros no repitan siempre lo mismo. Se carga después de tema7.js. */
(function () {
  "use strict";
  if (window.__BIO_EXTRA) return;
  window.__BIO_EXTRA = true;
  const T = window.TEMAS || [];
  const by = (id) => T.find((t) => t.id === id);
  function add(id, more) {
    const t = by(id);
    if (!t) return;
    ["completar", "marcar", "vf", "casos"].forEach((k) => {
      if (more[k] && more[k].length) t[k] = (t[k] || []).concat(more[k]);
    });
  }

  add(1, {
    completar: [
      "La {{zoología|zoologia}} es la rama que estudia a los animales.",
      "La {{ecología|ecologia}} estudia a los seres vivos y su ambiente.",
      "La {{anatomía|anatomia}} estudia la estructura de los organismos.",
      "La {{nutrición|nutricion}} es la obtención de materia y energía.",
      "La {{evolución|evolucion}} es el cambio de las poblaciones con el tiempo.",
      "Un {{tejido}} es un conjunto de células que cumplen una función.",
      "La biología tiene carácter {{integrador}} porque se relaciona con otras ciencias.",
      "Proteger la biodiversidad es una aplicación de la biología llamada {{conservación|conservacion}}.",
    ],
    marcar: [
      {
        q: "¿Qué estudia la anatomía?",
        o: ["La herencia", "Los microorganismos", "La estructura de los organismos", "Solo el ambiente"],
        a: 2,
        why: "Anatomía = estructura de los organismos.",
      },
      {
        q: "¿Cuál es el orden correcto, de lo más simple a lo más complejo?",
        o: [
          "Órgano → tejido → célula → molécula",
          "Molécula → célula → tejido → órgano → organismo",
          "Organismo → órgano → molécula → célula",
          "Célula → molécula → tejido → organismo",
        ],
        a: 1,
        why: "Cada nivel surge del anterior: molécula, célula, tejido, órgano, organismo.",
      },
      {
        q: "La capacidad de producir nuevos individuos se llama…",
        o: ["Homeostasis", "Reproducción", "Anatomía", "Geología"],
        a: 1,
        why: "Reproducción: una de las seis características de la vida.",
      },
      {
        q: "¿Cuál es el objeto de estudio de la biología?",
        o: [
          "Solo las rocas",
          "Los seres vivos y sus interacciones con el ambiente",
          "Únicamente las enfermedades",
          "Solo las moléculas de agua",
        ],
        a: 1,
        why: "Estudia a los seres vivos y cómo se relacionan con el ambiente.",
      },
      {
        q: "El primer postulado de la teoría celular dice que…",
        o: [
          "Toda célula proviene de otra",
          "Todos los seres vivos están formados por una o más células",
          "La célula no es funcional",
          "Solo los animales tienen células",
        ],
        a: 1,
        why: "Los tres: formados por células, unidad de la vida, proviene de otra célula.",
      },
      {
        q: "¿En qué área la biología ayuda a diagnosticar y prevenir enfermedades?",
        o: ["Agricultura", "Medicina", "Geología", "Botánica"],
        a: 1,
        why: "Medicina: diagnóstico, tratamiento y prevención.",
      },
      {
        q: "¿Qué rama estudia la herencia y la variación?",
        o: ["Zoología", "Anatomía", "Genética", "Ecología"],
        a: 2,
        why: "Genética.",
      },
      {
        q: "Un conjunto de tejidos que trabajan juntos forma un…",
        o: ["Átomo", "Órgano", "Ecosistema", "Mineral"],
        a: 1,
        why: "Molécula → célula → tejido → órgano → organismo.",
      },
    ],
    vf: [
      { q: "La zoología estudia las plantas.", a: false, why: "Las plantas las estudia la botánica; la zoología, los animales." },
      { q: "El crecimiento es una característica de los seres vivos.", a: true, why: "Junto con organización, nutrición, reproducción, homeostasis y evolución." },
      { q: "La anatomía estudia únicamente los microorganismos.", a: false, why: "Eso es la microbiología. La anatomía estudia la estructura." },
      { q: "La célula es la unidad estructural y funcional de la vida.", a: true, why: "Segundo postulado de la teoría celular." },
      { q: "En esta clase, el nivel «organismo» es más simple que el nivel «molécula».", a: false, why: "El orden va de molécula a organismo, de lo simple a lo complejo." },
      { q: "La biología se aplica en medicina, agricultura y conservación.", a: true, why: "Son las tres áreas de importancia del tema." },
      { q: "La homeostasis es el cambio de las poblaciones a lo largo del tiempo.", a: false, why: "Eso es la evolución. La homeostasis es el equilibrio interno." },
      { q: "Observar, experimentar y analizar datos forma parte del enfoque científico de la biología.", a: true, why: "Exacto." },
    ],
    casos: [
      {
        id: "t1c3",
        titulo: "Tres muestras en el laboratorio",
        resumen: "Ramas de la biología y teoría celular.",
        situacion:
          "En una práctica hay tres muestras: una hoja de geranio, un insecto y una gota con bacterias. La docente pide que indiquen qué rama de la biología estudia cada muestra y que expliquen qué tienen en común las tres según la teoría celular.",
        guia: [
          "¿Qué rama corresponde a la hoja, al insecto y a las bacterias?",
          "¿Qué postulado de la teoría celular comparten las tres muestras?",
          "¿Por qué se dice que la biología es integradora?",
        ],
        claves: [
          { label: "Botánica para la planta", words: ["botanica", "botánica"] },
          { label: "Zoología para el insecto", words: ["zoologia", "zoología"] },
          { label: "Microbiología para las bacterias", words: ["microbiologia", "microbiología"] },
          { label: "Todas están formadas por células", words: ["celula", "célula", "celulas", "células"] },
          { label: "La célula es la unidad estructural y funcional", words: ["unidad", "estructural", "funcional"] },
        ],
        pasos: [
          ["Pistas", "Hoja (planta), insecto (animal) y bacterias (microorganismos)."],
          ["Conceptos", "<b>Botánica</b>, <b>zoología</b>, <b>microbiología</b> y <b>teoría celular</b>."],
          ["Explicación", "La hoja la estudia la botánica, el insecto la zoología y las bacterias la microbiología. Las tres están formadas por células."],
          ["Conclusión", "Según la teoría celular, la célula es la unidad estructural y funcional de todos los seres vivos."],
        ],
        modelo:
          "La hoja de geranio la estudia la botánica, el insecto la zoología y las bacterias la microbiología. Las tres muestras tienen en común que están formadas por células: según la teoría celular, todos los seres vivos están formados por una o más células y la célula es la unidad estructural y funcional de la vida.",
      },
      {
        id: "t1c4",
        titulo: "El pez de la pecera",
        resumen: "Características de los seres vivos en un animal.",
        situacion:
          "Un pez en una pecera come el alimento, crece durante varios meses, mantiene estable la cantidad de sales de su cuerpo aunque cambie un poco el agua, y al cabo de un tiempo tiene crías. Un compañero dice que no es un ser vivo «porque no habla». Hay que explicar, con las características de la vida, por qué sí lo es y qué rama lo estudia.",
        guia: [
          "¿Qué características de los seres vivos se observan?",
          "¿Cuál corresponde a mantener el equilibrio interno?",
          "¿Qué rama de la biología estudia a este organismo?",
        ],
        claves: [
          { label: "Nutrición (come)", words: ["nutricion", "nutrición", "aliment"] },
          { label: "Crecimiento", words: ["crec"] },
          { label: "Homeostasis o equilibrio interno", words: ["homeostasis", "equilibrio"] },
          { label: "Reproducción (crías)", words: ["reproduc", "crias", "crías"] },
          { label: "Zoología", words: ["zoologia", "zoología"] },
        ],
        pasos: [
          ["Pistas", "Come, crece, regula sales, tiene crías."],
          ["Conceptos", "Características de la vida: nutrición, crecimiento, homeostasis y reproducción. Rama: <b>zoología</b>."],
          ["Explicación", "Hablar no es una característica de la vida. El pez está organizado en células, se nutre, crece, mantiene su equilibrio interno y se reproduce."],
          ["Conclusión", "Es un ser vivo y lo estudia la zoología."],
        ],
        modelo:
          "El pez es un ser vivo porque presenta nutrición (se alimenta), crecimiento, homeostasis (mantiene el equilibrio interno de sales) y reproducción (tiene crías). Que no hable no lo excluye de la vida. La rama que estudia a los animales es la zoología.",
      },
    ],
  });

  add(2, {
    completar: [
      "Francesco {{Redi}} refutó la generación espontánea en 1668.",
      "Louis {{Pasteur}} refutó la generación espontánea en 1862.",
      "La {{irritabilidad}} es la respuesta de los seres vivos a los estímulos.",
      "Una {{población|poblacion}} reúne individuos de la misma especie en un lugar.",
      "La {{comunidad}} reúne poblaciones de distintas especies que interactúan.",
      "El primer paso del método científico es la {{observación|observacion}}.",
      "Después del experimento se hace el {{análisis|analisis}} de los datos.",
      "El nivel {{atómico|atomico}} está entre el subatómico y el molecular.",
    ],
    marcar: [
      {
        q: "¿Quién refutó la generación espontánea en 1668?",
        o: ["Pasteur", "Oparin", "Francesco Redi", "Miller"],
        a: 2,
        why: "Redi en 1668; Pasteur en 1862.",
      },
      {
        q: "Si el análisis de los datos no apoya la hipótesis, el método científico…",
        o: ["Se da por terminado para siempre", "Puede reiniciarse", "Se convierte en generación espontánea", "Pasa directo a la biosfera"],
        a: 1,
        why: "No es rígido ni lineal: puede reiniciarse.",
      },
      {
        q: "Un grupo de cebras que viven en la misma sabana es una…",
        o: ["Comunidad", "Población", "Biosfera", "Molécula"],
        a: 1,
        why: "Misma especie = población. Varias especies = comunidad.",
      },
      {
        q: "¿Qué teoría dice que todo ser vivo proviene de otro ser vivo?",
        o: ["Panspermia", "Generación espontánea", "Biogénesis", "Teoría del flogisto"],
        a: 2,
        why: "Biogénesis.",
      },
      {
        q: "Arrhenius (1908) es conocido por proponer la…",
        o: ["Biogénesis", "Panspermia", "Teoría celular", "Fermentación"],
        a: 1,
        why: "La vida o sus precursores pudieron llegar del espacio.",
      },
      {
        q: "¿Cuál nivel está justo después de «comunidad»?",
        o: ["Población", "Órgano", "Ecosistema", "Átomo"],
        a: 2,
        why: "Población → comunidad → ecosistema → biosfera.",
      },
      {
        q: "La respuesta a estímulos se llama…",
        o: ["Irritabilidad", "Panspermia", "Biosfera", "Análisis"],
        a: 0,
        why: "Irritabilidad.",
      },
      {
        q: "Según Curtis y Barnes, la biología abarca…",
        o: ["Solo las células", "Desde la molécula hasta la biosfera", "Solo los animales", "Únicamente el origen de la vida"],
        a: 1,
        why: "Desde la molécula hasta la biosfera.",
      },
    ],
    vf: [
      { q: "Una hipótesis es una posible explicación que se pone a prueba.", a: true, why: "Luego viene el experimento." },
      { q: "La comunidad es un conjunto de individuos de una sola especie.", a: false, why: "Eso es la población. La comunidad reúne varias especies." },
      { q: "Oparin propuso la panspermia en 1908.", a: false, why: "La panspermia es de Arrhenius. Oparin (1938) propuso la teoría bioquímica." },
      { q: "El método científico produce conocimiento objetivo, verificable y replicable.", a: true, why: "Por eso se distingue del saber cotidiano." },
      { q: "El nivel subatómico es más complejo que la biosfera.", a: false, why: "El subatómico es el más simple; la biosfera, el más complejo." },
      { q: "La biogénesis sustenta la biología moderna.", a: true, why: "Todo ser vivo proviene de otro ser vivo." },
      { q: "Miller y Urey simularon la Tierra primitiva y obtuvieron compuestos orgánicos.", a: true, why: "En 1953." },
      { q: "La adaptación y la evolución no son características de los seres vivos.", a: false, why: "Sí lo son, junto con la irritabilidad, la homeostasis y las demás." },
    ],
    casos: [
      {
        id: "t2c3",
        titulo: "El experimento que hay que repetir",
        resumen: "El método científico no es una línea recta.",
        situacion:
          "Una estudiante observa que las plantas de su ventana crecen inclinadas. Pregunta por qué y plantea la hipótesis de que crecen hacia la luz. Tapa la mitad de las macetas con una caja oscura y deja la otra mitad al sol. Al analizar, las tapadas no se inclinan, pero además varias se marchitan. Su compañero dice que el experimento «ya no sirve» y que el método científico obliga a aceptar la primera hipótesis. Ella quiere explicar qué debe hacer.",
        guia: [
          "¿Cuáles pasos del método científico ya cumplió?",
          "¿La caja oscura y las macetas al sol qué papel cumplen?",
          "¿Por qué el método puede reiniciarse?",
        ],
        claves: [
          { label: "Menciona observación, pregunta, hipótesis y experimento", words: ["observ", "pregunta", "hipotesis", "hipótesis", "experimento"] },
          { label: "Menciona el análisis o la conclusión", words: ["analisis", "análisis", "conclusion", "conclusión"] },
          { label: "Dice que el método no es rígido ni lineal / puede reiniciarse", words: ["reinic", "no es rigido", "no es rígido", "no es lineal", "no es rigida"] },
          { label: "Relaciona el resultado con la luz como estímulo", words: ["luz", "estimulo", "estímulo"] },
        ],
        pasos: [
          ["Pistas", "Observación, hipótesis de la luz, dos grupos de macetas, un resultado inesperado."],
          ["Conceptos", "<b>Método científico</b>: observación, pregunta, hipótesis, experimento, análisis y conclusión. No es lineal."],
          ["Explicación", "El grupo al sol y el grupo tapado permiten comparar. El análisis muestra que la luz influye, pero el marchitamiento es un dato nuevo."],
          ["Conclusión", "No se acepta la hipótesis «porque sí»: se analiza y, si hace falta, se reinicia el método con una nueva pregunta."],
        ],
        modelo:
          "La estudiante ya hizo observación, pregunta, hipótesis y experimento. Al analizar los datos ve que las plantas responden a la luz, pero también aparecen datos nuevos (se marchitan). El método científico no es rígido ni lineal: a partir del análisis puede reiniciarse y plantear otra pregunta o ajustar la hipótesis antes de concluir.",
      },
      {
        id: "t2c4",
        titulo: "Una laguna y sus niveles",
        resumen: "Población, comunidad, ecosistema y biosfera.",
        situacion:
          "En una laguna hay muchas ranas de la misma especie, además de insectos, algas y aves. El agua, la luz y el suelo también forman parte del lugar. Una estudiante debe decir qué nivel de organización es el grupo de ranas, qué nivel son todas las especies juntas con su ambiente, y cómo se relaciona eso con la biosfera.",
        guia: [
          "¿Qué es una población en este caso?",
          "¿En qué se diferencia la comunidad del ecosistema?",
          "¿Dónde entra la biosfera?",
        ],
        claves: [
          { label: "Las ranas de la misma especie son una población", words: ["poblacion", "población"] },
          { label: "Varias especies juntas forman una comunidad", words: ["comunidad"] },
          { label: "Seres vivos más ambiente (agua, luz, suelo) = ecosistema", words: ["ecosistema"] },
          { label: "La biosfera es el nivel más complejo / conjunto de ecosistemas", words: ["biosfera"] },
        ],
        pasos: [
          ["Pistas", "Una especie (ranas), varias especies, factores del ambiente, planeta."],
          ["Conceptos", "Niveles: <b>población → comunidad → ecosistema → biosfera</b>."],
          ["Explicación", "Ranas de la misma especie: población. Ranas, insectos, algas y aves: comunidad. Esa comunidad más agua, luz y suelo: ecosistema."],
          ["Conclusión", "La biosfera reúne todos los ecosistemas del planeta y es el nivel más complejo."],
        ],
        modelo:
          "El grupo de ranas de la misma especie es una población. Todas las especies que interactúan (ranas, insectos, algas y aves) forman una comunidad. Al sumar el ambiente (agua, luz y suelo) se obtiene el ecosistema. La biosfera es el nivel más complejo: el conjunto de los ecosistemas del planeta.",
      },
    ],
  });

  add(3, {
    completar: [
      "El agua es cerca del {{70}} % del peso corporal de la mayoría de los organismos.",
      "La {{fructosa}} es un monosacárido, igual que la glucosa.",
      "La {{lactosa}} es un disacárido, igual que la sacarosa.",
      "El {{glucógeno|glucogeno}} es el polisacárido de reserva en los animales.",
      "Los lípidos son moléculas mayormente {{hidrofóbicas|hidrofobicas|apolares}}.",
      "En el ADN, la citosina (C) se une con la {{guanina}} (G).",
      "La estructura {{primaria}} de una proteína es su secuencia de aminoácidos.",
      "El {{hierro}} permite el transporte de oxígeno en la hemoglobina.",
    ],
    marcar: [
      {
        q: "¿Cuál es un disacárido?",
        o: ["Glucosa", "Fructosa", "Lactosa", "Celulosa"],
        a: 2,
        why: "Lactosa y sacarosa son disacáridos. Glucosa y fructosa son monosacáridos; la celulosa es un polisacárido.",
      },
      {
        q: "¿Qué propiedad del agua permite la capilaridad?",
        o: ["El bajo calor específico", "La cohesión y la adhesión", "Ser un lípido", "No formar puentes de hidrógeno"],
        a: 1,
        why: "Cohesión y adhesión.",
      },
      {
        q: "Los esteroides, como el colesterol, son…",
        o: ["Monosacáridos", "Precursores de hormonas", "Ácidos nucleicos", "Electrolitos"],
        a: 1,
        why: "Los esteroides son lípidos precursores de hormonas.",
      },
      {
        q: "¿Qué ácido nucleico es de cadena simple y lleva uracilo?",
        o: ["ADN", "ARN", "Glucógeno", "Fosfolípido"],
        a: 1,
        why: "El ARN es de cadena simple y tiene uracilo; el ADN tiene timina y es doble hélice.",
      },
      {
        q: "Si una proteína pierde su forma por el calor, pierde también…",
        o: ["Sus átomos de carbono", "Su función", "El agua del planeta", "La teoría celular"],
        a: 1,
        why: "Estructura correcta, función correcta. El cambio de forma es desnaturalización.",
      },
      {
        q: "Las sales minerales disueltas se separan en…",
        o: ["Aminoácidos", "Iones o electrolitos", "Codones", "Tilacoides"],
        a: 1,
        why: "Regulan presión osmótica, pH y enzimas.",
      },
      {
        q: "¿Qué polisacárido da soporte estructural a las plantas?",
        o: ["Glucosa", "Celulosa", "Colesterol", "Hemoglobina"],
        a: 1,
        why: "Celulosa. El almidón y el glucógeno son de reserva.",
      },
      {
        q: "La proporción aproximada de C, H y O en los carbohidratos es…",
        o: ["1 : 1 : 1", "1 : 2 : 1", "2 : 1 : 2", "6 : 1 : 6"],
        a: 1,
        why: "1 : 2 : 1.",
      },
    ],
    vf: [
      { q: "Los puentes de hidrógeno unen a las moléculas de agua entre sí.", a: true, why: "Dan cohesión interna." },
      { q: "Los triglicéridos forman la bicapa de la membrana.", a: false, why: "Eso lo hacen los fosfolípidos. Los triglicéridos son reserva de energía." },
      { q: "El almidón es un monosacárido.", a: false, why: "Es un polisacárido, como el glucógeno y la celulosa." },
      { q: "Una función correcta de la proteína depende de una estructura correcta.", a: true, why: "La secuencia (estructura primaria) determina el plegamiento." },
      { q: "El ADN almacena la información genética.", a: true, why: "Doble cadena, bases A–T y C–G." },
      { q: "El agua tiene polaridad porque sus cargas se distribuyen de forma asimétrica.", a: true, why: "Es un dipolo y por eso disuelve solutos iónicos y polares." },
      { q: "Los microminerales no participan en la hemoglobina ni en las enzimas.", a: false, why: "El hierro transporta oxígeno y otros oligoelementos son cofactores." },
      { q: "La sacarosa es un disacárido.", a: true, why: "Igual que la lactosa." },
    ],
    casos: [
      {
        id: "t3c3",
        titulo: "La lonchera de la práctica",
        resumen: "Clasificar biomoléculas por su función.",
        situacion:
          "En una lonchera hay pan, un poco de aceite y un huevo duro. La docente pide explicar qué tipo de biomolécula predomina en cada alimento y cuál es su función principal: energía rápida o soporte, reserva energética, o estructura y función (como las enzimas).",
        guia: [
          "¿Qué biomolécula predomina en el pan?",
          "¿Qué tipo de lípido es el aceite y para qué sirve?",
          "¿Por qué el huevo se relaciona con las proteínas?",
        ],
        claves: [
          { label: "El pan aporta carbohidratos (almidón)", words: ["carbohidrato", "almidon", "almidón"] },
          { label: "Función energética o de soporte de los carbohidratos", words: ["energia", "energía", "soporte"] },
          { label: "El aceite es un lípido / triglicérido de reserva", words: ["lipido", "lípido", "triglicer", "reserva"] },
          { label: "El huevo aporta proteínas formadas por aminoácidos", words: ["proteina", "proteína", "aminoacid"] },
        ],
        pasos: [
          ["Pistas", "Pan, aceite y huevo: tres biomoléculas distintas."],
          ["Conceptos", "<b>Carbohidratos</b>, <b>lípidos</b> y <b>proteínas</b>."],
          ["Explicación", "El pan tiene almidón (carbohidrato): energía y, en plantas, soporte. El aceite es un lípido tipo triglicérido: reserva energética. El huevo es rico en proteínas, cuya secuencia de aminoácidos determina su función."],
          ["Conclusión", "Cada alimento ilustra una biomolécula de la matriz del tema."],
        ],
        modelo:
          "El pan aporta carbohidratos, como el almidón, cuya función principal es energética. El aceite es un lípido (triglicérido) y funciona como reserva energética. El huevo aporta proteínas, formadas por aminoácidos, que cumplen funciones estructurales y celulares, por ejemplo como enzimas. La estructura de cada biomolécula se relaciona con su función.",
      },
      {
        id: "t3c4",
        titulo: "Papa, músculo y pared vegetal",
        resumen: "Tres polisacáridos y un lípido de membrana.",
        situacion:
          "Un estudiante confunde tres sustancias: el almidón de una papa, el glucógeno del músculo y la celulosa de la pared de una célula vegetal. Además dice que la membrana celular «es de azúcar». Hay que corregirlo indicando qué es cada polisacárido y qué lípido forma la bicapa.",
        guia: [
          "¿Cuál polisacárido es de reserva en plantas y cuál en animales?",
          "¿Cuál da soporte estructural?",
          "¿Qué molécula forma realmente la bicapa de la membrana?",
        ],
        claves: [
          { label: "Almidón: reserva en plantas", words: ["almidon", "almidón"] },
          { label: "Glucógeno: reserva en animales", words: ["glucogeno", "glucógeno"] },
          { label: "Celulosa: soporte estructural en plantas", words: ["celulosa"] },
          { label: "Fosfolípidos en la bicapa de la membrana", words: ["fosfolipid"] },
        ],
        pasos: [
          ["Pistas", "Papa, músculo, pared vegetal y membrana."],
          ["Conceptos", "Polisacáridos y <b>fosfolípidos</b>."],
          ["Explicación", "Almidón: reserva vegetal. Glucógeno: reserva animal. Celulosa: soporte en plantas. La membrana no es de azúcar: su bicapa es de fosfolípidos."],
          ["Conclusión", "Los tres primeros son carbohidratos; la membrana depende de un lípido."],
        ],
        modelo:
          "El almidón de la papa y el glucógeno del músculo son polisacáridos de reserva (plantas y animales, respectivamente). La celulosa da soporte estructural a la pared de la célula vegetal. La bicapa de la membrana no está hecha de azúcar, sino de fosfolípidos.",
      },
    ],
  });

  add(4, {
    completar: [
      "{{Hooke}} observó el corcho y nombró las células en 1665.",
      "{{Virchow}} afirmó en 1855 que toda célula proviene de otra célula.",
      "El ADN de la célula procariota está en el {{nucleoide}}.",
      "Las bacterias tienen ribosomas {{70S}}.",
      "El retículo endoplasmático {{liso}} sintetiza lípidos y detoxifica.",
      "El retículo endoplasmático {{rugoso}} sintetiza proteínas.",
      "La difusión {{facilitada}} usa proteínas para que pase, por ejemplo, la glucosa.",
      "La {{exocitosis}} saca materiales de la célula mediante vesículas.",
    ],
    marcar: [
      {
        q: "¿Quién observó células vivas y microorganismos en 1674?",
        o: ["Hooke", "Van Leeuwenhoek", "Virchow", "Singer"],
        a: 1,
        why: "Hooke (1665) nombró las células en el corcho. Leeuwenhoek vio células vivas.",
      },
      {
        q: "Schleiden (1838) y Schwann (1839) propusieron que…",
        o: ["Las plantas y los animales están formados por células", "La vida llegó del espacio", "La membrana es de peptidoglicano", "El ATP se produce en el núcleo"],
        a: 0,
        why: "Schleiden: plantas. Schwann: animales.",
      },
      {
        q: "¿Dónde se produce la mayor parte del ATP de la respiración?",
        o: ["En el núcleo", "En la mitocondria", "En el ribosoma 70S solamente", "En la pared de peptidoglicano"],
        a: 1,
        why: "La mitocondria es la central energética.",
      },
      {
        q: "La bomba de sodio-potasio es transporte…",
        o: ["Pasivo, sin ATP", "Activo, gasta ATP y va contra el gradiente", "Solo ósmosis", "Exclusivo de las bacterias"],
        a: 1,
        why: "Transporte activo primario: Na⁺/K⁺ ATPasa.",
      },
      {
        q: "¿Qué organelo modifica, clasifica y empaqueta proteínas y lípidos?",
        o: ["Lisosoma", "Aparato de Golgi", "Nucleoide", "Pared celular"],
        a: 1,
        why: "Aparato de Golgi.",
      },
      {
        q: "Una célula vegetal se distingue de una célula animal típica porque tiene…",
        o: ["Nucleoide y peptidoglicano", "Cloroplastos y pared celular", "Solo ribosomas 70S", "Ausencia de núcleo"],
        a: 1,
        why: "Ambas son eucariotas; la vegetal tiene pared y cloroplastos.",
      },
      {
        q: "El paso de O₂ y CO₂ a través de la bicapa, sin proteínas, es…",
        o: ["Difusión simple", "Transporte activo", "Fagocitosis", "Pinocitosis"],
        a: 0,
        why: "Difusión simple, un tipo de transporte pasivo.",
      },
      {
        q: "Los lisosomas contienen…",
        o: ["Clorofila", "Enzimas hidrolíticas", "Peptidoglicano", "El huso mitótico"],
        a: 1,
        why: "Digieren macromoléculas y desechos.",
      },
    ],
    vf: [
      { q: "Las células eucariotas miden aproximadamente 1–10 µm.", a: false, why: "Ese tamaño es de procariotas. Las eucariotas miden unos 10–100 µm." },
      { q: "El modelo del mosaico fluido lo propusieron Singer y Nicolson en 1972.", a: true, why: "Bicapa de fosfolípidos con proteínas." },
      { q: "La ósmosis es la difusión del agua a través de una membrana semipermeable.", a: true, why: "Es transporte pasivo." },
      { q: "Escherichia coli es un ejemplo de célula eucariota.", a: false, why: "Es una bacteria procariota." },
      { q: "El nucléolo y los poros nucleares forman parte del núcleo.", a: true, why: "El núcleo contiene el ADN y regula la célula." },
      { q: "La difusión facilitada requiere ATP.", a: false, why: "Es pasiva: usa proteínas, pero va a favor del gradiente y no gasta ATP." },
      { q: "La pared de peptidoglicano es propia de las células procariotas bacterianas.", a: true, why: "Las eucariotas vegetales tienen otra pared, de celulosa." },
      { q: "El citoesqueleto participa en el soporte y el movimiento celular.", a: true, why: "Microtúbulos y microfilamentos." },
    ],
    casos: [
      {
        id: "t4c3",
        titulo: "La proteína que viaja",
        resumen: "RE rugoso, Golgi y exocitosis.",
        situacion:
          "Una célula del páncreas fabrica una proteína que debe salir al exterior. El docente dice que la proteína se ensambla en un organelo con ribosomas, luego pasa a otro que la empaqueta y finalmente sale en una vesícula. Los estudiantes deben nombrar esos organelos y el tipo de transporte de salida.",
        guia: [
          "¿Dónde se sintetiza esa proteína y por qué?",
          "¿Qué organelo la modifica y empaqueta?",
          "¿Cómo se llama la salida masiva en vesículas?",
        ],
        claves: [
          { label: "Retículo endoplasmático rugoso (síntesis de proteínas)", words: ["rugoso"] },
          { label: "Ribosomas", words: ["ribosoma"] },
          { label: "Aparato de Golgi", words: ["golgi"] },
          { label: "Exocitosis", words: ["exocitosis"] },
        ],
        pasos: [
          ["Pistas", "Proteína de exportación: se fabrica, se empaqueta y sale en vesícula."],
          ["Conceptos", "<b>RE rugoso</b>, <b>aparato de Golgi</b> y <b>exocitosis</b>."],
          ["Explicación", "El RE rugoso tiene ribosomas y sintetiza la proteína. El Golgi la modifica, clasifica y empaqueta. La exocitosis la saca de la célula."],
          ["Conclusión", "No es el RE liso (ese hace lípidos) ni un transporte de iones."],
        ],
        modelo:
          "La proteína se sintetiza en el retículo endoplasmático rugoso, que tiene ribosomas. Luego el aparato de Golgi la modifica, clasifica y empaqueta. Sale de la célula por exocitosis, un transporte en masa mediante vesículas.",
      },
      {
        id: "t4c4",
        titulo: "Iones contra la corriente",
        resumen: "Transporte activo y transporte pasivo.",
        situacion:
          "En una neurona, el potasio está más concentrado dentro de la célula que fuera, y aun así la célula sigue metiendo potasio. Al mismo tiempo, el oxígeno entra desde donde hay más hacia donde hay menos, sin gastar energía. Hay que explicar qué tipo de transporte es cada caso y qué molécula gasta el primero.",
        guia: [
          "¿Cuál va contra el gradiente y cuál a favor?",
          "¿Cuál requiere ATP?",
          "¿Cómo se llama la bomba del ejemplo del curso?",
        ],
        claves: [
          { label: "Transporte activo (contra el gradiente, gasta ATP)", words: ["activo"] },
          { label: "Bomba sodio-potasio o ATP", words: ["sodio", "bomba", "atp"] },
          { label: "Transporte pasivo del oxígeno (difusión simple)", words: ["pasivo", "difusion", "difusión"] },
          { label: "A favor del gradiente y sin gasto de energía", words: ["a favor", "sin gastar", "no gasta", "no requiere"] },
        ],
        pasos: [
          ["Pistas", "Un soluto entra contra su gradiente; el oxígeno entra a favor y sin energía."],
          ["Conceptos", "<b>Transporte activo</b> y <b>transporte pasivo</b> (difusión simple)."],
          ["Explicación", "Meter potasio donde ya hay mucho es contra el gradiente: lo hace la bomba sodio-potasio y gasta ATP. El O₂ cruza la bicapa por difusión simple, a favor del gradiente y sin ATP."],
          ["Conclusión", "No toda entrada de sustancias es ósmosis: la ósmosis es el movimiento del agua."],
        ],
        modelo:
          "El ingreso de potasio contra el gradiente es transporte activo: lo realiza la bomba de sodio-potasio y requiere ATP. El oxígeno entra por difusión simple, un transporte pasivo a favor del gradiente, por la bicapa y sin gastar ATP.",
      },
    ],
  });

  add(5, {
    completar: [
      "Las enzimas bajan la energía de {{activación|activacion}}.",
      "El modelo de unión enzima-sustrato del curso se llama ajuste {{inducido}}.",
      "La {{amilasa}} salival convierte el almidón en maltosa.",
      "Al hidrolizarse, el ATP produce {{ADP}}, fosfato y energía.",
      "La cadena transportadora de electrones está en la membrana interna de la {{mitocondria}}.",
      "La fermentación ocurre en el {{citoplasma}} y no requiere oxígeno.",
      "En la fase luminosa, la {{clorofila}} capta la luz.",
      "La fotosíntesis produce glucosa y libera {{oxígeno|oxigeno}}.",
    ],
    marcar: [
      {
        q: "¿Dónde ocurre el ciclo de Krebs?",
        o: ["En los tilacoides", "En la matriz mitocondrial", "En el estroma", "En el núcleo"],
        a: 1,
        why: "Glucólisis en el citoplasma; Krebs en la matriz; cadena en la membrana interna.",
      },
      {
        q: "¿Qué regenera la fermentación para que la glucólisis pueda continuar?",
        o: ["ADN", "NAD⁺", "Clorofila", "Peptidoglicano"],
        a: 1,
        why: "Pasa NADH a NAD⁺.",
      },
      {
        q: "La pepsina trabaja mejor en…",
        o: ["Cualquier pH", "pH ácido", "Un horno a 200 °C", "Ausencia de sustrato"],
        a: 1,
        why: "Cada enzima tiene un pH óptimo.",
      },
      {
        q: "¿Cuántos ATP netos produce la glucólisis por cada glucosa?",
        o: ["2", "36", "38", "100"],
        a: 0,
        why: "2 ATP netos. El total de la respiración aerobia es de unos 36–38.",
      },
      {
        q: "El ciclo de Calvin ocurre en…",
        o: ["El estroma del cloroplasto", "La matriz mitocondrial", "El nucleoide", "El lisosoma"],
        a: 0,
        why: "Fase oscura en el estroma; fase luminosa en los tilacoides.",
      },
      {
        q: "¿Qué organismo hace la fermentación láctica del yogur?",
        o: ["Saccharomyces cerevisiae", "Lactobacillus", "Una cianobacteria", "El cloroplasto"],
        a: 1,
        why: "Lactobacillus. La levadura hace la fermentación alcohólica.",
      },
      {
        q: "La ecuación de la respiración celular consume glucosa y…",
        o: ["Oxígeno", "Solo luz", "Etanol", "Clorofila"],
        a: 0,
        why: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ATP.",
      },
      {
        q: "Si se satura la enzima con sustrato, la velocidad…",
        o: ["Sigue subiendo sin límite", "Ya no aumenta aunque se agregue más sustrato", "Se vuelve fotosíntesis", "Elimina el sitio activo para siempre"],
        a: 1,
        why: "A más sustrato, más velocidad, hasta saturar la enzima.",
      },
    ],
    vf: [
      { q: "Las enzimas se gastan por completo al catalizar la reacción.", a: false, why: "No se consumen." },
      { q: "El ATP es la moneda energética de la célula.", a: true, why: "Adenosín trifosfato." },
      { q: "La fase luminosa de la fotosíntesis ocurre en el estroma.", a: false, why: "Ocurre en los tilacoides. En el estroma está el ciclo de Calvin." },
      { q: "La fermentación alcohólica produce etanol y CO₂.", a: true, why: "La hacen las levaduras." },
      { q: "La cadena transportadora produce la mayor parte del ATP de la respiración.", a: true, why: "En la membrana interna mitocondrial." },
      { q: "La fotosíntesis y la respiración tienen la misma ecuación en el mismo sentido.", a: false, why: "Son procesos inversos en cuanto a glucosa, O₂, CO₂ y agua." },
      { q: "Un exceso de calor puede desnaturalizar una enzima.", a: true, why: "Pierde su forma y deja de funcionar." },
      { q: "La fermentación produce alrededor de 36 ATP por glucosa.", a: false, why: "Produce 2 ATP. Los 36–38 son de la respiración aerobia." },
    ],
    casos: [
      {
        id: "t5c3",
        titulo: "Fiebre y enzimas",
        resumen: "Temperatura, pH y amilasa.",
        situacion:
          "Un estudiante tiene fiebre muy alta y lee que, si la temperatura sube demasiado, algunas proteínas de su cuerpo dejan de funcionar. En clase acaban de ver que la amilasa salival corta el almidón en la boca y que la pepsina trabaja en el estómago, a pH ácido. Debe explicar qué les pasa a las enzimas con el calor y por qué la amilasa no haría bien su trabajo en el estómago.",
        guia: [
          "¿Qué les ocurre a las enzimas con un calor excesivo?",
          "¿Qué otro factor, además de la temperatura, cambia su actividad?",
          "¿Qué reacción cataliza la amilasa salival?",
        ],
        claves: [
          { label: "Desnaturalización por exceso de calor", words: ["desnaturaliz"] },
          { label: "El pH también afecta a la enzima", words: ["ph"] },
          { label: "La pepsina actúa en pH ácido", words: ["pepsina", "acido", "ácido"] },
          { label: "La amilasa degrada el almidón en maltosa", words: ["amilasa", "almidon", "almidón", "maltosa"] },
        ],
        pasos: [
          ["Pistas", "Fiebre alta, amilasa en la boca, pepsina en el estómago."],
          ["Conceptos", "Las <b>enzimas</b> dependen de la temperatura y del pH."],
          ["Explicación", "El calor excesivo desnaturaliza la enzima: pierde su forma y ya no baja la energía de activación. Cada enzima tiene un pH óptimo; la pepsina trabaja en ácido y la amilasa, no."],
          ["Conclusión", "Por eso la amilasa no funcionaría bien en el estómago."],
        ],
        modelo:
          "Con un calor excesivo las enzimas se desnaturalizan: cambian de forma y dejan de funcionar. Además del calor, el pH modifica su actividad. La amilasa salival degrada el almidón en maltosa en la boca, pero la pepsina está adaptada a un pH ácido, así que la amilasa no trabajaría bien en el estómago.",
      },
      {
        id: "t5c4",
        titulo: "La planta a oscuras",
        resumen: "Fotosíntesis y respiración en la misma célula vegetal.",
        situacion:
          "Una planta de frijol pasa el día al sol y libera oxígeno. De noche la dejan en un armario oscuro. Un estudiante cree que de noche la planta «se apaga» y que sus células ya no obtienen energía. Hay que explicar qué proceso se detiene sin luz y cómo siguen obteniendo ATP las mitocondrias si hay oxígeno.",
        guia: [
          "¿Qué fase de la fotosíntesis necesita luz y qué gas libera?",
          "¿Qué organelo hace la respiración celular?",
          "¿Cuántos ATP, aproximadamente, rinde la respiración aerobia?",
        ],
        claves: [
          { label: "Sin luz no hay fase luminosa / no se libera O₂ de la fotosíntesis", words: ["luz", "luminosa", "oxigeno", "oxígeno"] },
          { label: "La fotosíntesis ocurre en el cloroplasto", words: ["cloroplasto", "clorofila"] },
          { label: "La respiración celular sigue en la mitocondria", words: ["mitocondria", "respiracion", "respiración"] },
          { label: "Produce unos 36–38 ATP si hay oxígeno", words: ["36", "38", "atp"] },
        ],
        pasos: [
          ["Pistas", "De día libera O₂ al sol; de noche no hay luz, pero la célula sigue viva."],
          ["Conceptos", "<b>Fotosíntesis</b> (cloroplasto) y <b>respiración celular</b> (mitocondria)."],
          ["Explicación", "Sin luz no ocurre la fase luminosa: no se capta luz ni se libera O₂ por fotosíntesis, y el ciclo de Calvin se queda sin ATP y NADPH. Si hay oxígeno, la mitocondria sigue haciendo glucólisis, Krebs y cadena transportadora."],
          ["Conclusión", "La planta no «se apaga»: de noche obtiene energía por respiración, no por fotosíntesis."],
        ],
        modelo:
          "Sin luz se detiene la fase luminosa de la fotosíntesis en el cloroplasto, así que la clorofila no capta luz y no se libera oxígeno por ese proceso. Las células siguen obteniendo energía por respiración celular en la mitocondria, que con oxígeno produce unos 36 a 38 ATP por glucosa.",
      },
    ],
  });

  add(6, {
    completar: [
      "Un nucleótido de ADN tiene desoxirribosa, un grupo fosfato y una base {{nitrogenada}}.",
      "El ARN de {{transferencia}} lleva los aminoácidos al ribosoma.",
      "Las células somáticas humanas tienen {{46}} cromosomas.",
      "El ADN se compacta con proteínas llamadas {{histonas}}.",
      "El codón que inicia la traducción es {{AUG}}.",
      "Un individuo AA, con dos alelos iguales dominantes, es homocigoto {{dominante}}.",
      "La ley de la {{segregación|segregacion}} dice que los alelos se separan al formar los gametos.",
      "El código genético es {{degenerado}} porque varios codones pueden indicar el mismo aminoácido.",
    ],
    marcar: [
      {
        q: "Si la hebra de ADN es G-G-A-T, la complementaria es…",
        o: ["C-C-T-A", "G-G-A-T", "C-C-U-A", "T-T-C-G"],
        a: 0,
        why: "A–T y C–G. G-G-A-T se aparea con C-C-T-A.",
      },
      {
        q: "¿Dónde ocurre la transcripción?",
        o: ["En el ribosoma", "En el núcleo", "En el lisosoma", "En el cloroplasto solamente"],
        a: 1,
        why: "Transcripción en el núcleo; traducción en el ribosoma.",
      },
      {
        q: "¿Qué proporción genotípica se espera en Aa × Aa?",
        o: ["3 : 1", "1 AA : 2 Aa : 1 aa", "1 : 1", "9 : 3 : 3 : 1"],
        a: 1,
        why: "Genotipos 1:2:1. La 3:1 es fenotípica.",
      },
      {
        q: "Un organismo aa se describe como…",
        o: ["Homocigoto dominante", "Heterocigoto", "Homocigoto recesivo", "Codón de inicio"],
        a: 2,
        why: "Dos alelos recesivos iguales.",
      },
      {
        q: "Los gametos humanos tienen…",
        o: ["46 cromosomas", "23 cromosomas", "92 cromosomas", "2 cromosomas"],
        a: 1,
        why: "Las somáticas tienen 46; los gametos, 23.",
      },
      {
        q: "¿Qué significa que el código genético es degenerado?",
        o: ["Que el ADN está roto", "Que varios codones pueden codificar el mismo aminoácido", "Que solo existe un codón en total", "Que la traducción ocurre en el núcleo"],
        a: 1,
        why: "Por eso un cambio de base a veces no altera el aminoácido.",
      },
      {
        q: "La ley de distribución independiente se aplica a genes que…",
        o: ["Siempre están ligados", "No están ligados", "No se separan nunca", "Solo existen en bacterias"],
        a: 1,
        why: "Si no están ligados, sus alelos pueden repartirse de forma independiente.",
      },
      {
        q: "El ARNr se caracteriza porque…",
        o: ["Forma parte de los ribosomas", "Es la doble hélice de ADN", "Es una histona", "Inicia siempre con el alelo a"],
        a: 0,
        why: "ARN ribosómico. El mensajero lleva la copia del gen; el de transferencia, los aminoácidos.",
      },
    ],
    vf: [
      { q: "La transcripción copia un gen de ADN a ARNm.", a: true, why: "Ocurre en el núcleo." },
      { q: "Un codón está formado por dos bases del ARNm.", a: false, why: "Son tres bases." },
      { q: "El fenotipo es lo que se observa; el genotipo son los alelos.", a: true, why: "Genotipo = letras. Fenotipo = característica observable." },
      { q: "En un heterocigoto Aa se expresan siempre los dos alelos por igual.", a: false, why: "Si A es dominante, el fenotipo es el del alelo A." },
      { q: "Mendel estudió la herencia en plantas de guisante.", a: true, why: "Se le considera fundador de la genética." },
      { q: "AUG es un codón de terminación.", a: false, why: "AUG es el codón de inicio." },
      { q: "Un cambio de una sola base puede, a veces, alterar la proteína.", a: true, why: "Aunque, como el código es degenerado, otras veces no cambia el aminoácido." },
      { q: "Los genes están ubicados en los cromosomas.", a: true, why: "El cromosoma es ADN más histonas." },
    ],
    casos: [
      {
        id: "t6c3",
        titulo: "Flores violetas inesperadas",
        resumen: "Otro cruce monohíbrido, misma lógica que el guisante.",
        situacion:
          "En un jardín, el color violeta de una flor (V) es dominante sobre el blanco (v). Se cruzan dos plantas heterocigotas de flores violetas (Vv × Vv). Nacen 200 plantas y aparecen algunas blancas. Los estudiantes deben explicar por qué salen blancas si los padres son violetas y cuántas blancas se esperarían.",
        guia: [
          "¿Qué gametos forma cada parental?",
          "¿Cuál es la proporción fenotípica?",
          "¿Por qué el blanco es recesivo y aparece en vv?",
        ],
        claves: [
          { label: "Ley de segregación o gametos V y v", words: ["segreg", "gameto"] },
          { label: "Proporción fenotípica 3:1", words: ["3:1", "3 : 1", "3 a 1", "tres"] },
          { label: "El blanco es recesivo (vv)", words: ["recesiv", "vv"] },
          { label: "Un cuarto serían blancas, unas 50 de 200", words: ["50", "cuarto", "25"] },
        ],
        pasos: [
          ["Pistas", "Vv × Vv, violeta dominante, blanco recesivo, 200 hijas."],
          ["Conceptos", "<b>Ley de segregación</b>, dominante, recesivo, genotipo y fenotipo."],
          ["Explicación", "Cada planta forma gametos V y v. El cuadro da 1 VV : 2 Vv : 1 vv. Fenotipos: 3 violetas : 1 blanca."],
          ["Conclusión", "De 200 se esperarían unas 50 blancas. Es una proporción teórica. El blanco aparece porque el alelo v estaba oculto en los heterocigotos."],
        ],
        modelo:
          "Por la ley de segregación, cada planta Vv forma gametos V y v. El cruce produce genotipos 1 VV : 2 Vv : 1 vv y una proporción fenotípica de 3 violetas : 1 blanca. Las blancas son homocigotas recesivas (vv): el alelo recesivo estaba oculto en los padres heterocigotos. De 200 plantas se esperarían unas 50 blancas, aunque es una proporción teórica.",
      },
      {
        id: "t6c4",
        titulo: "Otra lectura del gen",
        resumen: "Transcripción, traducción y una mutación distinta.",
        situacion:
          "La hebra molde de un gen es TAC-GTA-CCC. En clase piden el ARNm, el nombre de cada proceso y qué podría pasar si la última base de la tercera tripleta cambia de C a A. Recuerdan que el código es degenerado.",
        guia: [
          "¿Qué ARNm resulta y cómo se llama ese proceso?",
          "¿Dónde se lee el ARNm y de a cuántas bases?",
          "¿Por qué un cambio de base a veces altera la proteína y a veces no?",
        ],
        claves: [
          { label: "Transcripción y ARNm AUG-CAU-GGG", words: ["transcrip", "aug"] },
          { label: "Traducción en el ribosoma mediante codones", words: ["traduc", "ribosoma", "codon", "codón"] },
          { label: "Dogma central: ADN, ARN y proteína", words: ["proteina", "proteína", "arn"] },
          { label: "La mutación puede cambiar el aminoácido, pero el código es degenerado", words: ["degenerad", "mutacion", "mutación", "aminoacid"] },
        ],
        pasos: [
          ["Pistas", "Hebra molde TAC-GTA-CCC y un cambio en la última base."],
          ["Conceptos", "<b>Transcripción</b>, <b>traducción</b>, codón y código degenerado."],
          ["Explicación", "La transcripción produce el ARNm AUG-CAU-GGG (A se aparea con U, T con A, C con G, G con C). El ribosoma lee codones de tres bases. Si la última C de la molde pasa a A, cambia el último codón del ARNm."],
          ["Conclusión", "Ese cambio puede alterar un aminoácido y la proteína, pero como el código es degenerado, a veces el nuevo codón significa lo mismo."],
        ],
        modelo:
          "En la transcripción, la hebra molde TAC-GTA-CCC se copia al ARNm AUG-CAU-GGG. En la traducción, el ribosoma lee esos codones y une aminoácidos hasta formar la proteína: ADN, ARN y proteína. Si cambia la última base, el codón puede indicar otro aminoácido y alterar la proteína; como el código genético es degenerado, también es posible que el aminoácido no cambie.",
      },
    ],
  });

  add(7, {
    completar: [
      "En la {{profase}} los cromosomas se condensan y aparece el huso.",
      "En la {{telofase}} se forman de nuevo los dos núcleos.",
      "La {{citocinesis}} reparte el citoplasma y separa las dos células.",
      "En la meiosis I se separan los cromosomas {{homólogos|homologos}}.",
      "La meiosis produce por lo general {{4}} células haploides.",
      "La {{fisión|fision}} es la reproducción asexual típica de las bacterias.",
      "Las {{ciclinas}} y las CDK impulsan el paso de una fase del ciclo a la siguiente.",
      "La {{gastrulación|gastrulacion}} origina las tres capas germinales.",
    ],
    marcar: [
      {
        q: "¿Qué se separa en la anafase de la mitosis?",
        o: ["Los cromosomas homólogos", "Las cromátidas hermanas", "Los gametos", "Las tres capas germinales"],
        a: 1,
        why: "En mitosis y en meiosis II se separan cromátidas hermanas. En meiosis I, los homólogos.",
      },
      {
        q: "Una neurona madura que ya no se divide está en…",
        o: ["Fase S", "G0", "Metafase permanente", "Meiosis II"],
        a: 1,
        why: "G0 es la salida del ciclo.",
      },
      {
        q: "¿Qué punto de control revisa que el ADN no esté dañado antes de copiarlo?",
        o: ["G1/S", "Solo el huso, después de la telofase", "La fecundación", "La gastrulación"],
        a: 0,
        why: "G1/S revisa daños del ADN. G2/M confirma que se copió bien.",
      },
      {
        q: "La reproducción por estolones de la fresa es…",
        o: ["Sexual", "Vegetativa (asexual)", "Meiosis", "Fecundación"],
        a: 1,
        why: "Un solo progenitor, sin gametos.",
      },
      {
        q: "¿Qué proceso genera variabilidad genética durante la meiosis?",
        o: ["La citocinesis de una bacteria", "El entrecruzamiento y la distribución independiente", "La fase G0", "La fisión binaria"],
        a: 1,
        why: "Por eso las 4 células hijas no son iguales.",
      },
      {
        q: "Después de la fecundación, la primera célula del nuevo individuo se llama…",
        o: ["Gameto", "Cigoto", "Homólogo", "Estolón"],
        a: 1,
        why: "El cigoto es diploide y luego se divide por mitosis.",
      },
      {
        q: "¿Cuántas divisiones tiene la meiosis?",
        o: ["Una", "Dos", "Cuatro", "Ninguna"],
        a: 1,
        why: "Meiosis I y meiosis II. La mitosis tiene una.",
      },
      {
        q: "El epitelio intestinal se renueva en pocos días gracias sobre todo a la…",
        o: ["Meiosis", "Mitosis", "Panspermia", "Fragmentación de estolones"],
        a: 1,
        why: "Mitosis: crecimiento y renovación de tejidos somáticos.",
      },
    ],
    vf: [
      { q: "En la metafase de la mitosis los cromosomas se alinean en el centro.", a: true, why: "Luego, en anafase, se separan las cromátidas." },
      { q: "La meiosis II se parece a una mitosis porque separa cromátidas hermanas.", a: true, why: "La reducción del número de conjuntos ocurre en la meiosis I." },
      { q: "La fragmentación es un tipo de reproducción sexual.", a: false, why: "Es asexual: un fragmento origina un individuo, sin gametos." },
      { q: "Las células cancerosas respetan siempre los puntos de control del ciclo.", a: false, why: "Escapan de los controles y se dividen sin límite." },
      { q: "La fecundación restablece el número diploide de cromosomas.", a: true, why: "Une dos gametos haploides." },
      { q: "La mitosis ocurre en las gónadas para formar gametos.", a: false, why: "Eso es la meiosis. La mitosis ocurre en células somáticas." },
      { q: "Un cigoto humano se desarrolla mediante mitosis y diferenciación.", a: true, why: "Pasa por segmentación, gastrulación y diferenciación." },
      { q: "La reproducción asexual necesita dos progenitores y fecundación.", a: false, why: "Usa un solo progenitor y no hay fusión de gametos." },
    ],
    casos: [
      {
        id: "t7c4",
        titulo: "La célula que no obedece",
        resumen: "Puntos de control, cáncer y G0.",
        situacion:
          "En una biopsia, un médico compara dos células. Una es una neurona madura que hace años no se divide. La otra es de un tumor: copia su ADN aunque esté dañado y sigue entrando a la división una y otra vez. Hay que explicar en qué fase está la neurona, qué punto de control falló en la célula tumoral y qué moléculas empujan normalmente el ciclo.",
        guia: [
          "¿Qué es G0 y qué célula del caso está ahí?",
          "¿Qué revisa el punto G1/S?",
          "¿Qué moléculas impulsan las transiciones del ciclo?",
        ],
        claves: [
          { label: "La neurona está en G0", words: ["g0"] },
          { label: "El punto G1/S revisa que el ADN no esté dañado", words: ["g1", "dañ", "danad"] },
          { label: "La célula cancerosa escapa de los controles y se divide sin límite", words: ["cancer", "cáncer", "sin limite", "sin límite", "control"] },
          { label: "Ciclinas y CDK", words: ["ciclin", "cdk"] },
        ],
        pasos: [
          ["Pistas", "Una célula quieta hace años y otra que se divide aunque el ADN esté dañado."],
          ["Conceptos", "<b>G0</b>, punto de control <b>G1/S</b>, <b>ciclinas y CDK</b>."],
          ["Explicación", "La neurona madura salió del ciclo y está en G0. El punto G1/S debería impedir copiar un ADN dañado. La célula del tumor escapa de esos controles."],
          ["Conclusión", "En un ciclo normal, las ciclinas y las CDK impulsan cada transición solo si los controles lo permiten."],
        ],
        modelo:
          "La neurona madura está en G0, fuera del ciclo celular, por eso no se divide. En la célula tumoral fallan los puntos de control, en especial G1/S, que revisa que el ADN no esté dañado: por eso se divide sin límite, como ocurre en el cáncer. En condiciones normales, las ciclinas y las CDK impulsan el paso de una fase a otra.",
      },
      {
        id: "t7c5",
        titulo: "Cuarenta y seis, veintitrés, cuarenta y seis",
        resumen: "Mitosis, meiosis y fecundación con números.",
        situacion:
          "Un grupo anota cromosomas humanos. Una célula de la piel tiene 46 y, al renovarse, sus dos células hijas también tienen 46. Un espermatozoide tiene 23 y un óvulo tiene 23. El cigoto que forman vuelve a tener 46. Deben explicar qué proceso ocurre en la piel, cuál forma los gametos y cuál devuelve el número diploide.",
        guia: [
          "¿Por qué las células de la piel hijas siguen teniendo 46?",
          "¿Qué división reduce el número a 23?",
          "¿Qué pasa en la fecundación?",
        ],
        claves: [
          { label: "Mitosis en la piel (se conserva 2n = 46)", words: ["mitosis"] },
          { label: "Células hijas genéticamente iguales o con la misma cantidad", words: ["identic", "misma", "46"] },
          { label: "Meiosis forma gametos haploides (n = 23)", words: ["meiosis", "23", "haploid"] },
          { label: "La fecundación une los gametos y restablece 46 / el cigoto", words: ["fecund", "cigoto"] },
        ],
        pasos: [
          ["Pistas", "46 → 46 en la piel; 23 y 23 en los gametos; 46 en el cigoto."],
          ["Conceptos", "<b>Mitosis</b>, <b>meiosis</b> y <b>fecundación</b>."],
          ["Explicación", "La piel se renueva por mitosis: dos células diploides con la misma información. Los gametos se forman por meiosis y quedan haploides (23). La fecundación une espermatozoide y óvulo."],
          ["Conclusión", "El cigoto diploide (46) continúa el desarrollo por mitosis. La meiosis, además, aporta variabilidad."],
        ],
        modelo:
          "En la piel ocurre mitosis: las dos células hijas conservan 46 cromosomas y son genéticamente iguales a la célula madre, lo que permite renovar el tejido. Los gametos se forman por meiosis y por eso el espermatozoide y el óvulo tienen 23 cromosomas (haploides). La fecundación los une y forma un cigoto con 46 cromosomas, es decir, restablece la condición diploide.",
      },
    ],
  });
})();
