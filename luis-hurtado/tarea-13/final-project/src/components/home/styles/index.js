import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-evenly;
    
    & h1, h3 {
        color: hsl(188deg 97% 40%);
        font-family: 'Creepster', cursive;
        letter-spacing: 5px
        text-align: center;
    }
`;
const spaceship = keyframes`
    
    0% {
        transform: rotate(0deg)  translate(0px);
    }
    25% {
        transform: rotate(10deg) translate(30px) ;
    }
    50% {
        transform: rotate(-10deg)  translate(50px);
    }
    75% {
        transform: rotate(-5deg)  translate(80px);
    }
    100% {
        transform: rotate(0deg)  translate(0px);
    }

`;
export const HomeDecoration = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  & img {
    width: 200px;
  }

  & img:first-child {
    animation: ${spaceship} 3s linear infinite;
  }
`;
