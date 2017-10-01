/* eslint import/no-extraneous-dependencies: 0 */

/**
 * Simple proxy.
 */

const express = require('express');
const proxy = require('http-proxy-middleware');

const config = require('../config');


const app = express();

// redirect API calls to bouchon
app.all('/api/*', proxy({
  target: `http://localhost:${config.api.port}`,
  changeOrigin: true,
}));

// redirect everything else to the next app
app.all('/*', proxy({
  target: `http://localhost:${config.web.port}`,
  changeOrigin: true,
}));

app.listen(config.proxy.port);

// eslint-disable-next-line no-console
console.log(`> Proxy is listening on localhost:${config.proxy.port}`);
