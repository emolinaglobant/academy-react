import './List.css';
function List(list){
    return(
        <div>
            {list.todos.length===0
            ?<span>Create new task!</span>
            :<div>
            {list.todos.map((todo,index)=>
            todo.isDone===false&&
                <li key={index}>
                    {todo.task}
                    <button className="action"onClick={()=>list.doneTask(index)} >✔</button>
                </li>
            )}
            </div>
            }
        </div>
    );
}
export default List;