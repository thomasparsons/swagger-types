import React, {Component} from "react"
import {StyleSheet, View} from "react-native"
import RNPickerSelect from "react-native-picker-select"
import ApolloClient from "apollo-boost"
import {ApolloProvider, graphql} from "react-apollo"
import gql from "graphql-tag"
import {status} from "./generated/enums"


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const enumToArray = (enumValue: any): status[] => {
  return Object.keys(enumValue)
    .map((i) => enumValue[i])
}

interface Props {}

interface State {
  selectedStatus: status
}

const availableUserStatuses = enumToArray(status)

class UpdateUserStatus extends Component<Props, State> {
  state:State = {
    selectedStatus: availableUserStatuses[0]
  }

  constructor(props:Props) {
    super(props)

    client.query({
      query: gql`
        query StatusQuery {
          status
        }
      `
    }).then(({data}: any) => {
      this.setState({
        selectedStatus: data.status
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
            onValueChange={(value: status) => {
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
