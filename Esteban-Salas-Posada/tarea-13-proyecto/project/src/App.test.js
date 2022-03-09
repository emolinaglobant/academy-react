import { render, screen } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import App from './App';

// Número de cajas sea igual a 30 porque en el api se llaman 30
// Dar clic en el boton de siguiente
// Dar clic en el boton de atras
// Que si traiga datos del api
// Si llama escribe la palabra

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Buscador de imagenes/i);
  // console.log(prettyDOM(linkElement));
  expect(linkElement).toBeInTheDocument();
});