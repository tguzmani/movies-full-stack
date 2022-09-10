import { createStore } from 'easy-peasy'

import movies from '../modules/movies/state/movies.store'
import StoreModel from './easy-peasy.store.model'

const store = createStore<StoreModel>({
  movies,
})

export default store
