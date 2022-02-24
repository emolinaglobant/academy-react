import { useState } from 'react';
import { createTask } from '../../Reducer/TaskReducer';
import { useDispatch } from 'react-redux';
import '../../App.css';

const FormTask = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        let id = Math.floor((Math.random() * 10) + 1);
        dispatch(createTask(id, title , description));
        setTitle("");
        setDescription("");
    }

    return (
        <form className='form'>
            <div>
                <label>title task</label>
                <input type="text" name='title' value={title}
                onChange={(e)=> setTitle(e.target.value)} />

                <label>description</label>
                <input name='description' value={description}
                onChange={(e)=> setDescription(e.target.value)} ></input>
            </div>
            <input className='btnAdd' type="button" value="Add Task" onClick={addTask} />
        </form>
    );
};

export default FormTask;