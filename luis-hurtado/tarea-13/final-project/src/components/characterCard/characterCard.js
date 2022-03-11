import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";
import { CardDetail } from "./styles";

export const CharacterCard = () => {
  const { characters } = useContext(CharacterContext);

  let { id } = useParams();

  const character = characters?.find((character) => character.id === +id);

  return (
    <CardDetail>
      {characters && (
        <article key={character.id}>
          <img src={character.image} alt="character" />
          <h3>{character.name}</h3>
          <h3>Gender: {character.gender}</h3>
          <h3>Origin: {character.origin.name} </h3>
          <h3>Location: {character.location.name} </h3>
          {(() => {
            if (character.status === "Dead") {
              return <div className="DeadStatus">{character.status}</div>;
            } else if (character.status === "Alive") {
              return <div className="AliveStatus">{character.status}</div>;
            } else {
              return <div className="UnknownStatus">{character.status}</div>;
            }
          })()}
        </article>
      )}
    </CardDetail>
  );
};
