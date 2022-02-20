import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todosSlice";
import { useNavigate } from "react-router-dom";

const Todo = ({index, name}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const routeChange = (id) =>{ 
        let path = `/${id}`; 
        navigate(path);
      }
    return(
        <li className="todo__item" onClick={()=>{routeChange(index)}}>
            {name}
            {<button className="delete-todo" onClick={(event)=>{dispatch(deleteTodo(index)); event.stopPropagation()}}><strong>x</strong></button>}
        </li>
    );
};
export default Todo;
