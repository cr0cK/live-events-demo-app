/* eslint react/sort-comp: 0 */

// @flow

import React from 'react';
import { transition, easeQuadInOut, scaleLinear, select, max } from 'd3';

export type BarChartProps = {
  data: Array<number>,
  size: Array<number>,
};

export default class BarChart extends React.Component<BarChartProps> {
  bar = {
    width: 25,
    color: '#fe9922',
  };

  node: ?Element = undefined;
  created = false;
  transition = undefined;
  dataMax = undefined;
  yScale = (value: number) => value;

  constructor(props: BarChartProps) {
    super(props);

    if (typeof document !== 'undefined') {
      this.transition = transition()
        .duration(750)
        .ease(easeQuadInOut);
    }
  }

  componentDidUpdate() {
    if (!this.created) {
      this.createBarChart();
      this.created = true;
    } else {
      this.updateBarChart();
    }
  }

  createBarChart() {
    this.dataMax = max(this.props.data);

    this.yScale = scaleLinear()
      .domain([0, this.dataMax])
      .range([0, this.props.size[1]]);

    select(this.node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect');

    select(this.node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove();

    select(this.node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', this.bar.color)
      .attr('x', (d, i) => i * this.bar.width)
      .attr('y', d => this.props.size[1] - this.yScale(d))
      .attr('height', d => this.yScale(d))
      .attr('width', this.bar.width - 1);
  }

  updateBarChart() {
    select(this.node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', this.bar.color)
      .transition(this.transition)
      .attr('x', (d, i) => i * this.bar.width)
      .attr('y', d => this.props.size[1] - this.yScale(d))
      .attr('height', d => this.yScale(d))
      .attr('width', this.bar.width - 1);
  }

  render() {
    if (!this.props.data.length) {
      return <p>Waiting for data...</p>;
    }

    return (
      // eslint-disable-next-line no-return-assign
      <svg ref={node => (this.node = node)} width={500} height={500} />
    );
  }
}
