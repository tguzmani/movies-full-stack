import { Button, Stack, Toolbar, Typography } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import { useStoreActions } from 'config/easy-peasy.store'
import useAdmin from 'hooks/useAdmin'
import useAuth from 'hooks/useAuth'

import React from 'react'

const AppBar = () => {
  const isAuth = useAuth()
  const isAdmin = useAdmin()

  const { logout } = useStoreActions(actions => actions.auth)

  const handleLogout = () => {
    logout()
  }

  return (
    <MuiAppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          OneMovie
        </Typography>

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
