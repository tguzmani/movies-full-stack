// import Login from 'modules/users/views/Login'
import LoginPage from 'pages/LoginPage'
import HomePage from 'pages/HomePage'

const routes = {
  home: {
    path: '/',
    element: LoginPage,
    public: true,
  },

  // login: {
  //   path: '/login',
  //   element: Login,
  //   public: true,
  // },
}

export default routes
