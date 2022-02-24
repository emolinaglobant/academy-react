import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import './DetailsTask.css';

const DetailTask = () => {
    const state = useSelector(state => state.taskDetail);
    
    return (
        <div>
            {state.map((taskDetail)=>{
            return <section key={taskDetail.id} className="containerDetails">
                    <h2>{taskDetail.title}</h2>
                    <p>{taskDetail.description}</p>
                </section>
            })}
            <Link to="/" className='btnHome'>inicio</Link>
        </div>
    );
};

export default DetailTask;