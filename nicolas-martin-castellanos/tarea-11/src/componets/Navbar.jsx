import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <ul>
                <div className='tasks'>
                <a>
                    <Link to="/">PENDING</Link>
                </a>
                </div>
                <div className='inprogress'>
                <a>
                    <Link to="/enprogreso">IN PROGRESS</Link>
                </a>
                </div>
                <div className='realizadas'>
                <a>
                    <Link to="/realizadas">DONE</Link>
                </a>
                </div>
            </ul>
        </div>
    );
}
export default Navbar;