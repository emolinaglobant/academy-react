import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";
import Player from "../containers/Player";
import Layout from "../components/Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/player/:id" element={ <Player /> } />
        <Route path="*" element={ <NotFound /> }/>
      </Routes>
    </Layout>
  </BrowserRouter>
)

export default App;