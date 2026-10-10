/* Widgets interactivos (SVG + JS puro) */
(function(){
'use strict';
const NS='http://www.w3.org/2000/svg';
function h(tag,attrs,...kids){const e=document.createElement(tag);for(const k in(attrs||{})){const v=attrs[k];if(v==null||v===false)continue;if(k==='class')e.className=v;else if(k==='html')e.innerHTML=v;else if(k.startsWith('on'))e.addEventListener(k.slice(2),v);else e.setAttribute(k,v===true?'':v);}kids.flat().forEach(c=>{if(c==null||c===false)return;e.append(c.nodeType?c:document.createTextNode(c));});return e;}

const STROKE='var(--line)';

/* ───────── Célula que se divide (portada) ───────── */
const PHASES=[
 {n:'Interfase',d:'La célula crece y copia su ADN (G1, S, G2).',svg:()=>
   `<ellipse cx="150" cy="110" rx="82" ry="82" fill="#BFEFE8" stroke="${STROKE}" stroke-width="4"/>
    <circle cx="150" cy="110" r="32" fill="#8E7BFF" stroke="${STROKE}" stroke-width="4"/>
    <circle cx="140" cy="102" r="7" fill="#FFC93C" stroke="${STROKE}" stroke-width="2"/>
    <path d="M132 120q8 10 16 0t14 -8" fill="none" stroke="#fff" stroke-width="3"/>`},
 {n:'Profase',d:'Los cromosomas se condensan y se forma el huso.',svg:()=>
   `<ellipse cx="150" cy="110" rx="82" ry="82" fill="#BFEFE8" stroke="${STROKE}" stroke-width="4"/>
    ${chromo(125,90,20)}${chromo(165,95,-25)}${chromo(140,130,70)}${chromo(172,128,-60)}
    <circle cx="150" cy="22" r="5" fill="#E63E8B"/><circle cx="150" cy="198" r="5" fill="#E63E8B"/>`},
 {n:'Metafase',d:'Los cromosomas se alinean en el centro de la célula.',svg:()=>
   `<ellipse cx="150" cy="110" rx="82" ry="82" fill="#BFEFE8" stroke="${STROKE}" stroke-width="4"/>
    ${[78,98,122,142].map(y=>`<line x1="150" y1="14" x2="150" y2="${y}" stroke="#E63E8B" stroke-width="1.5" opacity=".55"/><line x1="150" y1="206" x2="150" y2="${y}" stroke="#E63E8B" stroke-width="1.5" opacity=".55"/>`).join('')}
    ${[78,98,122,142].map(y=>chromo(150,y,90)).join('')}`},
 {n:'Anafase',d:'Las cromátidas hermanas se separan hacia polos opuestos.',svg:()=>
   `<ellipse cx="150" cy="110" rx="108" ry="80" fill="#BFEFE8" stroke="${STROKE}" stroke-width="4"/>
    ${[80,100,122,142].map(y=>`<line x1="86" y1="${y}" x2="86" y2="${y+0.1}" stroke="none"/>${bar(98,y)}${bar(202,y)}`).join('')}`},
 {n:'Telofase y citocinesis',d:'Se forman dos núcleos y el citoplasma se divide: 2 células idénticas.',svg:()=>
   `<circle cx="96" cy="110" r="60" fill="#BFEFE8" stroke="${STROKE}" stroke-width="4"/>
    <circle cx="204" cy="110" r="60" fill="#BFEFE8" stroke="${STROKE}" stroke-width="4"/>
    <circle cx="96" cy="110" r="24" fill="#8E7BFF" stroke="${STROKE}" stroke-width="4"/>
    <circle cx="204" cy="110" r="24" fill="#8E7BFF" stroke="${STROKE}" stroke-width="4"/>
    <circle cx="90" cy="104" r="5" fill="#FFC93C"/><circle cx="198" cy="104" r="5" fill="#FFC93C"/>`}
];
function chromo(x,y,rot){return `<g transform="translate(${x} ${y}) rotate(${rot})"><path d="M-7 -12L7 12M7 -12L-7 12" stroke="${STROKE}" stroke-width="9" stroke-linecap="round"/><path d="M-7 -12L7 12M7 -12L-7 12" stroke="#E63E8B" stroke-width="5" stroke-linecap="round"/></g>`;}
function bar(x,y){return `<g transform="translate(${x} ${y})"><path d="M-5 -9L5 9" stroke="${STROKE}" stroke-width="9" stroke-linecap="round"/><path d="M-5 -9L5 9" stroke="#E63E8B" stroke-width="5" stroke-linecap="round"/></g>`;}

function heroCell(root){
  let i=0;
  const svg=h('div',{html:''});
  const name=h('div',{class:'phase'});
  const btn=h('button',{class:'btn sm',type:'button',onclick:()=>{i=(i+1)%PHASES.length;draw();}},'Siguiente fase');
  function draw(){
    const p=PHASES[i];
    svg.innerHTML=`<svg viewBox="0 0 300 220" role="img" aria-label="Célula en ${p.n}">${p.svg()}</svg>`;
    name.innerHTML='';name.append(p.n,h('small',{},p.d));
    btn.textContent=i===PHASES.length-1?'Volver a empezar':'Siguiente fase';
  }
  root.append(svg,h('div',{class:'cap'},name,btn));
  draw();
}

/* ───────── Célula interactiva ───────── */
const ORG={
 membrana:{n:'Membrana plasmática',t:'Bicapa de fosfolípidos con proteínas (mosaico fluido). Regula el paso de sustancias y delimita la célula.'},
 nucleo:{n:'Núcleo',t:'Contiene el ADN organizado en cromatina y regula la actividad celular. Tiene nucléolo y poros nucleares.'},
 mito:{n:'Mitocondria',t:'«Central energética»: realiza la respiración celular y produce ATP. Tiene doble membrana y ADN propio.'},
 re:{n:'Retículo endoplasmático',t:'Rugoso (con ribosomas): síntesis de proteínas. Liso: síntesis de lípidos y detoxificación.'},
 golgi:{n:'Aparato de Golgi',t:'Modifica, clasifica y empaqueta proteínas y lípidos para su destino final.'},
 liso:{n:'Lisosoma',t:'Contiene enzimas hidrolíticas: digiere macromoléculas y desechos celulares.'},
 cito:{n:'Citoesqueleto',t:'Red de microtúbulos y microfilamentos que da soporte y permite el movimiento celular.'},
 cloro:{n:'Cloroplasto (solo vegetal)',t:'Realiza la fotosíntesis mediante la clorofila.'},
 pared:{n:'Pared celular (solo vegetal)',t:'Cubierta externa rígida de las células vegetales que da soporte (en procariotas es de peptidoglicano).'}
};
function cellDiagram(root){
  let plant=false,sel='nucleo';
  const box=h('div'),info=h('div',{class:'infobox',role:'status','aria-live':'polite'});
  const tg=h('button',{class:'btn alt sm',type:'button',onclick:()=>{plant=!plant;if(!plant&&(sel==='cloro'||sel==='pared'))sel='nucleo';draw();}},'');
  function g(k,inner){return `<g class="hot ${sel===k?'sel':''}" data-k="${k}" tabindex="0" role="button" aria-label="${ORG[k].n}">${inner}</g>`;}
  function draw(){
    tg.textContent=plant?'Ver célula animal':'Ver célula vegetal';
    box.innerHTML=`<svg viewBox="0 0 400 300">
      ${plant?g('pared',`<ellipse cx="200" cy="150" rx="186" ry="140" fill="none" stroke="#6AA84F" stroke-width="9"/>`):''}
      ${g('membrana',`<ellipse cx="200" cy="150" rx="170" ry="125" fill="#FFF3C9" stroke="${STROKE}" stroke-width="3"/>`)}
      ${g('cito',`<path d="M150 188L84 160M165 195L120 245M240 192L290 238M248 120L330 150" stroke="#8a8fb0" stroke-width="3" stroke-dasharray="6 5" fill="none"/>`)}
      ${g('nucleo',`<circle cx="200" cy="150" r="46" fill="#B9A9FF" stroke="${STROKE}" stroke-width="3"/><circle cx="212" cy="142" r="13" fill="#6B4EFF" stroke="${STROKE}" stroke-width="2"/>`)}
      ${g('re',`<path d="M258 106q22-8 30 8t-6 26q-16 14 4 28t0 28" fill="none" stroke="#FF8FB8" stroke-width="9" stroke-linecap="round"/><g fill="${STROKE}"><circle cx="290" cy="116" r="2.5"/><circle cx="296" cy="146" r="2.5"/><circle cx="286" cy="176" r="2.5"/></g>`)}
      ${g('golgi',[0,11,22,33].map(d=>`<path d="M82 ${88+d}q28-16 56 0" fill="none" stroke="#F08A24" stroke-width="7" stroke-linecap="round"/>`).join(''))}
      ${g('mito',`<g transform="rotate(-20 300 214)"><ellipse cx="300" cy="214" rx="32" ry="15" fill="#FF8A8A" stroke="${STROKE}" stroke-width="3"/><path d="M276 214q6-8 12 0t12 0 12 0 8-3" fill="none" stroke="${STROKE}" stroke-width="2"/></g><g transform="rotate(25 112 212)"><ellipse cx="112" cy="212" rx="28" ry="13" fill="#FF8A8A" stroke="${STROKE}" stroke-width="3"/><path d="M92 212q5-7 10 0t10 0 10 0" fill="none" stroke="${STROKE}" stroke-width="2"/></g>`)}
      ${g('liso',`<circle cx="318" cy="92" r="12" fill="#5DD39E" stroke="${STROKE}" stroke-width="3"/><circle cx="150" cy="130" r="9" fill="#5DD39E" stroke="${STROKE}" stroke-width="3"/>`)}
      ${plant?g('cloro',`<ellipse cx="200" cy="236" rx="34" ry="15" fill="#4CAF50" stroke="${STROKE}" stroke-width="3"/><path d="M178 236h44M182 230h36M182 242h36" stroke="#1B5E20" stroke-width="2"/>`):''}
    </svg>`;
    box.querySelectorAll('.hot').forEach(el=>{
      const pick=()=>{sel=el.dataset.k;draw();};
      el.addEventListener('click',pick);
      el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pick();}});
    });
    const o=ORG[sel];info.innerHTML=`<b>${o.n}</b><br>${o.t}`;
  }
  root.append(h('p',{class:'muted'},'Toca cada estructura para ver qué hace.'),tg,box,info);
  draw();
}

