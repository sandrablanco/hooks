import {useState, useEffect} from 'react';

function Character({title, name, image}) {
  return (
    <>
    <div>
      <h2>Personaje {title}</h2>
      <p>{name}</p>
      <img src={image} alt={name} width={150} height={150} />
    </div>
    </>
  );
}

export default Character;