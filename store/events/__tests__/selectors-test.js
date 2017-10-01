// @flow

import {
  selectLiveEvents,
  selectHistory,
} from '../selectors';

import type {
  Event,
} from '../types';

import type {
  FullState,
} from '../../../types';


describe('Events selectors', () => {
  const event1 = ({
    userName: 'toto',
  }: $Shape<Event>);

  const event2 = ({
    userName: 'titi',
  }: $Shape<Event>);

  const fullState: FullState = {
    events: {
      live: [event1],
      history: [event2],
    },
  };

  describe('selectLiveEvents', () => {
    it('should select live events', () => {
      const selected = selectLiveEvents(fullState);
      expect(selected).toEqual([event1]);
    });
  });

  describe('selectHistory', () => {
    it('should select live events', () => {
      const selected = selectHistory(fullState);
      expect(selected).toEqual([event2]);
    });
  });
});
