/* Biología general · guía de estudio — app (JS puro, sin dependencias) */
(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s);
let CURRENT_TEMAS = [];
let CURRENT_TYPE = '';
function isRed(){return CURRENT_TYPE==='redaccion';}
function isTeo(){return CURRENT_TYPE==='teoria';}
function setCourse(type){
  CURRENT_TYPE=type;
  const src=type==='redaccion'?window.REDACCION_TEMAS:type==='teoria'?window.TEORIA_TEMAS:window.BIOLOGIA_TEMAS;
  CURRENT_TEMAS=(src||[]).slice().sort((a,b)=>a.id-b.id);
}
const cid=t=>(isRed()?'r':isTeo()?'t':'b')+t.id;
const go=p=>'#/'+CURRENT_TYPE+(p?'/'+p:'');

function h(tag,attrs,...kids){const e=document.createElement(tag);for(const k in(attrs||{})){const v=attrs[k];if(v==null||v===false)continue;if(k==='class')e.className=v;else if(k==='html')e.innerHTML=v;else if(k.startsWith('on'))e.addEventListener(k.slice(2),v);else e.setAttribute(k,v===true?'':v);}kids.flat(Infinity).forEach(c=>{if(c==null||c===false)return;e.append(c.nodeType?c:document.createTextNode(c));});return e;}
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9+\-\/\s]/g,' ').replace(/\s+/g,' ').trim();
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const pick=(a,n)=>shuffle(a).slice(0,n);

/* ───────── Progreso (localStorage, con respaldo en memoria) ───────── */
const KEY='bf_progress_v1';
let P={xp:0,best:{},read:{},cases:{},cards:{}};
try{const s=JSON.parse(localStorage.getItem(KEY));if(s)P=Object.assign(P,s);}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(P));}catch(e){}updateXP();}
function updateXP(){const el=$('#xpNum');if(el)el.textContent=P.xp;}
function record(key,pct){const old=P.best[key]||0;if(pct>old){P.xp+=Math.max(1,Math.round((pct-old)/10));P.best[key]=pct;}save();}
const ACTS=['completar','marcar','vf','ordenar','relacionar'];
function temaPct(t){
  const id=cid(t);
  const hasAct=ACTS.filter(a=>t[a]&&t[a].length);
  const ncases=(t.casos||[]).length;
  const parts=1+hasAct.length+ncases;
  let sum=P.read[id]?100:0;
  hasAct.forEach(a=>sum+=Math.min(100,P.best[id+':'+a]||0));
  (t.casos||[]).forEach(c=>sum+=Math.min(100,P.cases[id+':'+c.id]||0)>=60?100:0);
  return Math.round(sum/parts);
}

/* ───────── Confeti ───────── */
function confetti(){
  if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  const em=['🧬','🔬','⭐','🦠','🌱','🎉'];
  for(let i=0;i<26;i++){const s=h('span',{class:'pop'},em[i%em.length]);s.style.left=Math.random()*100+'vw';s.style.animationDelay=Math.random()*.6+'s';document.body.append(s);setTimeout(()=>s.remove(),2600);}
}

