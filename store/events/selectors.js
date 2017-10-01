// @flow

// import { createSelector } from 'reselect';

import type { FullState } from '../../types';

export const selectLiveEvents = (state: FullState) => state.events.live;
export const selectHistory = (state: FullState) => state.events.history;
