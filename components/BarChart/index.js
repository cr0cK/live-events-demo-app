// @flow

import React from 'react';
import range from 'lodash/range';

import Layout from '../../layout';
import BarChart from './BarChart';
import BarChart2 from './BarChart2';

export type PresenterStateProps = {
};

export type PresenterDispatchProps = {
};

export type PresenterProps = PresenterStateProps & PresenterDispatchProps;

export type PresenterState = {
  values: Array<number>,
};

export default class Presenter extends React.Component<
  PresenterProps,
  PresenterState,
> {
  state = {
    values: [],
  };

  componentDidMount() {
    setInterval(() => {
      this.computeValues();
    }, 2000);
  }

  computeValues() {
    const values = range(0, 4).map(() => Math.floor(Math.random() * 10) + 1);
    this.setState({
      values,
    });
  }

  render() {
    return (
      <Layout title="Bar Chart">
        <BarChart data={this.state.values} size={[500, 500]} />
        <BarChart2 data={this.state.values} size={[500, 500]} />
      </Layout>
    );
  }
}
