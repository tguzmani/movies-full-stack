import { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'config/easy-peasy.store'

const useAuth = () => {
  const { readProfile } = useStoreActions(state => state.auth)
  const { user, isAuthenticated } = useStoreState(state => state.auth)

  const isAuth = user && isAuthenticated

  useEffect(() => {
    if (user) readProfile()
  }, [])

  return isAuth
}

export default useAuth
