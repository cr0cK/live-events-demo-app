// @flow

/**
 * Global app High Order Component.
 */

import type { Node } from 'react';
import { compose } from 'redux';
import withRedux from 'next-redux-wrapper';
// import withRouter from 'next/router';

import initStore from '../store';


export default (App: Node) => {
  const DecoratedApp = compose(
    withRedux(initStore),
    // withRouter,
  )(App);

  return DecoratedApp;
};
