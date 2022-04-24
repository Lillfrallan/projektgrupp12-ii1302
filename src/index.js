import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
// const { BlobServiceClient } = require("@azure/storage-blob");

// const account = "ktodb";
// const containerName = "images";


// const get_image_url = (image_id) => {
//     return `https://ktodb.blob.core.windows.net/images/${image_id}`;
// }

// const get_blob_account = (account) => {
//     return `https://${account}.blob.core.windows.net`;
// }

// const blobServiceClient = new BlobServiceClient(get_blob_account(account));
// const containerClient = blobServiceClient.getContainerClient(containerName);



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// export  {get_image_url, get_blob_account, containerClient}


