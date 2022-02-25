import React, {useState} from 'react'
import './addtask.css'

import { addTask } from './TaskSlice'

export default function AddTask(props) {

  const [textValueInput, setTextValueInput] = useState('')


  function handleOnChangeInput(event){
    setTextValueInput(event.target.value)
  }

  return (
    <li className='li'>
        <input onChange={ handleOnChangeInput } id="textInput" className='input' type='text' placeholder='Add Todo' ></input>
        <button className='button__add' onClick={()=> props.addTaskApp(addTask(textValueInput))} > Add </button>
    </li>
  )
}
