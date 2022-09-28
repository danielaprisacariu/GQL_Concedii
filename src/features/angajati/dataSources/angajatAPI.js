const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class AngajatApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getAngajat(id) {
    const data = await this.get(`Angajat/GetAngajatById?id=${id}`)

    return data
  }

  async newAngajat(input) {
    const data = await this.put(`Orice/PutNewAngajat`, { ...input }, this.option)
    return data
  }

  async getAllAngajat() {
    const data = await this.get(`Angajat/GetAllAngajati`)

    return data
  }

  async getAllAngajatNumeConcatenat(id, idM) {
    const data = await this.get(`Angajat/GetAllInlocuitoriNumeConcatenat?angajatId=${id}&managerId=${idM}`)
    return data
  }
}

module.exports = AngajatApi
