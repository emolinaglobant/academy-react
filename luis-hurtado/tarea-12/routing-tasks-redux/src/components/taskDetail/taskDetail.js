import meeseek from "../images/meeseek.png"
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import "../taskDetail/taskDetail.css"


const mapStateToProps = (state) => {
    return {
      tasks: state,
    };
};  


const TaskDetail = (props) => {
    

    let {id} = useParams();

    const task = props.tasks?.find((task) => task.id === +id);

    return(
        <main>
            <ul>
                {props.tasks && (
                    <article className="detailTask" >
                        <section>
                            <h3>Title: {task.title}</h3>
                            <p>Description: {task.description}</p>
                        </section>
                        <img src={meeseek} className="meeseek" alt="meeseek" />  
                    </article>
                )} 
            </ul>          
        </main>
    )
}
export default connect(mapStateToProps)(TaskDetail);

