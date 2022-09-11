import { AxiosInstance } from 'axios'

interface Repository {
  resource: string
  instance: AxiosInstance

  endPoint: (URL: string) => string

  get: (URL: string) => Promise<any>
  post: (URL: string, data: any) => Promise<any>
  put: (URL: string, data: any) => Promise<any>
  delete: (URL: string) => Promise<any>
}

export default Repository
