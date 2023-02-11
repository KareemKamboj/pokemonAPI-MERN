import { useEffect, useState } from 'react';
import axios from 'axios';

export const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPokemon = (e) => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then((res) => {
                console.log(res);
                setPokemons(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }
        
 
    return (
    <div>
        <button onClick={getPokemon}>Fetch Pokemon</button>
        {
        pokemons.map((pokemon) => {
            return (
                <ul>
                    <li>{pokemon.name}</li>
                </ul>
            )
        })
    }</div>)
  }
