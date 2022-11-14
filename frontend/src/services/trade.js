import axios from 'axios';

const baseUrl = '/api/trade';

let token = null;
let config = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  config = {
    headers: { Authorization: token },
  };
};

const getAll = async (query = '') => {
  let url = baseUrl;
  if (query) {
    url += `?search=${query}`;
  }

  const response = await axios.get(url);
  return response.data;
};

const getByTradeId = async (tradeId) => {
  const response = await axios.get(`${baseUrl}/${tradeId}`);
  return response.data;
};

const getByUserId = async (userId) => {
  const response = await axios.get(`${baseUrl}/by-user/${userId}`);
  return response.data;
};

const create = async (info, query = '') => {
  let url = baseUrl;
  if (query) {
    url += `?search=${query}`;
  }

  const response = await axios.post(url, info, config);
  return response.data;
};

const deleteTrade = async (tradeId) => {
  const response = await axios.delete(`${baseUrl}/${tradeId}`, config);
  return response.data;
};

const likeTrade = async (tradeId) => {
  const response = await axios.post(`${baseUrl}/${tradeId}/like`, null, config);
  return response.data;
};

const unlikeTrade = async (tradeId) => {
  const response = await axios.delete(`${baseUrl}/${tradeId}/like`, config);
  return response.data;
};

export default {
  getAll,
  getByUserId,
  create,
  setToken,
  deleteTrade,
  getByTradeId,
  likeTrade,
  unlikeTrade,
};
