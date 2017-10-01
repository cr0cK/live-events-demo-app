// @flow

import type { State as EventsState } from '../store/events/types';

export type FullState = {
  events: EventsState,
};

export type Dispatch = (any) => any;
export type GetState = () => FullState;
export type ThunkAction<T> = (dispatch: Dispatch, getState: GetState) => T;
