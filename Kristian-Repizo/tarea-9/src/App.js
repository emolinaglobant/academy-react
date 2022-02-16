import codBarras from './images/codbarrasver.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
    <nav class="container-titles">
      <section class="titles">
        <label>investigacion  y <br /><span>ciencia</span></label>
      </section>
      <section class="titles-f">
        <label>Revista de psicologia y neurociencias</label><br />
        <label><span>Mayo / Junio 2021  N° 108 6,90 $ memorycerebro.es</span></label>
      </section>
    </nav>
    <h1 class="title-main">Mente&Cerebro</h1>
  </header>
  <main>
    <article class="warning-container">
      <section class="warning">
        <label>covid 19</label>
        <p>como vivir<br /> la insertidumbre<br /> con integridad</p>
      </section>
    </article>
    <article>
      <section class="title-article">
        <label>
          <span>La presión <br />del tiempo </span><br />
          Efectos en el trabajo y la salud
        </label>
      </section>
    </article>
  </main>
  <footer>
    <nav class="footer">
      <section>
        <label>
          <span>irracionalidad</span><p>el encanto<br />de lo irracional</p>
        </label>
      </section>
      <section>
        <label>
          <span>animales</span><p>los interiores de su<br />cerebro emocional</p>
        </label>
      </section>
      <section>
        <label>
        <span>cognición</span><p>la organizacion cerebral<br />del pensamiento</p>
        </label>
      </section>
      <figure class="image"><img src={codBarras} alt="codBarras"></img> </figure>
    </nav>
  </footer>
    </div>
  );
}

export default App;
