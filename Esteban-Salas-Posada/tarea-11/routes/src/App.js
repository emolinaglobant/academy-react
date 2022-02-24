import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Task from './components/Task';

function App() {

  const index = [1,2,3,4,5,6,7,8,9,10]
  const descriptions = ['We worked in a Magazine!!',
                        'We worked in a form using A11Y!!',
                        'We worked in three Katas',
                        'We did a calculator',
                        'We worked in a puzzle',
                        'Strategy pattern',
                        'We worked JEST',
                        'We created a react app and a react native app using expo',
                        'We did a magazine using a react app',
                        'Guess the movie']
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bootcamp Task</h1>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" />
            {
              index.map( (value, key)=>{
                  return <Route key={key} path={`/task${value}`} element={ <Task title={`Task ${value}`} description={`${descriptions[key]}`}/> } />
              } )
            }
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
