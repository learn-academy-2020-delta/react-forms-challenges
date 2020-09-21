import React, {Component} from 'react'



export default class ThirdRobot extends Component {
    backwardsGenerator = (string) => {
        return string.split("").reverse().join("")
    }

    render() {
        return(
            <>
            <p>I hear you saying { this.backwardsGenerator(this.props.userInput) }. Is that correct?</p>
            </>
        )
    }
}