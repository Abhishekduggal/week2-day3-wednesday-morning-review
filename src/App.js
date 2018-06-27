import React, { Component } from "react";
import logo from "./Bulbasaur.png";
import "./App.css";

import axios from "axios";

import Pokemon from "./components/Pokemon/Pokemon";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      userInput: ""
    };
  }

  // Make API call to get pokemon using this endpoint "/api/getPokemon" and save the result to pokemon in state
  // Then after making sure we are getting our data back show each pokemons name on the screen

  componentDidMount() {
    axios
      .get("/api/getPokemon")
      .then(res => {
        this.setState({
          pokemon: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleInput = val => {
    this.setState({
      userInput: val
    });
  };

  // *THE USER WILL TYPE IN AN INPUT FIELD AND CLICK A BUTTON TO MAKE POKEMON*

  // Make API call to make a pokemon using this endpoint "/api/makePokemonWithBody" and pass in the pokemons name using req.body.
  // Then update our pokemon on state
  makePokemonWithBody = name => {
    axios.post("/api/makePokemonWithBody", { name }).then(res => {
      this.setState({
        pokemon: res.data
      });
    });
  };

  // Make API call to make a pokemon using this endpoint "/api/makePokemonWithQuery" and pass in the pokemons name using req.query (the query is also called name).
  // Then update our pokemon on state
  makePokemonWithQuery = name => {
    axios.post(`/api/makePokemonWithQuery/?name=${name}`).then(res => {
      this.setState({
        pokemon: res.data
      });
    });
  };

  // *EACH POKEMON NEEDS ITS OWN EDIT BUTTON TO CLICK, WE CAN NOT SHARE STATE*

  // Make API call to edit a pokemons name using the endpoint "/api/editPokemonNameWithParamsAndBody" passing in the newName with req.body and the pokemons index with req.params
  // Then update our pokemon on state
  editPokemonWithParamsAndBody = (newName, index) => {
    axios
      .put(`/api/editPokemonNameWithParamsAndBody/${index}`, { newName })
      .then(res => {
        this.setState({
          pokemon: res.data
        });
      })
      .catch(err => console.log(err));
  };

  // Make API call to edit a pokemons name using the endpoint "/api/editPokemonNameWithJustBody" passing in the pokemons newName and index with req.body
  // Then update our pokemon on state
  editPokemonNameWithJustBody = (newName, index) => {
    axios
      .put(`/api/editPokemonNameWithJustBody`, { newName, index })
      .then(res => {
        this.setState({
          pokemon: res.data
        });
      })
      .catch(err => console.log(err));
  };

  // *EACH POKEMON WILL NEED ITS OWN DELETE BUTTON TO CLICK, WE CAN NOT SHARE STATE*

  // Make API call to delete a pokemon using the endpoint "/api/deletePokemonWithJustQuery" passing in the pokemons index with req.query (the name of the query is also index)
  // Then update our pokemon on state
  deletePokemonWithJustQuery = index => {
    axios
      .delete(`/api/deletePokemonWithJustQuery/?index=${index}`)
      .then(res => {
        this.setState({
          pokemon: res.data
        });
      })
      .catch(err => console.log(err));
  };

  // Make API call to delete a pokemon using the endpoint "/api/deletePokemonWithJustParams" passing in the pokemons index with req.params
  // Then update our pokemon on state
  deletePokemonWithJustParams = index => {
    axios
      .delete(`/api/deletePokemonWithJustParams/${index}`)
      .then(res => {
        this.setState({
          pokemon: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    let { pokemon, userInput } = this.state;

    let allPokemon = pokemon.map((e, i) => {
      return (
        <Pokemon
          key={i}
          name={e.name}
          index={i}
          editPokemon={this.editPokemonWithParamsAndBody}
          deletePokemon={this.deletePokemonWithJustParams}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input
          placeholder="New Pokemons Name"
          onChange={e => this.handleInput(e.target.value)}
        />
        <button onClick={() => this.makePokemonWithBody(userInput)}>
          Make Pokemon
        </button>
        {allPokemon}
      </div>
    );
  }
}

export default App;