/* ───────── Fábricas de actividades ───────── */
/* Cada una devuelve {el, grade()->{ok,total}}  */
function makeCompletar(items,opts={}){
  const inputs=[],list=h('div',{class:'qlist'});
  const answers=[],cards=[];
  items.forEach((it,i)=>{
    const parts=it.split(/\{\{(.+?)\}\}/g);
    const p=h('p',{class:'q cloze'});
    parts.forEach((s,j)=>{
      if(j%2===0){p.append(s);return;}
      const alts=s.split('|');answers.push(alts[0]);
      const inp=h('input',{type:'text',class:'blank',autocomplete:'off',autocapitalize:'off',spellcheck:'false',size:Math.max(8,alts[0].length+2),'aria-label':'Completa la palabra'});
      inputs.push({inp,alts,card:null});p.append(inp);
    });
    const card=h('div',{class:'qcard'},h('span',{class:'qn'},i+1),p);
    inputs.filter(x=>!x.card).forEach(x=>x.card=card);
    cards.push(card);list.append(card);
  });
  const el=h('div');
  if(opts.bank!==false){
    const bank=h('div',{class:'bank'},h('b',{},'Banco de palabras:'),shuffle(answers).map(a=>h('span',{class:'chip'},a)));
    const toggle=h('button',{class:'btn alt sm',type:'button',onclick:()=>{bank.hidden=!bank.hidden;toggle.textContent=bank.hidden?'Mostrar banco de palabras':'Ocultar banco de palabras';}},'Ocultar banco de palabras');
    el.append(h('div',{class:'row',style:'margin-bottom:10px'},toggle),bank);
  }
  el.append(list);
  return{el,cards,grade(){
    let ok=0;
    cards.forEach(c=>c.classList.remove('ok','bad'));
    inputs.forEach(x=>{
      x.inp.classList.remove('ok','bad');x.inp.parentNode.querySelectorAll('.ans').forEach(n=>{if(n.dataset.for===String(inputs.indexOf(x)))n.remove();});
      const good=x.alts.some(a=>norm(a)===norm(x.inp.value));
      x.inp.classList.add(good?'ok':'bad');
      if(good)ok++;else x.inp.after(h('span',{class:'ans','data-for':String(inputs.indexOf(x))},'→ '+x.alts[0]));
    });
    cards.forEach(c=>{const mine=inputs.filter(x=>x.card===c);c.classList.add(mine.every(x=>x.inp.classList.contains('ok'))?'ok':'bad');});
    return{ok,total:inputs.length};
  }};
}
function makeMarcar(items){
  const list=h('div',{class:'qlist'}),qs=[];
  items.forEach((it,i)=>{
    const order=shuffle(it.o.map((t,k)=>({t,k})));
    const name='m'+Math.random().toString(36).slice(2,8);
    const opts=order.map(o=>{const inp=h('input',{type:'radio',name,value:o.k});const lab=h('label',{class:'opt'},inp,h('span',{},o.t));return{lab,inp,k:o.k};});
    const why=h('div',{class:'why'},'💬 '+(it.why||''));
    const card=h('div',{class:'qcard'},h('span',{class:'qn'},i+1),h('p',{class:'q'},it.q),h('div',{class:'opts'},opts.map(o=>o.lab)),why);
    qs.push({opts,a:it.a,card});list.append(card);
  });
  return{el:list,cards:qs.map(q=>q.card),grade(){
    let ok=0;
    qs.forEach(q=>{
      q.card.classList.remove('ok','bad');q.opts.forEach(o=>o.lab.classList.remove('right','wrong'));
      const ch=q.opts.find(o=>o.inp.checked);
      const good=ch&&ch.k===q.a;if(good)ok++;
      q.card.classList.add(good?'ok':'bad','graded');
      q.opts.find(o=>o.k===q.a).lab.classList.add('right');
      if(ch&&!good)ch.lab.classList.add('wrong');
    });
    return{ok,total:qs.length};
  }};
}
function makeVF(items){
  const list=h('div',{class:'qlist'}),qs=[];
  items.forEach((it,i)=>{
    const name='v'+Math.random().toString(36).slice(2,8);
    const mk=(val,txt)=>{const inp=h('input',{type:'radio',name,value:val});return{lab:h('label',{class:'vfb'},inp,txt),inp,val};};
    const V=mk('v','Verdadero'),F=mk('f','Falso');
    const why=h('div',{class:'why'},(it.a?'✅ Es verdadero. ':'❌ Es falso. ')+(it.why||''));
    const card=h('div',{class:'qcard'},h('span',{class:'qn'},i+1),h('p',{class:'q'},it.q),h('div',{class:'vf'},V.lab,F.lab),why);
    qs.push({V,F,a:it.a,card});list.append(card);
  });
  return{el:list,cards:qs.map(q=>q.card),grade(){
    let ok=0;
    qs.forEach(q=>{
      [q.V,q.F].forEach(o=>o.lab.classList.remove('right','wrong'));q.card.classList.remove('ok','bad');
      const ch=q.V.inp.checked?q.V:q.F.inp.checked?q.F:null;
      const good=ch&&((ch.val==='v')===q.a);if(good)ok++;
      q.card.classList.add(good?'ok':'bad','graded');
      (q.a?q.V:q.F).lab.classList.add('right');
      if(ch&&!good)ch.lab.classList.add('wrong');
    });
    return{ok,total:qs.length};
  }};
}
function makeOrdenar(items){
  const wrap=h('div',{class:'qlist'}),sets=[];
  items.forEach((it,k)=>{
    let cur=shuffle(it.steps.map((t,i)=>({t,i})));
    if(cur.every((x,i)=>x.i===i)&&cur.length>1)cur.reverse();
    const ul=h('ol',{class:'ord'});
    const draw=()=>{ul.innerHTML='';cur.forEach((x,pos)=>{
      const li=h('li',{},h('span',{},x.t),h('span',{class:'mv'},
        h('button',{type:'button','aria-label':'Subir',disabled:pos===0,onclick:()=>{[cur[pos-1],cur[pos]]=[cur[pos],cur[pos-1]];draw();}},'↑'),
        h('button',{type:'button','aria-label':'Bajar',disabled:pos===cur.length-1,onclick:()=>{[cur[pos+1],cur[pos]]=[cur[pos],cur[pos+1]];draw();}},'↓')));
      ul.append(li);});};
    draw();
    sets.push({cur:()=>cur,ul,n:it.steps.length});
    wrap.append(h('div',{class:'qcard'},h('span',{class:'qn'},k+1),h('p',{class:'q'},it.title+' (usa ↑ ↓ para ordenar)'),ul));
  });
  return{el:wrap,grade(){
    let ok=0,total=0;
    sets.forEach(s=>{s.cur().forEach((x,pos)=>{total++;const li=s.ul.children[pos];li.classList.remove('ok','bad');const good=x.i===pos;if(good)ok++;li.classList.add(good?'ok':'bad');});});
    return{ok,total};
  }};
}
function makeRelacionar(items){
  const wrap=h('div',{class:'qlist'}),sets=[];
  items.forEach((it,k)=>{
    const rights=shuffle([...new Set(it.pairs.map(p=>p[1]))]);
    const grid=h('div',{class:'pairs'}),sels=[];
    it.pairs.forEach(p=>{
      const sel=h('select',{'aria-label':'Relaciona '+p[0]},h('option',{value:''},'— elige —'),rights.map(r=>h('option',{value:r},r)));
      sels.push({sel,right:p[1]});grid.append(h('div',{class:'l'},p[0]),sel);
    });
    sets.push(sels);
    wrap.append(h('div',{class:'qcard'},h('span',{class:'qn'},k+1),h('p',{class:'q'},it.title),grid));
  });
  return{el:wrap,grade(){
    let ok=0,total=0;
    sets.forEach(sels=>sels.forEach(x=>{total++;x.sel.classList.remove('ok','bad');const good=x.sel.value===x.right;if(good)ok++;x.sel.classList.add(good?'ok':'bad');if(!good)x.sel.title='Correcto: '+x.right;}));
    return{ok,total};
  }};
}
const MAKERS={completar:makeCompletar,marcar:makeMarcar,vf:makeVF,ordenar:makeOrdenar,relacionar:makeRelacionar};
const ACTINFO={
  completar:{e:'✍️',t:'Completar palabras',d:'Escribe la palabra que falta.'},
  marcar:{e:'☑️',t:'Marcar la correcta',d:'Elige una alternativa.'},
  vf:{e:'⚖️',t:'Verdadero o falso',d:'Decide y lee por qué.'},
  ordenar:{e:'🔢',t:'Ordenar pasos',d:'Pon el proceso en orden.'},
  relacionar:{e:'🧩',t:'Relacionar',d:'Une cada término con su idea.'}
};
function msgFor(p){return p===100?'¡Perfecto! Dominas esta parte. 🎉':p>=80?'¡Muy bien! Repasa lo que falló y listo.':p>=60?'Vas bien. Lee las explicaciones y reintenta.':'Todavía no. Vuelve al resumen y prueba otra vez, ¡se puede!';}

