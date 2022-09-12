import { Action, Thunk } from 'easy-peasy'
import Movie from '../domain/movie.entity'

interface MoviesStoreModel {
  movies: Movie[]
  loading: boolean
  filterString: string
  filteredMovies: Movie[]

  setMovies: Action<MoviesStoreModel, Movie[]>
  setLoading: Action<MoviesStoreModel, boolean>
  setFilterString: Action<MoviesStoreModel, string>
  clearFilterString: Action<MoviesStoreModel>
  setFilteredMovies: Action<MoviesStoreModel>

  readMovies: Thunk<MoviesStoreModel>
  createMovie: Thunk<MoviesStoreModel, Partial<Movie>>
  updateMovie: Thunk<MoviesStoreModel, Movie>
}

export default MoviesStoreModel
