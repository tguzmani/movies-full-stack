import { Action, Thunk } from 'easy-peasy'
import IAlert from '../domain/alert.entity'

interface AlertsStoreModel {
  alert?: IAlert

  setAlert: Action<AlertsStoreModel, IAlert>
  setNotNew: Action<AlertsStoreModel>
}

export default AlertsStoreModel
