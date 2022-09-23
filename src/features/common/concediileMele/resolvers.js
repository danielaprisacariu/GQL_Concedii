const { topics, pubSub } = require('../../../pubSub')

const concediiResolvers = {
  Query: {
    concediiData: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.concediiApi.concediiData(id)
      return data
    }
  }
}
module.exports = concediiResolvers
