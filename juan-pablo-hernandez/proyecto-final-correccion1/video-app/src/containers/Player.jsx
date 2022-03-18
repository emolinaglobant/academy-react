import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/styles/components/Player.css';

const Player = () => {

  const location = useLocation()
  const link = location.state.video_files[0].link;
  const navigate = useNavigate();

  return (
    <div className="Player">
      <video controls autoPlay>
        <source src={link} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => navigate(-1)}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default (Player);