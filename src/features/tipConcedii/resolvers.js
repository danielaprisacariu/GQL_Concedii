const { topics, pubSub } = require('../../pubSub')

const tipConcediuResolver = {
  Query: {
    tipConcedii: async (_, __, { dataSources }) => {
      const data1 = await dataSources.tipConcediuApi.getAllConcedii()

      //const ceva={name:data.name}

      return data1
    }
  }
}

module.exports = tipConcediuResolver
