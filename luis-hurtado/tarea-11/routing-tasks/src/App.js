import './App.css';
import {useState} from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import CreateTask from './components/createTask/createTask';
import TaskDetail from './components/taskDetail/taskDetail';
import TaskList from './components/taskList/taskList';

function App() {

  const [tasks, setTasks] = useState([])
  const [taskDescription, setTaskDescription] = useState("")
  const [taskTitle, setTaskTitle] = useState("")

  return (
    <main className="App">
      <nav className='navTask' >
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
      <article className='mainContainer' >
        <Routes>
          <Route path="/" element={
            <CreateTask 
                tasks={tasks}
                taskTitle={taskTitle}
                taskDescription={taskDescription} 
                setTasks={setTasks} 
                setTaskTitle={setTaskTitle}  
                setTaskDescription={setTaskDescription} 
            />}/>
          <Route path='/tasks' element={<TaskList tasks={tasks} setTasks={setTasks}/>}/>
          <Route path='/tasks/:id' element={<TaskDetail tasks={tasks} />}/>
        </Routes>
      </article>
    </main>
  );
} 
export default App;
