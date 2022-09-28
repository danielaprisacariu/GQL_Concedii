const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class functiiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async functiiData() {
    const data = await this.get(`DepartamentSiFunctie/GetAllFuncties`)

    return data
  }
}
module.exports = functiiApi
