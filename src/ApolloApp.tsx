import React, {Component} from "react"
import {StyleSheet, View} from "react-native"
import RNPickerSelect from "react-native-picker-select"
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo"
import {ApolloQueryResult} from "apollo-client"
import gql from "graphql-tag"

import {Status} from "../generated/globalTypes"
import {StatusQuery} from "../generated/StatusQuery"

export const query = gql`
  query StatusQuery {
    status
  }
`

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const enumToArray = (enumValue: any): Status[] => {
  return Object.keys(enumValue)
    .map((i) => enumValue[i])
}

interface Props {}

interface State {
  selectedStatus: Status | null
}

const availableUserStatuses = enumToArray(Status)

class UpdateUserStatus extends Component<Props, State> {
  state: State = {
    selectedStatus: availableUserStatuses[2]
  }

  constructor(props:Props) {
    super(props)

    client.query({
      query
    }).then((res: ApolloQueryResult<StatusQuery>) => {
      this.setState({
        selectedStatus: res.data.status
      })
    })
  }

  render() {
    const {selectedStatus} = this.state

    const items = availableUserStatuses.map((i) => ({
      label: i.toString(),
      value: i
    }))

    return (
      <ApolloProvider client={client}>
        <View>
          <RNPickerSelect
            items={items}
            onValueChange={(value: Status) => {
              this.setState({
                selectedStatus: value
              })
            }}
            style={selectStyles}
            value={selectedStatus} />
        </View>
      </ApolloProvider>
    )
  }
}

const selectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    color: "black",
    marginTop: 40,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingRight: 30,
    paddingVertical: 12
  }
})

export default UpdateUserStatus