/* ───────── Vistas ───────── */
const main=()=>$('#main');
function markSide(){
  const here=location.hash||'#/';
  document.querySelectorAll('#side .side-link').forEach(a=>{
    const href=a.getAttribute('href')||'';
    const on=href===here||(href!=='#/'&&here.startsWith(href+'/'));
    a.classList.toggle('on',on);
  });
}
function setView(node,title){
  const host=$('#main');
  if(!host)return;
  host.innerHTML='';
  host.append(node);
  const curso=isRed()?'Redacción':isTeo()?'Teorías pedagógicas':CURRENT_TYPE?'Biología general':'Estudios';
  document.title=(title?title+' · ':'')+curso;
  window.scrollTo(0,0);
  host.focus({preventScroll:true});
  markSide();
}
function themeClass(t){return 't'+t.id;}

function courseHome(kind){
  const bio=kind==='biologia';
  const red=kind==='redaccion';
  const next=CURRENT_TEMAS.find(t=>temaPct(t)<100)||CURRENT_TEMAS[0];
  const cell=h('div',{class:'hero-cell'});
  if(bio&&window.WIDGETS&&WIDGETS.hero)WIDGETS.hero(cell);
  else if(red)cell.classList.add('text-diagram'),cell.append(
    h('div',{class:'mini-line'},'Introducción',h('small',{},'Presenta el tema y el propósito')),
    h('div',{class:'mini-line'},'Desarrollo',h('small',{},'Explica, argumenta y ejemplifica')),
    h('div',{class:'mini-line'},'Conclusión',h('small',{},'Integra y cierra, sin ideas nuevas'))
  );
  else cell.classList.add('text-diagram'),cell.append(
    h('div',{class:'mini-line'},'Conductismo',h('small',{},'Pavlov, Watson, Thorndike, Skinner')),
    h('div',{class:'mini-line'},'Cognitivo',h('small',{},'Atención, memoria, metacognición')),
    h('div',{class:'mini-line'},'Constructivista',h('small',{},'Piaget, Bruner, Ausubel'))
  );
  const tag=bio?'Unidad de biología':red?'Unidad I · Información y argumentos':'Sesiones 1 a 7 · UCT Inicial';
  const title=bio?'Biología general':red?'Redacción y comprensión':'Teorías y enfoques pedagógicos';
  const lead=bio
    ?'Los mismos resúmenes, tarjetas, casos y el examen general. Entra a un tema o practica todo junto.'
    :red
    ?'Sesiones 1 a 7, resumidas para estudiar: estructura, lectura literal e inferencial, argumentos, ritmo lector y síntesis. Cada tema tiene su examen y hay uno general.'
    :'Conductismo, cognitivismo y constructivismo para fundamentar tu praxis en inicial. Cada sesión tiene su examen y hay uno general.';
  const hero=h('section',{class:'hero'},
    h('div',{},
      h('p',{class:'tag'},tag),
      h('h1',{},title),
      h('p',{class:'lead'},lead),
      h('div',{class:'row'},
        next?h('a',{class:'btn',href:go('tema/'+next.id)},'Empezar'):null,
        h('a',{class:'btn alt',href:go('simulacro')},'Examen general'),
        h('a',{class:'btn alt',href:go('chuleta')},'Resumen para imprimir'),
        h('a',{class:'btn alt',href:go('casos')},bio?'Cómo resolver casos':red?'Cómo analizar un texto':'Cómo fundamentar un caso'))),
    cell);
  const grid=h('div',{class:'grid'},CURRENT_TEMAS.map(t=>{
    const p=temaPct(t);
    return h('a',{class:'tcard '+themeClass(t),href:go('tema/'+t.id)},
      h('div',{class:'num'},t.id),h('h3',{},t.titulo),h('p',{},t.corto),
      h('div',{class:'pct'},p+'% del tema'));
  }));
  setView(h('div',{},hero,h('h2',{},'Temas'),grid),bio?'Biología':red?'Redacción':'Pedagogía');
}
function viewBiologiaHome(){courseHome('biologia');}
function viewRedaccionHome(){courseHome('redaccion');}
function viewTeoriaHome(){courseHome('teoria');}

function viewHome(){
  const card=(type,kicker,title,text,tags)=>{
    const wrap=h('a',{class:'course',href:'#/'+type},
      h('div',{class:'kicker'},kicker),
      h('h2',{},title),
      h('p',{},text),
      h('div',{class:'meta'},tags.map(t=>h('span',{class:'pilltag'},t))),
      h('div',{class:'go'},'Entrar al curso →'));
    return h('div',{class:type==='biologia'?'t1':type==='redaccion'?'t2':'t3'},wrap);
  };
  setView(h('div',{class:'picker'},
    h('p',{class:'tag'},'Estudia cachuda'),
    h('h1',{},'Elije tu curso CHAMA'),
    h('p',{class:'lead'},'Ojalá jales, okno, mis mejores deseos.'),
    h('div',{class:'courses'},
      card('biologia','Ciencias','Biología general','Célula, metabolismo, herencia, reproducción y los casos científicos que ya practicabas.',['7 temas','Casos','Examen','Resumen']),
      card('redaccion','Humanidades','Redacción','Comprensión de textos de la Unidad I: ideas, inferencias, argumentos, lectura eficiente y síntesis.',['7 sesiones','Análisis','Examen','Resumen']),
      card('teoria','Pedagogía','Teorías y enfoques pedagógicos','Conductismo, cognitivismo y constructivismo (Piaget, Bruner, Ausubel) para inicial.',['7 sesiones','Casos','Examen','Resumen'])
    )
  ),'Inicio');
}

