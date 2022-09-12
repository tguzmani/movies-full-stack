import { useStoreState } from 'config/easy-peasy.store'

const useMovieById = (movieId?: number) => {
  const { movies } = useStoreState(state => state.movies)

  return movies.find(movie => movie.id === movieId)
}

export default useMovieById
