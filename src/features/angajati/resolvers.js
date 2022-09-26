const { topics, pubSub } = require('../../pubSub')

const angajatResolver = {
  Query: {
    angajat: async (_, { id }, { dataSources }) => {
      const data = await dataSources.angajatApi.getAngajat(id)
      return data
    },
    angajati: async (_, __, { dataSources }) => {
      const data = await dataSources.angajatApi.getAllAngajat()
      return data
    }
  }
  //Mutation: {newAngajat}
}

module.exports = angajatResolver
