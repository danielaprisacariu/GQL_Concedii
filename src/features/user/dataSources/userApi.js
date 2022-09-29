const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async userData(email) {
    const userData = await this.get(`Angajat/GetAngajatByEmail?email=${email}`)
    return userData
  }

  async authenticateUser(userName, password) {
    if (userName !== 'Administrator' || password !== 'a') return false
    else return true
  }
}

module.exports = UserApi
