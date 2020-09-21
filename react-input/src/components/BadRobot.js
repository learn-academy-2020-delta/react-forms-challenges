import React, { Component } from 'react';

class BadRobot extends Component {
badChange = (string) => {
    let badRob = ""
    for(let index = 0; index < string.length; index++){
        badRob += "BLA";
    }
    return badRob
}
    render(){
        return(
            <>
            <div id="badRob">
                <h3>Bad Robot Says</h3>
                <p>{this.badChange(this.props.badRobot)}</p>
            </div>
            </>
        )
    }
}

export default BadRobot