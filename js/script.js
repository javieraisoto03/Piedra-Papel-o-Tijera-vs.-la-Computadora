// Función para obtener la jugada aleatoria de la computadora
function obtenerJugadaComputadora() {
    const opciones = ["Piedra", "Papel", "Tijera"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

// Función para determinar al ganador de una ronda
function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if (jugadaUsuario === jugadaComputadora) {
        return "Empate";
    } else if (
        (jugadaUsuario === "Piedra" && jugadaComputadora === "Tijera") ||
        (jugadaUsuario === "Papel" && jugadaComputadora === "Piedra") ||
        (jugadaUsuario === "Tijera" && jugadaComputadora === "Papel")
    ) {
        return "Usuario";
    } else {
        return "Computadora";
    }
}

// Función principal para jugar el cachipún
function jugarCachipun(veces) {
    for (let i = 0; i < veces; i++) {
        const jugadaUsuario = prompt("Elige tu jugada (Piedra, Papel o Tijera):").trim().toLowerCase().capitalize();
        
        // Agregar validación para la entrada del usuario
        if (jugadaUsuario === "Piedra" || jugadaUsuario === "Papel" || jugadaUsuario === "Tijera") {
            const jugadaComputadora = obtenerJugadaComputadora();
    
            console.log(`Tu jugada: ${jugadaUsuario}`);
            console.log(`Jugada de la computadora: ${jugadaComputadora}`);
    
            const ganador = determinarGanador(jugadaUsuario, jugadaComputadora);
    
            if (ganador === "Empate") {
                console.log("¡Es un empate!");
            } else if (ganador === "Usuario") {
                console.log("¡Felicidades! ¡Has ganado!");
            } else {
                console.log("¡Has perdido! La computadora gana esta ronda.");
            }
        } else {
            console.log("Juego terminado, eso no es parte del juego.");
            break; // Terminar el juego si la entrada no es válida
        }
    }
}

// Función para capitalizar la primera letra de una cadena
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Solicitar al usuario cuántas veces desea jugar
const veces = parseInt(prompt("¿Cuántas veces deseas jugar?"));

// Iniciar el juego
jugarCachipun(veces);
