import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Routing
import routes from './config/routes'
import PrivateRoute from './modules/layout/PrivateRoute'
import HomePage from './pages/HomePage'

const Router = () => {
  const privateRoutes = Object.values(routes).filter(route => !route.public)
  const publicRoutes = Object.values(routes).filter(route => route.public)

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}

        {privateRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoute>
                <route.element />
              </PrivateRoute>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
