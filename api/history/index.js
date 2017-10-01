const { createAction } = require('bouchon');

const actions = {
  get: createAction('Get saved events'),
  post: createAction('Save events'),
};

const selectors = {};
selectors.all = () => (state) => state.history;
selectors.last = () => (state) => state.history[state.history.length - 1];

const reducer = {
  [actions.get]: state => state,
  [actions.post]: (state, { body }) => state.concat(body),
};

const routes = {
  'GET /': {
    action: actions.get,
    selector: selectors.all,
    status: 200,
  },
  'POST /': {
    action: actions.post,
    selector: selectors.last,
    status: 201,
  },
};

module.exports = {
  name: 'history',
  data: require('./data'),
  reducer,
  endpoint: 'api/history',
  routes,
};
