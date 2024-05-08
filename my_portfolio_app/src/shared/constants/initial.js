import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  email: '',
  password: '',
  formErrors: {
    email: '',
    password: uuidv4(),
  },
  emailValid: false,
  passwordValid: false,
  formValid: false,
};
