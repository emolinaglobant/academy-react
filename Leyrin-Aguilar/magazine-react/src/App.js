import imgEdna from "./img/edna.png";
import imgBarCode from "./img/BarcoCode.jpg";
import "./App.css";

function App() {
  return (
    <main class="container">
      <article class="container_magazine">
        <header class="title_magazine">EDNA</header>
        <figure>
          <img class="img_principal" src={imgEdna} alt="Artist" />
        </figure>
        <section class="container_first">
          <h3 class="first_txt">SUELTA TODO</h3>
          <p class="first_txt--two">
            UN BESITO Y QUE NADA TE <br />
            DISTRAOGA EL PRESENTE
          </p>
        </section>
        <section class="container_second">
          <h2 class="second_txt">
            ¿SÍ A LAS <br />
            CAPAS?
          </h2>
          <p class="second_txt_two">
            CÓMO LUCIR ESTE LOOK <br />
            SIN MORIR (LITERALMENTE) <br />
            EN EL INTENTO
          </p>
        </section>
        <section class="container_third">
          <h1 class="third_txt">ÚNICA E</h1>
          <h2 class="third_txt--two">IRREPETIBLE</h2>
          <p class="third_txt--three">
            LOS SECRETOS DE EDNA MODA <br />
            PARA SER LA INFLUENCER MÁS <br />
            TOP DEL MUNDO
          </p>
        </section>
        <section class="fourth_container">
          <h3 class="fourth_txt">ESPECIAL</h3>
          <h2 class="fourth_txt--two">SARCASMO</h2>
          <p class="fourth_txt--three">
            CARIÑO, APRENDE A GANAR <br />
            DISCUCIONES COMO UNA 👸
          </p>
          <section class="container_barcode">
            <p class="barcode_txt">
              OH MY <br />
              DISNEY
            </p>
            <figure>
              <img src={imgBarCode} alt="barcode" />
            </figure>
          </section>
        </section>
      </article>
    </main>
  );
}

export default App;
