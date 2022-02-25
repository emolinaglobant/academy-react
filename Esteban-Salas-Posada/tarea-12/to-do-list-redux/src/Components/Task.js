import './task.css'
import { removeTask } from './TaskSlice'
export default function Task(props) {
  return (
    <li className="li">
      <section>
        <input type="checkbox"/>
        <p>{props.taskName}</p>
      </section>
        <button className='button' onClick={()=> props.removeTask(removeTask(props.position))}> {props.buttonText} </button>
    </li>
  )
}