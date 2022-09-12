import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import { useStoreActions, useStoreState } from 'config/easy-peasy.store'
import useResponsive from 'hooks/useResponsive'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'

const SearchMovies = () => {
  const matchMd = useResponsive('md')

  const { filterString } = useStoreState(state => state.movies)
  const { setFilterString, clearFilterString, setFilteredMovies } =
    useStoreActions(state => state.movies)

  const handleChangeFilterString = (e: any) => {
    setFilterString(e.target.value)
    setFilteredMovies()
  }

  const handleClearFilterString = () => {
    clearFilterString()
    setFilteredMovies()
  }

  const size = matchMd ? 'small' : 'medium'

  return (
    <Box mb={matchMd ? 0 : 2} mx={matchMd ? 2 : 0}>
      <TextField
        fullWidth={!matchMd}
        placeholder='Search movies'
        size={size}
        value={filterString}
        onChange={handleChangeFilterString}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: filterString !== '' && (
            <InputAdornment position='end'>
              <IconButton onClick={handleClearFilterString}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

export default SearchMovies
