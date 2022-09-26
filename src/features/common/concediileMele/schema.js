const { gql } = require('apollo-server-koa')
const concediiDefs = gql`
  type ConcediiInfo {
    id: Int!
    dataInceput: DateTime
    dataSfarsit: DateTime
    comentarii: String
    stareConcediuNume: String
    tipConcediuNume: String
    inlocuitorNume: String
  }

  extend type Query {
    concediiData(id: Int!): [ConcediiInfo]
  }
`
module.exports = concediiDefs