function resumenView(t){
  const frag=h('div',{});
  (t.resumen||[]).forEach(s=>{
    const sec=h('section',{class:'card sec'},h('h3',{},h('span',{class:'ico'},s.ico||'📌'),s.h),h('div',{html:s.body}));
    if(s.tip)sec.append(h('div',{class:'tip',html:s.tip}));
    frag.append(sec);
  });
  (t.tablas||[]).forEach(tb=>{
    const sec=h('section',{class:'card sec'},h('h3',{},h('span',{class:'ico'},'📊'),tb.h),
      h('div',{class:'tbl-wrap'},h('table',{class:'tbl'},h('thead',{},h('tr',{},tb.cols.map(c=>h('th',{},c)))),h('tbody',{},tb.rows.map(r=>h('tr',{},r.map(c=>h('td',{html:c}))))))));
    if(tb.tip)sec.append(h('div',{class:'tip',html:tb.tip}));
    frag.append(sec);
  });
  (t.widgets||[]).forEach(w=>{
    const box=h('section',{class:'widget'},h('h3',{},w.h));
    WIDGETS[w.k](box);frag.append(box);
  });
  const id=cid(t);
  const btn=h('button',{class:'btn tc',type:'button',onclick:()=>{const already=P.read[id+'x'];P.read[id]=true;if(!already)P.xp+=5;P.read[id+'x']=true;save();btn.textContent='Resumen leído';}},P.read[id]?'Resumen leído':'Marcar como leído');
  frag.append(h('div',{class:'finish'},btn,h('a',{class:'btn alt',href:go('tema/'+t.id+'/tarjetas')},'Siguiente: tarjetas')));
  return frag;
}
function tarjetasView(t){
  const cards=t.tarjetas||[];let i=0,order=cards.map((_,k)=>k);
  const root=h('div',{class:'deck'});
  function draw(){
    root.innerHTML='';
    if(!cards.length){root.append(h('p',{},'Aún no hay tarjetas.'));return;}
    const c=cards[order[i]];
    const f=h('div',{class:'flip',tabindex:'0',role:'button','aria-label':'Voltear tarjeta',onclick:()=>f.classList.toggle('on'),onkeydown:e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();f.classList.toggle('on');}}},
      h('div',{class:'flip-in'},h('div',{class:'face'},c[0],h('small',{},'Toca para ver la respuesta')),h('div',{class:'face back'},c[1])));
    root.append(h('div',{class:'counter'},`Tarjeta ${i+1} de ${cards.length}`),f,
      h('div',{class:'row',style:'justify-content:center'},
        h('button',{class:'btn alt',type:'button',onclick:()=>{i=(i-1+cards.length)%cards.length;draw();}},'← Anterior'),
        h('button',{class:'btn alt',type:'button',onclick:()=>{order=shuffle(order);i=0;draw();}},'🔀 Mezclar'),
        h('button',{class:'btn',type:'button',onclick:()=>{if(i===cards.length-1){P.cards[cid(t)]=true;P.xp+=3;save();confetti();}i=(i+1)%cards.length;draw();}},'Siguiente')));
  }
  draw();return root;
}

function practicarView(t){
  const root=h('div',{});
  const menu=()=>{
    root.innerHTML='';
    root.append(h('p',{class:'muted'},'Elige un tipo de ejercicio. Son los mismos formatos del examen. Si repites, salen otras preguntas.'));
    const g=h('div',{class:'acts'});
    ACTS.filter(a=>t[a]&&t[a].length).forEach(a=>{
      const b=P.best[cid(t)+':'+a];
      g.append(h('button',{class:'act',type:'button',onclick:()=>run(a)},h('span',{class:'e'},ACTINFO[a].e),h('b',{},ACTINFO[a].t),h('span',{},ACTINFO[a].d),b!=null?h('span',{class:'best'},'Mejor: '+b+'%'):null));
    });
    root.append(g);
  };
  const run=(a)=>{
    root.innerHTML='';
    const caps={completar:8,marcar:7,vf:7};
    const pool=t[a]||[];
    const items=(a==='ordenar'||a==='relacionar')?pool:pick(pool,Math.min(pool.length,caps[a]||pool.length));
    const act=MAKERS[a](items);
    const result=h('div',{class:'result',role:'status','aria-live':'polite'});
    const check=h('button',{class:'btn tc',type:'button',onclick:()=>{
      const r=act.grade();const pct=Math.round(100*r.ok/r.total);
      record(cid(t)+':'+a,pct);
      result.innerHTML=`<div class="score">${r.ok} / ${r.total} · ${pct}%</div><div>${msgFor(pct)}</div>`;
      result.classList.add('show');result.scrollIntoView({behavior:'smooth',block:'center'});
      if(pct===100)confetti();
      check.textContent='Volver a comprobar';
    }},'Comprobar respuestas');
    root.append(
      h('div',{class:'row',style:'margin-bottom:14px'},h('button',{class:'btn alt sm',type:'button',onclick:menu},'← Ejercicios'),h('h2',{style:'margin:0'},ACTINFO[a].e+' '+ACTINFO[a].t)),
      act.el,result,
      h('div',{class:'sticky-act'},h('button',{class:'btn alt',type:'button',onclick:()=>run(a)},'🔀 Reintentar con otras'),check));
    window.scrollTo(0,0);
  };
  menu();return root;
}

