// @flow

import { compose } from 'redux';
import { connect } from 'react-redux';

import Decorate from '../hoc';
import {
  getHistory,
} from '../store/events/actions';

import {
  selectHistory,
} from '../store/events/selectors';

import HistoryPresenter from '../components/History';


const mapStateToProps = (state) => ({
  events: selectHistory(state),
});

const mapDispatchToProps = (dispatch) => ({
  getHistory: () => dispatch(getHistory()),
});

const Index = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(HistoryPresenter);

export default Decorate(Index);
