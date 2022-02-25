import { useNavigate } from "react-router-dom";
import './ListTask.css';

const ListTask = ({data}) => {
    const navigate = useNavigate();
    const getTaskId = (id) => navigate(`/detailTask/${id}`); 

    return (
        <article>
            <section className='sectionTask'>
                <h2>your homeworks</h2>
                <div className="scroll">
                    {data.map((value) => {
                        return <div className='task' key={value.id}>
                            <p>{value.title}</p>
                            <button className="btnDetail" onClick={() => getTaskId(value.id)}>Show Details</button>
                        </div>
                    })}
                </div>
            </section>
        </article>
    );
};

export default ListTask;