import { Game } from "./game.js";

const GAME = () => {
  Game.init();
};

const startGame = document.getElementById("startGame");

startGame.addEventListener("click", GAME);
