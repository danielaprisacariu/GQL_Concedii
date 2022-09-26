const { topics, pubSub } = require('../../pubSub')

const angajatResolver = {
  Query: {
    angajat: async (_, { id }, { dataSources }) => {
      const data = await dataSources.angajatApi.getAngajat(id)
      return data
    }
  },
  Mutation: {
    newAngajat: async (_, { input }, { dataSources }) => {
      return dataSources.angajatApi.newAngajat(input)
    }
  }
}

module.exports = angajatResolver
