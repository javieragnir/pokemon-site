import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const signup = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const findOne = async username => {
  const response = await axios.get(`${baseUrl}/${username}`)
  return response.data
}

export default { signup, findOne }