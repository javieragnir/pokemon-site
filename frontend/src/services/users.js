import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

const signup = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const findOne = async (username) => {
  const response = await axios.get(`${baseUrl}/${username}`);
  return response.data;
};

const updateFriendCode = async (username, friendCode) => {
  const response = await axios.put(`${baseUrl}/${username}/friendcode`, friendCode);
  return response.data;
};

const updateProfilePicture = async (username, profilePictureUrl) => {
  const response = await axios.put(`${baseUrl}/${username}/profilepicture`, { profilePictureUrl });
  return response.data;
};

export default {
  signup, findOne, updateFriendCode, updateProfilePicture,
};
