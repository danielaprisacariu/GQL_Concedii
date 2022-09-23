const { gql } = require('apollo-server-koa')

const angajatDefs = gql`
  type Angajat {
    id: Int!
    nume: String!
    prenume: String!
    email: String!
    parola: String!
    dataAngajare: DateTime!
    dataNasterii: DateTime!
    cnp: String!
    serie: String!
    no: String!
    nrTelefon: String
    #poza: Byte[]
    esteAdmin: Boolean
    # Manager: Angajat
    departament: Departament
    functie: Functie
    concediat: Boolean
  }

  type Departament {
    id: Int!
    denumire: String
  }

  type Functie {
    id: Int!
    denumire: String
  }

  extend type Query {
    angajat(id: Int): Angajat!
  }
`

module.exports = angajatDefs
