
import "../Films/films.css";

const Pagination = ({previousPage,nextPage,count}) => {

    return (
        <section className="box-buttons">
            <a href="#top"><button className="back" onClick={previousPage}>back</button></a>
            <label>{count}</label>
            <a href="#top"><button className="next" onClick={nextPage}>next</button></a>
        </section>
    );
};

export default Pagination;