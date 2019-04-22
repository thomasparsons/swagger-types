import React, {Component} from "react"

import Swagger from "./SwaggerApp"
import Graph from "./ApolloApp"

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
