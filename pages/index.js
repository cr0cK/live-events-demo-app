// @flow

import { compose } from 'redux';
import { connect } from 'react-redux';

import Decorate from '../hoc';
import {
  saveEvent,
} from '../store/events/actions';
import {
  selectLiveEvents,
} from '../store/events/selectors';

import EventsPresenter from '../components/Live';


const mapStateToProps = (state) => ({
  events: selectLiveEvents(state),
});

const mapDispatchToProps = (dispatch) => ({
  saveEvent: (event) => dispatch(saveEvent(event)),
});

const Index = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(EventsPresenter);

export default Decorate(Index);
