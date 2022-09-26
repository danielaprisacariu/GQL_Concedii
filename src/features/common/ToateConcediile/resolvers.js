const { topics, pubSub } = require('../../../pubSub')

const ToateConResolvers = {
  Query: {
    ToateConcediileDATA: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.ToateConAPI.ToateConcediileDATA()
      return data
    }
  }
}
module.exports = ToateConResolvers
