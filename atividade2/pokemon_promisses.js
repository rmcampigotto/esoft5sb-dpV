const fs = require('fs');

const urlPokemons = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const getPokemons = async () => {
  const response = await fetch(urlPokemons);
  const data = await response.json();
  return data.results;
};

const getPokemonDetails = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const mapPokemonData = (pokemon) => {
  const { name, types, weight, height, id, sprites } = pokemon;
  const dexNumber = id;
  const type = types[0].type.name;
  const sprite = sprites.front_default;
  return { 
    name, 
    type,
    weight,
    height,
    dexNumber,
    sprite 
  };
};

const savePokemonsToFile = (pokemons) => {
  const jsonData = JSON.stringify(pokemons, null, 2);
  fs.writeFile('pokemon.json', jsonData, (err) => {
    if (err) throw err;
    console.log('Pokemons salvos com sucesso!');
  });
};

const main = async () => {
  const pokemons = await getPokemons();
  const promises = pokemons.map((pokemon) => getPokemonDetails(pokemon.url));
  const detailedPokemons = await Promise.all(promises);
  const mappedPokemons = detailedPokemons.map(mapPokemonData);
  savePokemonsToFile(mappedPokemons);
};

main();