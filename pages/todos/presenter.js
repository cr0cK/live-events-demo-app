// @flow

import React from 'react';
import Router from 'next/router';

import Layout from '../../layout';

import type {
  // AddTodoAction,
  // RemoveTodoAction,
  Todo,
} from '../../store/todo/types';

type PresenterProps = {
  todos: Array<Todo>,
  addTodo: Function,
  removeTodo: Function,
};

export default class Presenter extends React.Component<PresenterProps> {
  deleteTodo = (id: number) => {
    this.props.removeTodo(id);
  }

  renderTodo = (todo: Todo) => (
    <li key={todo.id}>
      <span>{todo.name}</span>
      <span onClick={() => this.deleteTodo(todo.id)}>[x]</span>
    </li>
  )

  addTodo = (e: any) => {
    e.preventDefault();

    this.props.addTodo({
      name: 'new todo',
    });
  }

  render() {
    return (
      <Layout>
        <h2>Todos</h2>

        <ul>
          {this.props.todos.map(this.renderTodo)}
        </ul>

        <input type="text" name="todo" />
        <input
          type="button"
          value="Add todo"
          onClick={this.addTodo}
        />

        <div>
          Click <span onClick={() => Router.push('/about')}>here</span> to read more
        </div>
      </Layout>
    );
  }
}
