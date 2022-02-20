import Home from './Home/Home';
import DetailTask from './Components/DetailTask/DetailTask';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailTask/:id" element={<DetailTask />} />
        </Routes>
      </Router>
  );
};

export default App;
