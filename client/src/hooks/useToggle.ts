import { useState } from 'react'

const useToggle = (initialState: boolean) => {
  const [toggle, setToggle] = useState(initialState)

  const handleToggle = () => setToggle(!toggle)

  return [toggle, handleToggle]
}

export default useToggle
