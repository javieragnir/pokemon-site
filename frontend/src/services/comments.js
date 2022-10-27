import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/comments';

let token = null;
let config = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  config = {
    headers: { Authorization: token },
  };
};

const create = async (tradeRequestId, content) => {
  const info = { tradeRequestId, content };
  const response = await axios.post(baseUrl, info, config);
  return response.data;
};

export default { setToken, create };
