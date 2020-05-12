import React, { Component } from 'react';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '4px',
      fontSize: '25px',
      borderBottom: '1px solid rgba(63,53,54,1)',
      textDecoration: this.props.todo.checked ? 'line-through' : 'none',
    };
  };

  toggleCheck = () => {
    const todoCopy = { ...this.props.todo };
    todoCopy.checked = !todoCopy.checked;
    this.props.updateTodo(todoCopy, this.props.index);
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            style={{ cursor: 'pointer' }}
            onChange={this.toggleCheck}
            checked={this.props.todo.checked}
          />{' '}
          {'  '}
          {this.props.todo.content}
          <button
            style={{
              position: 'absolute',
              right: '35px',
              cursor: 'pointer',
              borderRadius: '50%',
              background: 'red',
              color: 'white',
            }}
            onClick={() => this.props.deleteTodoItem(this.props.index)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;
