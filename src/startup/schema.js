const { makeExecutableSchema } = require('@graphql-tools/schema')
const merge = require('lodash.merge')

const { loadTypedefsSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { join } = require('path')

const userResolvers = require('../features/user/resolvers')
const userDefs = require('../features/user/schema')
const ToateConResolvers = require('../features/common/ToateConcediile/resolvers')

const concediiResolvers = require('../features/common/concediileMele/resolvers')
const concediiDefs = require('../features/common/concediileMele/schema')
const angajatResolvers = require('../features/angajati/resolvers')
const angajatDefs = require('../features/angajati/schema')
const ToateConcediileDefs = require('../features/common/ToateConcediile/schema')

const oldTypeDefs = []
const sources = loadTypedefsSync(join(__dirname, '../**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const resolvers = merge(concediiResolvers, ToateConResolvers, userResolvers, angajatResolvers)

const typeDefs = [
  ...sources.map(source => source.document),
  ...oldTypeDefs,
  ToateConcediileDefs,
  userDefs,
  angajatDefs,
  concediiDefs
]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
