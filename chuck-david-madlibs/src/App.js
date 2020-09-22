import React, { Component } from 'react'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: null
    }
  }

  // to get info from child back to parent
  handleFormSubmit = (newForm) => {
    this.setState({ form: newForm })
  }

  // handleClear = () => {
  //   const { form } = this.state
  //   console.log("clearing!")
  //   this.setState({ form: null})
  // }

  render(){
    console.log(this.state.form) // check the value of userName here as it evolves
    return(
      <>
        <h1>Mad Libs</h1>
        <Form
          handleFormSubmit={ this.handleFormSubmit }
        />
        <br />

        <br />
        { this.state.form &&
          <div>
            I am a { this.state.form.firstNoun }. I can { this.state.form.firstVerb } very fast.  When I stay in the sun too long, my { this.state.form.firstAdjective } skin begins to peel.  My friend is a { this.state.form.lastNoun }.  We go to the park and { this.state.form.lastVerb } all the time.  It makes the day go by { this.state.form.lastAdjective }.
          </div>
        }
      </>
    )
  }
}

export default App
