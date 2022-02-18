import { useState , useEffect } from "react";
import ScoreLifes from "../Score-Lifes/Score-Lifes";
import Message from "../Mesagge/Message";
import '../../App.css';

const InputMovie = () => {

    const movies = [{
        emogi: "🚗💨😡🖐",
        name: "rapidos y furiosos 5",
    },{
        emogi: "🚢🧊👩‍❤️‍👨",
        name: "titanic",
    },{
        emogi: "🐼🤛🔥",
        name: "kung fu panda",
    },{
        emogi: "🕷🤟🕸",
        name: "spider man"
    }];

    const [movie , setMovie] = useState(movies[0]);
    const [movieName , setMovieName] = useState("");
    const [message , setMessage] = useState("");
    const [life , setLifes] = useState(3);
    const [score , setscore] = useState(0);
    const [gameAlert , setGameAlert] = useState(false);

    const getMovieName = (e) => setMovieName(e.target.value);

    const verifyName = () => {

        if (movieName === movie.name) {
            setscore(score + 1);
            setMovieName("");
        } else {
            setLifes(life - 1);
        }
    }

    useEffect(() => {

        if(life === 0) {
            setMessage("Perdiste");
            setGameAlert(true);
            setLifes(3);
        }

        if (score == 3  ) {
            setMessage("¡won!");
            setGameAlert(true);
            setLifes(3);
        }

        setMovie(movies[score]);
    
    },[score , life]);

    const closeAlert = () => {
        setGameAlert(false);
        setLifes(3);
        setscore(0);
    }

    return (
        <>
            <header className="sectionScore">
                <ScoreLifes life={life} score={score} />
            </header>
            <p className="emogi">{movie.emogi}</p>
            <article className="inputMovie">
                <input type="text" onChange={getMovieName} value={movieName} placeholder="guess the name of the movie"/>
                <button onClick={verifyName}>adivinar</button>
            </article>
            {(gameAlert) ?
            <Message alert={closeAlert} message={message} score={score} /> 
            : null
            }
        </>
    );
};

export default InputMovie;