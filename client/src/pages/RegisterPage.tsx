import { useStoreActions } from '../config/easy-peasy.store'
import { LoadingButton } from '@mui/lab'
import { Paper, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Grid, Box } from '@mui/material'
import useForm from 'hooks/useForm'
import React from 'react'
import useRead from 'hooks/useRead'
import axios from 'axios'
import useResponsive from 'hooks/useResponsive'
import { useNavigate } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import Alert from 'modules/alerts/Alert'

const RegisterPage = () => {
  const { signUp } = useStoreActions(state => state.auth)
  const { readMovies } = useStoreActions(state => state.movies)

  useRead(readMovies)

  const navigate = useNavigate()

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const [credentials, bindCredentials, areCredentialsEmpty] =
    useForm(initialState)

  const handleLogin = (e: any) => {
    signUp(credentials)
  }

  const isAuth = useAuth()

  React.useEffect(() => {
    if (isAuth) navigate('/')
  }, [isAuth])

  return (
    <Grid container>
      <Grid item xs={4} />

      <Alert />

      <Grid item xs={12} lg={4}>
        <Box m={3}>
          <Paper>
            <Box p={3}>
              <Typography align='center' gutterBottom variant='h3'>
                OneMovie
              </Typography>

              <Typography align='center' gutterBottom variant='h5'>
                Register
              </Typography>

              <TextField
                fullWidth
                margin='normal'
                label='First name'
                {...bindCredentials('firstName')}
              />
              <TextField
                fullWidth
                label='Last name'
                margin='normal'
                {...bindCredentials('lastName')}
              />

              <TextField
                fullWidth
                label='E-mail'
                margin='normal'
                {...bindCredentials('email')}
              />

              <TextField
                fullWidth
                label='Password'
                type='password'
                margin='normal'
                {...bindCredentials('password')}
              />

              <TextField
                fullWidth
                label='Password confirmation'
                type='password'
                margin='normal'
                {...bindCredentials('passwordConfirm')}
              />
              <Box mt={3}>
                <LoadingButton
                  loading={false}
                  loadingPosition='center'
                  variant='contained'
                  fullWidth
                  onClick={handleLogin}
                  disabled={areCredentialsEmpty}
                >
                  Register
                </LoadingButton>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Grid>

      <Grid item xs={4} />
    </Grid>
  )
}

export default RegisterPage
