import { Link } from "react-router-dom";
import { Navbar } from "./styles";

export const Header = () => {
  return (
    <Navbar>
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
    </Navbar>
  );
};
