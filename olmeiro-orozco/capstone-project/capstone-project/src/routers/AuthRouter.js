import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <section className="auth__main">
      <section className="auth__box-container">
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />

          <Route path="*" element={<Navigate replace to="/auth/login" />} />
        </Routes>
      </section>
    </section>
  );
};