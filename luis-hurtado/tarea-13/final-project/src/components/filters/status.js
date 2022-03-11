import { FilterBTN } from "./filterBTN";
import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";
import { FilterOption } from "./styles";

export const Status = () => {
  const { status, setFilterStatus } = useContext(CharacterContext);

  return (
    <FilterOption>
      <main>
        <input type="radio" id="status" name="filter" />
        <label htmlFor="status">
          <h2>Status</h2>
        </label>
        <article className="options">
          {status.map((items, index) => (
            <FilterBTN
              key={index}
              task={setFilterStatus}
              name="status"
              index={index}
              input={items}
            />
          ))}
        </article>
      </main>
    </FilterOption>
  );
};
