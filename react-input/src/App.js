import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ""
    }
  }


  render() {
    return (
      <div>
        <h1> Listening Robot </h1>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
      </div >
    );
  }
}

export default App;
