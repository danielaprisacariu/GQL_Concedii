const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class TipConcediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getAllConcedii() {
    const data1 = await this.get(`TipConcediu/GetAllTipConcediu`)

    return data1
  }
}

module.exports = TipConcediuApi
