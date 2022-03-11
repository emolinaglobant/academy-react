import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";

export const FilterBTN = ({ name, index, input, task }) => {
  const { setPageNumber } = useContext(CharacterContext);

  return (
    <main>
      <style jsx="true">
        {`
          .optionChecked:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <input type="radio" className="optionChecked" name={name} id={`${name}-${index}`} />
      <label
        onClick={() => {
          task(input);
          setPageNumber(1);
        }}
        className="optionText"
        htmlFor={`${name}-${index}`}
      >
        <p>{input}</p>
      </label>
    </main>
  );
};
