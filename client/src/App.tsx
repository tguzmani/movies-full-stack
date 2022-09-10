import './App.scss'
import React from 'react'
import Router from './Router'

import { StoreProvider } from 'easy-peasy'
import store from './config/easy-peasy.store'

import { ThemeProvider } from '@mui/material/styles'
import theme from './config/theme'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { CssBaseline } from '@mui/material'

//
type Props = StoreProvider['props'] & { children: React.ReactNode }

const StoreProviderOverride =
  StoreProvider as unknown as React.ComponentType<Props>

const App = () => {
  React.useEffect(() => {
    document.title = 'OneMovie'
  }, [])

  return (
    <StoreProviderOverride store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </LocalizationProvider>
    </StoreProviderOverride>
  )
}

export default App
