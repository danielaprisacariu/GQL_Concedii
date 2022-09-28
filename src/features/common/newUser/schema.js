const { gql } = require('apollo-server-koa')

const newUserDefs = gql`
  type UserInfo {
    id: Int!
    Email: String!
    Parola: String!
    isAdmin: Boolean
  }

  extend type Query {
    newUserData(Email: String, Parola: String): UserInfo
  }
`
module.exports = newUserDefs
