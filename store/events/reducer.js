// @flow

import type {
  EventAction,
  State,
} from './types';

export const initialState: State = {
  live: [],
  history: [],
};

export default (state: State, action: EventAction): State => {
  switch (action.type) {
    case 'DROP_LIVE_EVENTS': {
      return {
        ...state,
        live: [],
      };
    }

    case 'SAVE_LIVE_EVENT': {
      return {
        ...state,
        live: state.live.concat(action.event),
      };
    }

    case 'SAVE_HISTORY_EVENTS': {
      return {
        ...state,
        history: action.events,
      };
    }

    default:
      (action: empty);    // eslint-disable-line
      return initialState;
  }
};
