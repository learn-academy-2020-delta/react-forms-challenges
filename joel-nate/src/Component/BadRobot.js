import React, { Component } from 'react';

class BadRobot extends Component{
  render(){
    return(
      <>
      <div>
      <h4>Bad Robot</h4>
        <p>Hello { this.props.badRobotSays }</p>
      </div>
      </>
    )
  }
}


export default BadRobot;
