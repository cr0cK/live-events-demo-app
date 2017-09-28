// @flow

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import todoReducer from './todo/reducer';

import type {
  FullState,
} from '../types';


const rootReducer = combineReducers({
  todo: todoReducer,
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
