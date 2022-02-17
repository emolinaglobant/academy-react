import { Link } from "react-router-dom";

export default function navBar(){
    return(
        <>
            <ul>
                <li><Link className="nav active" to="/">Home</Link></li>
                <li><Link className="nav" to="/taskOne">taskOne</Link></li>
                <li><Link className="nav" to="/taskTwo">taskTwo</Link></li>
                <li><Link className="nav" to="/taskThree">taskThree</Link></li>
                <li><Link className="nav" to="/taskFour">taskFour</Link></li>
                <li><Link className="nav" to="/taskFive">taskFive</Link></li>
                <li><Link className="nav" to="/taskSix">taskSix</Link></li>
                <li><Link className="nav" to="/taskSeven">taskSeven</Link></li>
                <li><Link className="nav" to="/taskTen">taskTen</Link></li>
            </ul>
        </>
    )
}