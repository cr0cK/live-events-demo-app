// @flow

import React from 'react';
import { Table, Tooltip } from 'antd';

import type {
  Event,
} from '../../store/events/types';

type EventProps = {
  events: Array<Event>,
};

const getRowKey = (event: Event, i: number) => `${event.date}-${i}`;

export default class EventsTable extends React.Component<EventProps> {
  columns = [{
    title: 'UserName',
    dataIndex: 'userName',
    key: 'userName',
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: 'IP',
    dataIndex: 'ip',
    key: 'ip',
  }, {
    title: 'UserAgent (hover to see the full value)',
    dataIndex: 'userAgent',
    key: 'userAgent',
    // Show a tooltip when hovering the userAgent with the full value.
    render: (userAgent: string) => (
      <div>
        <Tooltip title={userAgent}>
          <span>{`${userAgent.slice(0, 25)}'...`}</span>
        </Tooltip>
      </div>
    ),
  }];

  render() {
    return (
      <Table
        columns={this.columns}
        dataSource={this.props.events}
        rowKey={getRowKey}
      />
    );
  }
}
