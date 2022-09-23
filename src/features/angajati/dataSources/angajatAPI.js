const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class angajatAPI extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async getAngajat(id) {
    const data = {
      id: 1,
      nume: 'Mitrut',
      prenume: 'Elena',
      email: 'elena.mitrut@totalsoft.ro',
      parola: 'mitrutElena1',
      dataAngajare: new Date(),
      dataNasterii: new Date(),
      cnp: '2678909876543',
      serie: 'DP',
      no: '123456',
      nrTelefon: '0745678909876',
      //   poza: null,
      esteAdmin: false,
      //   manager: null,
      departament: null,
      functie: null,
      concediat: false
    }
    return data
  }

  //this.get(`/Angajat/GetAngajatById/${id}`)
}

module.exports = angajatAPI
