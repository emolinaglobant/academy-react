import React from 'react';
import '../assets/styles/components/Carousel.css';

const Carousel = ({ children }) => (
  <section className="carousel" data-testid="carousel-1">
    <div className="carousel__container">
      {children}
    </div>
  </section>
);

export default Carousel;