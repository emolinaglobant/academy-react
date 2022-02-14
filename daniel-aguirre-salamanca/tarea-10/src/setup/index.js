import database from "./database";
const databaseSize = Object.keys(database).length;

// modify lifes and points to win
const gameLifes = 4;
let gameMaxPoints = 5;

gameMaxPoints = Math.min(gameMaxPoints,databaseSize);

export {database, gameLifes, gameMaxPoints};
