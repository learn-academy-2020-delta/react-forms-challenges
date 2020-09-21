import React, { Component } from 'react';
import BadRobot from './Component/BadRobot'
import GoodRobot from './Component/GoodRobot' 
import ThirdRobot from './Component/ThirdRobot' 
import './App.css';
import threeRobots from './Assets/threeRobots.jpeg'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
      img: threeRobots 
    }
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  render() {
    return (
      <div id="main">
        <h1>Let's Talk to Robots!</h1>
        <img src = { this.state.img } />
        <input 
        type = "text"
        value = { this.state.userInput }
        onChange = { this.handleChange }
        />
        <GoodRobot 
          userInput = { this.state.userInput }
        />
        <BadRobot 
          userInput = { this.state.userInput }
        />
        <ThirdRobot
          userInput = { this.state.userInput }
        />
      </div>
    );
  }
}

export default App;
