import { useDispatch } from 'react-redux';
import { nextPage, previousPage } from '../../Reducer/movieReducer';
import "../Films/films.css";

const Pagination = ({count}) => {
    const dispatch = useDispatch(); 

    return (
        <section className="box-buttons">
            <a href="#top"><button className="back" 
            onClick={() => dispatch(previousPage(count))}>back</button></a>
            <label>{count}</label>
            <a href="#top"><button className="next" 
            onClick={() => dispatch(nextPage(count))}>next</button></a>
        </section>
    );
};

export default Pagination;