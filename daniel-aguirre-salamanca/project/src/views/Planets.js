import { useState } from "react";
import Elements from "../components/Elements";
import Modal from "../components/UI/Modal";
import {ReactComponent as PlanetSvg} from "../assets/planet.svg";
import { useSelector } from "react-redux";
const Planets = () => {
  const data = useSelector(state => state.data.planets);
  const [showModal, setShowModal] = useState(false);
  const [planet, setPlanet] = useState(undefined);
  
  const convertToList=(item)=>{
    const formatItem = {Name: item.name, Climate: item.climate, Population: item.population, Terrain: item.terrain}
    return Object.entries(formatItem)
  }
  return (
    <section>
      <Elements total={data.length}>
        {data.map((planets, index) => (
          <ul key={index} className="items">
            {planets.results.map((planet, index) => (
              <li key={index} className="item"
                onClick={() => {
                  setShowModal(true);
                  setPlanet(convertToList(planet));
                }}
              >
                {planet.name}
                <PlanetSvg width="100" height="100" opacity={.5}/>
              </li>
            ))}
          </ul>
        ))}
      </Elements>
      <Modal
        showModal={showModal}
        itemList={planet}
        onCloseModal={() => {
          setShowModal(false);
        }}
      />
    </section>
  );
};
export default Planets;
