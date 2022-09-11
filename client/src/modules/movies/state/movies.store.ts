import { action, thunk } from 'easy-peasy'
import MoviesRepository from './movies.repository'
import MoviesStoreModel from './movies.store.model'

const moviesRepository = new MoviesRepository()

const moviesStore: MoviesStoreModel = {
  movies: [],
  loading: false,

  // Actions
  setMovies: action((state, movies) => {
    state.movies = [...movies, ...movies, ...movies, ...movies, ...movies]
    state.loading = false
  }),

  setLoading: action((state, loading) => {
    state.loading = loading
  }),

  // Thunks
  readMovies: thunk(async actions => {
    const movies = await moviesRepository.readMovies()

    actions.setMovies(movies)
  }),
}

export default moviesStore
