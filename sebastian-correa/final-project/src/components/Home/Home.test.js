const Home = require('./Home');

describe('Spotify API Test', () => {
  test('Requesting Access Token', async () => {
    let response = await Home.requestToken();
    expect(response.status).toBe(200);
  });
});
