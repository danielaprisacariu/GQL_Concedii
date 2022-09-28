const { topics, pubSub } = require('../../pubSub')

const angajatResolver = {
  Query: {
    angajat: async (_, { id }, { dataSources }) => {
      const data = await dataSources.angajatApi.getAngajat(id)
      return data
    },
    angajati: async (_, __, { dataSources }) => {
      const data = await dataSources.angajatApi.getAllAngajat()
      return data
    },
    angajatiNumeConcatenat: async (_, { id, idM }, { dataSources }) => {
      const data = await dataSources.angajatApi.getAllAngajatNumeConcatenat(id, idM)
      //const ang = { id: data.id, nume: data.nume + ' ' + data.prenume, managerId: data.managerId }
      return data
    }
  },
  Mutation: {
    newAngajat: async (_, { input }, { dataSources }) => {
      return dataSources.angajatApi.newAngajat(input)
    }
  }
}

module.exports = angajatResolver
