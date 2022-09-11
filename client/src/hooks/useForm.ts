import { useState } from 'react'

const useForm = (initialState: any) => {
  const [fields, setFormFields] = useState(initialState)

  const onChange = (e: any) => {
    setFormFields({ ...fields, [e.target.name]: e.target.value })
  }

  const bindField = (name: string) => ({
    onChange,
    value: fields[name],
    name,
  })

  const areFieldsEmpty = fields
    ? Object.values(fields).some(credential => credential === '')
    : true

  const setFields = (fields: any) => {
    setFormFields(fields)
  }

  return [fields, bindField, areFieldsEmpty, setFields]
}

export default useForm
