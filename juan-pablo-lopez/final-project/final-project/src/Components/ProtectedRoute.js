import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) return <Link to="/login" />;

  return <>{children}</>;
}