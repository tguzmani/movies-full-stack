import { Action, Thunk } from 'easy-peasy'
import User from '../domain/user.entity'

export interface Credentials {
  email: string
  password: string
}

interface AuthStoreModel {
  user?: User
  loading: boolean

  login: Thunk<AuthStoreModel, Credentials>
  setUser: Action<AuthStoreModel, User>
  setLoading: Action<AuthStoreModel, boolean>
}

export default AuthStoreModel
