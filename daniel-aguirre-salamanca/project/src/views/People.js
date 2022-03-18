import { useState} from "react";
import Modal from "../components/UI/Modal";
import Elements from "../components/Elements";
import lightSaber from "../assets/light-saber.png";
import { useSelector } from "react-redux";

const People = () => {
  const [showModal, setShowModal] = useState(false);
  const [person, setPerson] = useState(undefined);
  const data = useSelector(state => state.data.people);
  const convertToList=(item)=>{
    const formatItem = {Name: item.name, Height: item.height + " cm", Mass: item.mass + " kg", "Hair color": item.hair_color}
    return Object.entries(formatItem)
  }
  return (
    <section>
      <Elements total={data.length}>
        {data.map((people, index) => (
          <ul className="items" key={index}>
            {people.results.map((person,index) => (
              <li key={index} className="item"
                onClick={() => {
                  setShowModal(true);
                  setPerson(convertToList(person));
                }}
              >{person.name}<img src={lightSaber} width="80" height="80"/></li>
            ))}
          </ul>
        ))}
      </Elements>   
      <Modal
        showModal={showModal}
        itemList={person}
        onCloseModal={() => {
          setShowModal(false);
        }}
      />
    </section>
  );
};

export default People;
