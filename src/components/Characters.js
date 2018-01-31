import React, { Component } from 'react';

class Characters extends Component{
  render() {
    return(
      <li className="character-card">
        <div className="character-info">
          <h4>{this.props.name}</h4>
          <img src={this.props.image} alt={this.props.name}/>
          <p>
            {this.props.house}
          </p>
          <p>
            {this.props.alive}
          </p>
        </div>
      </li>
    )
  }
}

export default Characters;
