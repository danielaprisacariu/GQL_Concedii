const { topics, pubSub } = require('../../../pubSub')

const AdministrareAngajatiResolvers = {
  Query: {
    angajatiData: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.angajatiApi.angajatiData(id)
      const angajati = []
      for (var i = 0; i < data.length; i++) {
        angajati.push({
          id: data[i].id,
          nume: data[i].nume + ' ' + data[i].prenume
        })
      }
      return angajati
    },
    manageriData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.manageriApi.manageriData()
      const manageri = []
      for (var i = 0; i < data.length; i++) {
        manageri.push({
          id: data[i].id,
          nume: data[i].nume + ' ' + data[i].prenume
        })
      }
      return manageri
    },
    departamenteData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.departamenteApi.departamenteData()
      const departamente = []
      for (var i = 0; i < data.length; i++) {
        departamente.push({
          id: data[i].id,
          nume: data[i].denumire
        })
      }
      return departamente
    },
    functiiData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.functiiApi.functiiData()
      const functii = []
      for (var i = 0; i < data.length; i++) {
        functii.push({
          id: data[i].id,
          nume: data[i].denumire
        })
      }
      return functii
    }
  },
  Mutation: {
    modificareEchipa: async (_, { input }, { dataSources }) => {
      return dataSources.angajatiApi.modificareEchipa(input)
    }
    /*  schimbareDepartament: async (_, { input }, { dataSources }) => {
       return dataSources.angajatiApi.schimbareDepartament(input)
     },
     schimbareFunctie: async (_, { input }, { dataSources }) => {
        return dataSources.angajatiApi.schimbareFunctie(input)
      }, */
  }
}
module.exports = AdministrareAngajatiResolvers
