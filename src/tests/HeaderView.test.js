/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import HeaderView from '../views/HeaderView'
import '@testing-library/jest-dom'

test('renders component', () => {
    render(<HeaderView />);
    screen.debug();
});

test('renders the date and time of the blob when passed as prop', () => {
    render(<HeaderView lastUploadedBlob="datesAndTime1" />);
    expect(screen.getByText(/datesAndTime1/i)).toBeInTheDocument();
});

test('renders KTH-LINK title', () => {
    render(<HeaderView />);
    const linkElement = screen.getByText(/KTH-LINK/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders last-uploaded-foto', () => {
    render(<HeaderView />);
    const linkElement = screen.getByText(/Last uploaded foto:/i);
    expect(linkElement).toBeInTheDocument();
});



