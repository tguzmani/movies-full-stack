import { action, thunk } from 'easy-peasy'
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

  login: thunk(async (actions, credentials) => {
    actions.setLoading(true)

    const { access_token } = await authRepository.login(credentials)

    localStorage.setItem('token', access_token)

    actions.readProfile()
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
