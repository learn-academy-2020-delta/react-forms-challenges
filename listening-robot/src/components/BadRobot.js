import React, { Component } from 'react';

class BadRobot extends Component {
    ruinText = (text) => {
        let newString = ""
        for(let i = 0; i < text.length; i++) {
            if (i % 3 === 0) {
                newString += "B"
            } else if (i % 3 === 1) {
                newString += "L"
            } else if (i % 3 === 2) {
                newString += "A"
            }
        }
        return newString
    }
    render() {
        let { value } = this.props
        return (
            <h4>{`I hear you saying "${ this.ruinText(value) }". Is that correct?`}</h4>
        )
    }
}

export default BadRobot
