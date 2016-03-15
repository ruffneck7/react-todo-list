import React , { Component } from 'react'

class TextDisplay extends Component {

  handleClick() {
    //console.log(this);

    this.props.deleteLetter();
  }
  render() {
  	return (
      <div>

        <div>{this.props.text}</div>
        <button onClick={this.handleClick.bind(this)}>delete</button>
      </div>
  	)
  }

}

export default TextDisplay
