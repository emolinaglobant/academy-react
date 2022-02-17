import ContentTask from '../components/contentTask';
import Nav from '../components/navbar';
import taskSevenImg from '../img/taskSeven.png';

export default function taskThree() {
    return (
        <>
            <Nav/>
            <ContentTask task="Seven" imgTask={taskSevenImg} descriptionImg={"Task Seven"} />      

        </>
    );
}