const {ApolloServer} = require("apollo-server-express")
const express = require("express")
const {makeExecutableSchema} = require("apollo-server")

const typeDefs = require("./generated.ts")

const schema1 = `
  extend type Query {
    status: User_status!
  }
`

const resolvers = {
  Query: {
    status: () => {
      return "pending"
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs: [schema1, typeDefs],
  resolvers
})

const server = new ApolloServer({schema})
const app = express()

server.applyMiddleware({app})
app.listen({port: 4000})

console.log("Running a GraphQL API server at localhost:4000/graphql")
