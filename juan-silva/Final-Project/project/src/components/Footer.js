import './Footer.css';
import fb from '../assets/facebook.png';
import ig from '../assets/instagram.png'

function Footer() {
    return (
      <footer className="about">    
          <section>
            <h2>Poke-Globant</h2>
            <h3>Explore</h3>
            <ul>
                <li>API Pokemon</li>
                <li>Frequent questions</li>
                <li>PokeGlobant</li>
            </ul>
          </section>
          <section>
            <h3>About</h3>
            <ul>
                <li>Contact us</li>
                <li>Support</li>
                <li>Terms of use</li>
            </ul>
            <h6>©2022 PokeGlobant. ©1997 - 2022 Silva Dev. TM, ®Globant.</h6>
          </section>
          <section>
            <h3>Follow us!</h3>
            <ul>
                <li><img src={fb} alt='facebook'/></li>
                <li><img src={ig} alt='instagram'/></li>
            </ul>
          </section>
      </footer>
    );
}

export default Footer;