import ContentTask from '../components/contentTask';
import Nav from '../components/navbar';
import taskFourImg from '../img/taskFour.png';

export default function taskThree() {
    return (
        <>
            <Nav/>
            <ContentTask task="Four" imgTask={taskFourImg} descriptionImg={"Task Four"} />      

        </>
    );
}