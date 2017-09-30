// @flow

export type Todo = {
  id: number,
  name: string,
};

export type AddTodoAction = {|
  type: 'ADD_TODO',
  name: string,
|};

export type RemoveTodoAction = {|
  type: 'REMOVE_TODO',
  id: number,
|};

export type TodoAction =
  | RemoveTodoAction
  | AddTodoAction;

export type State = {
  todos: Array<Todo>,
};
