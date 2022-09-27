const { concat } = require('ramda')
const { topics, pubSub } = require('../../../pubSub')

const ToateConResolvers = {
  Query: {
    toateConcediileDATA: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.ToateConAPI.toateConcediileDATA()
      const dataMapata = []

      for (var i = 0; i < data.length; i++) {
        dataMapata.push({
          id: data[i].id,
          tipConcediuNume: data[i].tipConcediu.nume,
          stareConcediu: data[i].stareConcediu.nume,
          angajatNume: data[i].angajat.nume,
          angajatPrenume: data[i].angajat.prenume,
          dataInceput: data[i].dataInceput,
          dataSfarsit: data[i].dataSfarsit,
          inlocuitorNume: data[i].inlocuitor.nume + ' ' + data[i].inlocuitor.prenume
        })
      }
      return dataMapata
    }
  }
}
module.exports = ToateConResolvers
