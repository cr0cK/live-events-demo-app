// @flow

import reducer from '../reducer';

import type {
  Event,
} from '../types';


describe('Events reducer', () => {
  const event1 = ({
    userName: 'toto',
  }: $Shape<Event>);

  const event2 = ({
    userName: 'titi',
  }: $Shape<Event>);

  describe('on DROP_LIVE_EVENTS action', () => {
    it('should drop all live events', () => {
      const oldState = {
        live: [event1, event2],
        history: [event1],
      };

      const action = {
        type: 'DROP_LIVE_EVENTS',
      };

      const newState = reducer(oldState, action);

      expect(newState).toEqual({
        live: [],
        history: [event1],
      });
    });
  });

  describe('on SAVE_LIVE_EVENT action', () => {
    it('should save an event', () => {
      const oldState = {
        live: [],
        history: [],
      };

      const action = {
        type: 'SAVE_LIVE_EVENT',
        event: event1,
      };

      const newState = reducer(oldState, action);

      expect(newState).toEqual({
        live: [event1],
        history: [],
      });
    });
  });

  describe('on SAVE_HISTORY_EVENTS action', () => {
    it('should save events in history', () => {
      const oldState = {
        live: [],
        history: [],
      };

      const action = {
        type: 'SAVE_HISTORY_EVENTS',
        events: [event1, event2],
      };

      const newState = reducer(oldState, action);

      expect(newState).toEqual({
        live: [],
        history: [event1, event2],
      });
    });
  });
});
