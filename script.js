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
    nombre: 'Intro. a la Medicina Vet.',
    semestre: 1,
    creditos: 6,
    requisitos: [],
  },
  // Puedes continuar agregando todos los cursos desde los PDF usando el mismo formato:
  // { id, nombre, semestre, creditos, requisitos: [ids de cursos previos] }
];

const estadoCursos = {}; // { idCurso: "locked" | "completed" | "unlocked" }

function inicializarEstado() {
  courses.forEach((curso) => {
    const requisitosCompletos = curso.requisitos.every(
      (req) => estadoCursos[req] === 'completed'
    );
    estadoCursos[curso.id] = curso.requisitos.length === 0 ? 'unlocked' : 'locked';
  });
}

function renderMalla() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    const semestreCursos = courses.filter((c) => c.semestre === i);
    semestreCursos.forEach((curso) => {
      const estado = estadoCursos[curso.id];
      const div = document.createElement('div');
      div.className = `course ${estado}`;
      div.dataset.id = curso.id;
      div.innerHTML = `
        <h4>${curso.nombre}</h4>
        <p>${curso.creditos} créditos</p>
        <p>Sem ${curso.semestre}</p>
      `;
      div.onclick = () => toggleCurso(curso.id);
      grid.appendChild(div);
    });
  }
}

function toggleCurso(id) {
  if (estadoCursos[id] !== 'unlocked') return;

  estadoCursos[id] = 'completed';

  // Verificar si desbloquea otros cursos
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
