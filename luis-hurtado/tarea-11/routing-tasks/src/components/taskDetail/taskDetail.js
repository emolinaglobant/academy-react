import "../taskDetail/taskDetail.css"
import { useParams } from "react-router-dom"

import meeseek from "../images/meeseek.png"

const TaskDetail = ({tasks}) => {

    let {id} = useParams();

    const task = tasks?.find((task) => task.id === +id);
    
    return(
        <main>
            <ul>
                {task && (
                    <article className="detailTask">
                        <section>
                            <h2>Id: {task.id}</h2>
                            <h3>Title: {task.title} </h3>
                            <p>Description: {task.description}</p> 
                        </section>
                        <img src={meeseek} className="meeseek" alt="meeseek" />
                    </article>
                )}
            </ul>
        </main>
    )
}

export default TaskDetail