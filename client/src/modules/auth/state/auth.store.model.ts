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

  login: Thunk<AuthStoreModel, Credentials>
  logout: Thunk<AuthStoreModel>
  setUser: Action<AuthStoreModel, User>
  unsetUser: Action<AuthStoreModel>
  setLoading: Action<AuthStoreModel, boolean>

  readProfile: Thunk<AuthStoreModel>
}

export default AuthStoreModel
