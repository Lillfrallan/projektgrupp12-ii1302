/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import SummaryPageView from '../views/SummaryPageView'
import '@testing-library/jest-dom'


test('renders component', () => {
    render(<SummaryPageView />);
    screen.debug();
});

test('renders View in browser button', async () => {
    render(<SummaryPageView />);
    expect( await screen.findByRole('button', {name: /View in browser/i})).toBeEnabled();
});

test('renders button previous image', async () => {
    render(<SummaryPageView />);
    expect( await screen.findByRole('button', {name: /previous image/i})).toBeEnabled();
});

test('renders button next image', async () => {
    render(<SummaryPageView />);
    expect( await screen.findByRole('button', {name: /next image/i})).toBeEnabled();
});


test('renders download button', async () => {
    render(<SummaryPageView />);
    expect( await screen.findByRole('button', {name: /download blob/i})).toBeEnabled();
});

test('renders delete button', async () => {
    render(<SummaryPageView />);
    expect( await screen.findByRole('button', {name: /delete blob/i})).toBeEnabled();
});

test('renders the name of the Blob when passed as prop', () => {
    render(<SummaryPageView etag="etag1" />);
    expect(screen.getByText(/etag1/i)).toBeInTheDocument();
});

test('renders the bucket of the Blob when passed as prop', () => {
    render(<SummaryPageView bucket="bucket1" />);
    expect(screen.getByText(/bucket1/i)).toBeInTheDocument();
});

test('renders the storage class of the blob when passed as prop', () => {
    render(<SummaryPageView storageClass="storageClass1" />);
    expect(screen.getByText(/storageClass1/i)).toBeInTheDocument();
});

test('renders the content encoding of the Blob when passed as prop', () => {
    render(<SummaryPageView contentEncoding="contentEncoding1" />);
    expect(screen.getByText(/contentEncoding1/i)).toBeInTheDocument();
});

test('renders the content type contentType1of the Blob when passed as prop', () => {
    render(<SummaryPageView contentType="contentType1" />);
    expect(screen.getByText(/contentType1/i)).toBeInTheDocument();
});

test('renders the Crc32c of the Blob when passed as prop', () => {
    render(<SummaryPageView crc32c="crc32c1" />);
    expect(screen.getByText(/crc32c1/i)).toBeInTheDocument();
});

test('renders the Generation of the Blob when passed as prop', () => {
    render(<SummaryPageView generation="generation1" />);
    expect(screen.getByText(/generation1/i)).toBeInTheDocument();
});

test('renders the size of the Blob when passed as prop', () => {
    render(<SummaryPageView size="size1" />);
    expect(screen.getByText(/size1/i)).toBeInTheDocument();
});

test('renders the md5Hash of the Blob when passed as prop', () => {
    render(<SummaryPageView md5Hash="md5Hash1" />);
    expect(screen.getByText(/md5Hash1/i)).toBeInTheDocument();
});

test('renders the date and time of the Blob when passed as prop', () => {
    render(<SummaryPageView datesAndTime="datesAndTime1" />);
    expect(screen.getByText(/datesAndTime1/i)).toBeInTheDocument();
});

test('renders the total amount of blobs', () => {
    render(<SummaryPageView totalNumberOfBlobs="totalNumberOfBlobs" />);
    expect(screen.getByText(/totalNumberOfBlobs/i)).toBeInTheDocument();
});

test('renders the current blob index', () => {
    render(<SummaryPageView index="index1" />);
    expect(screen.getByText(/index1/i)).toBeInTheDocument();
});

test('renders Blob name:', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/Blob name:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Etag:', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/Etag:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Bucket:', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/Bucket:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Storage Class:', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/Storage Class:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Content Encoding:', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/Content Encoding:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Content Type: ', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/Content Type:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Crc32c:', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/Crc32c:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Generation:', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/Generation:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Size: ', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/Size:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders md5Hash: ', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/md5Hash:/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Date and Time: ', () => {
    render(<SummaryPageView />);
    const linkElement = screen.getByText(/Date and Time:/i);
    expect(linkElement).toBeInTheDocument();
});