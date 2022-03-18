import { useContext } from "react";
import { CharacterContext } from "../../context/characterContext";
import { SearchBar, SearchContainer } from "./styles";

export const Search = () => {
  const { setUserInput, setPageNumber } = useContext(CharacterContext);

  const handleInput = (e) => {
    setPageNumber(1);
    setUserInput(e.target.value);
  };

  return (
    <SearchContainer>
      <h2>Search your favorite characters</h2>
      <article>
        <SearchBar
          type="search"
          placeholder="Search your favorite character"
          onChange={handleInput}
          aria-label="Search"
        />
      </article>
    </SearchContainer>
  );
};
