import React, { Component } from 'react';
import TodoItem from './TodoItem';

export class Todo extends Component {
  render() {
    return Object.keys(this.props.todos).map((key) => (
      <TodoItem
        key={key}
        index={key}
        todo={this.props.todos[key]}
        updateTodo={this.props.updateTodo}
        deleteTodoItem={this.props.deleteTodoItem}
      />
    ));
  }
}

export default Todo;
