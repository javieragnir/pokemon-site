import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/trade'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const postTrade = async info => {
  const response = await axios.post(baseUrl, info)
  return response.data
}

export default { getAll, postTrade }