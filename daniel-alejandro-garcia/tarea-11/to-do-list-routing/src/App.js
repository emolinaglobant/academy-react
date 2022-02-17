
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ToDo list Routing</h1>
      <ul>
        <li><Link to="/taskOne">Magazine Cover</Link></li>
        <li><Link to="/taskTwo">Form</Link></li>
        <li><Link to="/taskThree">3 Kata</Link></li>
        <li><Link to="/taskFour">Calculator</Link></li>
        <li><Link to="/taskFive">Slide Puzzle</Link></li>
        <li><Link to="/taskSix">Kata</Link></li>
        <li><Link to="/taskSeven">Login testing</Link></li>
        <li><Link to="/taskEight">Create-react-app y expo</Link></li>
        <li><Link to="/taskNine">Magazine cover with react</Link></li>
        <li><Link to="/taskTen">Guess the movie</Link></li>
        <li><Link to="/taskEleven">Routing</Link></li>
      </ul>
    </div>
  );
}

export default App;
