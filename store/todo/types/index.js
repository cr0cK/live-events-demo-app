// @flow

export type Todo = {
  id: number,
  name: string,
};

export type AddTodoAction = {
  type: 'ADD_TODO',
  todo: {
    name: string,
  }
};

export type RemoveTodoAction = {
  type: 'REMOVE_TODO',
  id: number,
};

export type TodoAction =
  AddTodoAction |
  RemoveTodoAction;

export type State = {
  todos: Array<Todo>,
};
