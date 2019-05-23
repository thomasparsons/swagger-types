const v = `
type Query {
  """
  By passing in the appropriate options, you can search for
  available users in the system
  
  """
  searchUsers(searchString: String): [User!]!
}

type User {
  id: String!
  status: User_status!
}

enum User_status {
  active
  pending
  cancelled
  disabled
  hello
}

`
module.exports = v
