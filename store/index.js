// @flow

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import eventsReducer from './events/reducer';

import type {
  FullState,
} from '../types';


const rootReducer = combineReducers({
  events: eventsReducer,
});

const middlewares = [
  thunkMiddleware,
];

export default (state: FullState) => (
  createStore(
    rootReducer,
    state,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  )
);
