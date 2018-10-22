import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state ={
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo=> {
      return todo.id !== id;
    })
    this.setState({
      ...this.state, todos:todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    if(todo.content === ""){
      return;
    }
    let todos = [...this.state.todos, todo]
    this.setState({
      ...this.state, todos: todos,
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
