// @flow

import withRedux from 'next-redux-wrapper';
import { compose } from 'redux';
// import { connect } from 'react-redux';

import initStore from '../store';

import AboutPresenter from './about/presenter';


// const mapStateToProps = (state) => ({
//   todos: state.todo.todos,
// });

// const mapDispatchToProps = (dispatch) => ({
//   // fetchOperations: (args) => dispatch(fetchOperations(args)),
// });

const DecoratedAbout = compose(
  // connect(mapStateToProps),
)(AboutPresenter);

export default withRedux(initStore)(DecoratedAbout);
