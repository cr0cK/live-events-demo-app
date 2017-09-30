// @flow

import type {
  SaveEventAction,
  Event,
} from './types';

export const saveEvent = (event: Event): SaveEventAction => ({
  type: 'SAVE_EVENT',
  event,
});

// export const removeTodo = (id: number): RemoveTodoAction => ({
//   type: 'REMOVE_TODO',
//   id,
// });
