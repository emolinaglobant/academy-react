import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../Navbar/NavbarSlice';
import { setCurrentTrack } from './SearchResultSlice';
import './SearchResult.css';

const SearchResult = ({ track }) => {
  const [clickedTrack, setClickedTrack] = useState({});
  const dispatch = useDispatch();
  let artists = track.artists.map((artist) => artist.name).join(', ');
  let coverUrl = track.album.images.find((cover) => cover.height <= 64).url;

  useEffect(() => {
    dispatch(setCurrentTrack(clickedTrack));
  }, [clickedTrack]);

  return (
    <section
      className='result-container'
      onClick={() => {
        setClickedTrack({ ...track });
        dispatch(setSearch(''));
      }}
    >
      <figure className='short-cover-container'>
        <img src={coverUrl} className='short-album-cover' />
      </figure>
      <section className='track-info'>
        <p className='track-name'>{track.name}</p>
        <p className='track-artists'>{artists}</p>
      </section>
    </section>
  );
};

export default SearchResult;
