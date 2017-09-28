// @flow

import type {
  AddTodoAction,
  RemoveTodoAction,
} from './types';

export const addTodo = (todo: { name: string }): AddTodoAction => ({
  type: 'ADD_TODO',
  todo,
});

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: 'REMOVE_TODO',
  id,
});
