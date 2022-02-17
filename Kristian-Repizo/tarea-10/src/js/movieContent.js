import '../css/movieContent.css';
import { useState, useEffect } from 'react';
import ScoreTitle from './ScoreTitle';
import swal from 'sweetalert';


const MovieContent=()=> {

    const movies = [
    {
        name:'rey leon',
        emoji: '👑🦁'
    },{
        name:'rapidos y furiosos',
        emoji: '🚗💨😡'
    },{
        name:'cazafantasmas',
        emoji: '👻🚫'
    },{
        name:'it',
        emoji: '🤡🎈🧒🏻🌧'
    },{
        name:'titanic',
        emoji: '🚢🧊👩‍❤️‍👨'
    },{
        name:'coco',
        emoji: '🧑🏾🎸🎵💀'
    },{
        name:'kung fu panda',
        emoji: '🐼🤛🔥'
    },{
        name:'soy leyenda',
        emoji: '👩🏾‍🦲🐕‍🦺🏙👤'
    }];

    const [nameMovie, setNameMovie] = useState("");
    const [movie, setMovie] = useState(movies[0])
    const [score, setScore] = useState(0);
    const [lifes, setLifes] = useState(3);

    const getNameMovie = (e) => { setNameMovie(e.target.value); }

    const state = () => {
            setMovie(movies[0]);
            setScore(0);
            setLifes(3);
            setNameMovie("");
    }

    useEffect(() => {
        if(lifes === 0) {
            swal({
                button: "OK",
                icon: "error",
                text: "Se acabaron tus intentos!",
                title: "¡¡Perdiste!!",
            });
            state();
        }
        setMovie(movies[score]);
        if(score === 8){
            swal({
                button: "OK",
                icon: "success",
                text: "¡Ganaste!",
                title: "¡¡Felicidades!!",
            });
            state();
        }
    },[score, lifes]);

    const verifyNameMovie = () => {
        if(nameMovie === movie.name) {
            swal({
                button: "OK",
                icon: "success",
                text: "El nombre es correcto!",
                title: "¡¡Correcto!!",
                });    
            setScore(score + 1);
            setNameMovie("");
        } else{
            swal({
                button: "Intentar de nuevo",
                icon: "error",
                text: "El nombre es incorrecto!",
                title: "¡Incorrecto!",
                });
            setLifes(lifes - 1);
            setNameMovie("")
        }
    }

    return (
            <article>
                <header>
                    <ScoreTitle lifes={lifes} score={score} />
                </header>
                <section className='emoji'>
                    {movie.emoji}
                </section>
                <section className='send_input'>

                    <input 
                    className='input' 
                    type='text' 
                    placeholder='Ingrese el nombre de la pelicula' 
                    onChange={getNameMovie} 
                    value={nameMovie}
                    />
                    <button className='button' onClick={verifyNameMovie}>adivinar</button>

                </section>
            </article>
    );
}

export default MovieContent; 