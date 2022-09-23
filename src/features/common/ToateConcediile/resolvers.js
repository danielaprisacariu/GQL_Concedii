const { topics, pubSub } = require('../../../pubSub')

const ToateConResolvers = {
  Query: {
    ToateConData: async (_, { dataSources }, _info) => {
      const data = await dataSources.ToateConAPI.ToateConData()
      return data
    }
  }
}
module.exports = ToateConResolvers
