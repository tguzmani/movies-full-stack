import { Box, Container, List, Typography } from '@mui/material'
import { useStoreActions } from 'config/easy-peasy.store'
import useAdmin from 'hooks/useAdmin'
import useAuth from 'hooks/useAuth'
import useRead from 'hooks/useRead'
import CreateMovieDialog from 'modules/movies/CreateMovieDialog'
import useSortedMovies from 'modules/movies/hooks/useSortedMovies'
import SearchMovies from 'modules/movies/SearchMovies'
import UpdateMoviesDialog from 'modules/movies/UpdateMoviesDialog'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const MovieManagerPage = () => {
  const { alphabeticallySortedMovies } = useSortedMovies()

  const { readMovies } = useStoreActions(actions => actions.movies)

  useRead(readMovies)

  const isAdmin = useAdmin()
  const isAuth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdmin || !isAuth) navigate('/')
  }, [isAdmin, isAuth])

  return (
    <Container maxWidth='md'>
      <>
        <Box mt={3}>
          <Typography gutterBottom variant='h4'>
            Movie Manager
          </Typography>
        </Box>

        <CreateMovieDialog />

        <List>
          {alphabeticallySortedMovies.map(movie => (
            <UpdateMoviesDialog key={movie.id} movie={movie} />
          ))}
        </List>
      </>
    </Container>
  )
}

export default MovieManagerPage
