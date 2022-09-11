import { Action, Thunk } from 'easy-peasy'
import Movie from '../domain/movie.entity'

interface MoviesStoreModel {
  movies: Movie[]
  loading: boolean

  setMovies: Action<MoviesStoreModel, Movie[]>
  setLoading: Action<MoviesStoreModel, boolean>

  readMovies: Thunk<MoviesStoreModel>
}

export default MoviesStoreModel
