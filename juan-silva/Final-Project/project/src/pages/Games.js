import { useState } from 'react';
import './Games.css';
import who from '../assets/who.png'
const url='https://pokeapi.co/api/v2/pokemon-form/';

function Games(data){
    
    const [random,setRandom]=useState('');
    const [picture,setPicture]=useState('');
    const getRandomPokemon=()=>{
        const number=Math.floor(Math.random() * 300) + 1;
        changePicture(number);
        fetch(url+number)
        .then(response=> response.json())
        .then(pokedata=>{
            setRandom(pokedata.name)
        })

    }
    const changePicture=(id)=>{
        if(id<10){
            id.toString();
            setPicture('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00'+id+'.png');
        }
        if(id>9 && id<100){
            id.toString();
            setPicture('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0'+id+'.png');
        }
        if(id>99){
            id.toString();
            setPicture('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+id+'.png');
        }

    }
    return(
        <article className='game-container'>
            <section className='game'>
                <h2>{data.name}!, what pokemon are you??</h2>
                <section className='content-game'>
                    <figure className='pokepicture'>
                        <img src={picture} alt={random}/>
                    </figure>    
                    <span>{random}</span>  
                </section>
                
                <button onClick={getRandomPokemon}>Discover</button>
            </section>
        </article>

    );
}

export default Games;