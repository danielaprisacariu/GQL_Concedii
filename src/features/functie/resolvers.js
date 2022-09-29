const functieResolver = {
  Query: {
    func: async (_, __, { dataSources }) => {
      const data1 = await dataSources.functieApi.getAllFuncties()
      return data1
    }
  }
}

module.exports = functieResolver
