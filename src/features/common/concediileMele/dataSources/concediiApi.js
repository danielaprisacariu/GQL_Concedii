const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class concediiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async concediiData(id) {
    const data = await this.get(`Concediu/GetAllIstoricConcedii?angajatId=${id}`)
    //smsmsmsm
    return data
  }
}
module.exports = concediiApi
