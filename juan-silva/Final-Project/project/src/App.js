import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <section className="main">
      <Header/>
      <Nav/>
      <section className='content'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </section>
    </section>
    
  );
}

export default App;
