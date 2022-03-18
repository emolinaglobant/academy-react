import React from 'react';
import '../styles/gameDescription.css';
import CardMedia  from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

function GameDescription ({
    gameImage, 
    name, 
    description, 
    habitat,
    abilities,
    height, 
    weight, 
    types, 
    }) {

    return(
        <>
        <h1 className="title">Description</h1>
        
        <Grid container justifyContent="center">
            <article className="content">
                <section className="card">
                    <CardMedia className="media" image={gameImage} />
                </section>
                <section className="aContainer">
                    <section className="desContainer">
                        <a href=" " className="name">{name}</a>
                        <label>{description}</label>
                    </section>
                    <section className="habContainer">
                        <section className="habContent">
                            <label id="hab-titles">Types</label>
                            {types.map((item, index) =>{
                                return(
                                    <section>
                                        <label id="hb-t" key={index} >{item.type.name} </label>
                                    </section>
                                );
                            })}
                        </section>
                        <section className="habContent">
                            <label id="hab-titles">Abilities</label>
                            {abilities.map((item, index) =>{
                                return(
                                    <section>
                                        <label id="hb-t" key={index} >{item.ability.name} </label>
                                    </section>
                                );
                            })}
                        </section>
                    </section>    
                    <section className="habContainer">
                        <section className="habContent">
                            <label id="hab-titles">habitat</label>
                            <label id="hb-t">{habitat.name}</label>
                        </section>
                        <section className="habContent">
                            <label id="hab-titles">weight</label>
                            <label id="hb-t">{weight}</label>
                        </section>
                        <section className="habContent">
                            <label id="hab-titles">height</label>
                            <label id="hb-t">{height}</label>
                        </section>
                    </section>
                    
                </section>
                
            </article>
        </Grid>
        
        </>
    );
}

export default GameDescription;