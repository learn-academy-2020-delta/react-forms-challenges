import React, { Component } from 'react';

class GoodRobot extends Component{
  render(){
    return(
      <>
      <div>
      <h4>Good Robot</h4>
        <p>You are saying: { this.props.goodRobotSays }</p>
      </div>
      </>
    )
  }
}


export default GoodRobot;
