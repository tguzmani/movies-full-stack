import { useEffect } from 'react'

const useRead = (...functions: any[]) => {
  useEffect(() => {
    functions.forEach(fn => fn())
  }, [])
}

export default useRead
