import { useSelector } from "react-redux";
import Todo from "./Todo";
import EmptyMessage from "./EmptyMessage";

const TodoList = ()=>{
    const data = useSelector(state=>state.todos.value);

    return(
    <ul className="todo">
        {data.length > 0 ? data.map((item,index) => <Todo key={index} index={index} name={item.name}/>)
        :<EmptyMessage/>}
    </ul>
    );
};
export default TodoList;