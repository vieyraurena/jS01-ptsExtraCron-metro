//
// Práctica 10 - Cronómetro
//

console.log('Esto es un cronómetro!');

let intervalId;
let contadorSeconds = 0;
let contadorMinutos = 1;
let contadorHoras = 1;
const crono = document.getElementById ('cronometro');
const horas = document.getElementById('horas');
const min = document.getElementById('minutos');
const seg = document.getElementById('segundos');

function move () {
  seg.innerHTML = contadorSeconds++;
  if (contadorSeconds == 60) {
    contadorSeconds = 0;
    min.innerHTML = contadorMinutos++;
    if ( contadorMinutos == 60) {
      contadorMinutos = 0;
      horas.innerHTML = contadorHoras++;
    }
  }
}

function start () {
  intervalId = window.setInterval(move, 1000)
}

function stop () {
 window.clearInterval(intervalId);
}

function clear () {
  window.clearTimeout(intervalId);
  contadorHoras = 0;
  contadorMinutos = 0;
  contadorSeconds = 0;
  crono.innerHTML = `HH: MM: SS:`
}

const iniciar = document.getElementById('iniciar');
iniciar.addEventListener('click', start);
const detener = document.getElementById('detener');
detener.addEventListener('click', stop);
const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', clear);