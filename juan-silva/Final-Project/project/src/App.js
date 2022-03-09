import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Pokemon from './pages/Pokemon';
import Map from './pages/Map';
import Profile from './pages/Profile';
import Games from './pages/Games';
import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';

function App() {
  const [pokemon,setPokemon]=useState("You haven't choose !");
  const [name, setName] = useState('Glober');
  return (
    <section className="main">
      <Header/>
      <Nav/>
      <section className='container'>
        <Routes>
          <Route exact path="/" element={<Home name={name} setName={setName} pokemon={pokemon} setPokemon={setPokemon}/>}/>
          <Route path='/pokemon' element={<Pokemon name={name}/>}/>
          <Route path='/map' element={<Map name={name}/>}/>
          <Route path='/profile' element={<Profile name={name} setName={setName}/>}/>
          <Route path='/games' element={<Games name={name} />}/>
        </Routes>
      </section>
      <Footer/>
    </section>
    
  );
}

export default App;
