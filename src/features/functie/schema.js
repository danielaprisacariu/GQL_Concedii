const { gql } = require('apollo-server-koa')

const functieDefs = gql`
  type Func {
    Id: Int!
    Denumire: String
  }

  extend type Query {
    func: [Func]!
  }
`

module.exports = functieDefs
