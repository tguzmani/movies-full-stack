import AuthStoreModel from 'modules/auth/state/auth.store.model'
import MoviesStoreModel from '../modules/movies/state/movies.store.model'

interface StoreModel {
  movies: MoviesStoreModel
  auth: AuthStoreModel
}

export default StoreModel
