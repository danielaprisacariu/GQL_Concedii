const { makeExecutableSchema } = require('@graphql-tools/schema')
const merge = require('lodash.merge')

const { loadTypedefsSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { join } = require('path')

const userResolvers = require('../features/user/resolvers')
const userDefs = require('../features/user/schema')
const ToateConResolvers = require('../features/common/ToateConcediile/resolvers')
const ToateConcediileDefs = require('../features/common/ToateConcediile/schema')
const concediiResolvers = require('../features/common/concediileMele/resolvers')
const concediiDefs = require('../features/common/concediileMele/schema')
const angajatResolvers = require('../features/angajati/resolvers')
const angajatDefs = require('../features/angajati/schema')
const newUserDefs = require('../features/common/newUser/schema')
const concediuDefs = require('../features/concedii/schema')
const concediuResolvers = require('../features/concedii/resolvers')
const administrareDefs = require('../features/common/AdministrareAngajati/schema')
const newUserResolver = require('../features/common/newUser/resolver')
const tipConcediuDefs = require('../features/tipConcedii/schema')
const tipConcediuResolvers = require('../features/tipConcedii/resolvers')
const departamentDefs = require('../features/departament/schema')
const departamentResolvers = require('../features/departament/resolvers')
const functieDefs = require('../features/functie/schema')
const functieResolvers = require('../features/functie/resolvers')
const AdministrareAngajatiResolvers = require('../features/common/AdministrareAngajati/resolvers')
const oldTypeDefs = []
const sources = loadTypedefsSync(join(__dirname, '../**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const resolvers = merge(
  concediiResolvers,
  AdministrareAngajatiResolvers,
  ToateConResolvers,
  userResolvers,
  angajatResolvers,
  concediuResolvers,
  tipConcediuResolvers,
  departamentResolvers,
  functieResolvers,
  newUserResolver
)

const typeDefs = [
  ...sources.map(source => source.document),
  ...oldTypeDefs,
  ToateConcediileDefs,
  userDefs,
  angajatDefs,
  administrareDefs,
  concediiDefs,
  concediuDefs,
  tipConcediuDefs,
  departamentDefs,
  functieDefs,
  newUserDefs
]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
