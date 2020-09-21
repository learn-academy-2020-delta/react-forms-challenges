import React, { Component } from 'react';
import './App.css';
import GoodRobot from './components/GoodRobot';
import BadRobot from './components/BadRobot';
import KanyeBot from './components/KanyeBot';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ""
    }
  }
handleChange = (e) => {
  this.setState({ userInput: e.target.value,  })
}

  render() {
    return (
      <>
        <div>
          <h1> Listening Robot </h1>
          <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          />
        </div>
        <div>
          <GoodRobot 
          goodRobot = {this.state.userInput}
          />
        </div>
        <div>
          <BadRobot
          badRobot = {this.state.userInput}
          />
        </div>
        <div>
          <KanyeBot 
          kanyeBot = {this.state.userInput}
          />
        </div>
      </>
    );
  }
}

export default App;
