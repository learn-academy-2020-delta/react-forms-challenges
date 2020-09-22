import React, {Component} from 'react';
import Text from './Components/Text'
import Refresh from './Components/Refresh'
import './App.css';



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {form : null}
  }

  handleFormSubmit = (newForm) => {
    this.setState({form : newForm})
  }

  render(){
    return(
      <>
        <h1> Mad Libs </h1>
        <Text
          handleFormSubmit= {this.handleFormSubmit}
        />
        {this.state.form &&
          <div>
            Today I bought a {this.state.form.noun} It’s not very {this.state.form.adjective} but it {this.state.form.verb} around all the time. My {this.state.form.noun2} doesn’t seem to like {this.state.form.noun} but that's because {this.state.form.noun2} is {this.state.form.adjective2}.
          </div>
        }
        <Refresh />
      </>

    )
  }
}
