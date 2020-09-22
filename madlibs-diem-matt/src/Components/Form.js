import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                adjective: "",
                noun: "",
                animal: "",
                noise: ""
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
        return (
            <>
                <form>
                    <div id="adjective">
                        <label>Please enter an adjective: </label>
                        <input
                            name="adjective"
                            type="text"
                            value={this.state.form.adjective}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div id="noun">
                        <label>Please enter a noun: </label>
                        <input
                            name="noun"
                            type="text"
                            value={this.state.form.noun}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div id="animal">
                        <label>Please enter an animal: </label>
                        <input
                            name="animal"
                            type="text"
                            value={this.state.form.animal}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div id="noise">
                        <label>Please enter a noise: </label>
                        <input
                            name="noise"
                            type="text"
                            value={this.state.form.noise}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div id="submit">
                        <input
                            type="submit"
                            value="Submit Form"
                            onClick={this.handleSubmit}
                        />
                    </div>
                    <div id = "button">
                        <button onClick={this.props.restartButton}>Restart MadLib</button>
                    </div>
                </form>
            </>
        )
    }
}

export default Form