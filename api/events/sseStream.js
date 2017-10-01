const faker = require('faker');
const isObject = require('lodash/isObject');


// send data through the response
const writeRes = (res, event, data) => {
  const formattedData = isObject(data) ?
    JSON.stringify(data) : data;

  res.write(`event: ${event}\n`);
  res.write(`data: ${formattedData}\n\n`);
};

const startTick = (res) => (
  setInterval(() => (
    writeRes(res, 'tick', null)
  ), 500)
);

const stopTick = (tickInterval) => {
  if (tickInterval) {
    clearInterval(tickInterval);
  }
};

const generateData = () => ({
  email: faker.internet.email(),
  userName: faker.internet.userName(),
  url: faker.internet.url(),
  ip: faker.internet.ip(),
  userAgent: faker.internet.userAgent(),
});

// send data over SSE
const streamResponse = () => (req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  const tickInterval = startTick(res);

  // send data every second
  const dataInterval = setInterval(() => {
    writeRes(res, 'data', generateData());
  }, 2000);

  // When the request is closed by the client, stop tick interval
  req.on('close', () => {
    stopTick(tickInterval);
    clearInterval(dataInterval);
  });
};

module.exports = {
  streamResponse,
};
