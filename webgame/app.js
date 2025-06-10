const preguntas = [
  {
    texto: '¿Cuál de los siguientes materiales se utiliza para calentar sustancias en el laboratorio?',
    opciones: ['Probeta', 'Mechero Bunsen', 'Embudo'],
    correcta: 1
  },
  {
    texto: '¿Qué reactivo se usa para identificar la presencia de almidón?',
    opciones: ['Agua destilada', 'Yodo', 'Sulfato de cobre'],
    correcta: 1
  },
  {
    texto: '¿Cuál es la función de una pipeta?',
    opciones: ['Medir volúmenes pequeños con precisión', 'Agitar mezclas', 'Contener reacciones a alta presión'],
    correcta: 0
  }
];
let indice = 0;
let puntaje = 0;
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const gameEl = document.getElementById('game');
const introEl = document.getElementById('intro');
const resultEl = document.getElementById('result');

startBtn.addEventListener('click', () => {
  introEl.classList.add('hidden');
  gameEl.classList.remove('hidden');
  mostrarPregunta();
});

nextBtn.addEventListener('click', () => {
  indice++;
  if (indice < preguntas.length) {
    mostrarPregunta();
  } else {
    finalizarJuego();
  }
});

function mostrarPregunta() {
  const actual = preguntas[indice];
  questionEl.textContent = actual.texto;
  choicesEl.innerHTML = '';
  actual.opciones.forEach((opcion, i) => {
    const btn = document.createElement('button');
    btn.textContent = opcion;
    btn.addEventListener('click', () => seleccionar(i));
    choicesEl.appendChild(btn);
  });
  nextBtn.classList.add('hidden');
}

function seleccionar(indiceSeleccionado) {
  const actual = preguntas[indice];
  if (indiceSeleccionado === actual.correcta) {
    puntaje++;
  }
  nextBtn.classList.remove('hidden');
  Array.from(choicesEl.children).forEach((btn, i) => {
    if (i === actual.correcta) {
      btn.style.backgroundColor = '#c8e6c9';
    } else if (i === indiceSeleccionado) {
      btn.style.backgroundColor = '#ffcdd2';
    }
    btn.disabled = true;
  });
}

function finalizarJuego() {
  gameEl.classList.add('hidden');
  resultEl.classList.remove('hidden');
  resultEl.textContent = `Obtuviste ${puntaje} de ${preguntas.length} preguntas correctas.`;
}
