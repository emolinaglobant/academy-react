import { FilterBTN } from "./filterBTN";
import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";
import { FilterOption } from "./styles";

export const Species = () => {
  const { species, setFilterSpecies } = useContext(CharacterContext);

  return (
    <FilterOption>
      <input type="radio" id="species" name="filter" />
      <label htmlFor="species">
        <h2>Species</h2>
      </label>
      <div className="options">
        {species.map((items, index) => (
          <FilterBTN
            key={index}
            name="species"
            index={index}
            input={items}
            task={setFilterSpecies}
          />
        ))}
      </div>
    </FilterOption>
  );
};
