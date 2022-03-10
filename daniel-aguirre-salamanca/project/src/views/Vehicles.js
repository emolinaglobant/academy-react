import { useState } from "react";
import Elements from "../components/Elements";
import Modal from "../components/UI/Modal";
import spacecraft from "../assets/spacecraft.png";
import { useSelector } from "react-redux";

const Vehicles = () => {
  const data = useSelector(state => state.data.vehicles);
  const [showModal, setShowModal] = useState(false);
  const [vehicle, setVehicle] = useState(undefined);
  
  const convertToList=(item)=>{
    const formatItem = {Name: item.name, Model: item.model, Manufacturer: item.manufacturer, "Cargo capacity": item.cargo_capacity}
    return Object.entries(formatItem)
  }
  return (
    <section>
      <Elements total={data.length}>
        {data.map((vehicles, index) => (
          <ul key={index} className="items">
            {vehicles.results.map((vehicle, index) => (
              <li key={index} className="item"
                onClick={() => {
                  setShowModal(true);
                  setVehicle(convertToList(vehicle));
                }}
              >
                {vehicle.name}
                <img src={spacecraft} width={100} height={100} />
              </li>
            ))}
          </ul>
        ))}
      </Elements>
      <Modal
        showModal={showModal}
        itemList={vehicle}
        onCloseModal={() => {
          setShowModal(false);
        }}
      />
    </section>
  );
};
export default Vehicles;
