const { topics, pubSub } = require('../../pubSub')

const userResolvers = {
  Query: {
    userData: async (_, { email }, { dataSources }, _info) => {
      const data = await dataSources.userApi.userData(email)
      const userDB = {
        id: data.id,
        nume: data.nume,
        prenume: data.prenume,
        email: data.email,
        parola: data.parola,
        dataAngajare: data.dataAngajare,
        dataSfarsit: data.dataSfarsit,
        cnp: data.cnp,
        serie: data.serie,
        no: data.no,
        nrTelefon: data.nrTelefon,
        poza: data.poza,
        esteAdmin: data.esteAdmin,
        managerId: data.managerId,
        zileConcediu: data.zileConcediu
      }
      return userDB
    }
  },
  Mutation: {
    authenticateUser: async (_, { userName, password }, { dataSources }, _info) => {
      const data = await dataSources.userApi.authenticateUser(userName, password)
      return data
    }
  },
  Subscription: {
    userChanged: {
      resolve: async (msg, _variables, _context, _info) => {
        return msg.payload
      },
      subscribe: (_parent, _args, _context) => pubSub.asyncIterator(topics.USER_CHANGED)
    }
  }
}

module.exports = userResolvers
