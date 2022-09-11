import axios, { AxiosInstance } from 'axios'
import Repository from './repository.interface'

export default class AxiosRepository implements Repository {
  resource: string
  instance: AxiosInstance

  constructor(resource: string) {
    this.resource = resource

    this.instance = axios.create({
      baseURL: 'http://localhost:3000/',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  endPoint(URL: string) {
    return `/${this.resource}${URL}`
  }

  async get(URL: string) {
    const response = await this.instance.get(this.endPoint(URL))
    return response.data
  }

  async post(URL: string, data: any) {
    const response = await this.instance.post(this.endPoint(URL), data)
    return response.data
  }

  async put(URL: string, data: any) {
    const response = await this.instance.put(this.endPoint(URL), data)
    return response.data
  }

  async delete(URL: string) {
    const response = await this.instance.delete(this.endPoint(URL))
    return response.data
  }
}
