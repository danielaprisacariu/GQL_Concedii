const { topics, pubSub } = require('../../pubSub')

const angajatResolver = {
  Query: {
    angajat: async (_, { id }, { dataSources }) => {
      const data = await dataSources.angajatAPI.getAngajat(id)
      return data
    }
  }
}

module.exports = angajatResolver
