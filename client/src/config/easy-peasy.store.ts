import StoreModel from './easy-peasy.store.model'
import { createStore, createTypedHooks } from 'easy-peasy'

import movies from '../modules/movies/state/movies.store'
import auth from '../modules/auth/state/auth.store'

const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>()

const store = createStore<StoreModel>({
  movies,
  auth,
})

export { useStoreActions, useStoreState }

export default store
