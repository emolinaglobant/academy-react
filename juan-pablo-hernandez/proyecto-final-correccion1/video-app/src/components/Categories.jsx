import React from 'react';
import '../assets/styles/components/Categories.css';

const Categories = ({ children, title }) => (
  <div className="categories" data-testid={title}>
    <h3 className="categories__title">{title}</h3>
    {children}
  </div>
);

export default Categories;