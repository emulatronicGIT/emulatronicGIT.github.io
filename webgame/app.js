
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
    },
    {
      texto: '¿Qué instrumento sirve para medir la temperatura de líquidos?',
      opciones: ['Termómetro', 'Balanza', 'Mortero'],
      correcta: 0
    },
    {
      texto: '¿Dónde se observan las muestras al microscopio?',
      opciones: ['Campana extractora', 'Área de microscopia', 'Área de lavado'],
      correcta: 1
    },
    {
      texto: '¿Qué material se utiliza para proteger los ojos en el laboratorio?',
      opciones: ['Lentes de seguridad', 'Bata', 'Guantes'],
      correcta: 0
    },
    {
      texto: '¿Para qué se usa una balanza en el laboratorio?',
      opciones: ['Medir peso', 'Mezclar sustancias', 'Calentar líquidos'],
      correcta: 0
    },
    {
      texto: '¿Qué equipo almacena líquidos de forma segura?',
      opciones: ['Matraces', 'Espátula', 'Pinzas'],
      correcta: 0
    },
    {
      texto: '¿Qué material se utiliza para mezclar sustancias?',
      opciones: ['Varilla de vidrio', 'Bureta', 'Tubo de ensayo'],
      correcta: 0
    },
    {
      texto: '¿Para qué sirve un embudo en el laboratorio?',
      opciones: ['Filtrar o transferir líquidos', 'Pesar sustancias', 'Calentar soluciones'],
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
    },
    {
      texto: '¿Qué instrumento se emplea para medir volúmenes de líquidos con mucha precisión?',
      opciones: ['Probeta', 'Pipeta graduada', 'Matraz Erlenmeyer'],
      correcta: 1
    },
    {
      texto: '¿Qué reactivo se utiliza comúnmente para neutralizar un ácido derramado?',
      opciones: ['Soda cáustica', 'Bicarbonato de sodio', 'Ácido clorhídrico'],
      correcta: 1
    },
    {
      texto: '¿Para qué se usa la campana extractora en el laboratorio?',
      opciones: ['Para pesar sustancias', 'Para filtrar líquidos', 'Para manipular reactivos volátiles de forma segura'],
      correcta: 2
    },
    {
      texto: '¿Qué pieza sujeta los tubos de ensayo cuando están calientes?',
      opciones: ['Pinza para tubos', 'Soporte universal', 'Trípode'],
      correcta: 0
    },
    {
      texto: '¿Qué vidrio se utiliza para preparar soluciones de concentración conocida?',
      opciones: ['Vaso de precipitados', 'Matraz aforado', 'Placa Petri'],
      correcta: 1
    },
    {
      texto: '¿Qué reactivo se usa como indicador de pH en titulaciones ácido-base?',
      opciones: ['Fenolftaleína', 'Yodo', 'Cloruro de sodio'],
      correcta: 0
    },
    {
      texto: '¿Qué equipo se utiliza para agitar mezclas de forma automática?',
      opciones: ['Agitador magnético', 'Embudo Büchner', 'Mortero'],
      correcta: 0
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
    },
    {
      texto: '¿Cuál es la principal ventaja del uso de una balanza analítica?',
      opciones: ['Mayor precisión en la medida de masa', 'Menor consumo de reactivos', 'Evitar contaminaciones cruzadas'],
      correcta: 0
    },
    {
      texto: '¿Qué proceso utiliza una centrifugadora de laboratorio?',
      opciones: ['Filtración por gravedad', 'Separación por fuerza centrífuga', 'Evaporación al vacío'],
      correcta: 1
    },
    {
      texto: '¿Qué indica el pictograma con una llama en el sistema GHS?',
      opciones: ['Sustancias inflamables', 'Sustancias tóxicas', 'Sustancias explosivas'],
      correcta: 0
    },
    {
      texto: '¿Para qué se utiliza una mufla en el laboratorio?',
      opciones: ['Calentar muestras a altas temperaturas de forma controlada', 'Medir pH', 'Destilar mezclas'],
      correcta: 0
    },
    {
      texto: '¿Cuál es la función principal de un desecador?',
      opciones: ['Mantener muestras libres de humedad', 'Centrifugar líquidos', 'Determinar densidad'],
      correcta: 0
    },
    {
      texto: '¿Qué reactivo se usa habitualmente para fijar muestras biológicas?',
      opciones: ['Formol', 'Etanol', 'Peróxido de hidrógeno'],
      correcta: 0
    },
    {
      texto: '¿Cómo se denomina la técnica que separa componentes por su movilidad en una fase estacionaria?',
      opciones: ['Electroforesis', 'Cromatografía', 'Espectroscopía'],
      correcta: 1
    }
  ]
};
let preguntas = [];

let indice = 0;
let aciertos = 0;
let puntaje = 0;
let tiempoInicio = 0;
let puntosPorPregunta = 100;
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const gameEl = document.getElementById('game');
const introEl = document.getElementById('intro');
const resultEl = document.getElementById('result');
const levelSelect = document.getElementById('level');
const playerInput = document.getElementById('player');
const leaderboardEl = document.getElementById('leaderboard');
const leaderboardList = document.getElementById('leaderboard-list');
let jugador = '';

startBtn.addEventListener('click', () => {
  const nombre = playerInput.value.trim();
  if (!nombre) {
    alert('Por favor ingresa tu nombre');
    return;
  }
  jugador = nombre;
  preguntas = preguntasPorNivel[levelSelect.value];
  indice = 0;
  aciertos = 0;
  puntaje = 0;
  const tablaPuntos = { basico: 100, intermedio: 150, avanzado: 200 };
  puntosPorPregunta = tablaPuntos[levelSelect.value] || 100;
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
    aciertos++;
    puntaje += puntosPorPregunta;
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
  const puntajeFinal = puntaje - tiempoTotalSeg;
  resultEl.textContent =
    `Obtuviste ${aciertos} de ${preguntas.length} preguntas correctas en ${tiempoTotalSeg} segundos.\n` +
    `Puntaje final: ${puntajeFinal}`;
  guardarEnLeaderboard(jugador, puntajeFinal);
  mostrarLeaderboard();
}

async function guardarEnLeaderboard(nombre, puntos) {
  try {
    await fetch('/leaderboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, puntos })
    });
  } catch (e) {
    console.error('Error al guardar en el leaderboard', e);
  }
}

async function mostrarLeaderboard() {
  try {
    const resp = await fetch('/leaderboard');
    const datos = await resp.json();
    leaderboardList.innerHTML = '';
    datos.forEach((d) => {
      const li = document.createElement('li');
      li.textContent = `${d.nombre}: ${d.puntos}`;
      leaderboardList.appendChild(li);
    });
    leaderboardEl.classList.remove('hidden');
  } catch (e) {
    console.error('Error al obtener el leaderboard', e);
  }
}

// mostrar tabla al cargar la página
mostrarLeaderboard();
