import { useStoreState } from 'config/easy-peasy.store'
import dayjs from 'dayjs'

const useSortedMovies = () => {
  const { movies, filterString, filteredMovies } = useStoreState(
    state => state.movies
  )

  const theseMovies = filterString !== '' ? filteredMovies : movies

  const mostRecentMovies = theseMovies
    .slice(0)
    .sort((m1, m2) => (dayjs(m1.releaseDate).isAfter(m2.releaseDate) ? -1 : 1))

  const topRatedMovies = theseMovies
    .slice(0)
    // @ts-ignore
    .sort((m1, m2) => (m1?.rating - m2?.rating ? -1 : 1))

  const alphabeticallySortedMovies = theseMovies
    .slice(0)
    .sort((m1, m2) => (m1.title > m2.title ? 1 : -1))

  return {
    mostRecentMovies,
    topRatedMovies,
    alphabeticallySortedMovies,
    theseMovies,
  }
}

export default useSortedMovies
