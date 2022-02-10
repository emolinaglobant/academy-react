
import './css/App.css';
import latin from './img/latin.png';
import codigo from './img/codigo.png';
function App() {
    return (
        <main id="grid-container">
            <header className="grid-container__grid-item">VOGUE</header>
            <article className="grid-container__grid-item">
                <section className="grid-container__grid-item-main">
                    <i className="fa fa-plus"></i>
                    <h2>KAROL G </h2>
                    <h2>GUIDE TO </h2>
                    <h2>BEING A BOSS </h2>
                    <i class="fa fa-minus"></i>
                    <h2>NOTABLE PERSON</h2>
                </section>
            </article>
            <section className="grid-container__grid-item">
                <img src={latin} alt="latin"/>
            </section>
            <footer className="grid-container__grid-item">
                <figure  class="grid-container__grid-item-img-responsive">
                    <img src={codigo} alt="codigo de barras"/>
                </figure>
                <article>
                    <h2>The Next</h2>
                    <h2>Latina</h2>
                    <h2>Queen</h2>
                    <section>
                        <h2 className="grid-container__grid-item-parrafo1">WHY KAROL G IS</h2>
                        <h2 className="grid-container__grid-item-parrafo2">READY TO RULE</h2>
                    </section>   
                </article>
            </footer>
        </main>
    );
}

export default App;
