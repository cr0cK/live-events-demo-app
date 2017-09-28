// @flow

import React from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: any,
};

export default class Layout extends React.Component {
  props: LayoutProps;

  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        {this.props.children}
      </div>
    );
  }
}
