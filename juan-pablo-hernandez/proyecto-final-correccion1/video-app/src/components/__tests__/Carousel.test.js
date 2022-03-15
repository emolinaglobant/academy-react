import { render, screen, cleanup } from '@testing-library/react';
import Carousel from '../Carousel';

test('Should render Carousel component', () => {
  render(<Carousel />);
  const carouselElement = screen.getByTestId('carousel-1');
  expect(carouselElement).toBeInTheDocument();
})