/* Caso científico (para práctica y simulacro) */
function coverage(texto,claves){
  const n=norm(texto);
  const res=claves.map(c=>({label:c.label,hit:c.words.some(w=>n.includes(norm(w)))}));
  return{res,pct:Math.round(100*res.filter(r=>r.hit).length/res.length)};
}
function casoBlock(c,opts={}){
  const ta=h('textarea',{class:'resp',placeholder:'Escribe aquí tu análisis con tus propias palabras…','aria-label':'Tu respuesta'});
  const out=h('div'),sol=h('div');
  const check=()=>{
    const cv=coverage(ta.value,c.claves);
    out.innerHTML='';
    out.append(h('p',{},h('b',{},`Cubriste ${cv.res.filter(r=>r.hit).length} de ${cv.res.length} ideas clave (${cv.pct}%).`),' El programa busca palabras clave: si dices lo mismo con otras palabras, compara con la solución.'),
      h('div',{class:'cov'},cv.res.map(r=>h('div',{class:r.hit?'y':'n'},(r.hit?'✅ ':'⬜ ')+r.label))));
    if(opts.onScore)opts.onScore(cv.pct);
    return cv.pct;
  };
  const showSol=()=>{
    sol.innerHTML='';
    sol.append(h('h3',{},'Así se resuelve, paso a paso'),
      h('div',{class:'steps'},c.pasos.map((p,i)=>h('div',{class:'stp'},h('div',{class:'n'},i+1),h('div',{},h('h4',{},p[0]),h('p',{html:p[1]}))))),
      h('div',{class:'card',style:'margin-top:14px'},h('h4',{},'Respuesta modelo'),h('p',{html:c.modelo,style:'margin:0'})));
  };
  const el=h('div',{class:'caso'},
    h('div',{class:'sit'},h('h3',{},c.titulo),h('p',{html:c.situacion,style:'margin:0'})),
    h('div',{},h('b',{},'Preguntas guía:'),h('ul',{class:'guide-q'},c.guia.map(g=>h('li',{},g)))),
    ta,
    h('div',{class:'row'},opts.noSolution?null:h('button',{class:'btn tc',type:'button',onclick:check},'Comprobar mis ideas'),opts.noSolution?null:h('button',{class:'btn alt',type:'button',onclick:showSol},'Ver la solución')),
    out,sol);
  return{el,check,showSol,ta};
}
function casosTemaView(t){
  const root=h('div',{});
  const cs=t.casos||[];
  if(!cs.length)return h('p',{},'Este tema no tiene casos todavía.');
  const list=()=>{
    root.innerHTML='';
    root.append(h('div',{class:'card',style:'margin-bottom:18px'},h('p',{style:'margin:0'},'¿No sabes cómo empezar? Mira primero la ',h('a',{href:go('casos')},isRed()?'guía para analizar un texto':isTeo()?'guía para fundamentar': 'guía de 4 pasos'),'. Luego escribe tu respuesta, comprueba qué ideas te faltaron y mira la solución.')));
    cs.forEach((c,i)=>{
      const b=P.cases[cid(t)+':'+c.id];
      root.append(h('button',{class:'act',type:'button',style:'width:100%;margin-bottom:14px',onclick:()=>open(c)},h('span',{class:'e'},'🔬'),h('b',{},`Caso ${i+1}: ${c.titulo}`),h('span',{},c.resumen||''),b!=null?h('span',{class:'best'},'Mejor cobertura: '+b+'%'):null));
    });
  };
  const open=c=>{
    root.innerHTML='';
    const cb=casoBlock(c,{onScore:pct=>{const key=cid(t)+':'+c.id;if(pct>(P.cases[key]||0)){P.cases[key]=pct;P.xp+=Math.round(pct/10);save();}if(pct>=80)confetti();}});
    root.append(h('button',{class:'btn alt sm',type:'button',style:'margin-bottom:14px',onclick:list},'← Casos'),cb.el);window.scrollTo(0,0);
  };
  list();return root;
}

function viewTema(id,tab){
  const t=CURRENT_TEMAS.find(x=>x.id===id);if(!t)return viewHome();
  tab=tab||'resumen';
  const tabs=[['resumen','📖 Resumen'],['tarjetas','🃏 Tarjetas'],['practicar','🎯 Practicar'],['casos','🔬 Casos']];
  const body=tab==='tarjetas'?tarjetasView(t):tab==='practicar'?practicarView(t):tab==='casos'?casosTemaView(t):resumenView(t);
  const dark=(t.id===5||t.id===7);
  const page=h('div',{class:themeClass(t)},
    h('div',{class:'thead'+(dark?' light-text':'')},h('div',{class:'big'},'Tema '+t.id),h('h1',{},t.titulo),h('p',{},t.objetivo)),
    h('nav',{class:'tabs','aria-label':'Secciones del tema'},tabs.map(([k,l])=>h('a',{class:'tab'+(k===tab?' on':''),href:go('tema/'+t.id+(k==='resumen'?'':'/'+k))},l))),
    body);
  setView(page,'Tema '+t.id+' · '+t.titulo);
}

