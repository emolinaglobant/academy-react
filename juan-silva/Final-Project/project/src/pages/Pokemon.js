import { useEffect, useState } from 'react';
import './Poke.css';
import run from '../assets/running.gif';

const url='https://pokeapi.co/api/v2/pokemon?limit=600';
let urltemp;
let pokList=[];
function Pokemon(data){
    const [pokemonList,setPokemonList]=useState([]);
    useEffect(()=>{
        setMyPokemons();
    },[]);
    const getEachPokemon=(poke)=>{
        let url = poke.url;
        fetch(url)
        .then(response=> response.json())
        .then(pokeInfo=>{
            pokeInfo.img=makeUrl(pokeInfo.id);
            pokList.push(pokeInfo);
        })
    }
    function getObjects(){
        fetch(url)
        .then(response=> response.json())
        .then(pokedata=>{
            pokedata.results.forEach(element => {
                getEachPokemon(element)
            });
        })
        return new Promise((resolve,reject)=>{
            console.log("cargando pokemons")
            setTimeout(()=>{
                resolve(pokList);
            },3000)
        });
    }
    async function setMyPokemons(){
        let pokeList=await getObjects();
        setPokemonList(pokeList);
        pokList=[];
    }
    const makeUrl=(id)=>{
        if(id<10){
            id.toString();
            urltemp='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00'+id+'.png';
            return urltemp
        }
        if(id>9 && id<100){
            id.toString();
            urltemp='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0'+id+'.png';
            return urltemp
        }
        if(id>99){
            id.toString();
            urltemp='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+id+'.png';
            return urltemp
        }
    }
    return(
        <article>
            <header className='titlepoke'>
                <h1>{data.name}, in this adventure you can find these pokemons</h1>
                <h3>Here you can find all pokemons an their information</h3>
            </header>
            {pokemonList.length===0
            ?<section className='loading'>
                <span>Loading pokemon Data</span>
                <img src={run} alt='loading'/>
             </section>
            :<ul className='pokemon-list'>
                {pokemonList.map((pokemon,index)=>
                    <li key={index}className='pokemon-item'>
                        <section className="card">

                            <h2 className='name'>{pokemon.name}</h2>
                            <h3 className='id'>#{pokemon.id}</h3>
                            <ul className='type'>
                                {pokemon.types.map((element,index)=>
                                    <li key={index} className='type-item'>{element.type.name}</li>
                                )}
                            </ul>
                            <figure className='container-pic'>
                                <img className="pic" src={pokemon.img} alt={pokemon.name}/>
                            </figure>
                            <section className='info'>
                                <h4>About</h4>
                                <section>
                                    <h5>Height: {(pokemon.height*0.1).toFixed(1)} m</h5>
                                    <h5>Weight: {(pokemon.weight*0.1).toFixed(1)} kg</h5>
                                    <h5></h5>
                                </section>
                                <section className='info-bottom'>
                                    <section>
                                        <h4>Abilities</h4>
                                        <ul className='abilities-list'>
                                            {pokemon.abilities.map((element,index)=>
                                                <li key={index} >{element.ability.name}</li>
                                            )}
                                        </ul>
                                    </section>
                                    <section>
                                        <h4>Moves</h4>
                                        <ul className='abilities-list'>
                                            {pokemon.moves.map((element,index)=>
                                                index<3&&
                                                <li key={index} >{element.move.name}</li>
                                            )}
                                        </ul>
                                    </section>
                                </section>
                                
                            </section>
                        </section>
                        
                    </li>
                )}
                
            </ul>
            }
        </article>
    );
}
export default Pokemon;