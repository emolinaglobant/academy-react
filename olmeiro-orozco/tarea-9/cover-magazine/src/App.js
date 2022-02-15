import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <article>
      <header>
        <h1>business</h1>
      </header>

      <section className="date-web">
        <p className="first-paragraph">january 2022/vol. 001</p>
        <p className="second-paragraph">www.businessmagazin.com</p>
      </section>

      <section className="coverphoto">
        <section className="coverphoto__photo">
          <figure>
            <img
              src="./personalPhoto.png"
              alt="Olmeiro personal photo"
            />
          </figure>
          <section className="coverphoto__photo-text">
            <p>
              work hard <br />
              <span>get success</span>
            </p>
          </section>
        </section>

        <section className="coverphoto__section">
          <ul>
            <li>
              <h2>step up your bussiness</h2>
              <p>he has been struggling with HTML all week.</p>
            </li>
            <li>
              <h2>top business planning</h2>
              <p>He has learned a lot about CSS.</p>
            </li>
            <li>
              <h2>meet the leader olmeiro orozco</h2>
              <p>he's noticed an improvement in his skills since he started the program.</p>
            </li>
          </ul>
        </section>
      </section>
      <footer>
        <p>©Derechos Reservados - 2022</p>
      </footer>
    </article>
    </div>
  );
}

export default App;
