interface Movie {
  id: number
  title: string
  releaseDate: string
  description: string | null
  posterImage: string | null
  backgroundImage: string | null
  titleImage: string | null
  duration: number
  genre: string
  // reviews: Review[];
}

export default Movie
