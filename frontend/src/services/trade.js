import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/trade';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async (query = '') => {
  let url = baseUrl;
  if (query) {
    url += `?search=${query}`;
  }

  const response = await axios.get(url);
  return response.data;
};

const getByUserId = async (userId) => {
  const response = await axios.get(`${baseUrl}/by-user/${userId}`);
  return response.data;
};

const create = async (info, query = '') => {
  const config = {
    headers: { Authorization: token },
  };

  let url = baseUrl;
  if (query) {
    url += `?search=${query}`;
  }

  const response = await axios.post(url, info, config);
  return response.data;
};

const deleteTrade = async (tradeId) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${tradeId}`, config);
  return response.data;
};

export default {
  getAll, getByUserId, create, setToken, deleteTrade,
};
