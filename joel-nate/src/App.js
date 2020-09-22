import React, { Component } from 'react';
import GoodRobot from './Component/GoodRobot';
import BadRobot from './Component/BadRobot';
import DalekRobot from './Component/DalekRobot';


import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
      badRobotReturn: "Blah Blah"
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ userInput: e.target.value })
  }

  randomizer = () => {
    this.setState({ userInput: this.badRobotReturn })
  }

  render(){
    console.log(this.state.userInput);
    return(
      <React.Fragment>
      <h2>THE ULTIMATE ROBOT CHALLENGE</h2>
      <input
        type="text"
        value={ this.state.userInput }
        onChange={ this.handleChange }
      />
      <GoodRobot
          goodRobotSays={ this.state.userInput }
      />
      <BadRobot
          badRobotSays={ this.state.userInput }
          onChange={ this.state.badRobotReturn }
      />
      <DalekRobot
          dalekRobotSays={ this.state.userInput }
      />
      </React.Fragment>
    )
  }
}

export default App;