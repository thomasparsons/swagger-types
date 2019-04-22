import React, {Component} from "react"

import Swagger from "./src/SwaggerApp"
import Graph from "./src/ApolloApp"

const swagger = false

class App extends Component {
  render() {
    if (swagger) {
      return <Swagger />
    }

    return <Graph />
  }
}

export default App
