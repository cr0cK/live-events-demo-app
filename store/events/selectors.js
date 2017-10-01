// @flow

// import { createSelector } from 'reselect';

import type { FullState } from '../../types';

export const selectLiveEvents = (state: FullState) => state.events.list;
