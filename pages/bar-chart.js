// @flow

import { compose } from 'redux';
import { connect } from 'react-redux';

import Decorate from '../hoc';

import Presenter from '../components/BarChart';


const mapStateToProps = (state) => ({
  // events: selectHistory(state),
});

const mapDispatchToProps = (dispatch) => ({
  // getHistory: () => dispatch(getHistory()),
});

const Index = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Presenter);

export default Decorate(Index);
