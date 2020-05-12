import React, { Component } from 'react';

export class InputTodoItem extends Component {
  todoItemRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodoItem = {
      content: this.todoItemRef.current.value,
      checked: false,
    };
    this.props.addToList(newTodoItem);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input ref={this.todoItemRef} type="text" />
        <button type="submit"> Add +</button>
      </form>
    );
  }
}

export default InputTodoItem;
