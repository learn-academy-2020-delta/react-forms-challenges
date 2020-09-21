import React, { Component } from 'react';

class BadRobot extends Component{
  render(){
    return(
      <>
      <div>
      <h4>Bad Robot</h4>
        <p>This is what you said: { this.props.badRobotSays} </p>
      </div>
      </>
    )
  }
}


export default BadRobot;
