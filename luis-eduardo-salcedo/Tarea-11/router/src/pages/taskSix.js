import ContentTask from '../components/contentTask';
import Nav from '../components/navbar';
import taskSixImg from '../img/taskSix.png';

export default function taskThree() {
    return (
        <>
            <Nav/>
            <ContentTask task="Six" imgTask={taskSixImg} descriptionImg={"Task Six"} />      

        </>
    );
}