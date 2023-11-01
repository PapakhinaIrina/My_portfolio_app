import axios from 'axios';


export const registration = async(name, lastName, sex, email, password) => {
  try {
    const response = await axios.post('http://localhost:5007/api/auth/register', {
      name,
      lastName,
      sex,
      email,
      password
    })
    alert(response.data?.message)
  } catch (error) {
    alert(error.response?.data?.message)
  }
}