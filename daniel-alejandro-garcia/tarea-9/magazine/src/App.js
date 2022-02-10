import code from './img/codigoBarras3.jpg';
import './css/styles.css';

function App() {
  return (
    <article id="container">
        <header>VOGUE</header>
        <main>
            <section>
                <h2>Margot Robbie</h2>
                <p>Fearless, fun, and defying hollywood's expectations</p>
            </section>
            <br/>
            <section>
                <h2>Jill BIDEN</h2>
                <p>on the race of a lifetime</p>
            </section>
        </main>
        <aside>
            <section>
                <h3>fashion's more-is-more season</h3>
                <h2>43</h2>
                <h4>looks</h4>
                <p>to dress up your life!</p>
            </section>
        </aside>
        <footer>
            <figure>
                <img src={code} alt="Código de barras"/>
            </figure>
            <section>
                <h2>be more chill</h2>
                <p>the rise of next-gen ice creams</p>
            </section>
        </footer>
    </article>
  );
}

export default App;
