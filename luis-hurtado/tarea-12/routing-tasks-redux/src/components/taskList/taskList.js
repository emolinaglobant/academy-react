import { connect } from "react-redux";
import {addTasks, removeTasks} from "../../redux/todoSlice";
import { Link } from "react-router-dom";

import "../taskList/taskList.css"


const mapStateToProps = (state) => {
    return {
      tasks: state,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
      addTask: (obj) => dispatch(addTasks(obj)),
      removeTask: (id) => dispatch(removeTasks(id)),
    };
};
  

const TaskList = (props) => {

    const {removeTask} = props;


    return (
        <main className="taskContainer" >
            <h3>Impostor or Crewmate</h3>
            <ul className="taskList">
                {props.tasks.map((item) => {
                    return (
                        <li>
                            <Link to={`/tasks/${item.id}`} >
                                <h2 className="taskTitle">{item.title}</h2>
                            </Link> 
                            <button className="deleteButton" onClick={() => removeTask(item.id)} >
                                X
                            </button> 
                        </li>    
                )})}
            </ul>
        </main>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);