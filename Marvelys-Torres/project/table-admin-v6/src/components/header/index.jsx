import "./index.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      aria-label="app title restaurant admin"
      data-testid="header"
      className="header-style"
      onClick={() => navigate("/")}
    >
      <section>Restaurant Admin</section>
    </header>
  );
};
