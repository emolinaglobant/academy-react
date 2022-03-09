import { render, screen, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Seeker from './Seeker';


test('The word exist', () => {
    render(<Seeker />);
    const wordElement = screen.getByTestId('seeker')
    wordElement.innerHTML = 'cafe';
    const linkElement = screen.getByText(/cafe/i);
    expect(linkElement).toBeInTheDocument();
});

test('Clicking submit button', () => {
    const getDataToSearch = () => {
        return true
       }
    render(<Seeker getDataToSearch={getDataToSearch}/>);
    const btn = screen.getByTestId('send-form');
    fireEvent.click(btn);
});