const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    trackAPI: new TrackAPI(),
  }),
});

server.listen().then(() => {
  console.log("Server is running! Listening on port 4000");
  console.log("Query at https://studio.apollographql.com/dev");
});
