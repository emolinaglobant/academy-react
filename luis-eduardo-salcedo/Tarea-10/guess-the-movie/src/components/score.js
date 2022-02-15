import React from "react";

export function Score({gamePoints}){
    return(
        <section className="container__score">Score: {gamePoints}</section>
    );
}