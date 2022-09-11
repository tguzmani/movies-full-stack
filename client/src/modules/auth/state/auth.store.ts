import { action, thunk } from 'easy-peasy'
import User from '../domain/user.entity'
import AuthRepository from './auth.repository'
import AuthStoreModel from './auth.store.model'

const authRepository = new AuthRepository()

const authStore: AuthStoreModel = {
  user: undefined,
  loading: false,

  // Actions
  setUser: action((state, user: User) => {
    state.user = user
    state.loading = false
  }),

  setLoading: action((state, loading) => {
    state.loading = loading
  }),

  login: thunk(async (state, credentials) => {
    const token = await authRepository.login(credentials)

    console.log(token)
  }),
}

export default authStore
