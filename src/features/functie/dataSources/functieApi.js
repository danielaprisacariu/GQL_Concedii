const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class functieApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getAllFuncties() {
    const data1 = await this.get(`DepartamentSiFunctie/GetAllFuncties`)

    return data1
  }
}

module.exports = functieApi
