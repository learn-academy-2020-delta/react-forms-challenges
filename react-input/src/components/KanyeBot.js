import React, { Component } from 'react';

class KanyeBot extends Component {
    kanyeChange = (string) => {
        let kanyeChange = " "
        for(let index = 0; index < string.length; index++){
            kanyeChange += "Kanye 2024! ";
        }
        return kanyeChange
    }

    render(){
        return(
            <div>
                <h3>Kany Bot Says</h3>
                <p>{this.kanyeChange(this.props.kanyeBot)}</p>
            </div>
        )
    }
}

export default KanyeBot