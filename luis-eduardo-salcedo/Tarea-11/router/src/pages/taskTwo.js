import ContentTask from '../components/contentTask';
import Nav from '../components/navbar';
import taskTwoImg from '../img/taskTwo.png';

export default function taskTwo() {
    return (
        <>
            <Nav/>
            <ContentTask task="Two" imgTask={taskTwoImg} descriptionImg={"Tarea Two"} />      

        </>
    );
}