export const findInputError = (errors, name) => {
  const filteredErrors = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((acc, key) => {
      return Object.assign(acc, { error: errors[key] });
    }, {});
  return filteredErrors;
};

export const isFormInvalid = (err) => {
  if (Object.keys(err).length > 0) {
    return true;
  }
  return false;
};

export const user_name_validation = {
  name: 'username',
  label: 'Username',
  type: 'text',
  id: 'username',
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
};

export const login_name_validation = {
  name: 'email',
  label: 'Email',
  type: 'text',
  id: 'email',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 90,
      message: '30 characters max',
    },
  },
};
