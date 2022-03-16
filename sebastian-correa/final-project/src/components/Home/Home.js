import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { requestToken, searchTracks } from '../../services/SpotifyService';
import { AUTH_CODE, BASE_URL, CLIENT_ID, CLIENT_SECRET } from '../Login/LoginHandler';
import Navbar from '../Navbar/Navbar';
import Player from '../Player/Player';
import Visualizer from '../Visualizer/Visualizer';
import './Home.css';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [token, setToken] = useState({});
  const search = useSelector((state) => state.search);
  const apiData = {
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    baseUrl: BASE_URL,
    authCode: AUTH_CODE,
  };

  useEffect(async () => {
    let response = await requestToken(apiData);
    if (response.status == 200) {
      setToken(response.data);
    }
  }, []);
  
  useEffect(() => {
    if (token?.access_token) {
      if (search != '') {
        searchTracks(token, search, apiData).then((response) => {
          setSearchResults(response.data.tracks.items);
        });
      } else {
        setSearchResults([]);
      }
    }
  }, [search]);

  return (
    <article className='home-main'>
      <header>
        <Navbar searchResults={searchResults} />
      </header>
      <Visualizer />
      <footer>
        {!!token?.access_token && <Player token={token.access_token} />}
      </footer>
    </article>
  );
};

export default Home;
