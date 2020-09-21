import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import RevBot from './components/RevBot'

class App extends Component {
  cnstructor(props) {
    super(props)
    this.state = {
      userName: ""
    }
  }

  handleChange = (e) => {
    // console.log(e.target) // where an event took place
    console.log(e.target.value) // what is the value at that target location
    this.setState({ userName: e.target.value }) // put the value in userName
  }

  render(){
    console.log(this.state.userName) // check the value of userName here as it evolves
    return(
      <>
        <h1>Robo Active Listening</h1>
        <input
          type="text"
          value={ this.state.userName }
          onchange={ this.handleChange } // listens to the DOM and reacts when anything changes
        />
        // <input type="checkbox"/>
        // <input type="password"/>
        <p>
          Hello, { this.state.userName } // output to the HTML page
        </p>
      </>
    )
  }
}

export default App
