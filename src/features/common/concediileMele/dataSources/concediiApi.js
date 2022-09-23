const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class concediiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async concediiData(id) {
    const ConcediiData = { id: 1, dataInceput: ' ', dataSfarsit: ' ' }
    return ConcediiData
  }
}
module.exports = concediiApi
