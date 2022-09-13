import { Action, Thunk } from 'easy-peasy'
import User from '../domain/user.entity'

export interface Credentials {
  email: string
  password: string
}

interface AuthStoreModel {
  user?: User
  loading: boolean
  isAuthenticated: boolean

  setUser: Action<AuthStoreModel, User>
  unsetUser: Action<AuthStoreModel>
  setLoading: Action<AuthStoreModel, boolean>

  logout: Thunk<AuthStoreModel>
  login: Thunk<AuthStoreModel, Credentials>
  readProfile: Thunk<AuthStoreModel>
  signUp: Thunk<AuthStoreModel, any>
}

export default AuthStoreModel
