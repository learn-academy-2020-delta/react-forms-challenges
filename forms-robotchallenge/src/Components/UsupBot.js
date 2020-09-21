import React, { Component } from 'react';

export default class UsupBot extends Component {

    handleUsup = (userInput) => {
        let bla = ["U", "s", "u", "p"]
        let newArr = userInput.split("")
        let blaIndex = 0
        return newArr.map(letter => {
            letter = bla[blaIndex]
            blaIndex++
            if(blaIndex === 4){
                blaIndex = 0
            }
            return letter
        }).join("")
    }

    render (){
        return (
            <div id="bot-box">
                <h2>Usup Bot</h2>
                <p>I hear you saying { this.handleUsup(this.props.userInput) }. Is that correct?</p>
            </div>
            );
    }
}
