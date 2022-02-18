import React, {useState} from 'react';
import '../css/App.css';
import {Lifes} from '../components/lifes';
import {Score} from '../components/score';
import ganador from '../img/ganador.png';
import swal from 'sweetalert';

function App() {
    
    const emojisFilms =[
        {
            emoji: '⛹🏿🐷🐰🦆',
            name:'space jam'
        },
        {
            emoji: '🐀👨‍🍳👩‍🍳🍳',
            name:'ratatouille'
        },
        {
            emoji: '👑🦁',
            name:'the lion king'
        },
        {
            emoji: '😂😁',
            name:'risa'
        },
    ];

    const [inputFilmValue, setInputFilmValue] = useState("");
    const [film, updateFilm] = useState(emojisFilms[0]);
    const [gameLife, updateGameLife] = useState(3);
    const [gameScore, updateGameScore] = useState(0);
    const [iFilm, updateOption] = useState(0);

    const gameFinish = () => {
        if(gameLife <= 1) {
            swal({
                customClass: "alertSwal",
                title:"Se te acabaron las vidas",
                text: `perdiste con un puntaje de ${gameScore}`, 
                icon: 'error',
            });
            updateScreen();
        } 
        if(gameScore >= emojisFilms.length -1) {
            swal({
                customClass: "alertSwal",
                title:"ganaste",
                text: `ganaste con un puntaje de ${gameScore +1}`, 
                icon: ganador,
            });
            updateScreen();
        }
    }

    const handleInputValue = (e) => setInputFilmValue(e.target.value);

    const increaseIFilm = () => {
        updateOption(iFilm + 1);
        updateEmoji();
    }

    const loseLifes = () => updateGameLife(gameLife - 1);
    
    const updateEmoji = () =>  updateFilm(emojisFilms[iFilm + 1]);

    const updateScore = () => updateGameScore(gameScore + 1);                                             
    
    const updateScreen = () => {
        updateGameLife(3);
        updateGameScore(0);
        updateOption(0);
        updateFilm(emojisFilms[0]);
        setInputFilmValue('');
    }
    
    const validateCorrectAnswer = () => {
        let changeToLowerCase = inputFilmValue.toLocaleLowerCase();
        if(changeToLowerCase === emojisFilms[iFilm].name) {
            increaseIFilm();                                       
            updateScore(); 
            setInputFilmValue('');
        } else {
            loseLifes();
        }
        gameFinish();
    }

    return (
        <>
        <article className="container">
            <Lifes gameLifePoints={gameLife}/>
            <Score gamePoints={gameScore}/>
                <section className="container__game">
                <h2 className="game__title">GUESS THE MOVIE</h2>
                <section className="game__emojis">{film.emoji}</section>
                <section className="game__sendInfo">
                    <input type="text" onChange={handleInputValue} value={inputFilmValue}  placeholder="e.g Sing 2"/>
                    <button className="game__button" onClick={validateCorrectAnswer} >Adivinar</button>
                </section>
            </section>
        </article>
        </>
    );
}

export default App;
