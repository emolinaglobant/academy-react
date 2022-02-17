import ContentTask from '../components/contentTask';
import Nav from '../components/navbar';
import taskFiveImg from '../img/taskFive.png';

export default function taskThree() {
    return (
        <>
            <Nav/>
            <ContentTask task="Five" imgTask={taskFiveImg} descriptionImg={"Task Five"} />      

        </>
    );
}