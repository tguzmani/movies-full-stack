import { useStoreActions } from '../config/easy-peasy.store'
import { LoadingButton } from '@mui/lab'
import { Paper } from '@mui/material'
import { TextField } from '@mui/material'
import { Grid, Box } from '@mui/material'
import useForm from 'hooks/useForm'
import React from 'react'
import useRead from 'hooks/useRead'
import axios from 'axios'
import useResponsive from 'hooks/useResponsive'
import { useNavigate } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const LoginPage = () => {
  const { login } = useStoreActions(state => state.auth)
  const { readMovies } = useStoreActions(state => state.movies)

  useRead(readMovies)

  const navigate = useNavigate()

  const initialState = {
    email: 'tomas@gmail.com',
    password: 'perros',
  }

  const [credentials, bindCredentials, areCredentialsEmpty] =
    useForm(initialState)

  const handleLogin = (e: any) => {
    login(credentials)
  }

  const isAuth = useAuth()

  React.useEffect(() => {
    if (isAuth) navigate('/')
  }, [isAuth])

  return (
    <Grid container>
      <Grid item xs={4} />

      <Grid item xs={12} lg={4}>
        <Paper>
          <Box p={3}>
            <TextField
              fullWidth
              margin='normal'
              label='E-mail'
              {...bindCredentials('email')}
            />
            <TextField
              fullWidth
              label='User'
              margin='normal'
              {...bindCredentials('password')}
            />
            <LoadingButton
              loading={false}
              loadingPosition='center'
              variant='contained'
              fullWidth
              onClick={handleLogin}
              disabled={areCredentialsEmpty}
            >
              Login
            </LoadingButton>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={4} />
      <Paper></Paper>
    </Grid>
  )
}

export default LoginPage
