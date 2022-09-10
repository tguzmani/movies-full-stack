import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
  return <div>{children}</div>
}

export default PrivateRoute
