import logo from "./logo.svg";
import bbc_logo from "./assets/bbc_logo.png";
import moon from "./assets/moon_image.png";
import bar_code from "./assets/bar_code.jpg";
import "./App.css";

function App() {
  return (
    <main className="App">
      <header class="header">
        <img src={bbc_logo} alt="bbc logo" height="28px" />
        <p>WHY LIFE ON EARTH WASN'T AN ACCIDENT</p>
      </header>
      <article class="article__content">
        <header class="article__header">
          <h1>FOCUS</h1>
          <nav class="article__categories">
            <li>SCIENCE</li>
            <li>|</li>
            <li>TECHNOLOGY</li>
            <li>|</li>
            <li>HEALTH</li>
          </nav>
        </header>
        <section class="main__section">
          <h2 class="main__section--text">
            A<br />
            NEW <br />
            RACE TO THE <span>MOON</span> HAS BEGUN
          </h2>
          <figure>
            <img src={moon} alt="moon image" />
          </figure>
        </section>
        <section class="main__paragraph">
          <p class="main__paragraph--text">
            What China's pioneering lunar mission means
            <br />
            for the future of space exploration
          </p>
          <figure>
            <img class="main__paragraph--img" src={bar_code} alt="bar code" />
          </figure>
        </section>
      </article>
      <footer>
        <section class="footer__item">
          <h3>BAD CAREERS ADVICE</h3>
          <p>
            Is it putting young women <br /> off working in science?
          </p>
        </section>
        <section class="footer__item">
          <h3>MIND BLIND</h3>
          <p>
            Inside the condition that leaves <br /> you with no imagination
          </p>
        </section>
        <section class="footer__item">
          <h3>THE END OF ACCENTS</h3>
          <p>
            How modern life is changing
            <br /> the way we speak
          </p>
        </section>
      </footer>
    </main>
  );
}

export default App;
