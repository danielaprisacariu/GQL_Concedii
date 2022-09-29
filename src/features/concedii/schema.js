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

  input UpdateConcediu {
    id: Int!
    stareConcediuId: Int!
  }

  type AsyncResultType {
    result1: Void
  }

  extend type Mutation {
    inserareConcediu(input: ConcediuNou!): Void
  }

  extend type Query {
    zileRamase(id: Int, tipConcediuId: Int): Int!
  }
  extend type Query {
    AllIstoricConcediiVerificare(id: Int): Int!
  }
  extend type Query {
    ConcediiInlocuitori(id: Int): Int!
  }
`

module.exports = concediuDefs
