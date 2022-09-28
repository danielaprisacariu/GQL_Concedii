const { topics, pubSub } = require('../../../pubSub')

const concediiResolvers = {
  Query: {
    concediiData: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.concediiApi.concediiData(id)
      const concedii = []
      for (var i = 0; i < data.length; i++) {
        concedii.push({
          id: data[i].id,
          dataInceput: data[i].dataInceput,
          dataSfarsit: data[i].dataSfarsit,
          comentarii: data[i].comentarii,
          tipConcediuNume: data[i].tipConcediu.nume,
          stareConcediuNume: data[i].stareConcediu.nume,
          inlocuitorNume: data[i].inlocuitor.nume + ' ' + data[i].inlocuitor.prenume
        })
      }

      return concedii
    }
  }
}
module.exports = concediiResolvers
