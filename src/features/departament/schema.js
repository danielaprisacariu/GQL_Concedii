const { gql } = require('apollo-server-koa')

const departamentDefs = gql`
  type Depart {
    id: Int!
    Denumire: String
  }

  extend type Query {
    depart: [Depart]!
  }
`

module.exports = departamentDefs
