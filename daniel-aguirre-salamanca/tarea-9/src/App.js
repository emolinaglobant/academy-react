import qrImage from "./assets/qr.png";
import "./App.css";

function App() {
  return (
    <main class="container">
      <article class="magazine">
        <header class="magazine__header">
          <h2>THE</h2>
          <h1>BUSINESS</h1>
          <h2>MAGAZINE</h2>
        </header>
        <section class="magazine__content">
          <ul class="magazine__ideas">
            <li class="magazine__idea">
              <h3>
                MAKE YOUR <br />
                NEW IDEA
              </h3>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li class="magazine__idea">
              <h3>
                MEET THE <br />
                REAL LEADER
              </h3>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li class="magazine__idea">
              <h3>
                STEP UP <br /> YOUR BUSINESS
              </h3>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
          <article class="magazine__main">
            <h2>
              YOUR WAY <br />
              TO SUCCESS
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit.
            </p>
          </article>
          <figure>
            <time datetime="2028-05-02">ISSUE 02 - MAY 2028</time>
            <img src={qrImage}/>
          </figure>
        </section>
      </article>
    </main>
  );
}

export default App;
