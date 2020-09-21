import React, { Component } from 'react';

class GoodRobot extends Component {
    render(){
        return(
            <div>
                <h3>Good Robot Says</h3>
                <p>{this.props.goodRobot}</p>
            </div>
        )
    }
}

export default GoodRobot