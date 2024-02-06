// Version con Funciones y Alert - Fco C.
"use strict";

// Función para obtener la jugada del Player
function obtenerJugadaJugador() {
  return parseInt(prompt("piedra(1), papel(2) o tijera(3)"));
}

// Función para obtener la jugada de PC
function obtenerJugadaComputadora() {
  return Math.floor(Math.random() * 3) + 1;
}

// Función para convertir el número de jugada a su representación textual
function convertirJugada(jugada) {
  switch (jugada) {
    case 1:
      return "PIEDRA";
    case 2:
      return "PAPEL";
    case 3:
      return "TIJERA";
    default:
      return "Invalida";
  }
}

// Función principal del Juego
function jugar() {
  let juegos = parseInt(prompt("Cuantos juegos vas a jugar?")); // Cantidad de partidas
  document.write(`<div class="container text-start">`);

  let contadorEmpate = 0; // Variable para contar los empates
  let contadorPlayer = 0; // Variable para contar las victorias del jugador
  let contadorPC = 0; // Variable para contar las victorias de la PC

  for (let i = 0; i < juegos; i++) {
    document.write(`Juego: ${i + 1} <br>`); // Juego actual

    let Player = obtenerJugadaJugador(); // Llama a la función y guarda su valor en la variable
    let PC = obtenerJugadaComputadora(); // Llama a la función y guarda su valor en la variable

    //EMPATE
    if (Player === PC) {
      document.write(
        `Empate El jugador eligió: ${convertirJugada(
          Player
        )} vs PC eligió: ${convertirJugada(PC)} <br><br>`
      );
      contadorEmpate++;
    }
    //GANA JUGADOR
    else if (
      (Player === 1 && PC === 3) ||
      (Player === 2 && PC === 1) ||
      (Player === 3 && PC === 2)
    ) {
      document.write(
        `Gana el Jugador! <br> El jugador eligió: ${convertirJugada(Player)} 
          vs PC eligió: ${convertirJugada(PC)} <br><br>`
      );
      contadorPlayer++;
    }
    //GANA PC
    else {
      document.write(
        `Gana PC! <br>PC eligió: ${convertirJugada(
          PC
        )} vs El jugador eligió: ${convertirJugada(Player)} <br><br>`
      );
      contadorPC++;
    }

    // Mostrar resultados después de cada juego
    alert(
      "Resultado del juego:\n\n" +
        `Se empataron: ${contadorEmpate} juegos\n` +
        `El jugador ganó: ${contadorPlayer} juegos\n` +
        `La PC ganó: ${contadorPC} juegos`
    );
  }

  document.write("Resultados totales: <br>");
  document.write(`Se empataron: ${contadorEmpate} juegos <br>`);
  document.write(`El jugador ganó: ${contadorPlayer} juegos <br>`);
  document.write(`La PC ganó: ${contadorPC} juegos <br>`);
  document.write(`</div>`);
}

// Llamar a la función principal para comenzar el juego
jugar();

// //Version con Funciones - Fco C.
// "use strict";
// // Función para obtener la jugada del Player
// function obtenerJugadaJugador() {
//   return parseInt(prompt("piedra(1), papel(2) o tijera(3)"));
// }

// // Función para obtener la jugada de PC
// function obtenerJugadaComputadora() {
//   return Math.floor(Math.random() * 3) + 1;
// }

// // Función para convertir el número de jugada a su representación textual
// function convertirJugada(jugada) {
//   switch (jugada) {
//     case 1:
//       return "PIEDRA";
//     case 2:
//       return "PAPEL";
//     case 3:
//       return "TIJERA";
//     default:
//       return "Invalida";
//   }
// }

// let contador = 0;

// // Función principal del Juego
// function jugar() {
//   let juegos = parseInt(prompt("Cuantos juegos vas a jugar?")); // Cantidad de partidas
//   document.write(`<div class="container text-start">`);

//   let contadoEmpate = 0; // variable para contar el empate
//   let contadorPlayer = 0; // variable para contar cuanto gano el Player
//   let contadorPC = 0; // variable para contar cuanto gano la PC

//   for (let i = 0; i < juegos; i++) {
//     document.write(`Juego: ${i + 1} <br>`); //juego actual

//     let Player = obtenerJugadaJugador(); // llama a la funcion y guarda su valor en la variable
//     let PC = obtenerJugadaComputadora(); // llama a la funcion y guarda su valor en la variable

