import {useState, useEffect} from 'react';

function Character({title, name, image}) {
  return (
    <>
    <div>
      <h2>Personaje{title}</h2>
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
    </>
  );
}

export default Character;