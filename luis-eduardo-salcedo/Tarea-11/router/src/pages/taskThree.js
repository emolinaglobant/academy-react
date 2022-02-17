import ContentTask from '../components/contentTask';
import Nav from '../components/navbar';
import taskThreeImg from '../img/taskThree.png';

export default function taskThree() {
    return (
        <>
            <Nav/>
            <ContentTask task="Three" imgTask={taskThreeImg} descriptionImg={"Tarea Three"} />      

        </>
    );
}