import { Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/taskList/taskList';
import CreateTask from "./components/createTask/createTask";
import TaskDetail from './components/taskDetail/taskDetail';
import "./App.css"


function App() {

   return(
     <main>
        <nav className='navTask' >
          <Link to="/" >Home</Link>
          <Link to="/tasks">Tasks</Link>
        </nav>
        <article className='mainContainer' >
          <Routes>
            <Route 
              path='/' 
              element={<CreateTask/>}
            />
            <Route path='/tasks' element={<TaskList/>}/>
            <Route path='/tasks/:id' element={<TaskDetail/>}/>            
          </Routes>
        </article>
     </main>
   )
} 
export default App;