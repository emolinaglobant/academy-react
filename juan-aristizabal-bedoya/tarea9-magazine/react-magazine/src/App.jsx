import imgDog from './img/perro3.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
     <header class="header">
      <h1 class="main_title">BARK</h1>
      <p>the dog culture magazine</p>
    </header>
    
    <main>
      <article class="globalContainer">
      
        <section class="globalContainer_left_right">
          <section>
            <h4 class="backtitle">DIG DEEPER</h4>
            <p class="blackbold_font">Alexandra Horowitz</p>
            <p class="blackbold_font">Speaks Up</p>
            <p class="graybold_font">Sleuth Spaniel</p>
            <p class="blackbold_font">Making Dogs Happy</p>
            <p class="graybold_font">MUTTS tunrs 25!</p>
            <p class="blackbold_font">Lynda Barry</p>
            <p class="graybold_font">Dogs MD</p>
          </section>
          <section>
            <h2 class="title2">LUXE</h2>
            <p class="thin-font">
              HOME <br />
              STAYS
            </p>
          </section>
        </section>

       

        <section class="globalContainer_left_right">
          <section>
            <h4 class="backtitle">THE ART</h4>
            <p class="blackbold_font">OF CANINES:</p>
            <p class="blackbold_font">
              Extraordinary <br />
              Tales
            </p>
          </section>
          <section>
            <h2 class="title2 colordogs">DOGS</h2>
            <p class="thin-font">TO OUR</p>
            <p class="thin-font">RESCUE</p>
            <figure class="figure">
              <img
                class="img_dog"
                src={imgDog}
                alt="dog picture"
                title="illustrative image of a dog"
              />
            </figure>
          </section>
          <section>
            <p class="thin-font">SEASON'S</p>
            <h2 class="title2">BEST</h2>
            <p class="thin-font">BOOKS</p>
            <p class="graybold_font">PLUS</p>
            <p class="whitebold-font">OUR GIFT GUIDE</p>
            <p class="whitebold-font">& GIVEAWAYS</p>
          </section>
        </section>
      </article>
    </main>
    
    <footer class="header footer_color">Dog is my co-pilot.</footer>
    </div>
  );
}

export default App;
