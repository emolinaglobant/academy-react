import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getDetailsId } from '../../Reducer/TaskReducer';
import './ListTask.css';
import { Fragment } from "react";

const ListTask = () => {
    const state = useSelector(state => state.task);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getTaskId = (id) => {
        dispatch(getDetailsId(id));
        navigate(`/detailTask/${id}`);
    }

    return (
        <section className='sectionTask'>
            <h2>your homeworks</h2>
            <div className="scroll">
                {state.map((value, index) => {
                    return <arcticle className='task'>
                        <p key={index}>{value.title}</p>
                        <button className="btnDetail" onClick={() => getTaskId(value.id)}>Show Details</button>
                    </arcticle>
                })}
            </div>
        </section>
    );
};

export default ListTask;