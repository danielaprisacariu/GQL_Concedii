const { topics, pubSub } = require('../../pubSub')

const concediuResolver = {
  Mutation: {
    inserareConcediu: async (_, { input }, { dataSources }) => {
      return dataSources.concediuApi.inserareConcediu(input)
    }
  },
  Query: {
    zileRamase: async (_, { id, tipConcediuId }, { dataSources }) => {
      const data = await dataSources.concediuApi.getZileRamase(id, tipConcediuId)
      return data
    },
    AllIstoricConcediiVerificare: async (_, { id }, { dataSources }) => {
      const data = await dataSources.concediuApi.getAllIstoricConcediiVerificare(id)
      return data
    },

    ConcediiInlocuitori: async (_, { id }, { dataSources }) => {
      const data = await dataSources.concediuApi.getConcediiInlocuitori(id)
      return data
    }
  }
}

module.exports = concediuResolver
