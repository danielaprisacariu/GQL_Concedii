const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class ToateConAPI extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async ToateConcediileDATA() {
    const ToateConData = {
      id: 1,
      angajatNume: ' ',
      tipConcediuNume: ' ',
      dataInceput: ' ',
      dataSfarsit: ' ',
      stareConcediu: ' ',
      inlocuitorNume: ' '
    }
    return ToateConData
  }
}
module.exports = ToateConAPI
