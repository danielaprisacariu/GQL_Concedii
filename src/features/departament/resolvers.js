const departamentResolver = {
  Query: {
    depart: async (_, __, { dataSources }) => {
      const data1 = await dataSources.departamentApi.getAllDepartaments()
      return data1
    }
  }
}

module.exports = departamentResolver
