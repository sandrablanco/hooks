import {useState, useEffect} from 'react';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

const pokemon = useFetch(urlPokemon);
const rick = useFetch(urlRick);

const useFetch = (url) => {
    const [pokemon, setPokemon] = useState(null);
    const [rick, setRick] = useState(null);

    useEffect(() => {
        fetch(urlPokemon)
        .then(res => res.json())
        .then(data => setPokemon(data))
        .catch(error => console.log(error));

        fetch(urlRick)
        .then(res => res.json())
        .then(data => setRick(data))
        .catch(error => console.log(error));
    }, [setPokemon, setRick]);

    return {pokemon, rick};
}







export default useFetch;