// @flow

import { compose } from 'redux';
import { connect } from 'react-redux';

import Decorate from '../hoc';
import {
  saveLiveEvent,
  saveEventInHistory,
} from '../store/events/actions';
import {
  selectLiveEvents,
} from '../store/events/selectors';

import Presenter, {
  type PresenterStateProps,
  type PresenterDispatchProps,
} from '../components/Live';


const mapStateToProps = (state): PresenterStateProps => ({
  events: selectLiveEvents(state),
});

const mapDispatchToProps = (dispatch): PresenterDispatchProps => ({
  saveLiveEvent: (event) => dispatch(saveLiveEvent(event)),
  saveEventInHistory: (event) => dispatch(saveEventInHistory(event)),
});

const Index = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Presenter);

export default Decorate(Index);
