import { Box } from '@mui/material'
import { useStoreActions } from 'config/easy-peasy.store'
import useRead from 'hooks/useRead'
import React, { ReactNode } from 'react'
import AppBar from './AppBar'

const Layout = ({ children }: { children: ReactNode }) => {
  const { readProfile } = useStoreActions(state => state.auth)

  useRead(readProfile)

  return (
    <>
      <AppBar />
      <Box>{children}</Box>
    </>
  )
}

export default Layout
