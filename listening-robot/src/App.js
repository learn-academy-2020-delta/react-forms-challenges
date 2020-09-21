import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import RevBot from './components/RevBot'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: "",
      badRobotOutput: "",
      reverseRobotOutPut: ""
    }
  }

  handleChange = (e) => {
    // console.log(e.target) // where an event took place
    // console.log(e.target.value) // what is the value at that target location
    this.setState({ userInput: e.target.value }) // put the value in userName
  }

  render(){
    console.log(this.state.userInput) // check the value of userName here as it evolves
    return(
      <>
        <h1>Robo Active Listening</h1>
        <h2>Say Something:</h2>
        <input
          type="text"
          value={ this.state.userInput }
          onChange={ this.handleChange } // listens to the DOM and reacts when anything changes
        />
        <h3 className = "robot-header">Good Robot:</h3>
          <GoodRobot value={ this.state.userInput } />
        <h3 className = "robot-header">Bad Robot:</h3>
          <BadRobot value={ this.state.userInput } />
        <h3 className = "robot-header">Reverse Robot:</h3>
          <RevBot value={ this.state.userInput } />

      </>
    )
  }
}

export default App
