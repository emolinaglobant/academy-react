
import ContentTask from '../components/contentTask';
import Nav from '../components/navbar';
import taskOneImg from '../img/taskOne.png';

export default function taskOne() {
    return (
        <>
            <Nav/>
            <ContentTask task={"One"} imgTask={taskOneImg} descriptionImg={"task One"}/>
        </>
    );
}