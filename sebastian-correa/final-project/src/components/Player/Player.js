import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SpotifyWebPlayer from 'react-spotify-web-playback';

const Player = ({ token }) => {
  const [playing, setPlaying] = useState(false);
  const currentTrack = useSelector((state) => state.currentTrack);
  const [uris, setUris] = useState(['']);

  useEffect(() => {
    if (!!currentTrack.uri) {
      setUris([currentTrack.uri + '']);
      setPlaying(true);
    }
  }, [currentTrack]);

  return (
    <SpotifyWebPlayer
      token={token}
      uris={uris}
      initialVolume={0.2}
      play={playing}
      styles={{ sliderColor: '#bcd336', sliderHandleColor: '#6e7c1b' }}
      magnifySliderOnHover
    />
  );
};

export default Player;
