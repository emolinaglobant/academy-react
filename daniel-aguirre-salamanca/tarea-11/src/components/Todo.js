const Todo = (props) => {
    let className = "todo__item";
    className += (props.className ? " todo__item--empty" : "");
    return(
        <li className={className}>
            {props.children}
            {!props.className && <button className="delete-todo" onClick={()=>{props.onDelete(props.index)}}><strong>x</strong></button>}
        </li>
    );
};
export default Todo;
