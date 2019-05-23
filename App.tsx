import React, {Component} from "react"

// import Swagger from "./src/SwaggerApp"
// import Graph from "./src/ApolloApp"

import ApolloSwaggerApp from "./src/ApolloSwaggerApp"

// const swagger = false

class App extends Component {
  render() {
    // if (swagger) {
    //   return <Swagger />
    // }

    // return <Graph />
    return <ApolloSwaggerApp />
  }
}

export default App