/* ───────── Ciclo celular ───────── */
const CICLO=[
 {k:'G1',c:'#2F80ED',a:0,b:140,n:'G1 · Crecimiento',t:'La célula crece y funciona normalmente. Punto de control G1/S: revisa que el ADN no esté dañado.'},
 {k:'S',c:'#E63E8B',a:140,b:230,n:'S · Copia del ADN',t:'Se duplica el ADN: cada cromosoma pasa a tener dos cromátidas hermanas.'},
 {k:'G2',c:'#3FA34D',a:230,b:310,n:'G2 · Preparación',t:'La célula se prepara para dividirse. Punto de control G2/M: confirma que el ADN se copió bien.'},
 {k:'M',c:'#FF8A3D',a:310,b:360,n:'M · División (mitosis)',t:'Mitosis y citocinesis: de una célula salen dos células hijas idénticas. El huso mitótico verifica la unión de los cromosomas.'}
];
function polar(cx,cy,r,deg){const a=(deg-90)*Math.PI/180;return [cx+r*Math.cos(a),cy+r*Math.sin(a)];}
function arc(cx,cy,r,a,b){const [x1,y1]=polar(cx,cy,r,a),[x2,y2]=polar(cx,cy,r,b);return `M${x1} ${y1}A${r} ${r} 0 ${b-a>180?1:0} 1 ${x2} ${y2}`;}
function cycleWheel(root){
  let sel='G1';
  const box=h('div'),info=h('div',{class:'infobox',role:'status','aria-live':'polite'});
  const g0=h('button',{class:'btn alt sm',type:'button',onclick:()=>{sel='G0';draw();}},'¿Y la G0?');
  function draw(){
    box.innerHTML=`<svg viewBox="0 0 300 260" style="max-width:380px;display:block;margin:auto">
      ${CICLO.map(s=>`<g class="seg" data-k="${s.k}" tabindex="0" role="button" aria-label="${s.n}"><path d="${arc(150,130,90,s.a+1.5,s.b-1.5)}" fill="none" stroke="${s.c}" stroke-width="${sel===s.k?44:34}" stroke-linecap="butt"/>
        <text x="${polar(150,130,90,(s.a+s.b)/2)[0]}" y="${polar(150,130,90,(s.a+s.b)/2)[1]+5}" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="15" fill="#fff" pointer-events="none">${s.k}</text></g>`).join('')}
      <text x="150" y="126" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="16" fill="currentColor">Ciclo</text>
      <text x="150" y="146" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="16" fill="currentColor">celular</text>
    </svg>`;
    box.querySelectorAll('.seg').forEach(el=>{const pick=()=>{sel=el.dataset.k;draw();};el.addEventListener('click',pick);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pick();}});});
    if(sel==='G0')info.innerHTML='<b>G0 · Fuera del ciclo</b><br>Las neuronas maduras salen del ciclo y quedan en G0. Las células cancerosas, en cambio, escapan de los controles y se dividen sin límite.';
    else{const s=CICLO.find(x=>x.k===sel);info.innerHTML=`<b>${s.n}</b><br>${s.t}`;}
  }
  root.append(h('p',{class:'muted'},'Interfase = G1 + S + G2. Luego viene la M. Toca cada tramo.'),box,h('div',{class:'row'},g0),info);
  draw();
}

