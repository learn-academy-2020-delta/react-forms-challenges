import React, { Component } from 'react';

class DalekRobot extends Component{
  render(){
    return(
      <>
      <div>
      <h4>The Dalek</h4>
        <p>You said "{ this.props.dalekRobotSays }" did you mean: Exterminate! </p>
      </div>
      </>
    )
  }
}


export default DalekRobot;
