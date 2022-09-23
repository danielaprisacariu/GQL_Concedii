const { gql } = require('apollo-server-koa')
const concediiDefs = gql`
  type ConcediiInfo {
    id: Int!
    dataInceput: String!
    dataSfarsit: String!
    comentarii: String
    stareConcediu: StareConcediu
    tipConcediu: TipConcediu
    angajat: Angajat
    inlocuitor: Angajat
  }
  type StareConcediu {
    id: Int!
    nume: String
    cod: String
  }
  type TipConcediu {
    id: Int!
    nume: String
    cod: String
    zileTotaleConcediu: Int
  }
  type Angajat {
    id: Int!
    nume: String
    prenume: String
  }
  extend type Query {
    concediiData(id: Int!): ConcediiInfo!
  }
`
module.exports = concediiDefs
