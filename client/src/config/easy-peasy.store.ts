import StoreModel from './easy-peasy.store.model'
import { createStore, createTypedHooks } from 'easy-peasy'

import movies from '../modules/movies/state/movies.store'
import auth from '../modules/auth/state/auth.store'
import reviews from '../modules/reviews/state/reviews.store'

const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>()

const store = createStore<StoreModel>({
  movies,
  auth,
  reviews,
})

export { useStoreActions, useStoreState }

export default store
