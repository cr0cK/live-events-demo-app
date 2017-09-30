// @flow

import withRedux from 'next-redux-wrapper';
import { compose } from 'redux';
import { connect } from 'react-redux';

import initStore from '../store';
import {
  saveEvent,
} from '../store/events/actions';

import EventsPresenter from '../components/events/Presenter';


const mapStateToProps = (state) => ({
  events: state.events.list,    // TODO use selector
});

const mapDispatchToProps = (dispatch) => ({
  saveEvent: (event) => dispatch(saveEvent(event)),
});

const Index = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(EventsPresenter);

export default withRedux(initStore)(Index);
