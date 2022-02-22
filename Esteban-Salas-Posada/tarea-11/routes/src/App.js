import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Task1 from './pages/01/task1';
import Task2 from './pages/02/task2';
import Task3 from './pages/03/task3';
import Task4 from './pages/04/task4';
import Task5 from './pages/05/task5';
import Task6 from './pages/06/task6';
import Task7 from './pages/07/task7';
import Task8 from './pages/08/task8';
import Task9 from './pages/09/task9';
import Task10 from './pages/10/task10';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tareas del Bootcamp</h1>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/'  />
            <Route path='/task1' element={ <Task1/> } />
            <Route path='/task2' element={ <Task2/> } />
            <Route path='/task3' element={ <Task3/> } />
            <Route path='/task4' element={ <Task4/> } />
            <Route path='/task5' element={ <Task5/> } />
            <Route path='/task6' element={ <Task6/> } />
            <Route path='/task7' element={ <Task7/> } />
            <Route path='/task8' element={ <Task8/> } />
            <Route path='/task9' element={ <Task9/> } />
            <Route path='/task10' element={ <Task10/> } />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
