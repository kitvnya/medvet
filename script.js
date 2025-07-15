const courses = [
  { id: 'biologiaCelular', nombre: 'Biología Celular', semestre: 1, creditos: 8, requisitos: [] },
  { id: 'labBiocel', nombre: 'Lab. Biología Celular', semestre: 1, creditos: 8, requisitos: [] },
  { id: 'zoologia', nombre: 'Zoología', semestre: 1, creditos: 8, requisitos: [] },
  { id: 'matematica', nombre: 'Matemáticas', semestre: 1, creditos: 8, requisitos: [] },
  { id: 'quimica', nombre: 'Química', semestre: 1, creditos: 8, requisitos: [] },
  { id: 'introVet', nombre: 'Intro. Medicina Vet.', semestre: 1, creditos: 6, requisitos: [] },
  { id: 'bioquimica', nombre: 'Bioquímica', semestre: 2, creditos: 8, requisitos: ['biologiaCelular', 'labBiocel', 'quimica'] },
  { id: 'ado1', nombre: 'Agresión y Defensa I', semestre: 2, creditos: 18, requisitos: ['biologiaCelular', 'labBiocel'] },
  { id: 'cuerpoAnimal1', nombre: 'Cuerpo Animal I', semestre: 2, creditos: 19, requisitos: ['biologiaCelular', 'labBiocel', 'zoologia'] },
  { id: 'habCom', nombre: 'Habilidades Comunicativas', semestre: 2, creditos: 8, requisitos: [] },
  { id: 'ingles1', nombre: 'Inglés I', semestre: 2, creditos: 12, requisitos: [] },
  { id: 'metodos', nombre: 'Métodos Cuantitativos', semestre: 3, creditos: 9, requisitos: ['matematica'] },
  { id: 'ingles2', nombre: 'Inglés II', semestre: 3, creditos: 12, requisitos: ['ingles1'] },
  { id: 'ado2', nombre: 'Agresión y Defensa II', semestre: 3, creditos: 15, requisitos: ['ado1', 'bioquimica'] },
  { id: 'cuerpoAnimal2', nombre: 'Cuerpo Animal II', semestre: 3, creditos: 14, requisitos: ['cuerpoAnimal1'] },
  { id: 'fdo1', nombre: 'FDO I', semestre: 3, creditos: 15, requisitos: ['cuerpoAnimal1'] },
  { id: 'ecoGeneral', nombre: 'Ecología General', semestre: 4, creditos: 8, requisitos: ['metodos'] },
  { id: 'ingles3', nombre: 'Inglés III', semestre: 4, creditos: 12, requisitos: ['ingles2'] },
  { id: 'genetica', nombre: 'Genética', semestre: 4, creditos: 6, requisitos: ['bioquimica', 'metodos'] },
  { id: 'anatoClinica', nombre: 'Anatomía Clínica', semestre: 4, creditos: 13, requisitos: ['cuerpoAnimal2', 'fdo1'] },
  { id: 'fdo2', nombre: 'FDO II', semestre: 4, creditos: 24, requisitos: ['fdo1', 'ado2'] },
  { id: 'bioConservacion', nombre: 'Biología de la Conservación', semestre: 5, creditos: 8, requisitos: ['ecoGeneral'] },
  { id: 'ingles4', nombre: 'Inglés IV', semestre: 5, creditos: 12, requisitos: ['ingles3'] },
  { id: 'farmacologia', nombre: 'Farmacología', semestre: 5, creditos: 12, requisitos: ['fdo2'] },
  { id: 'eoa', nombre: 'Enfermedades Organismos Acuáticos', semestre: 5, creditos: 7, requisitos: ['ado2'] },
  { id: 'anatoPatologica', nombre: 'Anatomía Patológica', semestre: 5, creditos: 18, requisitos: ['cuerpoAnimal2', 'fdo2'] },
  { id: 'nutricion', nombre: 'Nutrición y Alimentación', semestre: 5, creditos: 9, requisitos: ['genetica'] },
  { id: 'razCientifico', nombre: 'Razonamiento Científico', semestre: 6, creditos: 6, requisitos: ['habCom'] },
  { id: 'patoClinica', nombre: 'Patología Clínica', semestre: 6, creditos: 21, requisitos: ['anatoClinica', 'fdo2'] },
  { id: 'imagenologia', nombre: 'Imagenología', semestre: 6, creditos: 14, requisitos: ['anatoPatologica'] },
  { id: 'epidemiologia', nombre: 'Epidemiología y Salud Pública', semestre: 6, creditos: 13, requisitos: ['metodos', 'fdo2'] },
  { id: 'reproduccion', nombre: 'Reproducción', semestre: 6, creditos: 12, requisitos: ['fdo1', 'cuerpoAnimal2'] },
  { id: 'faunaSilvestre', nombre: 'Manejo Fauna Silvestre', semestre: 7, creditos: 6, requisitos: ['bioConservacion', 'fdo1'] },
  { id: 'legislacionIA', nombre: 'Legislación IA', semestre: 7, creditos: 9, requisitos: ['ecoGeneral', 'bioConservacion'] },
  { id: 'inocuidad', nombre: 'Inocuidad de los Alimentos', semestre: 7, creditos: 10, requisitos: ['epidemiologia'] },
  { id: 'medicina', nombre: 'Medicina', semestre: 7, creditos: 25, requisitos: ['fdo2', 'anatoClinica', 'farmacologia'] },
  { id: 'sistemaProduccion', nombre: 'Sistema Producción Animal', semestre: 7, creditos: 16, requisitos: ['nutricion', 'reproduccion', 'eoa'] },
  { id: 'formulacionProy', nombre: 'Formulación Proy. RRNN', semestre: 8, creditos: 8, requisitos: ['legislacionIA'] },
  { id: 'cirugia', nombre: 'Cirugía', semestre: 8, creditos: 18, requisitos: ['medicina', 'imagenologia'] },
  { id: 'zoonosis', nombre: 'Zoonosis y Enf. Emergentes', semestre: 8, creditos: 8, requisitos: ['inocuidad'] },
  { id: 'patobioMolecular', nombre: 'Patobiología Molecular', semestre: 8, creditos: 15, requisitos: ['patoClinica'] },
  { id: 'practica', nombre: 'Integrador I: Práctica Profesional', semestre: 8, creditos: 16, requisitos: ['imagenologia', 'medicina'] },
  { id: 'pensamientoCritico', nombre: 'Pensamiento Crítico', semestre: 9, creditos: 5, requisitos: ['razCientifico', 'habCom'] },
  { id: 'eticaBienestar', nombre: 'Ética y Bienestar Animal', semestre: 9, creditos: 7, requisitos: ['sistemaProduccion', 'faunaSilvestre'] },
  { id: 'innovacion', nombre: 'Innovación y Transferencia', semestre: 9, creditos: 7, requisitos: ['formulacionProy'] },
  { id: 'clinica', nombre: 'Clínica', semestre: 9, creditos: 39, requisitos: ['cirugia', 'patoClinica'] },
  { id: 'proyectoTitulo', nombre: 'Proyecto de Título', semestre: 9, creditos: 13, requisitos: ['zoonosis', 'cirugia', 'patobioMolecular', 'formulacionProy', 'practica'] },
  { id: 'responsabilidad', nombre: 'Responsabilidad Social', semestre: 10, creditos: 6, requisitos: ['pensamientoCritico'] },
  { id: 'electivo1', nombre: 'Electivo Profesional I', semestre: 10, creditos: 15, requisitos: ['zoonosis', 'patobioMolecular', 'formulacionProy', 'practica', 'clinica'] },
  { id: 'electivo2', nombre: 'Electivo Profesional II', semestre: 10, creditos: 15, requisitos: ['zoonosis', 'patobioMolecular', 'formulacionProy', 'practica', 'cirugia'] },
  { id: 'internado', nombre: 'Integrador II: Internado', semestre: 10, creditos: 22, requisitos: ['clinica', 'eticaBienestar'] }
];

