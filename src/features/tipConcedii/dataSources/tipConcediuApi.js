const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class TipConcediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getAllConcedii() {
    const data = await this.get(`TipConcediu/GetAllTipConcediu`)

    return data
  }
}

module.exports = TipConcediuApi
