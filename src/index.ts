import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = 4000;


const mainServer = async () => {
  const url = await startStandaloneServer(server, {
    listen:{port}
  }).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
  })

  return url;
}

mainServer();

