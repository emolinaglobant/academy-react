import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.css';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = ( props ) => {

  const { id, user, image, duration, isList, video_files } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, user, image, duration, video_files
    })
  }
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }

  return (
    <div className="carousel-item" data-testid={id}>
      <img className="carousel-item__img" src={image}  />
      <div className="carousel-item__details">
        <div>
        <Link to={`/player/${id}`} state={{ video_files }} >
          <img 
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
        </Link>
          {isList ?
            <img 
              className="carousel-item__details--img" 
              src={removeIcon} 
              alt="Remove Icon" 
              onClick={() => handleDeleteFavorite(id)}
            /> : 
            <img 
              className="carousel-item__details--img" 
              src={plusIcon} 
              alt="Plus Icon" 
              onClick={handleSetFavorite}
            />
          }
          
        </div>
        <p className="carousel-item__details--title">Autor: {user.name} </p>
        <p className="carousel-item__details--subtitle">
          {`Duration: ${duration}s`}
        </p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  id: PropTypes.number,
  user: PropTypes.object,
  image: PropTypes.string,
  video_files: PropTypes.array,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);