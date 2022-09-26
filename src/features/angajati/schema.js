const { gql } = require('apollo-server-koa')

const angajatDefs = gql`
  type Angajat {
    id: Int!
    nume: String!
    prenume: String!
    email: String!
    parola: String
    dataAngajare: DateTime!
    dataNasterii: DateTime!
    cnp: String!
    serie: String!
    no: String!
    nrTelefon: String
    poza: [Byte]
    esteAdmin: Boolean
    departament: Departament
    functie: Functie
    concediat: Boolean
  }

  input NewAngajat {
    #id: Int!
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
    #poza: [Byte]
    esteAdmin: Boolean
    Manager: NewAngajat
    departament: Dep
    functie: Func
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

  input Dep {
    id: Int!
    denumire: String
  }

  input Func {
    id: Int!
    denumire: String
  }

  type AsyncResult {
    result1: Void
  }

  extend type Query {
    angajat(id: Int): Angajat!
  }

  extend type Mutation {
    newAngajat(input: NewAngajat!): AsyncResult
  }
`

module.exports = angajatDefs
