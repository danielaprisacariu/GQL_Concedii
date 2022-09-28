const { topics, pubSub } = require('../../pubSub')

const angajatResolver = {
  Query: {
    angajat: async (_, { id }, { dataSources }) => {
      const data = await dataSources.AngajatApi.getAngajat(id)
      return data
    },
    angajati: async (_, __, { dataSources }) => {
      const data = await dataSources.AngajatApi.getAllAngajat()
      return data
    },
    angajatiNumeConcatenat: async (_, { id, idM }, { dataSources }) => {
      const data = await dataSources.AngajatApi.getAllAngajatNumeConcatenat(id, idM)
      //const ang = { id: data.id, nume: data.nume + ' ' + data.prenume, managerId: data.managerId }
      return data
    }
  },
  Mutation: {
    newAngajat: async (_, { input }, { dataSources }) => {
      return dataSources.AngajatApi.newAngajat(input)
    }
  }
}

module.exports = angajatResolver
