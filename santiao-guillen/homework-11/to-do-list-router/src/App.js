import Navegation from './Components/Navegation';
import './App.css';

const App = () => {
    return (
      <main>
        <header>
          <h1>to do list</h1>
        </header>
        <article>
          <p className='information'>Click on the task to display the content</p>
          <Navegation />
        </article>
      </main>
    );
};

export default App;
