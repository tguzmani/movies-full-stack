// import Login from 'modules/users/views/Login'
import LoginPage from 'pages/LoginPage'
import HomePage from 'pages/HomePage'
import MoviePage from 'pages/MoviePage'
import MovieManagerPage from 'pages/MovieManagerPage'
import RegisterPage from 'pages/RegisterPage'

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

  register: {
    path: '/register',
    element: RegisterPage,
    public: true,
  },

  movieManager: {
    path: '/movie/manager',
    element: MovieManagerPage,
    public: true,
  },

  movie: {
    path: '/movie/:movieId',
    element: MoviePage,
    public: true,
  },
}

export default routes
