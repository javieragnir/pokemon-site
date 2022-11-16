let token = null;
let config = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
  config = {
    headers: { Authorization: token },
  };
};

export const PRODURL = process.env.NODE_ENV === 'production' ? 'https://pokemon-trades.fly.dev' : '';

export default { setToken, config, PRODURL };
