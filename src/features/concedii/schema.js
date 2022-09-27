const { gql } = require('apollo-server-koa')

const concediuDefs = gql`
  input ConcediuNou {
    tipConcediuId: Int!
    dataInceput: DateTime!
    dataSfarsit: DateTime!
    inlocuitorId: Int!
    comentarii: String
    stareConcediuId: Int!
    angajatId: Int!
    zileConcediu: Int
  }

  type AsyncResultType {
    result1: Void
  }

  extend type Mutation {
    inserareConcediu(input: ConcediuNou!): Void
  }
`

module.exports = concediuDefs
