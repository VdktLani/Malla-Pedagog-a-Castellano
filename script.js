const malla = [
/* ===== SEMESTRE 1 ===== */
{ semestre:1, ramos:[
{id:"iel1",nombre:"Introducción a los Estudios Literarios I",creditos:5,req:[]},
{id:"phl1",nombre:"Panorama Histórico Literario I",creditos:6,req:[]},
{id:"contextos",nombre:"Contextos Socioculturales",creditos:4,req:[]},
{id:"ce1",nombre:"Comunicación Escrita I",creditos:6,req:[]},
{id:"ling",nombre:"Lingüística General",creditos:5,req:[]}
]},
/* ===== SEMESTRE 2 ===== */
{ semestre:2, ramos:[
{id:"iel2",nombre:"Introducción a los Estudios Literarios II",creditos:6,req:["iel1"]},
{id:"phl2",nombre:"Panorama Histórico Literario II",creditos:6,req:["phl1"]},
{id:"psico",nombre:"Psicología del Aprendizaje",creditos:4,req:[]},
{id:"latin",nombre:"Latín",creditos:5,req:[]},
{id:"ce2",nombre:"Comunicación Escrita II",creditos:7,req:["ce1"]},
{id:"fono",nombre:"Fonética y Fonología",creditos:6,req:["ling"]}
]},
/* ===== SEMESTRE 3 ===== */
{ semestre:3, ramos:[
{id:"pract1",nombre:"Práctica I",creditos:4,req:["contextos","psico"]},
{id:"ttl1",nombre:"Temas y Tópicos Literarios I",creditos:4,req:["phl2","iel2"]},
{id:"gen1",nombre:"Géneros Literarios I",creditos:4,req:["phl2","iel2"]},
{id:"gram1",nombre:"Gramática del Español I",creditos:4,req:[]},
{id:"ce3",nombre:"Comunicación Escrita III",creditos:5,req:["ce2"]},
{id:"hle1",nombre:"Historia de la Lengua Española I",creditos:4,req:["ling","latin","fono"]},
{id:"lsi1",nombre:"Lengua de Señas I",creditos:4,req:[]}
]},
/* ===== SEMESTRE 4 ===== */
{ semestre:4, ramos:[
{id:"ttl2",nombre:"Temas y Tópicos Literarios II",creditos:4,req:["ttl1","gen1"]},
{id:"gen2",nombre:"Géneros Literarios II",creditos:6,req:["ttl1","gen1"]},
{id:"gram2",nombre:"Gramática del Español II",creditos:4,req:["gram1","ling"]},
{id:"oral",nombre:"Comunicación Oral",creditos:5,req:[]},
{id:"hle2",nombre:"Historia de la Lengua Española II",creditos:4,req:["hle1"]},
{id:"curr",nombre:"Currículum Educacional",creditos:4,req:[]},
{id:"lsi2",nombre:"Lengua de Señas II",creditos:4,req:["lsi1"]}
]},
/* ===== SEMESTRE 5 ===== */
{ semestre:5, ramos:[
{id:"pract2",nombre:"Práctica II",creditos:4,req:["pract1","curr"]},
{id:"ttl3",nombre:"Temas y Tópicos Literarios III",creditos:4,req:["ttl2"]},
{id:"lsoc1",nombre:"Literatura y Sociedad I",creditos:6,req:["gen2"]},
{id:"gram3",nombre:"Gramática del Español III",creditos:4,req:["gram2"]},
{id:"eval",nombre:"Evaluación Educacional",creditos:4,req:[]},
{id:"america",nombre:"Español de América",creditos:5,req:["hle2"]},
{id:"lsi3",nombre:"Lengua de Señas III",creditos:4,req:["lsi2"]}
]},
/* ===== SEMESTRE 6 ===== */
{ semestre:6, ramos:[
{id:"ttl4",nombre:"Temas y Tópicos Literarios IV",creditos:6,req:["ttl3"]},
{id:"lsoc2",nombre:"Literatura y Sociedad II",creditos:4,req:["lsoc1"]},
{id:"div",nombre:"Diversidad e Inclusión",creditos:4,req:[]},
{id:"inv",nombre:"Investigación Educacional",creditos:4,req:[]},
{id:"chile",nombre:"Español de Chile",creditos:4,req:["america"]},
{id:"semi",nombre:"Semiótica y Comunicación",creditos:5,req:["ling"]},
{id:"comp",nombre:"Complementario",creditos:4,req:["ce3","phl2","iel2","ling"]}
]},
/* ===== SEMESTRE 7 ===== */
{ semestre:7, ramos:[
{id:"pract3",nombre:"Práctica III",creditos:4,req:["ttl4","lsoc2","div","semi","chile","eval"]},
{id:"cpt",nombre:"Comprensión y Producción de Textos",creditos:4,req:["ling","ce3"]},
{id:"trans",nombre:"Literatura y Estudios Transatlánticos",creditos:4,req:["lsoc1","lsoc2"]},
{id:"did1",nombre:"Didáctica I",creditos:6,req:["div","inv","semi","chile"]},
{id:"teatro",nombre:"Expresión Teatral",creditos:4,req:["oral","div","semi"]},
{id:"orient",nombre:"Orientación y Convivencia",creditos:4,req:[]},
{id:"tipologia",nombre:"Tipología Textual",creditos:5,req:["ling","ce3"]}
]},
/* ===== SEMESTRE 8 ===== */
{ semestre:8, ramos:[
{id:"pract4",nombre:"Práctica IV",creditos:5,req:["pract3","did1","teatro","tipologia","cpt","trans"]},
{id:"comparados",nombre:"Literatura y Estudios Comparados",creditos:5,req:["trans","lsoc2"]},
{id:"semLit",nombre:"Seminario de Literatura y Estética",creditos:4,req:["ttl4","lsoc2","inv"]},
{id:"did2",nombre:"Didáctica II",creditos:6,req:["pract3","did1","teatro","tipologia","cpt","trans"]},
{id:"semLing",nombre:"Seminario de Lingüística",creditos:4,req:["ling","ce3","semi","inv"]},
{id:"discurso",nombre:"Análisis del Discurso",creditos:5,req:["semi","tipologia"]}
]},
/* ===== SEMESTRE 9 ===== */
{ semestre:9, ramos:[
{id:"final",nombre:"Práctica Final",creditos:24,req:["pract2","gram3","orient","pract4","comparados","semLit","did2","semLing","discurso"]},
{id:"memoria1",nombre:"Proyecto de Memoria I",creditos:10,req:["pract1","ttl1","gen1","gram1","ce3","hle1"]},
{id:"egreso",nombre:"Fortalecimiento de Competencias",creditos:4,req:["pract2","gram3","comp","orient","pract4","comparados","semLit","did2","semLing","discurso"]}
]},
/* ===== SEMESTRE 10 ===== */
{ semestre:10, ramos:[
{id:"memoria2",nombre:"Proyecto de Memoria II",creditos:22,req:["discurso"]}
]}
];

