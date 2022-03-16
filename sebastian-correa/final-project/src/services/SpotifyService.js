import axios from 'axios';

const queryString = require('query-string');

export const requestToken = async (data) => {
  try {
    const response = await axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(data.clientId + ':' + data.clientSecret),
      },
      data: queryString.stringify({
        grant_type: 'authorization_code',
        redirect_uri: data.baseUrl,
        code: data.authCode,
      }),
      method: 'POST',
    });
    return response;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  }
};

export const searchTracks = async (token, search, data) => {
  try {
    const response = await axios('https://api.spotify.com/v1/search', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token.token_type} ${token.access_token}`,
      },
      data: queryString.stringify({
        grant_type: 'authorization_code',
        redirect_uri: data.baseUrl,
        code: data.authCode,
      }),
      method: 'GET',
      params: {
        q: search,
        type: 'track',
        limit: 10,
      },
    });
    return response;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  }
};
