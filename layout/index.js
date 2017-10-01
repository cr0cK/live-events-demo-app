// @flow

import React from 'react';
import Head from 'next/head';
// import Router from 'next/router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Navigation from './Navigation';


type LayoutProps = {
  title: string,
  children: any,
};

export default class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <div>
        <Head>
          <title>Live Events Demo</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/antd.min.css" />
        </Head>

        <style jsx>{`
          div.app {
            padding: 0 10px;
          }

          div.main {
            margin: 8px 0px;
          }

          h1 {
            margin: 8px 0 0 0;
          }
        `}</style>

        <LocaleProvider locale={enUS}>
          <div className="app">
            <Navigation />

            <h1>{this.props.title}</h1>

            <div className="main">
              {this.props.children}
            </div>
          </div>
        </LocaleProvider>
      </div>
    );
  }
}
