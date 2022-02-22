import { useParams } from "react-router-dom"
import NavBar from './NavBar';
export default function ContentTask({data}) {
    const {id} = useParams();
    console.log(id)
    return(
        <>
        <NavBar data={data}/>
        <article className="container__article">
            <h1>
                Task: {data[id].nameTask}
            </h1>
            <img src={data[id].taskImg}  alt={data[id].nameTask} />
            </article>
        </>
    )
}