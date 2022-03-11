import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";
import { FilterBTN } from "./filterBTN";
import { FilterOption } from "./styles";

export const Gender = () => {
  const { genders, setFilterGender } = useContext(CharacterContext);

  return (
    <FilterOption>
      <input type="radio" id="gender" name="filter" />
      <label htmlFor="gender">
        <h2>Gender</h2>
      </label>
      <div className="options">
        {genders.map((item, index) => (
          <FilterBTN
            key={index}
            name="gender"
            index={index}
            input={item}
            task={setFilterGender}
          />
        ))}
      </div>
    </FilterOption>
  );
};
