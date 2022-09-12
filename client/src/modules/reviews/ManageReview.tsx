import { Button, Rating, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Movie from 'modules/movies/domain/movie.entity'
import React, { useState } from 'react'

const ManageReview = ({ movie }: { movie?: Movie }) => {
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(0)

  const handleChangeDescription = (e: any) => {
    setDescription(e.target.value)
  }

  const handleChangeRating = (e: any, newRating: any) => {
    setRating(newRating)
  }

  const handleSubmitReview = () => {
    const review = {
      description,
      rating,
      movieId: movie?.id,
    }

    console.log(review)
  }

  const canSubmit = description !== '' && rating > 0

  return (
    <div>
      <Typography variant='body1'>Write a review</Typography>
      <TextField
        fullWidth
        margin='normal'
        placeholder='Your review'
        multiline
        rows={5}
        onChange={handleChangeDescription}
      />

      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        mb={3}
      >
        <Rating value={rating} onChange={handleChangeRating} />
        <Button disabled={!canSubmit} onClick={handleSubmitReview}>
          Submit
        </Button>
      </Stack>
    </div>
  )
}

export default ManageReview
