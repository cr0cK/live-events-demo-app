// @flow

import React, { type Node } from 'react';
import Head from 'next/head';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Navigation from './Navigation';


type LayoutProps = {
  title: string,
  controls?: Array<Node>,
  children: Node,
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
            position: relative;
            margin: 8px 0px;
          }

          div.controls {
            position: absolute;
            top: 0;
            right: 0;
          }

          div.children {
            margin: 10px 0;
          }
        `}</style>

        <LocaleProvider locale={enUS}>
          <div className="app">
            <Navigation />

            <div className="main">
              <h1>{this.props.title}</h1>

              {this.props.controls && (
                <div className="controls">
                  {this.props.controls}
                </div>
              )}

              <div className="children">
                {this.props.children}
              </div>
            </div>
          </div>
        </LocaleProvider>
      </div>
    );
  }
}
