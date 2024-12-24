// Tiempo inicial en segundos (5 minutos)
let tiempoRestante = 300;
let tiempoInicial = tiempoRestante;
let intervalo;
let cuentaPausada = false;

// Función para actualizar el countdown
function actualizarCountdown() {
    let minutos = Math.floor(tiempoRestante / 60);
    let segundos = tiempoRestante % 60;

    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    tiempoRestante--;

    if (tiempoRestante < 0) {
        clearInterval(intervalo);
        alert('¡El tiempo ha terminado!');
    }
}

// Función para establecer minutos
function setMinutes() {
    let minutos = prompt("Ingrese los minutos (0-59):");
    if (minutos !== null && !isNaN(minutos) && minutos >= 0 && minutos <= 59) {
        let segundosActuales = tiempoRestante % 60;
        tiempoRestante = parseInt(minutos) * 60 + segundosActuales;
        actualizarCountdown();
    } else {
        alert("Por favor, ingrese un valor válido entre 0 y 59.");
    }
}

// Función para establecer segundos
function setSeconds() {
    let segundos = prompt("Ingrese los segundos (0-59):");
    if (segundos !== null && !isNaN(segundos) && segundos >= 0 && segundos <= 59) {
        let minutosActuales = Math.floor(tiempoRestante / 60);
        tiempoRestante = minutosActuales * 60 + parseInt(segundos);
        actualizarCountdown();
    } else {
        alert("Por favor, ingrese un valor válido entre 0 y 59.");
    }
}

// Función para pausar el countdown
function pausarCountdown() {
    clearInterval(intervalo);
    cuentaPausada = true;
    document.getElementById('pausar').disabled = true;
    document.getElementById('reanudar').disabled = false;
}

// Función para reanudar el countdown
function reanudarCountdown() {
    intervalo = setInterval(actualizarCountdown, 1000);
    cuentaPausada = false;
    document.getElementById('pausar').disabled = false;
    document.getElementById('reanudar').disabled = true;
}

// Función para reiniciar el countdown
function reiniciarCountdown() {
    clearInterval(intervalo);
    tiempoRestante = tiempoInicial;
    actualizarCountdown();
    cuentaPausada = false;
    document.getElementById('pausar').disabled = false;
    document.getElementById('reanudar').disabled = true;
}

// Iniciar la cuenta regresiva
intervalo = setInterval(actualizarCountdown, 1000);

// Añadir eventos a los botones
document.getElementById('pausar').addEventListener('click', pausarCountdown);
document.getElementById('reanudar').addEventListener('click', reanudarCountdown);
document.getElementById('reiniciar').addEventListener('click', reiniciarCountdown);
document.getElementById('setMinutes').addEventListener('click', setMinutes);
document.getElementById('setSeconds').addEventListener('click', setSeconds);
