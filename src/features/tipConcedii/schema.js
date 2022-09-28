const { gql } = require('apollo-server-koa')

const tipConcediuDefs = gql`
  type TipConcediu {
    id: Int!
    nume: String!
    cod: String!
    zileTotaleConcediu: Int
  }

  extend type Query {
    tipConcedii: [TipConcediu]!
  }
`

module.exports = tipConcediuDefs
