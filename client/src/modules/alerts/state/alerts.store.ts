import { action, thunk } from 'easy-peasy'
import AlertsStoreModel from './alerts.store.model'

const alertsStore: AlertsStoreModel = {
  alert: undefined,

  // Actions
  setAlert: action((state, alert) => {
    state.alert = alert
  }),

  setNotNew: action(state => {
    // @ts-ignore
    state.alert.isNew = false
  }),
}

export default alertsStore
