import logo from'./assets/logo.png';
import barcode from './assets/barcode.jpg';
import ns from './assets/ns.png'
import './App.css';

function App() {
  return (
    <main>
      <section className="container">
        <article className="magazine">
          <section className="magazine-content">
            <header className="magazine-header">
              <nav className="header-title">
                <ol>
                    <li>NINTENDO SWITCH | POKEMON GO | REVOLUTION</li>
                </ol>
              </nav>
              <figure>
                <img src={logo} alt="Main logo"/>
                <figcaption className="header-title">
                    <h3>THE OFFICIAL MAGAZINE</h3>
                </figcaption>
              </figure>
              
            </header>
            <section className="magazine-column">            
              <section className="main-title">
                  <span>DETECTIVE PIKACHU</span>
              </section>
              <section className="subtitle">
                  <span>CLUES</span> <br/>
                  <span>EXPLORE</span> <br/>
                  <span>CATCH !</span>
              </section>
            </section>
            <aside className="ad">
              <figure>
                <figcaption>Buy It Now !!!</figcaption>
                <img src={ns} alt="NintendoSwitch Pikachu Edition"/> 
              </figure>
            </aside>
            <footer className="codebar">
              <figure>
                <img src={barcode} alt="BarCode Magazine"/>
                <figcaption>ISSUE 15 - JAN 2022 | $10.99</figcaption>
              </figure>
            </footer>
          </section>
        </article>
      </section>        
    </main>
  );
}

export default App;
