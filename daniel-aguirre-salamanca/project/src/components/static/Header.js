import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as LogoStarWars } from "../../assets/star-wars_multi.svg";
import { convertToHeaderTitle } from "../../helpers";

const Header = ({location}) => {
  const navPaths = ["/people", "/planets","/vehicles", "/movies"];
  return (
    <header className={styles.header}>
      <Link to="/"><LogoStarWars /></Link>
      <section className={styles.header__nav}>
        {navPaths.map((name, index) => (
       <Link
         key={index}
         to={name}
         className={location == name ? styles["header__nav--active"] : styles["effect-underline"]}
        >
        {convertToHeaderTitle(name)}
       </Link>
        ))}
      </section>
    </header>
  );
};

export default Header;
