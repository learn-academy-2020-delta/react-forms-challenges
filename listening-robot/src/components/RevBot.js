import React, { Component } from 'react';

class RevBot extends Component {
    reverseText = (text) => {
        let textToArray = text.split("")
        console.log(textToArray)
        return textToArray.reverse().join("")
    }
    render() {
        let { value } = this.props
        return (
            <h4>{`I hear you saying "${ this.reverseText(value) }". Is that correct?`}</h4>
        )
    }
}

export default RevBot
