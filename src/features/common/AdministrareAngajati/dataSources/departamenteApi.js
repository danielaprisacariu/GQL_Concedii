const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class departamenteApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async departamenteData() {
    const data = await this.get(`DepartamentSiFunctie/GetAllDepartaments`)

    return data
  }
}
module.exports = departamenteApi
