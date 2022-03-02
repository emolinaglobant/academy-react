import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ isAuth, children }) => {
  return isAuth ? <Navigate to="/" /> : children;
};
