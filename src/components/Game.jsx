import { useState, useEffect } from "react";
import Card from "./Card";
import Counter from "./Counter";
import Logo from "./Logo";
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

import ManageCards from "./ManageCards";
const pokemons = [
  "pikachu",
  "charizard",
  "squirtle",
  "eevee",
  "gengar",
  "mewtwo",
  "lucario",
  "snorlax",
  "jigglypuff",
  "dragonite",
  "blaziken",
  "gardevoir",
  "greninja",
  "arcanine",
  "umbreon",
  "tyranitar",
  "rayquaza",
  "sylveon",
];

function Game() {
  let [pokes, setPokes] = useState(pokemons);
  let [high, setHigh] = useState(0);
  let [current, setCurrent] = useState(0);
  let [chosen, setChosen] = useState([]);
  const [shuffledData, setShuffledData] = useState([]);

  const handleShuffle = (e) => {
    setShuffledData(shuffleArray(shuffledData));
    let name = e.target.parentElement.id;
    if (chosen.includes(name)) {
      if (current > high) setHigh(current);
      setCurrent(0);
      setChosen([]);
    } else {
      setChosen([...chosen, name]);
      setCurrent(current + 1);
    }
  };
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const data = [];

      for (let i = 0; i < pokes.length; i++) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokes[i]}`
        );

        let character = await response.json();
        data.push(character);
      }
      if (!ignore) {
        setShuffledData(data);
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  if (shuffledData.length !== 0) {
    console.log("jere", shuffledData);
    return (
      <>
        <Logo></Logo>
        <Counter current={current} highest={high}></Counter>
        <ManageCards
          handle={handleShuffle}
          pokemons={shuffledData}
        ></ManageCards>
      </>
    );
  }
}

export default Game;
