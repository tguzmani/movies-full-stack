import { v4 as uuidv4 } from 'uuid'
import IAlert from './alert.entity'

class Alert implements IAlert {
  id: string
  description: string | string[]
  isNew: boolean

  constructor(description: string) {
    this.id = uuidv4()
    this.description = Array.isArray(description) ? description[0] : description
    this.isNew = true
  }
}

export default Alert
