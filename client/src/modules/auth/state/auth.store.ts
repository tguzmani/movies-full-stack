import { action, thunk } from 'easy-peasy'
import Alert from 'modules/alerts/domain/alert.class'
import User from '../domain/user.entity'
import AuthRepository from './auth.repository'
import AuthStoreModel from './auth.store.model'

const authRepository = new AuthRepository()

const authStore: AuthStoreModel = {
  user: undefined,
  isAuthenticated: false,
  loading: false,

  // Actions
  setUser: action((state, user: User) => {
    state.user = user
    state.isAuthenticated = true
    state.loading = false
  }),

  unsetUser: action(state => {
    state.user = undefined
    state.isAuthenticated = false
    state.loading = false
  }),

  setLoading: action((state, loading) => {
    state.loading = loading
  }),

  login: thunk(async (actions, credentials, { getStoreActions }) => {
    try {
      actions.setLoading(true)

      const { access_token } = await authRepository.login(credentials)

      localStorage.setItem('token', access_token)

      actions.readProfile()
    } catch (error: any) {
      // @ts-ignore
      getStoreActions().alerts.setAlert(new Alert(error.response.data.message))
      actions.setLoading(false)
    }
  }),

  signUp: thunk(async (actions, data, { getStoreActions }) => {
    try {
      await await authRepository.signUp(data)

      actions.setLoading(true)

      actions.login({ email: data.email, password: data.password })
    } catch (error) {
      // @ts-ignore
      getStoreActions().alerts.setAlert(new Alert(error.response.data.message))
      actions.setLoading(false)
    }
  }),

  logout: thunk(async actions => {
    actions.setLoading(true)

    localStorage.removeItem('token')

    actions.unsetUser()

    actions.readProfile()
  }),

  readProfile: thunk(async actions => {
    actions.setLoading(true)

    const user = await authRepository.readProfile()

    actions.setUser(user)
  }),
}

export default authStore
