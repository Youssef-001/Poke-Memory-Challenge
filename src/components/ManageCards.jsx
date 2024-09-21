import { useState } from "react";
import Card from "./Card";

function ManageCards({ pokemons, handle }) {
  return (
    <div className="cards">
      {pokemons.map((pok) => (
        <Card
          key={pok.name} // It's important to add a unique key when rendering lists in React
          onClick={handle}
          imgUrl={pok.sprites.front_default}
          name={pok.name}
        />
      ))}
    </div>
  );
}

export default ManageCards;
