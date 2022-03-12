import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Rockets from "../pages/Rockets";
import RocketCard from "../components/Rockets/RocketCard";
import Launches from "../pages/Launches";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="rockets/:id" element={<RocketCard />} />
        <Route path="/launches" element={<Launches />} />
      </Route>
    </Routes>
  );
};

export default Routing;