/* ───────── Guía de casos ───────── */
function viewCasos(){
  const g=isRed()?(window.GUIA_RED||window.GUIA):isTeo()?(window.GUIA_TEORIA||window.GUIA):window.GUIA,m=g.modelo;
  const root=h('div',{class:'t7'});
  const big=isRed()?'Análisis de textos':isTeo()?'Casos pedagógicos':'Casos científicos';
  const h1=isRed()?'Cómo analizar un texto':isTeo()?'Cómo fundamentar un caso pedagógico':'Cómo resolver un caso científico';
  const intro=isRed()
    ?'Te van a dar un fragmento. Tienes que decir qué sostiene, citar la pista y no afirmar de más. Con estos 4 pasos sabes por dónde empezar.'
    :isTeo()
    ?'Te van a dar una situación de aula de inicial. Tienes que nombrar la teoría, citar la pista, explicar el mecanismo y valorar con ética. Con estos 4 pasos sabes por dónde empezar.'
    :'En el examen te darán una situación y tendrás que explicarla con los conceptos de clase. Con este método de 4 pasos siempre sabrás por dónde empezar.';
  root.append(h('div',{class:'thead light-text'},
    h('div',{class:'big'},big),
    h('h1',{},h1),
    h('p',{},intro)));
  // tipos de pregunta
  root.append(h('h2',{},'Antes: trucos para los otros tipos de pregunta'),
    h('div',{class:'tipcards'},g.trucos.map(x=>h('div',{class:'card'},h('h4',{},x[0]),h('p',{html:x[1]})))));
  // método
  root.append(h('h2',{style:'margin-top:28px'},'El método de 4 pasos'),
    h('div',{class:'steps'},g.metodo.map((p,i)=>h('div',{class:'stp'},h('div',{class:'n'},i+1),h('div',{},h('h4',{},p[0]),h('p',{html:p[1]}))))));
  // caso modelo
  root.append(h('h2',{style:'margin-top:32px'},isRed()?'Texto modelo':isTeo()?'Caso modelo':'Caso modelo: el que te dieron'));
  const sit=h('div',{class:'sit'});
  const notes=h('div',{});
  m.situacion.forEach(seg=>{
    if(typeof seg==='string'){sit.append(seg);return;}
    const note=h('div',{class:'clue-note'},'🔎 ',h('b',{},seg.pista));
    const mk=h('mark',{class:'clue',tabindex:'0',role:'button'},seg.t);
    const tog=()=>{mk.classList.toggle('open');note.classList.toggle('open');};
    mk.addEventListener('click',tog);mk.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();tog();}});
    sit.append(mk);notes.append(note);
  });
  root.append(h('div',{class:'card'},h('p',{class:'muted'},'Toca las frases resaltadas: cada una es una pista que apunta a un concepto.'),h('div',{class:'sit'},h('p',{style:'margin:0'},sit.childNodes.length?[...sit.childNodes]:'')),notes));
  // solución secuencial
  const stepsBox=h('div',{class:'steps',style:'margin-top:14px'});let shown=0;
  const nextBtn=h('button',{class:'btn tc',type:'button',onclick:()=>{
    const s=m.pasos[shown];shown++;
    stepsBox.append(h('div',{class:'stp'},h('div',{class:'n'},shown),h('div',{},h('h4',{},s[0]),h('p',{html:s[1]}))));
    if(shown===m.pasos.length){nextBtn.textContent='✅ Listo';nextBtn.disabled=true;final.hidden=false;}else nextBtn.textContent='Mostrar el paso '+(shown+1);
  }},'Mostrar el paso 1');
  const final=h('div',{class:'card',hidden:true,style:'margin-top:14px'},h('h4',{},'Respuesta completa (como la escribirías)'),h('p',{html:m.respuesta,style:'margin:0'}));
  root.append(h('h3',{style:'margin-top:20px'},'Resolvámoslo juntos'),h('div',{class:'row'},nextBtn),stepsBox,final);
  // plantilla
  root.append(h('h2',{style:'margin-top:32px'},'Plantilla para cualquier caso'),h('div',{class:'tpl'},g.plantilla));
  // casos por tema
  root.append(h('h2',{style:'margin-top:32px'},'Ahora practica'),h('p',{},'Cada tema tiene sus propios casos parecidos a este, con solución paso a paso:'),
    h('div',{class:'row'},CURRENT_TEMAS.filter(t=>(t.casos||[]).length).map(t=>h('a',{class:'btn alt sm',href:go('tema/'+t.id+'/casos')},'Tema '+t.id))),
    h('div',{style:'margin-top:12px'},h('a',{class:'btn',href:go('simulacro')},'Ir al examen general')));
  setView(root,'Cómo resolver casos');
}

