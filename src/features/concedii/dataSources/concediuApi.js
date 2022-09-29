const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ConcediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async inserareConcediu(input) {
    const data = await this.put(`Concediu/InserareConcediu`, { ...input }, this.option)
    return data
  }

  async getZileRamase(id, tipConcediuId) {
    const data = await this.get(`Concediu/GetNumarZileConcediuRamase?tipConcediuId=${tipConcediuId}&angajatId=${id}`)
    return data
  }

  async getAllIstoricConcediiVerificare(id) {
    const data = await this.get(`Concediu/GetAllIstoricConcediiVerificareDate?angajatId=${id}`)
    return data
  }

  async getConcediiInlocuitori(id) {
    const data = await this.get(`Concediu/GetConcediiInlocuitori?angajatId=${id}`)
    return data
  }
}

module.exports = ConcediuApi
