const { topics, pubSub } = require('../../pubSub')

const angajatResolver = {
  Query: {
    angajat: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.angajatAPI.angajat(id) //.taskAPi.getProcessDefinitions()
      return data
    }
  }
}

module.exports = angajatResolver
