const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = `https://api.football-data.org/v2/`;

const HEADER = {
  headers: {
    'X-Auth-Token': API_KEY,
  },
};
export { API_KEY, API_URL, HEADER };
