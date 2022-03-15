import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('Should render Footer component', () => {
  render(<Footer />);
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
})