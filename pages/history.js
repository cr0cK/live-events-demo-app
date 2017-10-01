// @flow

import { compose } from 'redux';
import { connect } from 'react-redux';

import Decorate from '../hoc';
import {
  saveEvent,
} from '../store/events/actions';

import HistoryPresenter from '../components/History';


const mapStateToProps = (state) => ({
  events: state.events.list,    // TODO use selector
});

const mapDispatchToProps = (dispatch) => ({
  saveEvent: (event) => dispatch(saveEvent(event)),
});

const Index = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(HistoryPresenter);

export default Decorate(Index);
