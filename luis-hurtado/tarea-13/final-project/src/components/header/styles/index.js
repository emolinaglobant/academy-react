import styled from "styled-components";

export const Navbar = styled.nav`
  align-items: center;
  background-color: #3a3b3c;
  display: flex;
  font-family: "Creepster", cursive;
  height: 40px;
  justify-content: space-evenly;

  & a {
    color: white;
    letter-spacing: 2px;
    text-decoration: none;
  }
  & a:hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
`;