/* ───────── Examen general / simulacro ───────── */
const QUIP_OK=['¡Eso! Tus ribosomas están trabajando a full 💪','Correcto. Mendel te manda un saludo 🌼','¡Bien! Esa neurona sí hizo sinapsis ⚡','Otro punto para el equipo núcleo 🧬','Respuesta limpia, sin mutaciones ✨','Eres una enzima: acelerando el aprobado 🔑','¡Cerebro en modo mitocondria: energía pura! 🔋'];
const QUIP_BAD=['Uy… esa neurona se fue de vacaciones 🏖️','Ni Mendel lo vio venir 🌱','Tu mitocondria necesita un cafecito ☕','Eso fue una mutación… y no de las buenas 🧫','Casi, casi. Hasta las bacterias se equivocan al dividirse 🦠','Error de transcripción detectado. ¡Se corrige y listo! 📝','Esa respuesta quedó en G0: fuera del ciclo 😴','Tranqui, la fotosíntesis también empieza con poca luz 🌥️','Hmm… tu ribosoma leyó mal el codón 🔬'];
const pickOne=a=>a[Math.floor(Math.random()*a.length)];
function addQuips(cards){
  const okL=isRed()
    ?['Esa idea sí estaba en el texto.','Inferencia con pista: así se hace.','Separaste el tema de la tesis.','No te pasaste de lo que el texto permite.','Respuesta limpia, sin inventar causas.']
    :isTeo()
    ?['Teoría bien ubicada.','Pista citada, así se fundamenta.','Mecanismo explicado con precisión.','Valoraste con ética, no solo describiste.','Propuesta contextualizada para inicial.']
    :QUIP_OK;
  const badL=isRed()
    ?['Eso se fue de lo que el texto dice.','Se cruzaron el tema y la tesis.','Faltó la evidencia.','Correlación no es causa.','Vuelve a la pista y corrige el límite.']
    :isTeo()
    ?['Se mezclaron las teorías.','Faltó la pista textual.','Confundiste refuerzo con castigo.','Faltó la valoración ética.','Vuelve al mecanismo y a la propuesta.']
    :QUIP_BAD;
  cards.forEach(c=>{c.querySelectorAll('.quip').forEach(n=>n.remove());const ok=c.classList.contains('ok');c.append(h('div',{class:'quip '+(ok?'y':'n')},pickOne(ok?okL:badL)));});
}
function veredicto(n){
  if(isTeo()){
    if(n>=18)return['Lista','Fundamentación sólida','Ubicas teoría, pista y mecanismo. Repasa solo por gusto.'];
    if(n>=15)return['Bien','Muy buen nivel','Afina los temas marcados. La chuleta alcanza para el cierre.'];
    if(n>=11)return['Casi','Vas justita','Suele fallar refuerzo vs castigo o el límite ético. Vuelve a los temas en rojo.'];
    if(n>=7)return['Ojo','Falta teoría','Relee conductismo, ABC y Piaget-Bruner-Ausubel antes de repetir.'];
    return['Otra vez','Todavía no cierra','Empieza por el resumen del tema más bajo.'];
  }
  if(isRed()){
    if(n>=18)return['Listo','Lectura crítica sólida','Separas dato, inferencia y tesis. Repasa solo por gusto.'];
    if(n>=15)return['Bien','Muy buen nivel','Afina los temas marcados. El resumen alcanza para el cierre.'];
    if(n>=11)return['Casi','Vas justita','Suele fallar el límite de la inferencia. Vuelve a los temas en rojo.'];
    if(n>=7)return['Ojo','Falta jerarquía','Relee idea principal, tesis y macrorreglas antes de repetir.'];
    return['Otra vez','Todavía no cierra','Empieza por el resumen del tema más bajo.'];
  }
  if(n>=18)return['🏆','¡Eres Mendel reencarnado!','Tu núcleo está en modo genio. Solo repasa por gusto.'];
  if(n>=15)return['🔥','¡Muy buen nivel!','Tus ribosomas fabrican respuestas correctas. Pule los temas en rojo y listo.'];
  if(n>=11)return['😅','Pasaste… raspando','Tu mitocondria pide más café ☕. Repasa los temas marcados y vuelve a intentarlo.'];
  if(n>=7)return['🧫','Tu cerebro está en G0','Fuera del ciclo celular. ¡Vuelve a entrar! Lee los resúmenes y repite el examen.'];
  return['🦠','Hasta una bacteria sacó más…','…pero las bacterias se dividen y tú puedes volver a intentarlo. Empieza por los temas en rojo 💪. Por cierto, que malos gustos okno :)'];
}
const fmt=n=>n.toFixed(1).replace('.',',');
function balanced(temas,key,n){
  const lists=shuffle(temas.map(t=>shuffle((t[key]||[]).map(it=>({it,tid:t.id})))).filter(l=>l.length));
  const out=[];let i=0;
  while(out.length<n&&lists.some(l=>l.length)){const l=lists[i%lists.length];if(l.length)out.push(l.shift());i++;}
  return shuffle(out);
}
function viewSimulacro(){
  const root=h('div',{class:'t3'});
  const pieza=isRed()?'análisis de textos':isTeo()?'casos pedagógicos':'casos científicos';
  const simKey=(isRed()?'r':isTeo()?'t':'b')+'sim';
  const intro=isRed()
    ?'Preguntas de las 7 sesiones: completar, marcar, verdadero o falso y análisis de un fragmento. Cada intento cambia. Al final, nota sobre 20 y los temas que debes repasar.'
    :isTeo()
    ?'Preguntas de las 7 sesiones: completar, marcar, verdadero o falso y casos de aula de inicial. Cada intento cambia. Al final, nota sobre 20 y los temas que debes repasar.'
    :'Preguntas de todos los temas, con completar, marcar, verdadero o falso y casos científicos. Cada intento mezcla otras preguntas y otros casos, al azar. Al final recibes tu nota sobre 20 y los temas que debes repasar. Pobre que falles mardita :b';
  root.append(h('div',{class:'thead'},h('div',{class:'big'},'Para el examen'),h('h1',{},'Examen general'),h('p',{},intro)));
  const generalBtn=h('button',{class:'btn tc',type:'button',onclick:()=>build(CURRENT_TEMAS,{c:12,m:15,v:15,k:3},'Examen general completo')},'Empezar examen general');
  const cfg=h('div',{class:'card cfg'},h('h3',{},'Simulacro por temas'),h('p',{class:'muted'},'Elige qué temas incluir: 8 de completar, 10 de marcar, 10 de V/F y 2 análisis. También salen al azar y cambian si lo repites.'));
  const checks=CURRENT_TEMAS.map(t=>{const c=h('input',{type:'checkbox',checked:true});cfg.append(h('label',{},c,`Tema ${t.id}: ${t.titulo}`));return{c,t};});
  cfg.append(h('div',{class:'row',style:'margin-top:12px'},h('button',{class:'btn alt',type:'button',onclick:()=>{const sel=checks.filter(x=>x.c.checked).map(x=>x.t);if(!sel.length){alert('Elige al menos un tema.');return;}build(sel,{c:8,m:10,v:10,k:2},'Simulacro por temas');}},'Empezar simulacro')));
  const best=P.best[simKey]!=null?h('p',{class:'muted',style:'margin:8px 0 0'},'Tu mejor nota: '+fmt(P.best[simKey]/5)+' / 20'):null;
  root.append(h('div',{class:'bigrow',style:'margin-top:0'},
    h('div',{class:'card'},h('h3',{},'Examen general completo'),h('p',{},'Los 7 temas repartidos parejo: 12 para completar, 15 para marcar, 15 de verdadero o falso y 3 '+pieza+' de temas distintos. Cada intento cambia. Toma su tiempo.'),generalBtn,best),
    cfg));
  const area=h('div',{style:'margin-top:24px'});root.append(area);
  setView(root,'Examen general');
  function build(sel,n,label){
    area.innerHTML='';
    const C=balanced(sel,'completar',n.c),M=balanced(sel,'marcar',n.m),V=balanced(sel,'vf',n.v);
    const K=balanced(sel,'casos',n.k);
    const A=makeCompletar(C.map(x=>x.it)),B=makeMarcar(M.map(x=>x.it)),D=makeVF(V.map(x=>x.it));
    const cb=K.map(x=>casoBlock(x.it,{noSolution:true}));
    const t0=Date.now(),timer=h('span',{class:'timer'},'0:00');
    const iv=setInterval(()=>{if(!document.body.contains(timer)){clearInterval(iv);return;}const sec=Math.floor((Date.now()-t0)/1000);timer.textContent=Math.floor(sec/60)+':'+String(sec%60).padStart(2,'0');},1000);
    const result=h('div',{class:'result',role:'status','aria-live':'polite'});
    const fin=h('button',{class:'btn tc',type:'button',onclick:()=>{
      clearInterval(iv);
      const a=A.grade(),b=B.grade(),c=D.grade();
      const covs=cb.map(x=>x.check());
      [A,B,D].forEach(x=>addQuips(x.cards));
      const ok=a.ok+b.ok+c.ok,tot=a.total+b.total+c.total,pct=ok/tot*100;
      const casesAvg=covs.length?covs.reduce((x,y)=>x+y,0)/covs.length:0;
      const nota=covs.length?20*(0.75*pct+0.25*casesAvg)/100:20*pct/100;
      // por tema
      const stats={};
      const tally=(maker,list)=>maker.cards.forEach((card,i)=>{const id=list[i].tid;(stats[id]=stats[id]||{ok:0,tot:0}).tot++;if(card.classList.contains('ok'))stats[id].ok++;});
      tally(A,C);tally(B,M);tally(D,V);
      const rows=Object.keys(stats).map(id=>({id:+id,p:Math.round(100*stats[id].ok/stats[id].tot),...stats[id]})).sort((x,y)=>x.p-y.p);
      const v=veredicto(nota);
      result.innerHTML='';
      result.append(
        h('div',{class:'score'},v[0]+' '+fmt(nota)+' / 20'),
        h('div',{},h('b',{},v[1]+' '),v[2]),
        h('p',{style:'margin:10px 0 4px'},`Completar: ${a.ok}/${a.total} · Marcar: ${b.ok}/${b.total} · V/F: ${c.ok}/${c.total}`+(covs.length?` · Casos: ${covs.map(x=>x+'%').join(' · ')}`:'')+` · Tiempo: ${timer.textContent}`),
        h('div',{class:'row',style:'gap:8px;margin-top:6px'},rows.map(r=>h('a',{class:'chip '+(r.p<70?'weak':''),href:go('tema/'+r.id),title:'Ir al tema '+r.id},`Tema ${r.id}: ${r.p}%${r.p<70?' · repasar':' ✓'}`))),
        h('p',{class:'muted',style:'margin:10px 0 0;font-size:.85rem'},'Nota = 75 % preguntas cerradas + 25 % casos' + (covs.length?'':' (sin casos)')+'. En los casos el programa solo busca palabras clave: compara con la solución.'));
      result.classList.add('show');result.scrollIntoView({behavior:'smooth',block:'center'});
      cb.forEach(x=>x.showSol());
      record(simKey,Math.round(nota*5));
      if(nota>=15)confetti();
      fin.textContent='Volver a calificar';
    }},'Terminar y calificar');
    area.append(h('div',{class:'row',style:'justify-content:space-between'},h('h2',{style:'margin:0'},label),h('div',{},'⏱ ',timer)),
      h('h3',{style:'margin-top:20px'},'I. Completa las palabras'),A.el,
      h('h3',{style:'margin-top:28px'},'II. Marca la alternativa correcta'),B.el,
      h('h3',{style:'margin-top:28px'},'III. Verdadero o falso'),D.el,
      cb.length?h('h3',{style:'margin-top:28px'},isRed()?'IV. Análisis de textos':isTeo()?'IV. Casos pedagógicos':'IV. Casos científicos'):null,...cb.map(x=>x.el),
      result,h('div',{class:'sticky-act'},h('button',{class:'btn alt',type:'button',onclick:()=>build(sel,n,label)},'🔀 Nuevo examen'),fin));
    area.scrollIntoView({behavior:'smooth'});
  }
}