/* ───────── Del ADN a la proteína ───────── */
const BASES='UCAG';
const AAS='FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG';
const AAN={F:'Phe',L:'Leu',S:'Ser',Y:'Tyr','*':'Stop',C:'Cys',W:'Trp',P:'Pro',H:'His',Q:'Gln',R:'Arg',I:'Ile',M:'Met',T:'Thr',N:'Asn',K:'Lys',V:'Val',A:'Ala',D:'Asp',E:'Glu',G:'Gly'};
function codonAA(c){const i=BASES.indexOf(c[0])*16+BASES.indexOf(c[1])*4+BASES.indexOf(c[2]);return AAS[i];}
const COMP={A:'T',T:'A',C:'G',G:'C'};
function colored(s){return [...s].map(ch=>`<span class="base-${ch}">${ch}</span>`).join('');}
function dnaTool(root){
  const inp=h('input',{class:'dna-in',value:'TACCGAAAA',maxlength:'30','aria-label':'Hebra de ADN',inputmode:'text',autocapitalize:'characters',spellcheck:'false'});
  const out=h('div');
  function run(){
    const s=inp.value.toUpperCase().replace(/[^ATCG]/g,'');
    if(!s){out.innerHTML='<p class="muted">Escribe una hebra con las letras A, T, C y G.</p>';return;}
    const comp=[...s].map(b=>COMP[b]).join('');
    const mrna=comp.replace(/T/g,'U');
    const cods=[];for(let i=0;i+3<=mrna.length;i+=3)cods.push(mrna.slice(i,i+3));
    out.innerHTML=`<p><b>Hebra de ADN (molde):</b><br><span class="strand">${colored(s)}</span></p>
      <p><b>Hebra complementaria de ADN</b> (A–T, C–G):<br><span class="strand">${colored(comp)}</span></p>
      <p><b>ARNm</b> (transcripción: en el ARN la T se cambia por U):<br><span class="strand">${colored(mrna)}</span></p>
      <p><b>Traducción</b> (cada codón = 3 bases = 1 aminoácido):</p>
      <div class="codons">${cods.map(c=>{const a=codonAA(c);return `<div class="codon ${a==='*'?'stop':''}">${c}<small>${AAN[a]}${c==='AUG'?' · inicio':''}</small></div>`}).join('')||'<span class="muted">Necesitas al menos 3 bases.</span>'}</div>
      ${s.length%3?`<p class="muted">Sobran ${s.length%3} base(s) que no forman un codón completo.</p>`:''}`;
  }
  inp.addEventListener('input',run);
  root.append(h('p',{class:'muted'},'Escribe una hebra de ADN y mira cómo se convierte en ARNm y en proteína. El ejemplo de la clase es AUG–GCU–UUU.'),inp,out);
  run();
}

