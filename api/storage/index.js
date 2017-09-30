const { createAction } = require('bouchon');

const actions = {
  get: createAction('Get saved events'),
  post: createAction('Save events'),
};

const selectors = {};
selectors.all = () => (state) => state.storage;
selectors.last = () => (state) => state.storage[state.storage.length - 1];

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
  name: 'storage',
  data: require('./data'),
  reducer,
  endpoint: 'api/storage',
  routes,
};
