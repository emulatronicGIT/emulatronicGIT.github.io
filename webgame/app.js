
const preguntasPorNivel = {
  basico: [
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
  ],
  intermedio: [
    {
      texto: '¿Qué material se utiliza para contener líquidos y verterlos con facilidad?',
      opciones: ['Bureta', 'Vaso de precipitados', 'Tubos de ensayo'],
      correcta: 1
    },
    {
      texto: '¿Cuál de los siguientes reactivos permite identificar proteínas?',
      opciones: ['Reactivo de Biuret', 'Agua oxigenada', 'Ácido sulfúrico'],
      correcta: 0
    },
    {
      texto: '¿Qué equipo sirve para esterilizar material mediante calor seco?',
      opciones: ['Autoclave', 'Estufa de secado', 'Mechero Bunsen'],
      correcta: 1
    }
  ],
  avanzado: [
    {
      texto: '¿Qué tipo de vidrio se usa para calentar sustancias a altas temperaturas?',
      opciones: ['Vidrio de borosilicato', 'Vidrio sodocálcico', 'Vidrio templado'],
      correcta: 0
    },
    {
      texto: '¿Qué reactivo se emplea para revelar la presencia de azúcares reductores?',
      opciones: ['Reactivo de Benedict', 'Yodo', 'Reactivo de Biuret'],
      correcta: 0
    },
    {
      texto: 'En una titulación ácido-base, ¿qué instrumento mide con precisión la solución titulante?',
      opciones: ['Bureta', 'Pipeta Pasteur', 'Vaso de precipitados'],
      correcta: 0
    }
  ]
};
let preguntas = [];

let indice = 0;
let puntaje = 0;
let tiempoInicio = 0;
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const gameEl = document.getElementById('game');
const introEl = document.getElementById('intro');
const resultEl = document.getElementById('result');
const levelSelect = document.getElementById('level');

startBtn.addEventListener('click', () => {
  preguntas = preguntasPorNivel[levelSelect.value];
  indice = 0;
  puntaje = 0;
  introEl.classList.add('hidden');
  gameEl.classList.remove('hidden');
  tiempoInicio = Date.now();
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
  const tiempoTotalSeg = Math.round((Date.now() - tiempoInicio) / 1000);
  const puntajeFinal = puntaje * 100 - tiempoTotalSeg;
  resultEl.textContent =
    `Obtuviste ${puntaje} de ${preguntas.length} preguntas correctas en ${tiempoTotalSeg} segundos.\n` +
    `Puntaje final: ${puntajeFinal}`;
}
