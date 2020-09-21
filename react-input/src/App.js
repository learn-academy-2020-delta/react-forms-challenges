import React, { Component } from "react";
import "./App.css";
import GoodRobot from "./components/GoodRobot";
import BadRobot from "./components/BadRobot";
import KanyeBot from "./components/KanyeBot";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <>
        <div id="everything">
          <h1> Listening Robot </h1>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
          <GoodRobot goodRobot={this.state.userInput} />
          <BadRobot badRobot={this.state.userInput} />
          <KanyeBot kanyeBot={this.state.userInput} />
        </div>
      </>
    );
  }
}

export default App;
