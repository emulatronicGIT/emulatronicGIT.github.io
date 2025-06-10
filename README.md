# LabGames

Este repositorio contiene un juego web sencillo en español para estudiantes de 7.º grado de Ciencias. El objetivo es reforzar los conocimientos sobre materiales y reactivos de laboratorio mediante preguntas interactivas.

## Instrucciones

1. Instala las dependencias con `npm install`.
2. Ejecuta `node server.js` y abre `http://localhost:3000` en tu navegador.
3. Selecciona un nivel de dificultad y haz clic en **Comenzar**.
4. Ingresa tu nombre, responde cada pregunta y, al finalizar, verás tu puntaje.
5. Tu resultado se agregará a una tabla de posiciones compartida entre todos los usuarios.

Puedes escoger entre tres niveles de complejidad: **Básico**, **Intermedio** y **Avanzado**.


El juego está implementado con HTML, CSS y JavaScript puros, por lo que no requiere configuraciones adicionales.

Cada respuesta correcta otorga puntaje según el nivel elegido: 100 puntos en **Básico**, 150 en **Intermedio** y 200 en **Avanzado**. Al resultado se le resta el total de segundos empleados en completar todas las preguntas.
