import ContentTask from '../components/contentTask';
import Nav from '../components/navbar';
import taskTenImg from '../img/taskTen.png';

export default function taskThree() {
    return (
        <>
            <Nav/>
            <ContentTask task="Ten" imgTask={taskTenImg} descriptionImg={"Task Ten"} />      

        </>
    );
}