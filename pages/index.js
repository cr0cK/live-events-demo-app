// @flow

import withRedux from 'next-redux-wrapper';
import { compose } from 'redux';
import { connect } from 'react-redux';

import initStore from '../store';
import {
  addTodo,
  removeTodo,
} from '../store/todo/actions';

import TodosPresenter from './todos/presenter';


const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

const Index = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(TodosPresenter);

export default withRedux(initStore)(Index);
