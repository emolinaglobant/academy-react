import React, { Component } from 'react';
import GameDescription from '../components/GameDescription';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import axios from 'axios';

class GameInfoContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gameDescription: "",
            gameName: "",
            gameId: "",
            habitat: "",
            abilities: [],
            moves: [],
            height: "",
            weight: "",
            types: [],
        }
    }

    componentDidMount() {
        //Peticion con axios
        const { match } = this.props;
        const gameId = match.params.gameIndex;
        const gameName = match.params.gameName;
        const gameDescriptionUrl = `${process.env.REACT_APP_GAME_API_BASE_URL}pokemon-species/${gameId}/`;
        this.getStats();

        axios.get(gameDescriptionUrl)
        .then(res => {
            const { flavor_text_entries, habitat } = res.data;

            this.setState({
                gameDescription: flavor_text_entries[9].flavor_text,
                habitat,
                gameName,
                gameId
            })
        })
    }

    getStats() {
        const { match } = this.props;
        const gameId = match.params.gameIndex;
        axios.get(`${process.env.REACT_APP_GAME_API_BASE_URL}pokemon/${gameId}/`)
        .then(res => {
            const { abilities, moves, height, weight, types } = res.data;
            this.setState({
                moves,
                abilities,
                height,
                weight,
                types
            })
        })
    }

    render(){
        let url = `${process.env.REACT_APP_GAME_IMG}`;
        
        const { 
            gameDescription, 
            gameName, gameId, 
            abilities, moves, 
            height, 
            weight, 
            types, 
            habitat 
        } = this.state;

        return(
            <>
                <NavBar />
                <GameDescription 
                    name={gameName} 
                    gameImage={`${url}${gameId}.png?raw=true`} 
                    description={gameDescription}
                    habitat={habitat}
                    abilities={abilities}
                    moves={moves}
                    height={height}
                    weight={weight}
                    types={types}
                />
                <Footer />
            </>
        );
    }
}

export default GameInfoContainer;