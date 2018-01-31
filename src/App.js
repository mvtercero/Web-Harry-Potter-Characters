import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      value:"",
      characters: []
    }
    this.handleChange= this.handleChange.bind(this);
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

  handleChange(event){
    this.setState({
      value:event.target.value
    });
  }

  render(){
    const { characters } = this.state;
    const { value } = this.state;

    return(
      <div className="App">
      <h1>My Harry Potter Characters</h1>
      <input className= "characterSearch" type="text" onChange={this.handleChange} value={this.state.value}/>
      <CharacterList characters= {characters} value= {value}/>
      </div>
    );
  }
}


export default App;
