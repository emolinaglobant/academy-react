import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
  
import Homework1 from './Homework1';
import Homework2 from './Homework2';
import Homework3 from './Homework3';
import Homework4 from './Homework4';
import Homework5 from './Homework5';

import '../App.css';

const Navegation = () => {
    
    return (
        <Router>
            <nav className="container">
                <ul>
                    <li>
                        <Link className="homework" to="/Homework-1">🧾Homework</Link>
                    </li>
                    <li>
                        <Link className="homework" to="/Homework-2">🧾Homework</Link>
                    </li>
                    <li>
                        <Link className="homework" to="/Homework-3">🧾Homework</Link>
                    </li>
                    <li>
                        <Link className="homework" to="/Homework-4">🧾Homework</Link>
                    </li>
                    <li>
                        <Link className="homework" to="/Homework-5">🧾Homework</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/Homework-1" element={<Homework1 />} />
                <Route path="/Homework-2" element={<Homework2 />} />
                <Route path="/Homework-3" element={<Homework3 />} />
                <Route path="/Homework-4" element={<Homework4 />} />
                <Route path="/Homework-5" element={<Homework5 />} />
            </Routes>   
        </Router>
    );
};

export default Navegation;