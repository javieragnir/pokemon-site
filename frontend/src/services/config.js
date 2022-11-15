let token = null;
let config = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  config = {
    headers: { Authorization: token },
  };
};

export const DEVURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '';

export default { setToken, config, DEVURL };
