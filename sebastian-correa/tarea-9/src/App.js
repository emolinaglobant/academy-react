import magazineBackground from './zuckerberg-testify.jpg';
import './App.css';

function App() {
  return (
    <main className="main-container">
        <section className="top-info">
            <p className="info">DOUBLE ISSUE</p>
            <p className="info">OCT. 25 / NOV. 1, 2021</p>
        </section>

        <article className="magazine-cover">
            <header className="title-container">
                <h1 className="magazine-title">TIME</h1>
            </header>

            <figure className="img-container">
                <img src={magazineBackground} alt="" className="background-img"/>
            </figure>

            <section className="dialog-container">
                <div className="ios-dialog">
                    <div className="text-container">
                        <p className="ios-text">Delete "Facebook"?</p>
                    </div>
                    
                    <div className="btn-container">
                        <div className="btn">
                            <p className="cancel-btn ios-text">Cancel</p>
                        </div>
                        <div className="divider"></div>
                        <div className="btn">
                            <p className="delete-btn ios-text">Delete</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="articles-container">
                <article className="article">
                    <p className="name">INSIDE THE DAMAGE</p>
                    <p className="author">BY BILLY PERRIGO</p>
                </article>

                <article className="article">
                    <p className="name">CHANGE CAN'T WAIT</p>
                    <p className="author">BY ROGER MCNAMEE</p>
                </article>
            </footer>
        </article>

        <section className="bottom-info">
            <p className="info">time.com</p>
        </section>
    </main>
  );
}

export default App;
