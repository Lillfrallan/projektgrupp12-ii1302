import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './services/api_client';
const { BlobServiceClient } = require("@azure/storage-blob");


//required to be here for github actions to work -> not used
const blobServiceClient = new BlobServiceClient(`https://ktodb.blob.core.windows.net`);


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

export {blobServiceClient}


