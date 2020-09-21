import React, { Component } from 'react';

export default class GoodBot extends Component {
    render (){
        return (
            <div id="bot-box">
                <h2>Good Bot</h2>
                <p>I hear you saying { this.props.userInput }. Is that correct?</p>
            </div>
            );
    }
}