const estadoCursos = {};

function inicializarEstado() {
  courses.forEach(c => {
    estadoCursos[c.id] = c.requisitos.length === 0 ? 'unlocked' : 'locked';
  });
}

function renderMalla() {
  const cont = document.getElementById('semestres-container');
  cont.innerHTML = '';
  for (let sem = 1; sem <= 10; sem++) {
    const col = document.createElement('div');
    col.className = 'semestre';
    const titulo = document.createElement('div');
    titulo.className = 'semestre-title';
    titulo.textContent = `Semestre ${sem}`;
    col.appendChild(titulo);
    courses
      .filter(c => c.semestre === sem)
      .forEach(c => {
        const div = document.createElement('div');
        div.className = `course ${estadoCursos[c.id]}`;
        div.dataset.id = c.id;
        div.innerHTML = `
          <div class="nombre">${c.nombre}</div>
          <div class="creditos">${c.creditos} créditos</div>
        `;
        div.onclick = () => toggleCurso(c.id);
        col.appendChild(div);
      });
    cont.appendChild(col);
  }
}

function toggleCurso(id) {
  if (estadoCursos[id] !== 'unlocked') return;
  estadoCursos[id] = 'completed';
  courses.forEach(c => {
    if (estadoCursos[c.id] === 'locked') {
      if (c.requisitos.every(r => estadoCursos[r] === 'completed')) {
        estadoCursos[c.id] = 'unlocked';
      }
    }
  });
  renderMalla();
}

inicializarEstado();
renderMalla();
