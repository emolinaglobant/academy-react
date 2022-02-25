import { Link , useParams } from 'react-router-dom';
import { getTaskForId } from "../../services/services";
import {useEffect , useState} from 'react';
import './DetailTask.css';

const DetailTask = () => {
    const params = useParams();
    const [taskDetail , setTaskDetail] = useState([]);

    useEffect(async () => {
        const task = await getTaskForId(params.id)
        setTaskDetail(task);
    }, [])
    
    return (
        <div>
            <section className="containerDetails">
                <h2>{taskDetail.title}</h2>
                <p>{taskDetail.description}</p>
            </section> 
            <Link to="/" className='btnHome'>inicio</Link>
        </div>
    );
};

export default DetailTask;