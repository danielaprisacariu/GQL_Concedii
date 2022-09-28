const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class newUserAPI extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async newUserData(Email, Parola) {
    const data = await this.get(`Angajat/GetAngajatByUsername?username=${Email}&parola=${Parola}`)
    return data
  }
}
module.exports = newUserAPI
