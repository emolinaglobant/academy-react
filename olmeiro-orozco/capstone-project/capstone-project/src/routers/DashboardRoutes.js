import React from 'react'
import { Route, Routes } from "react-router-dom";

import { TriviaRules } from '../components/trivia/TriviaRules';
import { TriviaScreen } from '../components/trivia/TriviaScreen';

export const DashboardRoutes = () => {
  return (
   <Routes>
      <Route path="*" element={<TriviaScreen />} />
      <Route path="rules" element={<TriviaRules />} />
   </Routes>
  )
}
