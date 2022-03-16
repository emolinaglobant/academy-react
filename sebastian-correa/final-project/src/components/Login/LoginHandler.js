const queryString = require('query-string');

const SPOTIFY_ENDPOINT = 'https://accounts.spotify.com/authorize?';
export const BASE_URL = 'http://localhost:3000/home';
const SCOPES = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-modify-playback-state',
];
export const CLIENT_ID = 'b333c72b3bda4101a484c267e6824e33';
export const CLIENT_SECRET = 'f5acd3ee59e2417f85f28b74dc6de32c';
export const AUTH_CODE = new URLSearchParams(window.location.search).get(
  'code'
);

const authenticateUser = () => {
  window.location.href =
    `${SPOTIFY_ENDPOINT}` +
    queryString.stringify({
      response_type: 'code',
      client_id: CLIENT_ID,
      scope: SCOPES.join('%20'),
      redirect_uri: BASE_URL,
    });
  return '';
};

export default authenticateUser;
