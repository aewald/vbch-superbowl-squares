import express from 'express';
import next from 'next';
import { createApolloServer } from './graphql';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

require('./database').connect();

app.prepare().then(() => {
  const server = express();

  const apolloServer = createApolloServer();
  apolloServer.applyMiddleware({ app: server });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`); 
  });
});
