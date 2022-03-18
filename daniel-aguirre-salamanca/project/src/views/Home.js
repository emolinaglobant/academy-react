import { useEffect } from "react";
import { Link } from "react-router-dom";
import babyYoda from "../assets/baby_yoda.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/usersSlice";
import Sign from "../components/Sign/Sign";

const Home = ({ showAlert, location }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    showAlert && alert(`You must sign in first before navigate ${location.slice(1)}`);
  }, [location]);

  const Welcome = (
    <h2 className="home__welcome">
      <button onClick={() => {dispatch(signOut())}}>Sign out <i className="fas fa-sign-out-alt"></i></button>
      <br />
      !Hello {users.currentUser}!<br /><img src={babyYoda} width={500} />
    </h2>
  );
  return (
    <section className="home">
      <section className="home__info">
        <h1>!Welcome to Star Wars Explorer!</h1>
        <p>You can start navigating to the following list of pages!</p>
        <ul>
          <li>
            <Link to="/people">People</Link>
            <br />
            <p>You can get the basic characteristics for all the people in star wars</p>
          </li>

          <li>
            <Link to="/planets">Planets</Link>
            <br />
            <p>You can get the basic characteristics for all the planets in star wars</p>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
            <br />
            <p>You can get the basic stats for all the vehicles in star wars</p>
          </li>
          <li>
            <Link to="/movies">Movies</Link>

            <br />
            <p>You can get a movie resume for all the movies in star wars</p>
          </li>
        </ul>
      </section>

      {users.status == "200" ? Welcome  : <Sign/>}
    </section>
  );
};

export default Home;
