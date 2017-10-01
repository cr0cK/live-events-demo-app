// @flow

import React from 'react';
import Router from 'next/router';
import { Menu, Icon } from 'antd';

type NavigationProps = {};

type NavigationState = {
  current: 'live' | 'history',
};

export default class Navigation extends React.PureComponent<NavigationProps, NavigationState> {
  state = {
    current: 'live',
  };

  /**
   * Init current state from pathname.
   * Could be done better.
   */
  componentDidMount() {
    let current = Router.pathname.slice(1);
    if (current === '') {
      current = 'live';
    }

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ current });
  }

  /**
   * Set current state and change url.
   */
  handleClick = (e: any) => {
    const url = e.key === 'live' ? '' : e.key;
    this.setState({ current: e.key });
    Router.push(`/${url}`);
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="live">
            <Icon type="wifi" />Live events
          </Menu.Item>

          <Menu.Item key="history">
            <Icon type="bars" />History
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
