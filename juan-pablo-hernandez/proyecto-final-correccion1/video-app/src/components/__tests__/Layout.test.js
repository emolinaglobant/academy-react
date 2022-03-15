import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

test('Should render Layout component', () => {
  render(<Layout />);
  const layoutElement = screen.getByTestId('layout');
  expect(layoutElement).toBeInTheDocument();
})