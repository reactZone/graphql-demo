const {gql} = require("apollo-server");

exports.typeDefs = gql`
  type Site {
    id: ID
    title: String!
    description: String!
  }
  type Query {
    "A simple type for getting started!"
    hello: String,
    ping: String,
    site: Site,
  }
`