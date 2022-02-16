import "./MovieInput.css";
import React from "react";

class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playerAnswer: "" };
  }

  handleClick = () => {
    this.props.validateAnswer(this.state.playerAnswer);
    this.setState({ playerAnswer: "" })
  }

  updatePlayerAnswer = (event) => {
    this.setState({ playerAnswer: event.target.value });
  }

  render() {
    return (
      <section className="movie-container">
        <p className="game-title">Guess the movie</p>
        <p className="emojis">{this.props.movie.emojis}</p>
        <section className="input-container">
          <input type="text" name="movie-name" id="movie-name" value={this.state.playerAnswer} onChange={this.updatePlayerAnswer} />
          <button className="send-btn" onClick={this.handleClick}>
            Send
          </button>
        </section>
      </section>
    );
  }
}

export default MovieInput;
