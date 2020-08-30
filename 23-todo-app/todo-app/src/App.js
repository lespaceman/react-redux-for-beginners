import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Todos from './Todos'


class App extends Component {

  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play R6S" }
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState(
      {
        todos: todos
      }
    )
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Tasks for Today</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />

      </div>
    );
  }
}

export default App
