// @flow

/* global EventSource */

import get from 'lodash/get';
import React from 'react';
import EventSourcePolyfill from 'eventsource';

import Layout from '../../layout';
import Event from './Event';

import type {
  Event as TEvent,
} from '../../store/events/types';

type PresenterProps = {
  events: Array<TEvent>,
  saveEvent: Function,
};

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
    if (typeof this.evtSource.removeEventListener === 'function') {
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
      this.props.saveEvent(event);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Invalid data!', err);
    }
  }

  render() {
    return (
      <Layout>
        <h2>Events</h2>

        <ul>
          {this.props.events.map((event, i) => {
            const key = `event-${i}`;
            return <Event key={key} event={event} />;
          })}
        </ul>
      </Layout>
    );
  }
}
