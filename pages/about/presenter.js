// @flow

import React from 'react';
import Router from 'next/router';

import Layout from '../../layout';


export default class Presenter extends React.Component<void> {
  render() {
    return (
      <Layout>
        <p>About page.</p>

        <div>
          Click <span onClick={() => Router.push('/')}>return</span>
        </div>
      </Layout>
    );
  }
}
