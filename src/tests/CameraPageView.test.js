/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import CameraPageView from '../views/CameraPageView'
import '@testing-library/jest-dom'
import '../resources/testKameraBild.jpg'


test('renders component', () => {
    render(<CameraPageView />);
    screen.debug();
});

test('renders Camera Name:', () => {
    render(<CameraPageView />);
    const linkElement = screen.getByText(/Camera Name:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Camera Manufacturer:', () => {
    render(<CameraPageView />);
    const linkElement = screen.getByText(/Camera Manufacturer:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Software Version:', () => {
    render(<CameraPageView />);
    const linkElement = screen.getByText(/Software Version:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Operating System:', () => {
    render(<CameraPageView />);
    const linkElement = screen.getByText(/Operating System:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Processor Architecture:', () => {
    render(<CameraPageView />);
    const linkElement = screen.getByText(/Processor Architecture:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Processor Design:', () => {
    render(<CameraPageView />);
    const linkElement = screen.getByText(/Processor Design:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Total Storage:', () => {
    render(<CameraPageView />);
    const linkElement = screen.getByText(/Total Storage:/i);
    expect(linkElement).toBeInTheDocument();
});

test('rendersDate and Time:', () => {
    render(<CameraPageView />);
    const linkElement = screen.getByText(/Date and Time:/i);
    expect(linkElement).toBeInTheDocument();
});

