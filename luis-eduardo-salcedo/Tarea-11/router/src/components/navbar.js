import { Link } from "react-router-dom";

export default function NavBar({data}){
    return(
        <>
            <ul>
            {data.map((item, index)=> (
                <li key={index}><Link  className="nav" to={`/${index }`}>{item.nameTask}</Link></li>
            ))}
            </ul>
        </>
    )
}