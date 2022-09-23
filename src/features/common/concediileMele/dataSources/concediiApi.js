const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class concediiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async concediiData(id) {
    const data = this.get('concediu$(id)')
    return data
  }
}
module.exports = concediiApi
