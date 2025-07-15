const courses = [
  {
    id: 'zoologia',
    nombre: 'Zoología',
    semestre: 1,
    creditos: 8,
    requisitos: [],
  },
  {
    id: 'biologiaCelular',
    nombre: 'Biología Celular',
    semestre: 1,
    creditos: 8,
    requisitos: [],
  },
  {
    id: 'labBiocel',
    nombre: 'Lab. Biología Celular',
    semestre: 1,
    creditos: 8,
    requisitos: [],
  },
  {
    id: 'quimica',
    nombre: 'Química General',
    semestre: 1,
    creditos: 8,
    requisitos: [],
  },
  {
    id: 'matematica',
    nombre: 'Matemáticas',
    semestre: 1,
    creditos: 8,
    requisitos: [],
  },
  {
    id: 'introVet',
    nombre: 'Intro. Medicina Vet.',
    semestre: 1,
    creditos: 6,
    requisitos: [],
  },
  // Aquí irán TODOS los demás ramos...
];

const estadoCursos = {}; // { idCurso: "locked" | "completed" | "unlocked" }

function inicializarEstado() {
  courses.forEach((curso) => {
    estadoCursos[curso.id] =
      curso.requisitos.length === 0 ? 'unlocked' : 'locked';
  });
}

function renderMalla() {
  const container = document.getElementById('semestres-container');
  container.innerHTML = '';

  for (let sem = 1; sem <= 10; sem++) {
    const columna = document.createElement('div');
    columna.className = 'semestre';

    const titulo = document.createElement('div');
    titulo.className = 'semestre-title';
    titulo.textContent = `Semestre ${sem}`;
    columna.appendChild(titulo);

    courses
      .filter((c) => c.semestre === sem)
      .forEach((curso) => {
        const estado = estadoCursos[curso.id];
        const div = document.createElement('div');
        div.className = `course ${estado}`;
        div.dataset.id = curso.id;

        div.innerHTML = `
          <div class="nombre">${curso.nombre}</div>
          <div class="creditos">${curso.creditos} créditos</div>
        `;

        div.onclick = () => toggleCurso(curso.id);
        columna.appendChild(div);
      });

    container.appendChild(columna);
  }
}

function toggleCurso(id) {
  if (estadoCursos[id] !== 'unlocked') return;

  estadoCursos[id] = 'completed';

  courses.forEach((curso) => {
    if (estadoCursos[curso.id] === 'locked') {
      const requisitosCompletos = curso.requisitos.every(
        (req) => estadoCursos[req] === 'completed'
      );
      if (requisitosCompletos) {
        estadoCursos[curso.id] = 'unlocked';
      }
    }
  });

  renderMalla();
}

inicializarEstado();
renderMalla();

}

inicializarEstado();
renderMalla();
