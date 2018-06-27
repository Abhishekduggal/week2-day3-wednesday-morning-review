import React, { Component } from "react";
import "./Pokemon.css";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      newPokemonName: "",
      editPokemon: false
    };
  }

  handleNewPokemonName = val => {
    this.setState({
      newPokemonName: val
    });
  };

  handleEdit = () => {
    this.setState({
      editPokemon: true
    });
  };

  editPokemon = (newName, index) => {
    this.props.editPokemon(newName, index);
    this.setState({
      editPokemon: false
    });
  };

  render() {
    const { newPokemonName, editPokemon } = this.state;
    const { index } = this.props;
    return (
      <div className="pokemon-container">
        <h2>{this.props.name}</h2>
        {editPokemon ? (
          <div>
            <input
              placeholder="Insert New Pokemon Name"
              onChange={e => this.handleNewPokemonName(e.target.value)}
            />
            <button onClick={() => this.editPokemon(newPokemonName, index)}>
              Submit
            </button>
          </div>
        ) : (
          <button onClick={this.handleEdit}>Edit</button>
        )}
        <button onClick={() => this.props.deletePokemon(index)}>Delete</button>
      </div>
    );
  }
}

export default Pokemon;
