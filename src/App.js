import React, { Component } from 'react';
import './App.css';

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
      <input className= "characterSearch" type="text" onChange={this.handleChange} name="" value={this.state.value}/>
      <ul className="characterMenu">{
        characters.filter((personaje)=>{
        return personaje.name.toLowerCase().includes(this.state.value.toLowerCase());
        })

        .map((personaje, index)=>{
          return(
            <div key={index}>
            <li><h3>{personaje.name}</h3></li>
            <img className="characterPhoto" src={personaje.image} alt={personaje.name}/>
            <li>House: {personaje.house}</li>
            <li>{personaje.alive}</li>
            </div>
          );
        })
      }</ul>
      </div>
    );
  }
}


export default App;
