// @flow

import React from 'react';

import type {
  Event,
} from '../../store/events/types';

type EventProps = {
  event: Event,
};

export default class Presenter extends React.PureComponent<EventProps> {
  render() {
    return (
      <div>
        Event {JSON.stringify(this.props.event, null, 2)}
      </div>
    );
  }
}
