import { Box, Stack, Typography } from '@mui/material'
import useResponsive from 'hooks/useResponsive'
import useSortedMovies from 'modules/movies/hooks/useSortedMovies'
import React from 'react'
import { useStoreActions, useStoreState } from '../config/easy-peasy.store'
import useRead from '../hooks/useRead'
import Movies from '../modules/movies/Movies'

import HistoryIcon from '@mui/icons-material/History'
import StarIcon from '@mui/icons-material/Star'

const HomePage = () => {
  const { readMovies } = useStoreActions(actions => actions.movies)

  const { mostRecentMovies, topRatedMovies } = useSortedMovies()

  const matchMd = useResponsive('md')

  const titleVariant = matchMd ? 'h3' : 'h5'
  const iconSize = matchMd ? 'large' : 'small'

  useRead(readMovies)

  return (
    <div>
      <Box mb={3}>
        <Stack direction='row' alignItems='center' spacing={2}>
          <HistoryIcon fontSize={iconSize} />
          <Typography gutterBottom variant={titleVariant}>
            Most Recent
          </Typography>
        </Stack>
        <Movies movies={mostRecentMovies} />
      </Box>

      <Stack direction='row' alignItems='center' spacing={3}>
        <StarIcon fontSize={iconSize} />
        <Typography gutterBottom variant={titleVariant}>
          Top Rated
        </Typography>
      </Stack>
      <Movies movies={topRatedMovies} />
    </div>
  )
}

export default HomePage
