import express from 'express';
import next from 'next';
import { createApolloServer } from './graphql';
import { connect } from './database';
import { initUserAuth } from './components/auth';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

connect();

app.prepare().then(() => {
  const server = express();

  initUserAuth(server);

  const apolloServer = createApolloServer();
  apolloServer.applyMiddleware({ app: server });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on ${process.env.BASE_URL} on port ${port}`);
  });
});
