const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class ToateConAPI extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async ToateConcediileDATA() {
    const ToateConData = { nume: ' ', dataInceput: ' ', dataSfarsit: ' ', inlocuitor: ' ', stareCon: '' }
    return ToateConData
  }
}
module.exports = ToateConAPI
