import './App.css';
function App() {
   return (
    <body >
    <main>
    <section class="Fondo1">
               <img src="./public/username"  alt=""/>
       </section>
      <div class="contenedor">
        <section id="mensaje"></section>
        <section class="form">
          <form class="login__form">
            <input placeholder="User Name" type="text" id="usuario"/>
            <input placeholder="Password" minlength="6" type="password" id="password" />
            <button type="submit" class="login__button">SIGN IN</button>
          </form>
        </section>
      </div>
    </main>
    <script src="Main.js"></script>
  </body>
   );
}
export default App;