/* ───────── Navegación ───────── */
function buildSide(){
  const box=$('#sideTemas'); if(!box) return; box.innerHTML='';
  if(!CURRENT_TYPE) return;
  CURRENT_TEMAS.forEach(t=>box.append(h('a',{class:'side-link '+themeClass(t),href:go('tema/'+t.id)},h('span',{class:'pill'},t.id),h('span',{},t.titulo),h('span',{class:'mini'},temaPct(t)+'%'))));
  box.append(h('p',{class:'side-title'},'Práctica'));
  box.append(h('a',{class:'side-link',href:go('simulacro')},'Examen general'));
  box.append(h('a',{class:'side-link',href:go('casos')},isRed()?'Cómo analizar':isTeo()?'Cómo fundamentar':'Cómo resolver casos'));
  box.append(h('a',{class:'side-link',href:go('chuleta')},'Resumen para imprimir'));
}
function viewChuleta(){
  const root=h('div');
  setView(root,'Chuleta');
  if(window.mountChuleta) window.mountChuleta(root,CURRENT_TYPE);
  else root.textContent='No se pudo armar el resumen.';
}
function route(){
  document.body.classList.remove('menu-open');
  const menuBtn=$('#menuBtn'); if(menuBtn) menuBtn.setAttribute('aria-expanded','false');
  const parts=(location.hash.replace(/^#\/?/,'')||'').split('/').filter(Boolean);
  if(parts[0]==='tema'||parts[0]==='casos'||parts[0]==='simulacro'||parts[0]==='chuleta'){
    location.replace('#/biologia/'+parts.join('/'));
    return;
  }
  if(parts[0]==='biologia'||parts[0]==='redaccion'||parts[0]==='teoria'){
    setCourse(parts[0]);
    buildSide();
    const sub=parts[1];
    if(sub==='tema') return viewTema(+parts[2],parts[3]);
    if(sub==='casos') return viewCasos();
    if(sub==='simulacro') return viewSimulacro();
    if(sub==='chuleta') return viewChuleta();
    return isRed()?viewRedaccionHome():isTeo()?viewTeoriaHome():viewBiologiaHome();
  }
  CURRENT_TYPE='';
  CURRENT_TEMAS=[];
  buildSide();
  viewHome();
}
function boot(){
  const btn=$('#menuBtn');
  if(btn&&!btn.dataset.wired){
    btn.dataset.wired='1';
    btn.addEventListener('click',()=>{const o=document.body.classList.toggle('menu-open');btn.setAttribute('aria-expanded',o?'true':'false');});
    const scrim=$('#scrim');
    if(scrim) scrim.addEventListener('click',()=>{document.body.classList.remove('menu-open');btn.setAttribute('aria-expanded','false');});
  }
  if(!window.__ESTUDIO_HASH){
    window.addEventListener('hashchange',route);
    window.__ESTUDIO_HASH=true;
  }
  updateXP();
  route();
}
window.__ESTUDIO_BOOT=boot;
boot();
})();
