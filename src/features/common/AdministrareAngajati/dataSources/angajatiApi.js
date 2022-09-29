const ApiRESTDataSource = require('../../../../utils/apiRESTDataSource')

class angajatiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async angajatiData(id) {
    const data = await this.get(`Angajat/GetManagersAngajat?idManag=${id}`)

    return data
  }
  async modificareEchipa(input) {
    const data = await this.post(
      `Angajat/PostTransfer?AngajatId=${input.angajatEN}&managerId=${input.managerEN}`,
      this.option
    )
    return data
  }
  /*async schimbareDepartament(input) {
    const data = await this.post(
      `{0}DepartamentSiFunctie/PostDepartament?AngajatId=${input.angajatDep}&DepartamentID=${input.departament}`,
      this.option
    )
    return data
  }
  async schimbareFunctie(input) {
    const data = await this.post(
      `{0}DepartamentSiFunctie/PostFunctie?AngajatId=${input.angajatFunc}&functieID=${input.functie}`,
      this.option
    )
    return data
  }*/
}
module.exports = angajatiApi
