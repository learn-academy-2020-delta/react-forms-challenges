import React, { Component } from 'react';

export default class MadLibsForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                noun1: "",
                place: "",
                verb1: "",
                noun2: "",
                verb2: "",
                noun3: "",
                verb3: "",
                noun4: "",
                bodyPart: ""
              }
        }
    }

    handleChange = (e) => {
        const { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleFormSubmit(this.state.form)
    }

    render() {
        const { form } = this.state
    return (
        <form autocomplete= "off">
            <label>Noun: </label>
            <input
                name= "noun1"
                type= "text"
                value= { form.noun1 }
                onChange = { this.handleChange }
            />
            <br/>
            <label>US State: </label>
            <input
                name= "place"
                type= "text"
                value= { form.place }
                onChange = { this.handleChange }
            />
            <br/>
            <label>Verb (past tense): </label>
            <input
                name= "verb1"
                type= "text"
                value= { form.verb1 }
                onChange = { this.handleChange }
            />
            <br/>
            <label>Noun: </label>
            <input
                name= "noun2"
                type= "text"
                value= { form.noun2 }
                onChange = { this.handleChange }
            />
            <br/>
            <label>Verb (ing): </label>
            <input
                name= "verb2"
                type= "text"
                value= { form.verb2 }
                onChange = { this.handleChange }
            />
            <br/>
            <label>Noun: </label>
            <input
                name= "noun3"
                type= "text"
                value= { form.noun3 }
                onChange = { this.handleChange }
            />
            <br/>
            <label>Verb: </label>
            <input
                name= "verb3"
                type= "text"
                value= { form.verb3 }
                onChange = { this.handleChange }
            />
            <br/>
            <label>Noun: </label>
            <input
                name= "noun4"
                type= "text"
                value= { form.noun4 }
                onChange = { this.handleChange }
            />
            <br/>
            <label>Body Part: </label>
            <input
                name= "bodyPart"
                type= "text"
                value= { form.bodyPart }
                onChange = { this.handleChange }
            />
            <br/>
            <input
                type= "submit"
                value= "Enter Madlib!"
                onClick= { this.handleSubmit }
            />
        </form>
    );
    }
  }