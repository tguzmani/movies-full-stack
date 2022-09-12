// import Login from 'modules/users/views/Login'
import LoginPage from 'pages/LoginPage'
import HomePage from 'pages/HomePage'
import MoviePage from 'pages/MoviePage'

const routes = {
  home: {
    path: '/',
    element: HomePage,
    public: true,
  },

  login: {
    path: '/login',
    element: LoginPage,
    public: true,
  },

  movie: {
    path: '/movie/:movieId',
    element: MoviePage,
    public: true,
  },
}

export default routes
