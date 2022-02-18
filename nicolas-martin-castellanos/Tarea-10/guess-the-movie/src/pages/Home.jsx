import React, { useState } from 'react';
import './Styles/Home.css';

function Home(props) {
    const series = [
        {
            emoji : "🚗💨😡",
            name : "rapido y furioso",
        },
        {
            emoji : "ㅤ🔍🐠",
            name : "buscando a nemo",
        },
        {
            emoji : " ㅤ🧊🛳️",
            name : "titanic",
        },
    ]
    const [texto, setTexto] = useState("");
    const [points, setPoints] = useState(0);
    const [lifes, setVidas] = useState(3);
    const [nivel, setNivel] = useState(0);

    const handleInput = (event) =>{
        setTexto(event.target.value);
    }
    const guest = () => {
        if(series[nivel].name === texto) {
            setPoints(points + 1);
            setNivel(nivel + 1);
        }else{
            
            if(lifes > 0){
                setVidas(lifes - 1);
            }
        }
    }
    return (
        <div className="body">
            <section className='lifes'>
            <h1>Lifes: {lifes}</h1>
            </section>
            <section className='points'>
            <h1 className='points'>Points: {points}</h1>
            </section>
            
                
            { nivel > 2 ?
                <section className='Winner'>
                <h1>YOU WIN</h1>
                </section>
                :
                <div>
                    <div className='emojis'>
                    <h1>{series[nivel].emoji}</h1>
                    </div>
                    <div className='title'>
                    <h1>GUESS THE MOVIE</h1> 
                    </div>
                    <input className='barra' type="text" placeholder="Adivina la serie" onChange={(event) => handleInput(event)}/>
                    <button className='Button' onClick={() => guest()}> SEND </button>
                </div>
            }
        </div>
    );
}
export default Home;