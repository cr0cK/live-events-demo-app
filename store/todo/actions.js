// @flow

import type {
  AddTodoAction,
  RemoveTodoAction,
} from './types';

export const addTodo = ({ name }: { name: string }): AddTodoAction => ({
  type: 'ADD_TODO',
  name,
});

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: 'REMOVE_TODO',
  id,
});
