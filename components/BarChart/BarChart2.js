// @flow

import React from 'react';
import {
  scaleLinear,
  max,
} from 'd3';


export type BarChartProps = {
  data: Array<number>,
  size: Array<number>,
};

export default class BarChart extends React.Component<BarChartProps> {
  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const bar = {
      width: 25,
      color: '#fe9922',
    };

    const dataMax = max(this.props.data);
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    return this.props.data.map((value, i) => (
      <rect
        key={i}
        style={{ fill: bar.color }}
        x={i * bar.width}
        y={this.props.size[1] - yScale(value)}
        width={bar.width - 1}
        height={yScale(value)}
      />
    ));
  }

  render() {
    return (
      <svg width={500} height={500}>
        {this.createBarChart()}
      </svg>
    );
  }
}
