import React from 'react'
import { useStoreActions, useStoreState } from '../config/easy-peasy.store'
import useRead from '../hooks/useRead'
import Movies from '../modules/movies/Movies'

const HomePage = () => {
  const { readMovies } = useStoreActions(actions => actions.movies)

  const { movies } = useStoreState(state => state.movies)

  useRead(readMovies)

  return (
    <div>
      <Movies movies={movies} />
    </div>
  )
}

export default HomePage
