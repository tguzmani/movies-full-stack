import Movie from '../domain/movie.entity'

interface MoviesStoreModel {
  movies: Movie[]
  loading: boolean
}

export default MoviesStoreModel
