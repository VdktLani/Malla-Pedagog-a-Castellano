const malla = [
  {
    semestre: 1,
    ramos: [
      { id:"iel1", nombre:"Introducción a los Estudios Literarios I", creditos:5, req:[] },
      { id:"phl1", nombre:"Panorama Histórico Literario I", creditos:6, req:[] },
      { id:"contextos", nombre:"Contextos Socioculturales", creditos:4, req:[] },
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
      { id:"fono", nombre:"Fonética y Fonología", creditos:6, req:["ling"] }
    ]
  }
  // 👉 El resto de la malla sigue EXACTAMENTE este mismo formato
];

let estado = JSON.parse(localStorage.getItem("estadoMalla")) || {};

function estaDesbloqueado(ramo) {
  return ramo.req.every(r => estado[r]);
}

function toggleRamo(id) {
  estado[id] = !estado[id];
  localStorage.setItem("estadoMalla", JSON.stringify(estado));
  render();
}

function render() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";

  malla.forEach(s => {
    const sem = document.createElement("div");
    sem.className = "semestre";

    let creditos = 0;

    const h2 = document.createElement("h2");
    h2.textContent = `Semestre ${s.semestre}`;
    sem.appendChild(h2);

    const grid = document.createElement("div");
    grid.className = "ramos";

    s.ramos.forEach(r => {
      const div = document.createElement("div");
      div.className = "ramo";

      const aprobado = estado[r.id];
      const desbloqueado = estaDesbloqueado(r);

      if (aprobado) {
        div.classList.add("aprobado");
        creditos += r.creditos;
      } else if (!desbloqueado) {
        div.classList.add("bloqueado");
      }

      div.onclick = () => {
        if (desbloqueado) toggleRamo(r.id);
      };

      div.innerHTML = `
        <div class="nombre">${r.nombre}</div>
        <div class="detalle">${r.creditos} créditos</div>
      `;

      grid.appendChild(div);
    });

    const c = document.createElement("div");
    c.className = "creditos";
    c.textContent = `Créditos aprobados: ${creditos}`;
    sem.appendChild(c);

    sem.appendChild(grid);
    cont.appendChild(sem);
  });
}

render();
