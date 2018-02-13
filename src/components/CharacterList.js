import React, { Component } from 'react';
import Character from './Character';

class CharacterList extends Component {
  render(){
    return(

      <ul className="characterMenu">{
        this.props.characters.filter((personaje)=>{
          return personaje.name.toLowerCase().includes(this.props.value.toLowerCase());
        })

        .map((personaje, index)=>{
          return(
            <Character personaje={personaje} key={index}/>
          );
        })

      }</ul>

    );
  }
}

export default CharacterList;
