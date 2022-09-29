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
    poza: String
    esteAdmin: Boolean
    departament: Departament
    functie: Functie
    concediat: Boolean
  }

  type AngajatNumeConcatenat {
    id: Int!
    nume: String!
    managerId: Int
  }

  input NewAngajat {
    id: Int
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
    poza: String
    esteAdmin: Boolean
    managerId: Int
    departamentId: Int
    functieId: Int
    concediat: Boolean
  }

  input UpdateAngajat {
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
    poza: String
    esteAdmin: Boolean
    departament: DepartamentI
    functie: FunctieI
    concediat: Boolean
  }

  input DepartamentI {
    id: Int
    denumire: String
  }

  input FunctieI {
    id: Int
    denumire: String
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
    angajati: [Angajat]!
    angajatiNumeConcatenat(id: Int, idM: Int): [AngajatNumeConcatenat]!
  }

  extend type Mutation {
    newAngajat(input: NewAngajat!): Void
    updateAngajat(input: UpdateAngajat!): Void
  }
`

module.exports = angajatDefs
