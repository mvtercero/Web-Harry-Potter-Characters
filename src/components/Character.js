import React, { Component } from 'react';

class Character extends Component {
  render(){
    return(
      <li className="characterCard" key={this.props.index}>
      <h3>{this.props.personaje.name}</h3>
      <img className="characterPhoto" src={this.props.personaje.image} alt={this.props.personaje.name}/>
      <img className= "characterLogo" src={`images/${this.props.personaje.house}.png`} alt={this.props.personaje.house}/>
      <p> {this.props.personaje.alive ? "Alive ❤" : "Dead ☠"}</p>
      <p> {this.props.personaje.hogwartsStudent ? "student" : ""}</p>
      </li>
    );
  }
}

export default Character;
