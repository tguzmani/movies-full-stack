import AxiosRepository from '../../../common/axios.repository'
import { Credentials } from './auth.store.model'

export default class AuthRepository extends AxiosRepository {
  constructor() {
    super('auth')
  }

  async login(credentials: Credentials) {
    return await super.post('/login', credentials)
  }

  async readProfile() {
    return await super.get('/profile')
  }
}
