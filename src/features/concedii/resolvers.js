const { topics, pubSub } = require('../../pubSub')

const concediuResolver = {
  Mutation: {
    inserareConcediu: async (_, { input }, { dataSources }) => {
      return dataSources.angajatApi.inserareConcediu(input)
    }
  }
}

module.exports = concediuResolver
