import styled from "styled-components";

export const FilterContainer = styled.main`
  background-color: white;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  height: 100%;
  max-width: 300px;
  padding: 5px;
  width: 100%;

  & button {
    box-shadow: 2px 2px 2px black;
    cursor: pointer;
    height: 30px;
    width: 40%;
  }
  & button:hover {
    background-color: #0b5ed7;
    color: white;
  }

  & section {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin: 15px;
  }
`;

export const FilterOption = styled.article`
  box-shadow: 2px 2px 6px black;
  padding: 10px;

  & .optionText {
    align-items: center;
    border-radius: 5px;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    margin: 10px;
    transition: 0.5s;
  }

  & .optionText:hover {
    background-color: #0b5ed7;
    color: white;
  }

  & input {
    display: none;
  }

  & label {
    cursor: pointer;
    display: flex;
    height: 40px;
    user-select: none;
  }

  & .options {
    font-size: 0.9em;
    max-height: 0;
    overflow: hidden;
    transition: max-height, 0.5s;
  }

  & input:checked ~ .options {
    max-height: 700px;
    transition: max-height, 1s;
  }
`;
