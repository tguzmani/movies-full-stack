import useAuth from 'hooks/useAuth'
import { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'config/easy-peasy.store'

const useAdmin = () => {
  const { user } = useStoreState(state => state.auth)

  const isAuth = useAuth()

  return isAuth && user?.role === 'admin'
}

export default useAdmin
