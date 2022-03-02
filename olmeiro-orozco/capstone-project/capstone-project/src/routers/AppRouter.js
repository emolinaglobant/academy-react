import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { login } from "../actions/auth";
import { AuthRouter } from "./AuthRouter";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setchecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setchecking(false);
    });
  }, [dispatch, setchecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Por favor espere...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <AuthRouter />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
