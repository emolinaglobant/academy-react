import styled from "styled-components";

export const CharactersContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.article`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const CardDisplay = styled.article`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);

  & a {
    text-decoration: none;
  }
`;

export const Card = styled.section`
  background-color: #f9f9f3;
  border-radius: 5px;
  padding: 5px;
  width: 200px;
  color: black;

  & .AliveStatus {
    background: #6fff6f;
  }
  & .DeadStatus {
    background: #ff4d4d;
  }
  & .UnknownStatus {
    background: gray;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.4s;
  }
  & section {
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    text-align: center;
  }

  & img {
    width: 190px;
    padding: 5px;
  }
`;

export const Error = styled.section`
  color: white;
  font-family: "Open Sans", sans-serif;
  margin-left: 20px;
  text-align: center;

  & img {
    width: 400px;
  }
`;
