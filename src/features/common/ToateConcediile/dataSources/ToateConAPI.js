const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class ToateConAPI extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async toateConcediileDATA() {
    const ToateConData = this.get('Concediu/GetAllConcediuAngajati')
    return ToateConData
  }
}
module.exports = ToateConAPI
