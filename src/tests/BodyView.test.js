/* eslint-disable testing-library/prefer-screen-queries  */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from '@testing-library/react';
import BodyView from '../views/BodyView'
import '@testing-library/jest-dom'

test('renders component', () => {
    render(<BodyView />);
    screen.debug();
});

test('renders the date and time of the blob when passed as prop', () => {
    render(<BodyView datesAndTime="datesAndTime1" />);
    expect(screen.getByText(/datesAndTime1/i)).toBeInTheDocument();
});

