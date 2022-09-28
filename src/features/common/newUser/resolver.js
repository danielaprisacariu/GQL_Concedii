const newUserResolver = {
  Query: {
    newUserData: async (_, { Email, Parola }, { dataSources }, _info) => {
      const data = await dataSources.newUserAPI.newUserData(Email, Parola)
      if (!data) {
        return null
      }
      const newUser = {
        id: data.id,
        Email: data.email,
        Parola: data.parola,
        isAdmin: data.esteAdmin
      }
      return newUser
    }
  }
}
module.exports = newUserResolver
