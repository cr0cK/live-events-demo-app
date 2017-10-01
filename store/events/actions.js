// @flow

import get from 'lodash/get';
import axios from '../../libs/axios';
import type {
  Event,
  SaveLiveEventAction,
  SaveHistoryEventsAction,
  SaveEventInHistoryActionCreator,
  GetHistoryActionCreator,
} from './types';

import type {
  ThunkAction,
} from '../../types';


export const saveLiveEvent = (event: Event): SaveLiveEventAction => ({
  type: 'SAVE_LIVE_EVENT',
  event,
});

export const saveHistoryEvents = (events: Array<Event>): SaveHistoryEventsAction => ({
  type: 'SAVE_HISTORY_EVENTS',
  events,
});

/**
 * Save an event in the history.
 */
export const saveEventInHistory:
SaveEventInHistoryActionCreator<ThunkAction<Promise<*>>> = (event: Event) =>
  () => (
    axios.post('/history', event)
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Event saved.');
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('Error when saving the event in the history.');
      })
  );

/**
 * Get the history.
 */
export const getHistory:
GetHistoryActionCreator<ThunkAction<Promise<Array<Event>>>> = () =>
  (dispatch) => (
    axios.get('/history')
      .then((response) => {
        const events = get(response, 'data', {});
        dispatch(saveHistoryEvents(events));
        return Promise.resolve(events);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Error when saving the event in the history.', err);
      })
  );
