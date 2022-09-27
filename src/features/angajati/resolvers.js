const { topics, pubSub } = require('../../pubSub')

const angajatResolver = {
  Query: {
    angajat: async (_, { id }, { dataSources }) => {
      const data = await dataSources.AngajatApi.getAngajat(id)
      return data
    },
    angajati: async (_, __, { dataSources }) => {
      const data = await dataSources.AngajatApi.getAllAngajat()
      return data
    }
  },
  Mutation: {
    newAngajat: async (_, { input }, { dataSources }) => {
      return dataSources.angajatAPI.newAngajat(input)
    }
  }
}

module.exports = angajatResolver
