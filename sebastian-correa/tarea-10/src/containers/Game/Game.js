import "./Game.css";
import GameHeader from "../../components/GameHeader/GameHeader";
import MovieInput from "../MovieInput/MovieInput";
import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentMovieIndex: 0, lives: 3, points: 0, gameLost: false, gameWon: false };
  }

  checkIfGameEnded = () => {
    if (this.state.points === (movies.length - (3 - this.state.lives))) {
      this.state.gameWon = true;
    } else if (this.state.lives === 0) {
      this.state.gameLost = true;
    }
    return (this.state.gameLost || this.state.gameWon);
  }

  resetGame = () => {
    if (this.state.gameWon) {
      alert("Congratulations, you won!");
    } else {
      alert("You lost, try again.")
    }
    this.setState({ currentMovieIndex: 0, lives: 3, points: 0, gameLost: false, gameWon: false });
  }

  validateAnswer = (inputData) => {
    let playerAnswer = inputData.toLowerCase();
    if (playerAnswer === movies[this.state.currentMovieIndex].title) {
      let newMovieIndex = this.state.currentMovieIndex < movies.length - 1? ++this.state.currentMovieIndex : this.state.currentMovieIndex;
      this.setState({ currentMovieIndex: newMovieIndex, points: ++this.state.points });
    } else {
      this.setState({ currentMovieIndex: ++this.state.currentMovieIndex, lives: --this.state.lives });
    }
    if (this.checkIfGameEnded()) {
      this.resetGame();
    }
  }

  render() {
    return (
      <main className="game">
        <article>
        <GameHeader lives={this.state.lives} points={this.state.points}></GameHeader>
        <MovieInput movie={movies[this.state.currentMovieIndex]} validateAnswer={this.validateAnswer}></MovieInput>
        </article>
      </main>
    );
  }
}

const movies = [
  { emojis: "🚗💨😡", title: "fast and furious" },
  { emojis: "🦁👑", title: "the lion king" },
  { emojis: "🔎🐟", title: "finding dory" },
  { emojis: "🚢🧊☠️", title: "titanic" },
  { emojis: "🕷️🤷🏻‍♂️➡️🧑🏻🕸️", title: "spiderman" },
  { emojis: "🐧🎶🦶", title: "happy feet" },
  { emojis: "🐺🗽💰", title: "the wolf of wall street" },
  { emojis: "👦🏻🍫🏭", title: "charlie and the chocolate factory" },
  { emojis: "🙍🏻‍♂️👐🏻✂️", title: "edward scissorhands" },
  { emojis: "🐢🐢🐀🐢🐢", title: "teenage mutant ninja turtles" },
];

export default Game;
