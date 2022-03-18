import { render, screen, fireEvent } from '@testing-library/react';
import Pages from './Pages';


test('Clicking in button next', () => {
    render(<Pages />);
    const btn = screen.getByText(/Siguiente/i);
    fireEvent.click(btn);
});
test('Clicking in button previous', () => {
    render(<Pages />);
    const btn = screen.getByText(/Anterior/i);
    fireEvent.click(btn);
});