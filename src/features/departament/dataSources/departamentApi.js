const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class departamentApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getAllDepartaments() {
    const data1 = await this.get(`DepartamentSiFunctie/GetAllDepartaments`)

    return data1
  }
}

module.exports = departamentApi
