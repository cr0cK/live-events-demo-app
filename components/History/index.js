// @flow

import React from 'react';
import { Icon } from 'antd';

import EventsTable from './EventsTable';
import Layout from '../../layout';

import type {
  Event as TEvent,
  GetHistoryActionCreator,
} from '../../store/events/types';


export type PresenterStateProps = {
  events: Array<TEvent>,
};

export type PresenterDispatchProps = {
  getHistory: GetHistoryActionCreator<Promise<Array<Event>>>,
};

export type PresenterProps =
  PresenterStateProps &
  PresenterDispatchProps;

export type PresenterState = {
  isWorking: boolean,
};

export default class Presenter extends React.Component<PresenterProps, PresenterState> {
  state = {
    isWorking: true,
  };

  componentDidMount() {
    this.props.getHistory()
      .then(() => {
        this.setState({ isWorking: false });
      })
      .catch(() => {
        this.setState({ isWorking: false });
      });
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

  renderContent() {
    if (this.state.isWorking) {
      return <Icon type="loading" />;
    }

    return (
      <EventsTable
        events={this.getEvents()}
      />
    );
  }

  render() {
    return (
      <Layout title="History">
        {this.renderContent()}
      </Layout>
    );
  }
}
