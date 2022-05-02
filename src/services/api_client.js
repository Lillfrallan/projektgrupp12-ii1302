import { BlobServiceClient } from '@azure/storage-blob';


/**
 * Holds the API connections to Azure Portal.
 * 
*/
const account = "ktodb";
const containerName = "images";
const sas = "?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2023-05-03T04:41:44Z&st=2022-05-02T20:41:44Z&spr=https&sig=hBBP8KRK5J65i6nieht0YM2qzpRGhIyv8JnU5tNHGXg%3D";

var blobName = "";


const get_image_url = (image_id) => {
    return `https://${account}.blob.core.windows.net/images/${image_id}`;
}

const get_blob_account = (account) => {
    return `https://${account}.blob.core.windows.net`;
}

const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`);
// const blobServiceClient = new BlobServiceClient(get_blob_account(account));
const containerClient = blobServiceClient.getContainerClient(containerName);
const blockBlobClient = containerClient.getBlockBlobClient(blobName)


export  {get_image_url, get_blob_account, containerClient, blobName} 