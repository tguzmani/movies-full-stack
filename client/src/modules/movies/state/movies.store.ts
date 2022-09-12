import { action, thunk } from 'easy-peasy'
import MoviesRepository from './movies.repository'
import MoviesStoreModel from './movies.store.model'

const moviesRepository = new MoviesRepository()

const moviesStore: MoviesStoreModel = {
  movies: [],
  filterString: '',
  filteredMovies: [],
  loading: false,

  // Actions
  setMovies: action((state, movies) => {
    state.movies = movies
    state.loading = false
  }),

  setFilterString: action((state, value) => {
    state.filterString = value
  }),

  clearFilterString: action(state => {
    state.filterString = ''
  }),

  setFilteredMovies: action(state => {
    state.filteredMovies = state.movies.filter(movie =>
      movie.title.toLowerCase().includes(state.filterString.toLowerCase())
    )
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
