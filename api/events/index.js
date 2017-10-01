const { createAction } = require('bouchon');
const { streamResponse } = require('./sseStream');

const actions = {
  get: createAction('Retrieve events'),
};

const reducer = {
  [actions.get]: state => state,
};

const routes = {
  'GET /': {
    action: actions.generateData,
    middlewares: [streamResponse],
    status: 200,
  },
};

module.exports = {
  name: 'events',
  data: {},
  reducer,
  endpoint: 'api/events',
  routes,
};
