import React, { Component } from 'react';
import Characters from './Characters';



class CharactersList extends Component {
  render() {
    return (
      <ul className="harry-list">
        {
          this.props.listado.map((personaje, index) => {
            return <Characters key={ index }
                                name={ personaje.name}
                                image= {personaje.image}
                                house={personaje.house}
                                alive={personaje.alive} />
          })
        }
      </ul>
    )
  }
}
export default CharactersList;
