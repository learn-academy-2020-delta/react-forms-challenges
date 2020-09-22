import React, { Component } from 'react';
import MadLibsForm from './Components/MadLibsForm';
import MadLibsParagraph from './Components/MadLibsParagraph';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        form: null
    }
  }

  handleFormSubmit = (newForm) => {
    this.setState({ form: newForm })
  }

  render() {
    return (
      <>
        <h1>2020 News Generator</h1>
        <MadLibsForm 
          handleFormSubmit = { this.handleFormSubmit }
        />
        { this.state.form && 
          <MadLibsParagraph form= { this.state.form }/>
        }
      </>
    );
  }
}

