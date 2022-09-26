const { gql } = require('apollo-server-koa')
const ToateConcediileDefs = gql`
  type ToateConcediile {
    id: Int
    angajatNume: String
    angajatPrenume: String
    dataInceput: DateTime
    dataSfarsit: DateTime
    stareConcediu: String
    tipConcediuNume: String
    inlocuitorNume: String
  }
  extend type Query {
    toateConcediileDATA: [ToateConcediile]!
  }
`
module.exports = ToateConcediileDefs
