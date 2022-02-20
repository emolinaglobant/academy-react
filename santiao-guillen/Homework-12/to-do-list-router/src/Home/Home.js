import Task from '../Components/Task/Task';
import ListTask from '../Components/ListTask/ListTask';

const Home = () => {
    return (
        <article className='containerToDo'>
            <Task />
            <ListTask />
        </article>
    );
};

export default Home;