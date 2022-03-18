import styled from "styled-components";

export const Pages = styled.main`
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    height: 50px;
    margin: 20px;

    & .prevBtn, .nextBtn, .activePage  {
        align-items: center;
        background-color: #0b5ed7;
        border-radius: 10px;
        color: white;
        display: flex;
        height: 35px;
        justify-content: center;
        width: 65px;
    }

    & .page, .morePages {
        align-items: center;
        color: white;        
        display: flex;
        height: 35px;
        justify-content: center
        list-style: none;
        width: 65px;
    }

    & .pageContainer {
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        list-style: none;
    }

`;
