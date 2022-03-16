import React from "react";
import { useAuth } from "../context/authContext/AuthContext";
import { Navigate } from "react-router-dom";
import SpinnerLoading from "./SpinnerLoading";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <SpinnerLoading />;
  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
