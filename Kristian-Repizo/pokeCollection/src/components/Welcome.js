import React from 'react';
import { Link } from 'react-router-dom';
import imgWelcome from '../img/log-5.png';
import '../styles/welcome.css';

const Welcome = () => {

    return(
        <article className='container-welcome'>
            <label>Welcome To PokeCollection</label>

            <section className='img-welcome'>
                <img className="image-welcome" src={imgWelcome} alt='' />
            </section>

            <section className='button'>
                <Link to='/Games'>
                    <a href="#!">See Pokemons</a>
                </Link>
            </section>
        </article>
    )
}

export default Welcome;