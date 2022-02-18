import "./App.css";
import logo from "./assets/Rolling_Stone_logo.png";
import referent from "./assets/portada.jpg";

function App() {
  return (
    <div className="App">
      <main className="container">
        <article className="magazine">
          <h2 className="collector">collectors edition</h2>
          <figure>
            <img src={logo} alt="Rolling Stone logo" />
          </figure>
          <h1>NIRVANA</h1>
          <h2 className="firstTxt">la genialidad de kurt cobain</h2>
          <h3>
            cómo una pequeña banda de punk <br />
            se tomó el mundo
          </h3>
          <p>
            'nevermind' el disco que cambió el sonido del rock <br />
            "no quiero ser un maldito portavoz" <br />
            los últimos días de kurt cobain
          </p>
          <h4>tributos de</h4>
          <ul>
            <li>dave grohl</li>
            <li className="dote"></li>
            <li>krist novoselic</li>
            <li className="dote"></li>
            <li>courtney love</li>
            <li className="dote"></li>
            <li>chris cornell</li>
            <li className="dote"></li>
            <li>john fogerty</li>
            <li>iggy pop</li>
          </ul>
          <aside className="info">
            <h4>Colombia</h4>
            <p>
              Edicion N.° 3 <br></br>$ 14.000
            </p>
          </aside>
        </article>
        <article className="referent">
          <figure>
            <img src={referent} alt="referent-magazine" />
          </figure>
        </article>
      </main>
    </div>
  );
}

export default App;
