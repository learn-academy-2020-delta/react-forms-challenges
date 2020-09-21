import React, { Component } from 'react';
import './App.css';
import GoodBot from './Components/GoodBot';
import BadBot from './Components/BadBot';
import UsupBot from './Components/UsupBot';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value})
  }

  render (){
    let { userInput } = this.state
    return (
      <div>
        <div id="title-box">
          <h1>Robo-Answers</h1>
          <input 
          type="text"
          value={userInput}
          onChange={this.handleChange}
          placeholder="Say Something!"
          />
        </div>
        <GoodBot 
          userInput={userInput}
        />
        <BadBot 
          userInput={userInput}
        />
        <UsupBot 
          userInput={userInput}
        />
      </div>
    );
  }
}


// 3 child components for each Robot