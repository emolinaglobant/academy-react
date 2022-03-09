import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TrackVisuals from '../TrackVisuals/TrackVisuals';
import './Visualizer.css';

const Visualizer = () => {
  const currentTrack = useSelector((state) => state.currentTrack);
  const [trackIsSelected, setTrackIsSelected] = useState(false);
  const [trackCover, setTrackCover] = useState({});

  useEffect(() => {
    if (!!currentTrack.uri) {
      setTrackIsSelected(true);
      setTrackCover(currentTrack?.album.images.find((cover) => cover.height >= 500).url);
    }
  }, [currentTrack]);

  return trackIsSelected ? (
    <TrackVisuals
      trackArtists={currentTrack.artists?.map((artist) => artist.name).join(', ')}
      trackCover={trackCover}
      trackName={currentTrack.name}
    />
  ) : (
    <p className='no-track-text'>Hey Glober! What's your next tune?</p>
  );
};

export default Visualizer;
