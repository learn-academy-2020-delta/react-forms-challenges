import React, { Component } from 'react'

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: {
        noun: "",
        adjective: "",
        verb: "",
        pronoun: "",
        adverb: ""
      }
    }
  }

  handleChange = (event) => {
    // console.log(e.target.name)
    const { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({ form: form })
  }

  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    console.log("clicked!")
    this.props.handleFormSubmit(this.state.form)
  }
  handleReset = () =>{
    window.location.reload()
  }
  render(){
    // console.log(this.state.form)
    return(
      <React.Fragment>
        <h3>Please enter the following information:</h3>
        <form>
          <label>Noun: </label>
          <input
            name="noun"
            type="text"
            value={ this.state.form.noun }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <label>Adjective: </label>
          <input
            name="adjective"
            type="text"
            value={ this.state.form.adjective }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <label>Verb: </label>
          <input
            name="verb"
            type="text"
            value={ this.state.form.verb }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <label>Adverb: </label>
          <input
            name="adverb"
            type="text"
            value={ this.state.form.adverb }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <label>Pronoun: </label>
          <input
            name="pronoun"
            type="text"
            value={ this.state.form.pronoun }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <input
            id="submitButton"
            type="submit"
            value="Create Madlib!"
            onClick={ this.handleSubmit }
          />
          <input
            id="clearButton"
            type="submit"
            value="Clear!"
            onClick={ this.handleReset }
          />
        </form>
      </React.Fragment>
    )
  }
}
export default Form
