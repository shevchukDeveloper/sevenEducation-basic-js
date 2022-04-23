"use strict";

const pocemonArray = [
  "<img src =' https://assets.pokemon.com/assets/cms2/img/pokedex/full/660.png'/>",
  "<img src =' https://assets.pokemon.com/assets/cms2/img/pokedex/full/669.png'/>",
  "<img src =' https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png'/>",
  "<img src =' https://assets.pokemon.com/assets/cms2/img/pokedex/full/890.png'/>",
  "<img src =' https://assets.pokemon.com/assets/cms2/img/pokedex/full/757.png'/>",
  ,
];

//&#9829

let res = pocemonArray.join(" &#9829 ");
document.write(res);
