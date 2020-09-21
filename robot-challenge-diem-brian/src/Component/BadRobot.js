import React, {Component} from 'react'


export default class BadRobot extends Component {
    
    wompGenerator = (string) => {
        let totalWomp = " "
        for (let index = 0; index < string.length; index++) {
            totalWomp += "WOMP";
        }
        return totalWomp
    }

    render() {
        return(
            <>
                <p>I hear you saying { this.wompGenerator(this.props.userInput) }. Is that correct?</p>
            </>
        )
    }
}