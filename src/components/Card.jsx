import { useState, useEffect } from "react";

function shuffleArray(array) {
  // Loop through the array starting from the last element
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at index i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Card({ imgUrl, name, onClick }) {
  return (
    <div className={name}>
      <button id={name} className="card" onClick={onClick}>
        <img style={{ width: 200, height: 150 }} src={imgUrl} alt={name}></img>
        <p className="name">{name}</p>
      </button>
    </div>
  );
}

export default Card;
