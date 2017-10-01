const express = require('express');
const next = require('next');

const config = require('./config');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => handle(req, res));

  server.listen(config.web.port, (err) => {
    if (err) {
      throw err;
    }

    /* eslint-disable no-console */
    console.log(`> API is running on http://localhost:${config.api.port}`);
    console.log(`> App is running on http://localhost:${config.web.port}`);
    console.log(`> Proxy is running on http://localhost:${config.proxy.port}`);
    /* eslint-enable no-console */
  });
});
