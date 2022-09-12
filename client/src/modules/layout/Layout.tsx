import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import AppBar from './AppBar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppBar />
      <Box m={3}>{children}</Box>
    </>
  )
}

export default Layout
