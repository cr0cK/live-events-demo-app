# A sample React app with live events and storage

## Installation

Prerequisites: node >= 8, npm >=5

```
npm install
npm run build
npm run prod (or npm run dev)
```

Open your browser to `localhost:8000`.


## How does it work?

- There are 3 apps:

  * an React/Redux app powered by [nextjs](https://github.com/zeit/next.js/)
  * an API powered by [bouchon](https://www.npmjs.com/package/bouchon)
  * a proxy that plays the role of a LB

- On the 'Live Events' tab, some events are received via SSE and displayed in real time. Each event received is saved via the 'history' endpoint of the API.

- When clicking on the 'History' tab, all events saved are shown.


## Tests

`npm t`


## Flow

`npm run flow`


## Lint

`npm run lint`
