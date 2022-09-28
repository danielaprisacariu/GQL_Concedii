const { topics, pubSub } = require('../../pubSub')

const concediuResolver = {
  Mutation: {
    inserareConcediu: async (_, { input }, { dataSources }) => {
      return dataSources.concediuApi.inserareConcediu(input)
    }
  }
}

module.exports = concediuResolver
