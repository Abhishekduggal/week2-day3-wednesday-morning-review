const axios = require("axios");

let pokemon = [];

module.exports = {
  getPokemon: (req, res) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        pokemon = response.data.results;
        res.status(200).json(pokemon);
      })
      .catch(err => res.status(200).send(err));
  },
  makePokemonWithBody: (req, res) => {
    const { name } = req.body;
    pokemon.push({ name });
    res.status(200).json(pokemon);
  },
  makePokemonWithQuery: (req, res) => {
    const { name } = req.query;
    pokemon.push({ name });
    res.status(200).json(pokemon);
  },
  editPokemonNameWithParamsAndBody: (req, res) => {
    const { newName } = req.body;
    const { index } = req.params;
    pokemon.forEach((char, i) => {
      if (i === parseInt(index)) {
        char.name = newName;
      }
    });
    res.status(200).json(pokemon);
  },
  editPokemonNameWithJustBody: (req, res) => {
    const { newName, index } = req.body;
    pokemon.forEach((char, i) => {
      if (i === parseInt(index)) {
        char.name = newName;
      }
    });
    res.status(200).json(pokemon);
  },
  deletePokemonWithJustQuery: (req, res) => {
    const { index } = req.query;
    let currentIndex = pokemon.findIndex((e, i) => i === parseInt(index));
    pokemon.splice(currentIndex, 1);
    res.status(200).json(pokemon);
  },
  deletePokemonWithJustParams: (req, res) => {
    const { index } = req.params;
    let currentIndex = pokemon.findIndex((e, i) => i === parseInt(index));
    pokemon.splice(currentIndex, 1);
    res.status(200).json(pokemon);
  }
};
