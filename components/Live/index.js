// @flow

/* global EventSource */

import get from 'lodash/get';
import React from 'react';
import EventSourcePolyfill from 'eventsource';

import Layout from '../../layout';
import EventsTable from './EventsTable';

import type {
  Event as TEvent,
  SaveLiveEventActionCreator,
  SaveEventInHistoryActionCreator,
} from '../../store/events/types';


export type PresenterStateProps = {
  events: Array<TEvent>,
};

export type PresenterDispatchProps = {
  saveLiveEvent: SaveLiveEventActionCreator<Promise<*>>,
  saveEventInHistory: SaveEventInHistoryActionCreator<Promise<*>>,
};

export type PresenterProps =
  PresenterStateProps &
  PresenterDispatchProps;

export default class Presenter extends React.Component<PresenterProps> {
  evtSource: Object;

  /**
   * Connect on the SSE endpoint and listen on data event.
   */
  componentDidMount() {
    // $FlowFixMe
    const EventSourceConstructor = typeof EventSource !== 'undefined' ?
      EventSource :
      EventSourcePolyfill;

    this.evtSource = new EventSourceConstructor('/api/events');
    this.evtSource.addEventListener('data', this.receiveData, false);
  }

  /**
   * Unbind handlers.
   */
  componentWillUnmount() {
    // SSE Polyfill does not provide a `removeEventListener` function
    if (this.evtSource && typeof this.evtSource.removeEventListener === 'function') {
      this.evtSource.removeEventListener('data', this.receiveData);
    }
  }

  /**
   * Handler when receiving data from SSE.
   * Dispatch an action to refresh UI.
   */
  receiveData = (e: any) => {
    try {
      const event = JSON.parse(get(e, 'data', {}));
      this.props.saveLiveEvent(event);
      this.props.saveEventInHistory(event);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Invalid data!', err);
    }
  }

  /**
   * Add an uniq key for each event and reverse the array to display
   * the last event at the top of the table.
   */
  getEvents() {
    return this.props.events.map((event) => ({
      // create a pseudo uniq index
      key: `event-${event.userName}-${event.email}`,
      ...event,
    })).reverse();
  }

  render() {
    return (
      <Layout title="Live Events">
        <EventsTable
          events={this.getEvents()}
        />
      </Layout>
    );
  }
}
