import React, { Component } from 'react';

export default class BadBot extends Component {


    handleBla = (userInput) => {
        let bla = ["B", "L", "A"]
        let newArr = userInput.split("")
        let blaIndex = 0
        return newArr.map(letter => {
            letter = bla[blaIndex]
            blaIndex++
            if(blaIndex === 3){
                blaIndex = 0
            }
            return letter
        }).join("")
    }

    render (){
        return (
            <div id="bot-box">
                <h2>Bad Bot</h2>
                <p>I hear you saying { this.handleBla(this.props.userInput) }. Is that correct?</p>
            </div>
            );
    }
}
