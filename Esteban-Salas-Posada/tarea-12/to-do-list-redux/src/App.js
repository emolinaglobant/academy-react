import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Task from './Components/Task';
import AddTask from './Components/AddTask';

function App() {


  const tasksList = useSelector(state => state.manageTasks.tasks)
  const dispatch = useDispatch()

  const listTasks = tasksList.map( (value, index) => {
    return <Task key={index} taskName={value} buttonText={'Delete'} removeTask={dispatch} position={index}/>
  } )

  return (
    <>
      <section className='card'>
        <h1>To Do List With Redux</h1>
        <ul>
          {
            listTasks
          }
          <AddTask addTaskApp={dispatch}  />
        </ul>
      </section>
    </>
  );
}

export default App;
