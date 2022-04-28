import { BlobServiceClient } from '@azure/storage-blob';


/**
 * Holds the API connections to Azure Portal.
 * 
*/
const account = "ktodb";
const containerName = "images";


const get_image_url = (image_id) => {
    return `https://${account}.blob.core.windows.net/images/${image_id}`;
}

const get_blob_account = (account) => {
    return `https://${account}.blob.core.windows.net`;
}

const blobServiceClient = new BlobServiceClient(get_blob_account(account));
const containerClient = blobServiceClient.getContainerClient(containerName);



export  {get_image_url, get_blob_account, containerClient} 