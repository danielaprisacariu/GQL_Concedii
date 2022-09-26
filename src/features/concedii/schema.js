const { gql } = require('apollo-server-koa')

const concediuDefs = gql`
  input concediuNou {
    tipConcediuId: Int!
    dataInceput: DateTime!
    dataSfarsit: DateTime!
    inlocuitorId: Int!
    comentarii: String
    stareConcediuId: Int!
    angajatId: Int!
    zileConcediu: Int
  }

  type AsyncResult {
    result1: Void
  }

  extend type Mutation {
    inserareConcediu(input: concediuNou!): AsyncResult
  }
`

module.exports = concediuDefs
