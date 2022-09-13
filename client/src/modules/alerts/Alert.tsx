import { useStoreActions, useStoreState } from 'config/easy-peasy.store'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const Alert = () => {
  const TIMEOUT = 3000
  const { alert } = useStoreState(state => state.alerts)

  console.log('alert', alert)

  const { setNotNew } = useStoreActions(actions => actions.alerts)

  useEffect(() => {
    if (alert && alert.isNew) toast.error(alert.description)

    setTimeout(() => {
      setNotNew()
    }, TIMEOUT)
  }, [alert])

  return (
    <ToastContainer
      position='top-right'
      autoClose={TIMEOUT}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{
        backgroundColor: '#1e1e1e',
        color: 'white',
      }}
    />
  )
}

export default Alert
