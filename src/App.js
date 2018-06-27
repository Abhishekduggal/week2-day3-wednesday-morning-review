import React, { Component } from "react";
import logo from "./Bulbasaur.png";
import "./App.css";

import axios from "axios";

import Pokemon from "./components/Pokemon/Pokemon";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // Make API call to get pokemon using this endpoint "/api/getPokemon" and save the result to pokemon in state (Array)
  // Then after making sure we are getting our data back show each pokemons name on the screen

  // * TWO POST REQUEST BELOW THAT DO THE SAME THING *
  // *THE USER WILL TYPE IN AN INPUT FIELD AND CLICK A BUTTON TO MAKE POKEMON*

  // Make API call to make a pokemon using this endpoint "/api/makePokemonWithBody" and pass in the pokemons name using req.body.
  // Then update our pokemon on state

  // Make API call to make a pokemon using this endpoint "/api/makePokemonWithQuery" and pass in the pokemons name using req.query (the query is also called name).
  // Then update our pokemon on state

  // * TWO PUT REQUEST BELOW THAT DO THE SAME THING *
  // *EACH POKEMON NEEDS ITS OWN EDIT BUTTON TO CLICK, WE CAN NOT SHARE STATE*
  // *HINT YOU WILL NEED TO MAKE A POKEMON COMPONENT IN THE components/Pokemon FOLDER SO EACH POKEMON HAS ITS OWN EDIT BUTTON*
  // *RENDER POKEMON IN App.js WHEN YOU MAP THROUGH THE ARRAY OF POKEMON*

  // Make API call to edit a pokemons name using the endpoint "/api/editPokemonNameWithParamsAndBody" passing in the newName with req.body and the pokemons index with req.params
  // Then update our pokemon on state

  // Make API call to edit a pokemons name using the endpoint "/api/editPokemonNameWithJustBody" passing in the pokemons newName and index with req.body
  // Then update our pokemon on state

  // * TWO DELETE REQUEST BELOW THAT DO THE SAME THING *
  // *EACH POKEMON WILL NEED ITS OWN DELETE BUTTON TO CLICK, WE CAN NOT SHARE STATE*

  // Make API call to delete a pokemon using the endpoint "/api/deletePokemonWithJustQuery" passing in the pokemons index with req.query (the name of the query is also index)
  // Then update our pokemon on state

  // Make API call to delete a pokemon using the endpoint "/api/deletePokemonWithJustParams" passing in the pokemons index with req.params
  // Then update our pokemon on state

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
