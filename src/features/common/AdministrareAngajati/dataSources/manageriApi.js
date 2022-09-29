const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class manageriApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async manageriData() {
    const data = await this.get(`Angajat/GetAllManagers`)

    return data
  }
}
module.exports = manageriApi
