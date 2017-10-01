// @flow

import React from 'react';
import Head from 'next/head';
// import Router from 'next/router';

import Navigation from './Navigation';


type LayoutProps = {
  children: any,
};

export default class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/antd.min.css" />
        </Head>

        <style jsx>{`
          div.app {
            padding: 0 10px;
          }

          div.main {
            margin: 15px 0px;
          }
        `}</style>

        <div className="app">
          <Navigation />

          <div className="main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
