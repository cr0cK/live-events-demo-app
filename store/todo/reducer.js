// @flow

import type {
  TodoAction,
  State,
} from './types';

export const initialState: State = {
  todos: [{
    id: 1,
    name: 'Do some stuff',
  }, {
    id: 2,
    name: 'Do extra stuff',
  }],
};

export default (state: State, action: TodoAction): State => {
  switch (action.type) {
    case 'ADD_TODO': {
      const nextId = state.todos.length ?
        Math.max(...state.todos.map(todo => todo.id)) + 1 :
        0;

      const newTodo = {
        id: nextId,
        name: action.todo.name,
      };

      return {
        ...state,
        todos: [
          ...state.todos,
          newTodo,
        ],
      };
    }

    case 'REMOVE_TODO': {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    }

    default:
      return initialState;
  }
};
