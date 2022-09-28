const concediiApi = require('../features/common/concediileMele/dataSources/concediiApi')
const ToateConAPI = require('../features/common/ToateConcediile/dataSources/ToateConAPI')
const UserApi = require('../features/user/dataSources/userApi')
const UserDb = require('../features/user/dataSources/userDb')
const AngajatApi = require('../features/angajati/dataSources/angajatAPI')
const ConcediuApi = require('../features/concedii/dataSources/concediuApi')
const TipConcediuApi = require('../features/tipConcedii/dataSources/tipConcediuApi')
const newUserAPI = require('../features/common/newUser/dataSources/newUserAPI')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  concediiApi: new concediiApi(),
  ToateConAPI: new ToateConAPI(),
  angajatApi: new AngajatApi(),
  concediuApi: new ConcediuApi(),
  tipConcediuApi: new TipConcediuApi(),
  newUserAPI: new newUserAPI()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.concediiApi.initialize = { context }
  dataSources.ToateConAPI.initialize = { context }
  dataSources.angajatApi.initialize({ context })
  dataSources.concediuApi.initialize({ context })
  dataSources.tipConcediuApi.initialize({ context })
  dataSources.newUserAPI.initialize({ context })
  return dataSources
}
