const { topics, pubSub } = require('../../../pubSub')

const concediiResolvers = {
  Query: {
    concediiData: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.concediiApi.concediiData(id)
      const mappedData = data.map
      console.log(mappedData)
      return data
    }
  }
}
module.exports = concediiResolvers
