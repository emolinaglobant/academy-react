import styled from "styled-components";

export const CardDetail = styled.main`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;

  & article {
    background-color: #f9f9f3;
    border-radius: 5px;
    color: black;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    padding: 10px;
    text-align: center;
  }

  & article:hover {
    transform: scale(1.1);
    transition: 0.4s ease-out;
  }

  & .AliveStatus {
    background: #6fff6f;
  }
  & .DeadStatus {
    background: #ff4d4d;
  }
  & .UnknownStatus {
    background: gray;
  }
`;
