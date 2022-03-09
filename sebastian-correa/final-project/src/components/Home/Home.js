import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AUTH_CODE, BASE_URL, CLIENT_ID, CLIENT_SECRET } from '../Login/LoginHandler';
import Navbar from '../Navbar/Navbar';
import Player from '../Player/Player';
import Visualizer from '../Visualizer/Visualizer';
import './Home.css';

const queryString = require('query-string');

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [token, setToken] = useState({});
  const search = useSelector((state) => state.search);

  const requestToken = async () => {
    return axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
      },
      data: queryString.stringify({
        grant_type: 'authorization_code',
        redirect_uri: BASE_URL,
        code: AUTH_CODE,
      }),
      method: 'POST',
    });
  };

  const searchTracks = () => {
    return axios('https://api.spotify.com/v1/search', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token.token_type} ${token.access_token}`,
      },
      data: queryString.stringify({
        grant_type: 'authorization_code',
        redirect_uri: BASE_URL,
        code: AUTH_CODE,
      }),
      method: 'GET',
      params: {
        q: search,
        type: 'track',
        limit: 10,
      },
    });
  };

  useEffect(async () => {
    let response = await requestToken();
    if (response.status == 200) {
      setToken(response.data);
    }
  }, []);

  useEffect(() => {
    if (token?.access_token) {
      if (search != '') {
        searchTracks().then((response) => {
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
