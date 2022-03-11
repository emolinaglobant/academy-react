import { AUTH_CODE, BASE_URL, CLIENT_ID, CLIENT_SECRET, SCOPES } from '../components/Login/LoginHandler';
import { requestToken, searchTracks } from './SpotifyService';

const apiData = {
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  baseUrl: BASE_URL,
  authCode: AUTH_CODE,
};

describe('Spotify API service test', () => {
  test('Token request is successful', () => {
    requestToken(apiData).then((response) => {
      expect(response.status).toBe(200);
    });
  });

  test('Token request returns an access token and refresh token', () => {
    requestToken(apiData).then((response) => {
      expect(response.data).toHaveProperty('access_token', 'refresh_token');
    });
  });

  test('Access token contains the valid scopes', () => {
    requestToken(apiData).then((response) => {
      expect(response.data.scope).toEqual(expect.arrayContaining(SCOPES));
    });
  });

  test('Track search request is successful', () => {
    requestToken(apiData).then((response) => {
      searchTracks(response.data.access_token, 'Heroes del silencio', apiData).then((response) => {
        expect(response.status).toBe(200);
      });
    });
  });

  test('Track search returns 10 tracks for a valid search', () => {
    requestToken(apiData).then((response) => {
      searchTracks(response.data.access_token, 'Heroes del silencio', apiData).then((response) => {
        expect(response.data.tracks.items.length).toBe(10);
      });
    });
  });

});
