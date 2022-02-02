import { Juego } from "./juego.js";

const JUEGO = () => {
  Juego.iniciar();
};

const iniciarJuego = document.getElementById("iniciarJuego");

iniciarJuego.addEventListener("click", JUEGO);
