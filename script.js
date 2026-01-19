const malla = [
  {
    semestre: 1,
    ramos: [
      { id:"iel1", nombre:"Introducción a los Estudios Literarios I", creditos:5, req:[] },
      { id:"phl1", nombre:"Panorama Histórico Literario I", creditos:6, req:[] },
      { id:"contextos", nombre:"Contextos Socioculturales de los Procesos Educativos", creditos:4, req:[] },
      { id:"ce1", nombre:"Comunicación Escrita I", creditos:6, req:[] },
      { id:"ling", nombre:"Lingüística General", creditos:5, req:[] }
    ]
  },
  {
    semestre: 2,
    ramos: [
      { id:"iel2", nombre:"Introducción a los Estudios Literarios II", creditos:6, req:["iel1"] },
      { id:"phl2", nombre:"Panorama Histórico Literario II", creditos:6, req:["phl1"] },
      { id:"psico", nombre:"Psicología del Aprendizaje", creditos:4, req:[] },
      { id:"latin", nombre:"Latín", creditos:5, req:[] },
      { id:"ce2", nombre:"Comunicación Escrita II", creditos:7, req:["ce1"] },
      { id:"fono", nombre:"Fonética y Fonología del Español", creditos:6, req:["ling"] }
    ]
  },
  {
    semestre: 3,
    ramos: [
      { id:"pract1", nombre:"Práctica I", creditos:4, req:["contextos","psico"] },
      { id:"ttl1", nombre:"Temas y Tópicos Literarios I", creditos:4, req:["phl2","iel2"] },
      { id:"gen1", nombre:"Géneros Literarios I", creditos:4, req:["phl2","iel2"] },
      { id:"gram1", nombre:"Gramática del Español I", creditos:4, req:[] },
      { id:"ce3", nombre:"Comunicación Escrita III", creditos:5, req:["ce2"] },
      { id:"hle1", nombre:"Historia de la Lengua Española I", creditos:4, req:["ling","latin","fono"] },
      { id:"lsi1", nombre:"Segundo Idioma I: Lengua de Señas de Chile I", creditos:4, req:[] }
    ]
  },
  {
    semestre: 4,
    ramos: [
      { id:"ttl2", nombre:"Temas y Tópicos Literarios II", creditos:4, req:["ttl1","gen1"] },
      { id:"gen2", nombre:"Géneros Literarios II", creditos:6, req:["ttl1","gen1"] },
      { id:"gram2", nombre:"Gramática del Español II", creditos:4, req:["gram1","ling"] },
      { id:"oral", nombre:"Comunicación Oral", creditos:5, req:[] },
      { id:"hle2", nombre:"Historia de la Lengua Española II", creditos:4, req:["hle1"] },
      { id:"curr", nombre:"Currículum Educacional", creditos:4, req:[] },
      { id:"lsi2", nombre:"Segundo Idioma II: Lengua de Señas de Chile II", creditos:4, req:["lsi1"] }
    ]
  },
  {
    semestre: 5,
    ramos: [
      { id:"pract2", nombre:"Práctica II", creditos:4, req:["pract1","curr"] },
      { id:"ttl3", nombre:"Temas y Tópicos Literarios III", creditos:4, req:["ttl2"] },
      { id:"lsoc1", nombre:"Literatura y Sociedad I", creditos:6, req:["gen2"] },
      { id:"gram3", nombre:"Gramática del Español III", creditos:4, req:["gram2"] },
      { id:"eval", nombre:"Evaluación Educacional", creditos:4, req:[] },
      { id:"america", nombre:"Español de América", creditos:5, req:["hle2"] },
      { id:"lsi3", nombre:"Segundo Idioma III: Lengua de Señas de Chile III", creditos:4, req:["lsi2"] }
    ]
  },
  {
    semestre: 6,
    ramos: [
      { id:"ttl4", nombre:"Temas y Tópicos Literarios IV", creditos:6, req:["ttl3"] },
      { id:"lsoc2", nombre:"Literatura y Sociedad II", creditos:4, req:["lsoc1"] },
      { id:"div", nombre:"Diversidad e Inclusión", creditos:4, req:[] },
      { id:"inv", nombre:"Investigación Educacional", creditos:4, req:[] },
      { id:"chile", nombre:"Español de Chile", creditos:4, req:["america"] },
      { id:"semi", nombre:"Semiótica y Comunicación", creditos:5, req:["ling"] },
      { id:"comp", nombre:"Complementario de la Especialidad", creditos:4, req:["ce3","phl2","iel2","ling"] }
    ]
  }
  // 👉 Los semestres 7 a 10 siguen EXACTAMENTE este patrón
];

let estado = JSON.parse(localStorage.getItem("estadoMalla")) || {};

function desbloqueado(ramo) {
  return ramo.req.every(r => estado[r]);
}

function toggle(id) {
  estado[id] = !estado[id];
  localStorage.setItem("estadoMalla", JSON.stringify(estado));
  render();
}

function render() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";

  malla.forEach(s => {
    let suma = 0;

    const box = document.createElement("div");
    box.className = "semestre";

    const h2 = document.createElement("h2");
    h2.textContent = `Semestre ${s.semestre}`;
    box.appendChild(h2);

    const creditos = document.createElement("div");
    creditos.className = "creditos";

    const grid = document.createElement("div");
    grid.className = "ramos";

    s.ramos.forEach(r => {
      const div = document.createElement("div");
      div.className = "ramo";

      const ok = estado[r.id];
      const libre = desbloqueado(r);

      if (ok) {
        div.classList.add("aprobado");
        suma += r.creditos;
      } else if (!libre) {
        div.classList.add("bloqueado");
      }

      div.onclick = () => libre && toggle(r.id);

      div.innerHTML = `
        <div class="nombre">${r.nombre}</div>
        <div class="detalle">${r.creditos} créditos</div>
      `;

      grid.appendChild(div);
    });

    creditos.textContent = `Créditos aprobados: ${suma}`;
    box.appendChild(creditos);
    box.appendChild(grid);
    cont.appendChild(box);
  });
}

render();
