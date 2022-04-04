const {ApolloServer} = require('apollo-server');

const server = new ApolloServer({
    typeDefs: require('./schemas').typeDefs,
    resolvers: require('./resolvers').resolvers,
    context: require('./context').context
});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
