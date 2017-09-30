// @flow

import type {
  EventAction,
  State,
} from './types';

export const initialState: State = {
  list: [],
};

export default (state: State, action: EventAction): State => {
  switch (action.type) {
    case 'SAVE_EVENT': {
      return {
        ...state,
        list: state.list.concat(action.event),
      };
    }

    default:
      (action: empty);    // eslint-disable-line
      return initialState;
  }
};
