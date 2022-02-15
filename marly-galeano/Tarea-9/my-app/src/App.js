import './App.css';

function App() {
  return (
    

    <main>
        <article id="coverMagazine">
            <header>
                <h1>vogue</h1>
            </header>

            <article className="left">
                <article>
                    <header>
                        <h2>BEAUTY</h2>
                        <h2 className="text-italic text-blue">NEWS</h2>
                    </header>
                    <h4 className="text-italic text-bold space">HEAVENLY BODIES</h4>
                    <p>HOW TO TRAIN<br />LIKE AN OLYMPIAN</p>
                    <h4 className="text-italic text-bold space">BORN TO RUN</h4>
                    <p>HOW TO TRAIN <br /> LIKE AN OLYMPIAN</p>
                </article>
                <article>
                    <header>
                        <h2 className="text-italic text-blue space">FASHION</h2>
                        <h2>NEWS</h2>
                    </header>
                    <h3 className="text-red text-bold">PLUS</h3>
                    <p>THE SEASON'S <br /> ESSENTIAL <br /> ACCESORIES</p>
                </article>
            </article>

            <aside className="right">
                <aside className="text-right">
                    <h2>ORIGINAL</h2>
                    <h2>VERSION</h2>
                </aside>
                <aside className="text-center">
                    <p>It's Rihanna's <br />World</p>
                </aside>
            </aside>
        </article>

    </main>
  
  );
}

export default App;