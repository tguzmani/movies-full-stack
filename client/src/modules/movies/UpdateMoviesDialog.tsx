import {
  AppBar,
  Box,
  Dialog,
  Grid,
  IconButton,
  ListItemButton,
  MenuItem,
  TextField,
  Toolbar,
} from '@mui/material'
import useToggle from 'hooks/useToggle'
import Reac, { useState } from 'react'
import Movie from './domain/movie.entity'
import Button from '@mui/material/Button'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import useForm from 'hooks/useForm'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import dayjs from 'dayjs'
import genres from './constants/movieGenres'

const UpdateMoviesDialog = ({ movie }: { movie: Movie }) => {
  const [open, setOpen] = useState(false)
  const [releaseDate, setReleaseDate] = useState(dayjs())
  // const [genre, setGenre] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [movieInfo, bindMovie, areFieldsEmpty] = useForm({
    title: movie.title,
    description: movie.description,
    duration: movie.duration,
    posterImage: movie.posterImage,
    backgroundImage: movie.backgroundImage,
    titleImage: movie.titleImage,
    genre: movie.genre,
  })

  const handleChange = (newReleaseDate: any) => {
    setReleaseDate(newReleaseDate)
  }

  const handleUpdateMovie = () => {
    const updatedMovie = {
      title: movieInfo.title,
      description: movieInfo.description,
      duration: movieInfo.duration,
      posterImage: movieInfo.posterImage,
      backgroundImage: movieInfo.backgroundImage,
      titleImage: movieInfo.titleImage,
      genre: movieInfo.genre,
      releaseDate: dayjs(releaseDate).format('YYYY-MM-DD'),
    }

    console.log(updatedMovie)

    // handleClose()
  }

  return (
    <>
      <ListItemButton onClick={handleClickOpen}>{movie?.title}</ListItemButton>

      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Update movie
            </Typography>
            <Button
              variant='contained'
              onClick={handleUpdateMovie}
              disabled={areFieldsEmpty}
            >
              Update Movie
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={5}>
          <Grid item xs={12} lg={6}>
            <Box m={3}>
              <TextField
                fullWidth
                margin='normal'
                label='Title'
                {...bindMovie('title')}
              />
              <TextField
                fullWidth
                margin='normal'
                label='Description'
                multiline
                rows={4}
                {...bindMovie('description')}
              />
              <TextField
                fullWidth
                margin='normal'
                label='Duration (minutes)'
                type='number'
                {...bindMovie('duration')}
              />
              <MobileDatePicker
                label='Date mobile'
                inputFormat='MM/dd/yyyy'
                value={releaseDate}
                onChange={handleChange}
                renderInput={params => (
                  <TextField fullWidth margin='normal' {...params} />
                )}
              />
              <TextField
                select
                fullWidth
                margin='normal'
                label='Genre'
                type='number'
                {...bindMovie('genre')}
              >
                {genres.map(genre => (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box m={3}>
              <TextField
                fullWidth
                margin='normal'
                label='Title image URL'
                {...bindMovie('titleImage')}
              />

              {movieInfo.titleImage !== '' && (
                <img
                  src={movieInfo.titleImage}
                  alt='Title'
                  style={{ maxHeight: '120px' }}
                />
              )}

              <TextField
                fullWidth
                margin='normal'
                label='Poster image URL'
                {...bindMovie('posterImage')}
              />

              {movieInfo.posterImage !== '' && (
                <img
                  src={movieInfo.posterImage}
                  alt='Poster'
                  style={{ maxHeight: '120px' }}
                />
              )}

              <TextField
                fullWidth
                margin='normal'
                label='Background image URL'
                {...bindMovie('backgroundImage')}
              />

              {movieInfo.backgroundImage !== '' && (
                <img
                  src={movieInfo.backgroundImage}
                  alt='Background'
                  style={{ maxHeight: '120px' }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </>
  )
}

export default UpdateMoviesDialog
