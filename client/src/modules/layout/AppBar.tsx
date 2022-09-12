import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import { useStoreActions, useStoreState } from 'config/easy-peasy.store'
import useAdmin from 'hooks/useAdmin'
import useAuth from 'hooks/useAuth'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'
import PersonIcon from '@mui/icons-material/Person'
import useResponsive from 'hooks/useResponsive'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import useMenu from 'hooks/useMenu'
import SearchMovies from 'modules/movies/SearchMovies'

const AppBar = () => {
  const isAuth = useAuth()
  const isAdmin = useAdmin()

  const { anchorEl, handleCloseMenu, handleOpenMenu } = useMenu()

  const { logout } = useStoreActions(actions => actions.auth)
  const { user } = useStoreState(actions => actions.auth)

  const handleLogout = () => {
    logout()
  }

  const matchMd = useResponsive('md')

  const location = useLocation()

  const isMoviePage = location.pathname.match(/movie\/*/)
  const isSearchablePage =
    location.pathname === '/' || location.pathname === '/movie/manager'

  const navigate = useNavigate()

  const handleManageMovies = () => {
    navigate('/movie/manager')
  }

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

        {isSearchablePage && matchMd && <SearchMovies />}

        {!isAuth && (
          <Stack direction='row' spacing={1}>
            <Button onClick={() => navigate('/login')}>Login</Button>
            <Button variant='contained'>Sign up</Button>
          </Stack>
        )}

        {isAuth && matchMd && (
          <Stack direction='row' spacing={1} alignItems='center'>
            <PersonIcon />
            <Typography variant='body1'>
              {user?.firstName} {user?.lastName}
            </Typography>
            {isAdmin && (
              <Button onClick={handleManageMovies}>Manage Movies</Button>
            )}
            <Button onClick={handleLogout}>Logout</Button>
          </Stack>
        )}

        {isAuth && !matchMd && (
          <Stack direction='row' spacing={1} alignItems='center'>
            <PersonIcon />

            <Typography variant='body1'>{user?.firstName}</Typography>
            <IconButton onClick={handleOpenMenu}>
              <MoreVertIcon />
            </IconButton>
          </Stack>
        )}

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {isAdmin && (
            <MenuItem onClick={handleManageMovies} key='logout'>
              Manage Movies
            </MenuItem>
          )}
          <MenuItem onClick={handleLogout} key='logout'>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
