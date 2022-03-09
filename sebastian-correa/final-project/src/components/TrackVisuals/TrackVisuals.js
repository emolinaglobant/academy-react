import React from 'react';
import './TrackVisuals.css';

const TrackVisuals = ({ trackArtists, trackCover, trackName }) => {
  return (
    <section className='visualizer-container'>
      <section className='left-container'>
        <figure className='album-cover-container'>
          <img src={trackCover} className='album-cover' />
        </figure>
      </section>
      <section className='right-container'>
        <p className='visualizer-track-name'>{trackName}</p>
        <p className='visualizer-track-artists'>{trackArtists}</p>
      </section>
    </section>
  );
};

export default TrackVisuals;
