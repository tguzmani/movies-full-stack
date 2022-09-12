import { Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import { useStoreActions } from 'config/easy-peasy.store'
import useAdmin from 'hooks/useAdmin'
import useAuth from 'hooks/useAuth'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'

const AppBar = () => {
  const isAuth = useAuth()
  const isAdmin = useAdmin()

  const { logout } = useStoreActions(actions => actions.auth)

  const handleLogout = () => {
    logout()
  }

  const location = useLocation()

  const isMoviePage = location.pathname.match(/movie\/*/)

  const navigate = useNavigate()

  return (
    <MuiAppBar position='static'>
      <Toolbar>
        <Stack direction='row' spacing={1} alignItems='center'>
          {isMoviePage && (
            <IconButton onClick={() => navigate('/')}>
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant='h6' component='div'>
            OneMovie
          </Typography>
        </Stack>

        <Box sx={{ flexGrow: 1 }}></Box>

        {!isAuth && (
          <Stack direction='row' spacing={1}>
            <Button>Login</Button>
            <Button variant='contained'>Sign up</Button>
          </Stack>
        )}

        {isAuth && (
          <Stack direction='row' spacing={1}>
            <Button onClick={handleLogout}>Logout</Button>
          </Stack>
        )}
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
