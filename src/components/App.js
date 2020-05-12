import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Todo from './Todo';
import InputTodoItem from './InputTodoItem';
import About from './About';
import base from '../base';

class App extends Component {
  state = {
    todos: {},
  };

  componentDidMount() {
    this.ref = base.syncState('todo-list', {
      context: this,
      state: 'todos',
    });

    const initialTodos = {
      todo0: { content: 'This is a practice of react', checked: true },
      todo1: { content: 'Made By JOJO Jack', checked: false },
    };
    this.setState({
      todos: initialTodos,
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  updateTodo = (updatedTodoItem, key) => {
    const todos = { ...this.state.todos };
    todos[key] = updatedTodoItem;
    this.setState({ todos });
  };

  addToList = (newTodoItem) => {
    const todos = { ...this.state.todos };
    todos[`todo${Date.now()}`] = newTodoItem;
    this.setState({ todos });
  };

  deleteTodoItem = (key) => {
    const todos = { ...this.state.todos };
    todos[key] = null;
    this.setState({ todos });
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <InputTodoItem
                  todos={this.state.todos}
                  addToList={this.addToList}
                />
                <Todo
                  todos={this.state.todos}
                  updateTodo={this.updateTodo}
                  deleteTodoItem={this.deleteTodoItem}
                />
              </>
            )}
          />
          <Route path="/about" component={About} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
