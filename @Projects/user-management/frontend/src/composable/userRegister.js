import axios from 'axios';

export async function registerUser(fullname, email, password) {
  try {
    const response = await axios.post('api/register', {
      fullname,
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}
