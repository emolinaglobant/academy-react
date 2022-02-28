import './Done.css';
function Done(list){
    return(

        <div>
            {list.todos.map((todo,index)=>
                todo.isDone&&
                <li key={index}>
                    {todo.task}
                    {console.log("entraaa")}
                    <button className='delete' onClick={()=>list.deleteTask(index)}>❌</button>
                </li>
            )}
        </div>
    );
}
export default Done;