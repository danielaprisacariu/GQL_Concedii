const { gql } = require('apollo-server-koa')
const administrareDefs = gql`
  type Angajat {
    id: Int!
    nume: String
  }
  type Departament {
    id: Int!
    nume: String
  }
  type Functie {
    id: Int!
    nume: String
  }
  input modificareEchipa {
    managerEN: Int!
    angajatEN: Int!
  }

  input schimbareDepartament{
    angajatDep: Int!
    departament: Int!
  }
  input schimbareFunctie{
    angajatFunc: Int!
    functie: Int!
  }
  extend type Query {
    angajatiData(id: Int): [Angajat]
    manageriData: [Angajat]
    departamenteData: [Departament]
    functiiData: [Functie]
  }
  extend type Mutation {
    modificareEchipa(input: modificareEchipa!): Void

    schimbareDepartament(input:schimbareDepartament!): Void
    schimbareFunctie(input:schimbareFunctie!):Void
  }
`
module.exports = administrareDefs
