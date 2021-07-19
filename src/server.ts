import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const devUrl = `http://localhost:${PORT}`;

express() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware(),
  )
  .listen(PORT, () => {
    if (dev) {
      console.log(`App listening at ${devUrl}`);
    }
  });
