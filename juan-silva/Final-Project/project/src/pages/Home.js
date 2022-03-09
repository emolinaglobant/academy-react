import './Home.css';
import prof from '../assets/prof.png';
import ScrollReveal from 'scrollreveal';
import React, { useState } from 'react';
import bulbasur from '../assets/poke1.png';
import charmander from '../assets/poke2.png';
import squirtle from '../assets/poke3.png'

function Home(data) {
  const [inputValue,setInputValue]=useState('');
  
	ScrollReveal().reveal('.greeting', {  delay: 500, useDelay: 'onload',
  reset: true, })

  const  handleInputChange = (event) => {
    setInputValue(event.target.value)
   }
  const changeName=(event) =>{
    if (event.key === 'Enter') {
      data.setName(event.target.value);
      setInputValue('');
    }
  }
  const choosePokemon =(name)=>{
    data.setPokemon(name);
  }

  return (
    <article className="homepage">
      <h1>Welcome to the world of Pokémon! </h1>
      <section className='content'>
        <section>
          <h2 >Hello {data.name}</h2>
          <figure >
            <img id='prof' src={prof} alt='Prof Oak'/>
          </figure>
        </section>
        <section>
          <p className='greeting'>
            My name is Oak! People call me the Pokémon Prof! 
            This world is inhabited by creatures called Pokémon! 
            For some people, Pokémon are pets. Other use them for fights. 
            Myself… I study Pokémon as a profession. First, what is your name?
          </p>
          <input className='inputName' placeholder="What's your name?"value={inputValue} onChange={handleInputChange} onKeyPress={changeName} type='text'/>
        </section>
        
      </section>
      <hr/>
      <span>Now, {data.name}, which Pokémon do you want?</span>
      <ul className='list-pokemons'>
        <li>
          <a  onClick={()=>choosePokemon("Bulbasur")}><img id='bulbasur'src={bulbasur}/></a>
        </li>
        <li>
          <a  onClick={()=>choosePokemon("Charmander")}><img id ='charmander'src={charmander}/></a>
        </li>
        <li>
          <a  onClick={()=>choosePokemon("Squirtle")}><img id ='squirtle'src={squirtle}/></a>
        </li>
      </ul>
      <span id="last">
        Your adventure starts with: {data.pokemon}
      </span>
        
    </article>
    
  );
}

export default Home;
