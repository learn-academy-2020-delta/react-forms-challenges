import React, {Component} from 'react';

export default class Text extends Component {
  constructor(props){
    super(props)

  this.state = {
    form: {
      noun: "",
      noun2: "",
      verb: "",
      verb2: "",
      adjective: "",
      adjective2: ""
    }
  }
}

  handleChange = (e) => {
    const {form} = this.state
      form[e.target.name] = e.target.value
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleFormSubmit(this.state.form)
  }

  render(){
    return(
      <>
        <h2> Fill out here </h2>
        <form>
          <label>
            noun:
          </label>
          <input name= "noun" type= "text" value= {this.state.noun} onChange= {this.handleChange} />
          <br></br>
          <label>
            noun2:
          </label>
          <input name= "noun2" type= "text" value= {this.state.noun2} onChange= {this.handleChange} />
          <br></br>
          <label>
            verb:
          </label>
          <input name= "verb" type= "text" value= {this.state.verb} onChange= {this.handleChange} />
          <br></br>
          <label>
            verb2:
          </label>
          <input name= "verb2" type= "text" value= {this.state.verb2} onChange= {this.handleChange} />
          <br></br>
          <label>
            adjective:
          </label>
          <input name= "adjective" type= "text" value= {this.state.adjective} onChange= {this.handleChange} />
          <br></br>
          <label>
            adjective2:
          </label>
          <input name= "adjective2" type= "text" value= {this.state.adjective2} onChange= {this.handleChange} />
          <input type= "submit" value= "Click Me" onClick= {this.handleSubmit} />
        </form>
      </>
    )
  }
}