//     //EMPATE
//     if (Player === PC) {
//       document.write(
//         `Empate El jugador eligió: ${convertirJugada(
//           Player
//         )} vs PC eligió: ${convertirJugada(PC)} <br><br>`
//       );
//       contadoEmpate++;
//     }
//     //GANA JUGADOR
//     else if (
//       (Player === 1 && PC === 3) ||
//       (Player === 2 && PC === 1) ||
//       (Player === 3 && PC === 2)
//     ) {
//       document.write(
//         `Gana el Jugador! <br> El jugador eligió: ${convertirJugada(Player)}
//         vs PC eligió: ${convertirJugada(PC)} <br><br>`
//       );
//       contadorPlayer++;
//     }
//     //GANA PC
//     else {
//       document.write(
//         `Gana PC! <br>PC eligió: ${convertirJugada(
//           PC
//         )} vs El jugador eligió: ${convertirJugada(Player)} <br><br>`
//       );
//       contadorPC++;
//     }
//   }

//   document.write("se empato: " + contadoEmpate);
//   document.write("player gano: " + contadorPlayer);
//   document.write("PC gano: " + contadorPC);
//   document.write(`</div>`);
// }

// // Llamar a la función principal para comenzar el juego
// jugar();

// Version sin Funciones - Fco C.
// "use strict";
// let juegos = parseInt(prompt("Cuantos juegos vas a jugar?"));
// // document.write(`<div class="container text-start">Juegos: ${juegos}`);
// document.write(`<div class="container text-start">`);

// for (let i = 0; i < juegos; i++) {
//   let Player = parseInt(prompt("piedra(1), papel(2) o tijera(3)"));
//   let PC = Math.floor(Math.random() * 3) + 1;

//   document.write(`Juego: ${i + 1} <br>`);

//   //EMPATE
//   if (Player === 1 && PC === 1) {
//     Player = "PIEDRA";
//     PC = "PIEDRA";
//     document.write(
//       `Empate El jugador eligio: ${Player} vs PC eligio: ${PC} <br><br>`
//     );
//   } else if (Player === 2 && PC === 2) {
//     Player = "PAPEL";
//     PC = "PAPEL";
//     document.write(
//       `Empate El jugador eligio: ${Player} vs PC eligio: ${PC} <br><br>`
//     );
//   } else if (Player === 3 && PC === 3) {
//     Player = "TIJERA";
//     PC = "TIJERA";
//     document.write(
//       `Empate El jugador eligio: ${Player} vs PC eligio: ${PC} <br><br>`
//     );
//   }

//   //GANA JUGADOR
//   else if (Player === 1 && PC === 3) {
//     Player = "PIEDRA";
//     PC = "TIJERA";
//     document.write("Gana el Jugador! <br>");
//     document.write(`El jugador eligio: ${Player} vs PC eligio: ${PC} <br><br>`);
//   } else if (Player === 2 && PC === 1) {
//     Player = "PAPEL";
//     PC = "PIEDRA";
//     document.write("Gana el Jugador! <br>");
//     document.write(`El jugador eligio: ${Player} vs PC eligio: ${PC} <br><br>`);
//   } else if (Player === 3 && PC === 2) {
//     Player = "TIJERA";
//     PC = "PAPEL";
//     document.write("Gana el Jugador! <br>");
//     document.write(`El jugador eligio: ${Player} vs PC eligio: ${PC} <br><br>`);
//   }

//   //GANA PC
//   else if (PC === 1 && Player === 3) {
//     PC = "PIEDRA";
//     Player = "TIJERA";
//     document.write("Gana PC! <br>");
//     document.write(`PC eligio: ${PC} vs El jugador eligio: ${Player} <br><br>`);
//   } else if (PC === 2 && Player === 1) {
//     PC = "PAPEL";
//     Player = "PIEDRA";
//     document.write("Gana PC! <br>");
//     document.write(`PC eligio: ${PC} vs El jugador eligio: ${Player} <br><br>`);
//   } else if (PC === 3 && Player === 2) {
//     PC = "TIJERA";
//     Player = "PAPEL";
//     document.write("Gana PC! <br>");
//     document.write(`PC eligio: ${PC} vs El jugador eligio: ${Player} <br><br>`);
//   }
// }

// document.write(`</div>`);