let estado = JSON.parse(localStorage.getItem("estadoMalla")) || {};

function desbloqueado(r){return r.req.every(id=>estado[id]);}

function toggle(id){
  estado[id]=!estado[id];
  localStorage.setItem("estadoMalla",JSON.stringify(estado));
  render();
}

function render(){
  const cont=document.getElementById("malla");
  cont.innerHTML="";
  let total=0,aprob=0;

  malla.forEach(s=>{
    let sum=0;
    const box=document.createElement("div");
    box.className="semestre";

    box.innerHTML=`<h2>Semestre ${s.semestre}</h2>`;
    const grid=document.createElement("div");
    grid.className="ramos";

    s.ramos.forEach(r=>{
      total+=r.creditos;
      const div=document.createElement("div");
      div.className="ramo";
      if(estado[r.id]){div.classList.add("aprobado");sum+=r.creditos;aprob+=r.creditos;}
      else if(!desbloqueado(r))div.classList.add("bloqueado");
      div.onclick=()=>desbloqueado(r)&&toggle(r.id);
      div.innerHTML=`<div class="nombre">${r.nombre}</div><div class="detalle">${r.creditos} créditos</div>`;
      grid.appendChild(div);
    });

    box.innerHTML+=`<div class="creditos">Créditos aprobados: ${sum}</div>`;
    box.appendChild(grid);
    cont.appendChild(box);
  });

  const pct=Math.round((aprob/total)*100);
  document.getElementById("barra-progreso").style.width=pct+"%";
  document.getElementById("texto-progreso").textContent=`Progreso total: ${aprob} / ${total} créditos (${pct}%)`;
}

render();