/* ───────── Cuadro de Punnett ───────── */
function punnett(root){
  const mk=(v)=>h('select',{'aria-label':'Genotipo del progenitor'},['AA','Aa','aa'].map(x=>h('option',{value:x,selected:x===v},x)));
  const s1=mk('Aa'),s2=mk('Aa'),out=h('div');
  function run(){
    const a=s1.value,b=s2.value,cells=[];
    const rows=[...a].map(x=>[...b].map(y=>[x,y].sort((p,q)=>p<q?-1:1).join('')));
    // orden: mayúscula primero (A<a en ASCII)
    const flat=rows.flat();const cnt={};flat.forEach(g=>cnt[g]=(cnt[g]||0)+1);
    const dom=flat.filter(g=>g.includes('A')).length;
    out.innerHTML=`<table class="pun"><tr><th></th><th>${b[0]}</th><th>${b[1]}</th></tr>
      ${rows.map((r,i)=>`<tr><th>${a[i]}</th>${r.map(g=>`<td>${g}</td>`).join('')}</tr>`).join('')}</table>
      <p><b>Genotipos:</b> ${Object.entries(cnt).map(([g,n])=>`${n} ${g}`).join(' : ')} <span class="muted">(de 4)</span><br>
      <b>Fenotipos:</b> ${dom} amarilla (dominante) : ${4-dom} verde (recesiva)</p>`;
  }
  s1.addEventListener('change',run);s2.addEventListener('change',run);
  root.append(h('p',{class:'muted'},'A = semilla amarilla (dominante) · a = semilla verde (recesiva). Elige los genotipos de los padres.'),
    h('div',{class:'row'},h('label',{},'Padre 1 ',s1),h('label',{},'Padre 2 ',s2)),out);
  run();
}

window.WIDGETS={hero:heroCell,cell:cellDiagram,cycle:cycleWheel,dna:dnaTool,punnett:punnett};
})();
