const express = require("express")
const graphqlHTTP = require("express-graphql")
const {buildSchema} = require("graphql")

const schema = buildSchema(`
  enum Status {
    active
    pending
    cancelled
    disabled
  }

  type Query {
    status: Status!
  }
`)

const root = {
  status: () => {
    return "pending"
  }
}

const app = express()
app.use("/graphql", graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))
app.listen(4000)

console.log("Running a GraphQL API server at localhost:4000/graphql")
