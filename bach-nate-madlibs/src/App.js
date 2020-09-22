import React, { Component } from 'react';
import Form from './Component/Form';

import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: null
    }
  }
  handleFormSubmit = (newform) =>{
    this.setState({form: newform})
  }
render() {
  let { form } = this.state
  return (
    <>
      <Form
      handleFormSubmit={ this.handleFormSubmit }/>
      {this.state.form &&
        <div>
          There once was a {form.noun} who wanted to {form.verb}.  {form.pronoun} was a {form.adjective} {form.noun}.  {form.pronoun} learned very {form.adverb}.
        </div>}
    </>
  );
 }
}
export default App;
