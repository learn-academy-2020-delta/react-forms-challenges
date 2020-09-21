import React, { Component } from 'react';

class GoodRobot extends Component {

    render() {

        return (
            <h4>{`I hear you saying "${ this.props.value }". Is that correct?`}</h4>
        )
    }
}

export default GoodRobot
