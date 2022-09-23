const concediiApi = require('../features/common/concediileMele/dataSources/concediiApi')
const ToateConAPI = require('../features/common/ToateConcediile/dataSources/ToateConAPI')
const UserApi = require('../features/user/dataSources/userApi')
const UserDb = require('../features/user/dataSources/userDb')
const AngajatApi = require('../features/angajati/dataSources/angajatAPI')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  concediiApi: new concediiApi(),
  ToateConAPI: new ToateConAPI(),
  angajatApi: new AngajatApi()
})
// module.exports.initializeDataSources = (context, dbInstance, dataSources) => {
//   dataSources.concediiApi.initialize = { context }
//   dataSources.ToateConAPI.initialize = { context }
//   dataSources.userDb.initialize = { context: { dbInstance } }
//   return dataSources
// }

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.concediiApi.initialize = { context }
  dataSources.ToateConAPI.initialize = { context }
  dataSources.angajatApi.initialize({ context })
  return dataSources
}
