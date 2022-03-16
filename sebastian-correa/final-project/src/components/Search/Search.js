import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../Navbar/NavbarSlice';
import SearchResult from '../SearchResult/SearchResult';
import './Search.css';

const Search = ({ searchResults }) => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <section>
      <input
        type={'text'}
        placeholder='Search for a song, artist, etc.'
        value={search || ''}
        onChange={(event) => dispatch(setSearch(event.target.value))}
      />
      <section className='results'>
        {searchResults.map((track, index) => {
          return <SearchResult key={index} track={track} />;
        })}
      </section>
    </section>
  );
};

export default Search;
