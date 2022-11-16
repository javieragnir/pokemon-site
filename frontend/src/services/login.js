import axios from 'axios';
import { PRODURL } from './config';

const baseUrl = `${PRODURL}/api/login`;

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };
