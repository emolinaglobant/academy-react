import portal from "../assests/portal.png";
import spaceship from "../assests/spaceship.png";
import { HomeContainer, HomeDecoration } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <h1>
        Welcome to Rick and Mortys <br /> Universe
      </h1>
      <h3>Travel with us to meet all the characters in this universe</h3>
      <HomeDecoration>
        <img src={spaceship} alt="rick spaceship" />
        <img src={portal} alt="portal" />
      </HomeDecoration>
    </HomeContainer>
  );
};

export default Home;
