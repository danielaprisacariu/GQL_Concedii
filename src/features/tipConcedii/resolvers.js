const { topics, pubSub } = require('../../pubSub')

const tipConcediuResolver = {
  Query: {
    tipConcedii: async (_, __, { dataSources }) => {
      const data = await dataSources.tipConcediuApi.getAllConcedii()

      //const ceva={name:data.name}

      return data
    }
  }
}

module.exports = tipConcediuResolver
