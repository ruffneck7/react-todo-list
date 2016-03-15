import React , { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {

  constructor(props, context) {
  	super(props, context);
  	this.state = {
  		inputText: 'initial Text'
  	}
  }

  handleChange(event) {
  	//console.log(event.target.value)
  	this.setState({
  		inputText: event.target.value
  	})
  }

  render() {
  	return (
      <div>
  		<input 
  		  type="text" 
  		  placeholder="hehehe" 
  		  value={this.state.inputText}
  		  onChange={this.handleChange.bind(this)}></input>

        <TextDisplay text={this.state.inputText}/>
        </div>
  	)
  }

}

export default TextInput