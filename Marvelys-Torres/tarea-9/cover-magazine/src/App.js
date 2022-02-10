import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <hr />
        <div
          className="logo"
          role="logo"
          aria-label="logo-heading"
          aria-roledescription="logo-icon"
        >
          <h1>Perú</h1>
        </div>
      </header>
      <header>
        <div
          className="heading"
          role="heading"
          aria-label="heading-title"
          aria-roledescription="heading-name"
        >
          <h1>AYO</h1>
          <header>EL PARAÍSO ESCONDIDO</header>
        </div>
      </header>
      <main className="grid-container">
        <article className="content-1">
          <section className="content-1-1">
            Sus paisajes son tan peculiares como su
            <mark>Nombre.</mark> Este valle se debe a la fundación de dos
            grandes familias: los Aguirre y los Oviedo.
          </section>

          <section className="content-1-2">
            Ven y descubre las maravillas de este hermoso lugar UBICADO EN
            <mark>AREQUIPA</mark>
          </section>

          <section className="content-1-3">
            Aquí encontrarás la laguna de<mark> MAMACOCHA,</mark> esta hermosa
            laguna tiene aguas turquesas y en ellas nutrias!
          </section>
        </article>
        <hr className="break-1" />
        <summary className="credits">
          <header>Autora:</header>
          <p className="credits-1">Marvelys Torres</p>
          <header>Fotografía:</header>
          <p>Javier Zevallos</p>
        </summary>
        <hr className="break-2" />
        <article className="content-2">
          <section className="content-2-1">
            Sus <mark>comidas típicas</mark> son platos que contienen CUY, como
            por ejemplo el pepian con sus torrejas y una buena presa de Cuy
            ChactaO!
          </section>

          <section className="content-2-2">
            Ayo, te invita a vivir las más hermosas aventuras, déjate llevar por
            sus tierras y su gente. TURISMO VIVENCIAL <mark>GARANTIZADO</mark>
          </section>
        </article>
      </main>
      <footer>Enero 17 2022</footer>
    </div>
  );
}

export default App;
