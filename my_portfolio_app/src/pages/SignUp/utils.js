export const findInputError = (errors, name) => {

  const filteredErrors = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((acc, key) => {
      return Object.assign(acc, {error: errors[key]})
    }, {})
  return filteredErrors
}

export const isFormInvalid = (err) => {
  console.log('err', err);
  if (Object.keys(err).length > 0) {
    return true
  }
    return false
}

export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'password',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}
