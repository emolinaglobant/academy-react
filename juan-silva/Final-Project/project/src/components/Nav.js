import './Nav.css';
import { Link } from "react-router-dom";
import pokedex from '../assets/pokedexoff.png';
import ball from '../assets/ball.png';
import map from '../assets/map.png';
import avatar from '../assets/avatar.png';
import home from '../assets/home.png'

function Nav() {
    return (
      <section className="navigation">    
          <ul className='nav-bar'>
              <li>
                <Link id='home' to="/"><img src={home} alt='Home'/></Link>
              </li>
              <li>
                <Link  id='games' to="/games"><img src={pokedex} alt='pokedex'/></Link>
              </li>
              <li >
                <Link id='pokemon' to="/pokemon"><img src={ball} alt='pokeball'/></Link>
              </li>
              <li>
                <Link id='map' to="/map"><img src={map} alt='map'/></Link>
              </li>
              <li>
                <Link id='avatar'to="/profile"><img src={avatar} alt='profile'/></Link>
              </li>
          </ul>
          
      </section>
    );
}

export default Nav;