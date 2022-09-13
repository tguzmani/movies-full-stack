import AlertsStoreModel from 'modules/alerts/state/alerts.store.model'
import AuthStoreModel from 'modules/auth/state/auth.store.model'
import ReviewsStoreModel from 'modules/reviews/state/reviews.store.model'
import MoviesStoreModel from '../modules/movies/state/movies.store.model'

interface StoreModel {
  movies: MoviesStoreModel
  auth: AuthStoreModel
  reviews: ReviewsStoreModel
  alerts: AlertsStoreModel
}

export default StoreModel
