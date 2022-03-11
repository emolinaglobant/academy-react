import { Link } from "react-router-dom";

import {
  Card,
  CardDisplay,
  CharactersContainer,
  CardContainer,
  Error,
} from "./style";

import errorGif from "../assests/error.gif";

import { CharacterContext } from "../../context/characterContext";
import { useContext } from "react";
import { Filters } from "../filters/filter";
import { Search } from "../search/search";
import { Pagination } from "../pagination/pagination";

export const CharacterList = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <>
      <CharactersContainer>
        <Search />
        <CardContainer>
          <Filters />
          <CardDisplay>
            {characters.length > 0 ? (
              characters.map((character) => (
                <Link to={`/character/${character.id}`} key={character.id}>
                  <Card>
                    <img src={character.image} alt="character" />
                    <section>
                      <h3>{character.name}</h3>
                      {(() => {
                        if (character.status === "Dead") {
                          return (
                            <div className="DeadStatus">{character.status}</div>
                          );
                        } else if (character.status === "Alive") {
                          return (
                            <div className="AliveStatus">
                              {character.status}
                            </div>
                          );
                        } else {
                          return (
                            <div className="UnknownStatus">
                              {character.status}
                            </div>
                          );
                        }
                      })()}
                    </section>
                  </Card>
                </Link>
              ))
            ) : (
              <Error>
                <h2>No characters found :c </h2>
                <img src={errorGif} alt="Character not found error" />
              </Error>
            )}
          </CardDisplay>
        </CardContainer>
      </CharactersContainer>
      <Pagination />
    </>
  );
};
