const { gql } = require('apollo-server-koa')
const ToateConcediileDefs = gql`
  type ToateConcediile {
    id: Int!
    angajatNume: String
    dataInceput: String!
    dataSfarsit: String!
    stareConcediu: String
    tipConcediuNume: String
    inlocuitorNume: String
  }
  extend type Query {
    ToateConData: ToateConcediile!
  }
`
module.exports = ToateConcediileDefs
