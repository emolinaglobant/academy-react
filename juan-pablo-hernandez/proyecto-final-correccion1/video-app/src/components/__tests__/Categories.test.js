import { render, screen } from '@testing-library/react';
import Categories from '../Categories';

test('Should render Categories component', () => {
  render(<Categories title='Tendencias'/>);
  const categoriesElement = screen.getByTestId('Tendencias');
  expect(categoriesElement).toBeInTheDocument();
})