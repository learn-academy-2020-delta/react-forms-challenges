import React, { Component } from 'react';
import Form from './Components/Form'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: null
    }
  }

  handleFormSubmit = (newForm) => {
    this.setState({ form: newForm })
  }

  restartButton = () => {
    window.location.reload()
  }

  render() {
    return (
      <>
        <h1>Mad Libs</h1>
        <Form
          handleFormSubmit={this.handleFormSubmit}
          restartButton = {this.restartButton}
        />
        { this.state.form &&
          <div id="madlib">
            {this.state.form.adjective} Macdonald had a {this.state.form.noun}, E-I-E-I-O
              and on that {this.state.form.noun} he had a(n) {this.state.form.animal}, E-I-E-I-O
              with a {this.state.form.noise} {this.state.form.noise} here
              and a {this.state.form.noise} {this.state.form.noise} there,
              here a {this.state.form.noise}, there a {this.state.form.noise},
              everywhere a {this.state.form.noise} {this.state.form.noise}, {this.state.form.adjective}   Macdonald had a {this.state.form.noun}, E-I-E-I-O.
            </div>
        }
      </>
    );
  }
}

export default App;
