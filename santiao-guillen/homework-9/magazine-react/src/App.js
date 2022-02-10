
import './App.css';
import hexagon from "./images/hexagon.png";

function App() {
  return (
    <div>
    <main class="magazineContainer">
        <section class="backgraundImg" alt="backgraund of page is a picture of elon mosk"></section>
        <header class="containerHeader">
            <section class="sectionBrandName">
                <h2>ceo</h2>
                <p>magazine</p>
                <p>inspiring the business world</p>
            </section>
            <figure>
                <img class="hexagon" src={hexagon} alt="image for backgraund of the section slogan" />
            </figure>
            <section class="sectionSlogan">
                <h3>the</h3>
                <p>tech<br />issue</p>
                <p class="number">30<span>+</span></p>
                <p class="textSlogan">pages on building a workforce for the future</p>
            </section>
        </header>

        <article class="containerArticles">
            <section class="informationLeft">
                <h3>inspire</h3>
                <p>sir james dyson: <br />the #1 secret to his success</p>
                <p>yuval noah harari: <br />education in the age of ai</p>
                <p>dr michio kaku: <br />his vision for tomorrow</p>
                <hr />
            </section>
            <section class="informationRight">
                <h3>from bees to bezos</h3>
                <p>protecting humanking from the rise of the robots</p>
                <hr />
            </section>
        </article>

        <article class="mainTitleSection">
            <h1>elon <br /><span>musk</span></h1>
            <p>the extraordinary corporate disrupter</p>
        </article>
    </main>

    <footer id="sectionFooter">
        <p class="codeMagazine">issn 2002-4401</p>
        <p class="textFooter">and breathe...<br /><span>the world's best spas</span></p>
    </footer>
    </div>
  );
}

export default App;
