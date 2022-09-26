const { concat } = require('ramda')
const { topics, pubSub } = require('../../../pubSub')

const ToateConResolvers = {
  Query: {
    toateConcediileDATA: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.ToateConAPI.toateConcediileDATA()
      const dataMapata = [
        {
          tipConcediuNume: data[0].tipConcediu.nume,
          stareConcediu: data[0].stareConcediu.nume,
          angajatNume: data[0].angajat.nume,
          angajatPrenume: data[0].angajat.prenume,
          dataInceput: data[0].dataInceput,
          dataSfarsit: data[0].dataSfarsit,
          inlocuitorNume: concat(data[0].inlocuitor.nume, ' ', data[0].inlocuitor.prenume)
        }
      ]
      return dataMapata
    }
  }
}
module.exports = ToateConResolvers
