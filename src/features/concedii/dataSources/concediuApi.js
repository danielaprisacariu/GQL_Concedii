const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ConcediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async concediuNou(input) {
    const data = await this.put(`Concediu/InserareConcediu`, { ...input }, this.option)
    return data
  }
}

module.exports = ConcediuApi
