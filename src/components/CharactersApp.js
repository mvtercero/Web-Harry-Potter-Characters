import React, { Component } from 'react';
import CharactersList from './CharactersList';

class CharactersApp extends Component{
  constructor(props) {
    super(props)
    this.state = { characters: [] }
  }

  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => {
      return response.json()
    })
    .then((characters) => {
      this.setState({characters: characters})
    })
  }


  render(){
    return (
      <div className="container-fluid">
      <CharactersList listado={this.state.characters} />
      </div>
    );
  }
}

export default CharactersApp;
