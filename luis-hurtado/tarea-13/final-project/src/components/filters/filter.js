import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";
import { Gender } from "./gender";
import { Species } from "./species";
import { Status } from "./status";

import { FilterContainer } from "./styles";

export const Filters = () => {
  const { setFilterStatus, setFilterGender, setFilterSpecies, setPageNumber } =
    useContext(CharacterContext);

  let clear = () => {
    setFilterGender("");
    setFilterSpecies("");
    setFilterStatus("");
    setPageNumber(1);
    window.location.reload(false);
  };

  return (
    <FilterContainer>
      <section>
        <h2>Filters</h2>
        <button onClick={clear} type="button">
          Clear
        </button>
      </section>
      <article>
        <Status />
        <Species />
        <Gender />
      </article>
    </FilterContainer>
  );
};
