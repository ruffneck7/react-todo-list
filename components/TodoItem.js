import React , { Component } from 'react'



class TodoItem extends Component {

  handleComplete() {
    console.log('complete')
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    console.log('delete')
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render() {
  	return (
        <li>
         <div>{this.props.todo.text}</div>
         <button onClick={this.handleComplete.bind(this)}>complete</button>
         <button onClick={this.handleDelete.bind(this)}>delete</button>
        </li> 
      )
  }

}

export default TodoItem
