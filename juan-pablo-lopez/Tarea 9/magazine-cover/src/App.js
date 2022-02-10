import barcode from './img/barcode.PNG';
import './css/App.css';


function App() {
  return (
    <main class="grid-container">
        <header class="grid-tittle">
            <h1>NOISE</h1>
        </header>  
        <section class="grid-deck" >
            <h2>FASHION AND TRAVEL MAGAZINE</h2>
        </section>
        <article class="grid-article" >
            <section> 
                <p><span class="span_text">OVID MODITAE</span>CTOTATI ONSEDIST LIQUUNT</p>
            </section> 
        </article>
        <article class="grid-lead-article-line" > 
            <section>
                <p><span class="span_text">STYLE ALITAE MUS AUT</span>Aliquod igmin cuptat</p> 
            </section>
        </article>
        <aside class="grid-suporting-overlines" >
            <section>
                <p> ANDAM DOLUPTA<span class="span_text">SEDITA IUNT CUENTEM</span>LOAK ANDAM OPIM </p>
            </section>
        </aside>
        <footer class="grid-footer">
            <figure class="grid-website-link" >
                <img src={barcode} alt="barccode"/>
            </figure>
            <section>
                <p>TRAVEL SOLLABO</p> 
                <p>Laboratoire SolLabo Inc is in Terrebonne.</p>
            </section>
        </footer>
    </main>
  );
}

export default App;
