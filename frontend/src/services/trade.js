import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/trade'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getByUserId = async (userId) => {
  const response = await axios.get(`${baseUrl}/${userId}`)
  return response.data
}

const create = async info => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, info, config)
  return response.data
}

export default { getAll, getByUserId, create, setToken }