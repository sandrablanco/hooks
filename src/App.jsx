import './App.css';
import { useEffect, useState } from 'react';
import Character from './hooks/useCharacter';
import useFetch from './hooks/useFecth';


function App() {

 const {pokemon, rick} = useFetch();
 
  if (!pokemon || !rick) {
    return <div>Cargando...</div>;
  }
  return (
    <>
    <div>
   < Character title='Pokemon: ' name={pokemon?.name} image={pokemon?.sprites.front_default} />
   < Character title='Rick and Morty: ' name={rick?.name} image={rick?.image} />
    </div>
    </>
  );
}

export default App;
