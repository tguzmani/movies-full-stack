import { useStoreState } from 'config/easy-peasy.store'
import dayjs from 'dayjs'

const useSortedMovies = () => {
  const { movies } = useStoreState(state => state.movies)

  const theseMovies = movies

  const mostRecentMovies = theseMovies
    .slice(0)
    .sort((m1, m2) => (dayjs(m1.releaseDate).isAfter(m2.releaseDate) ? 1 : -1))

  const topRatedMovies = theseMovies
    .slice(0)
    // @ts-ignore
    .sort((m1, m2) => (m1?.rating - m2?.rating ? 1 : -1))

  return { mostRecentMovies, topRatedMovies, theseMovies }
}

export default useSortedMovies
