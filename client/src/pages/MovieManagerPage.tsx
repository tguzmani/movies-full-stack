import { Box, Container, List, Typography } from '@mui/material'
import { useStoreActions } from 'config/easy-peasy.store'
import useRead from 'hooks/useRead'
import useSortedMovies from 'modules/movies/hooks/useSortedMovies'
import SearchMovies from 'modules/movies/SearchMovies'
import UpdateMoviesDialog from 'modules/movies/UpdateMoviesDialog'
import React from 'react'

const MovieManagerPage = () => {
  const { alphabeticallySortedMovies } = useSortedMovies()

  const { readMovies } = useStoreActions(actions => actions.movies)

  useRead(readMovies)

  return (
    <Container maxWidth='md'>
      <>
        <Box mt={3}>
          <Typography gutterBottom variant='h4'>
            Movie Manager
          </Typography>
        </Box>

        <List>
          {alphabeticallySortedMovies.map(movie => (
            <UpdateMoviesDialog movie={movie} />
          ))}
        </List>
      </>
    </Container>
  )
}

export default MovieManagerPage
