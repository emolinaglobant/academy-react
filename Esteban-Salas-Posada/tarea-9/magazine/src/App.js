import logo from './img/codigo_barras.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="main">
        <article>
            <section className="header">
                <h1 className="header__title">Enchanted</h1>
                <p className="header__subtitle">Beauty and fasion</p>
            </section>
            
            <section className="magazine__parrafo--primero">
                <p >The</p>
                <p >Colors</p>
                <p >For All &</p>
                <p >Winter 2019</p>
            </section>
    
            <section className="magazine__parrafo--sgundo">
                <p>Top ten</p>
                <p>skin-care</p>
                <p>secrets for</p>
                <p>Healthy skin</p>
            </section>
    
            <section className="magazine__parrafo--tercero">
                <p>no-maker</p>
                <p>look is the</p>
                <p>new trend</p>
            </section>
    
            <footer className="footer">
                <section className="magazine__parrafo--cuarto">
                    <p>Accesories</p>
                    <p>that will</p>
                    <p>transform your</p>
                    <p>winter outfit</p>
                </section>
                <section className="footer__img">
                    <img src={logo} alt="codigo de barras"/>
                    <p className="footer__p">By: Esteban Salas</p>
                </section>
            </footer>

        </article>
    </main>  
    </div>
  );
}

export default App;
