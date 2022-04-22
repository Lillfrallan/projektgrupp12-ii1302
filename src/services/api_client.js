import { BlobServiceClient } from '@azure/storage-blob';

/**
 * Holds the API connections to Azure Portal.
*/

const account = "ktodb";
const containerName = "images";


const get_image_url = (image_id) => {
    return `https://ktodb.blob.core.windows.net/images/${image_id}`;
}

const get_blob_account = (account) => {
    return `https://${account}.blob.core.windows.net`;
}

const blobServiceClient = new BlobServiceClient(get_blob_account(account));
const containerClient = blobServiceClient.getContainerClient(containerName);



<<<<<<< HEAD
export  {get_image_url, get_blob_account, containerClient} 
=======
export  {get_image_url, get_blob_account, containerClient}
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
