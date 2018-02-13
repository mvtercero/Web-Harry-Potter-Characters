import React, { Component } from 'react';

class Search extends Component{
  render(){
    return(
    <input className= "characterSearch" type="text" onChange={this.props.onChange} value={this.props.value}/>
    );
  }
}

export default Search;
