import * as api_client from '../services/api_client'
import React, {useState, useEffect} from 'react';
import BodyView from '../views/BodyView';
const { BlobServiceClient } = require('@azure/storage-blob');

function BodyPresenter() {

    const [blobImages, setBlobImages] = useState([]);
    const [blobDateTime, setBlobDateTime] = useState([]);

    const account = "ktodb";
    const containerName = "images";

    useEffect(() => {
        async function blobStorage() {
            const blobServiceClient = new BlobServiceClient(api_client.get_blob_account(account));
            const containerClient = blobServiceClient.getContainerClient(containerName);
            
            let blobs = containerClient.listBlobsFlat();
        
            let newArrayForImages = [];
            let newArrayforDates = [];
            for await (const blob of blobs) {
        
                // console.log(`${blob.name}`); //`Blob ${i++}: 
        
                newArrayForImages.push(blob.name); 
                newArrayforDates.push(blob.properties.createdOn)
            }
            
            setBlobImages(newArrayForImages);
            setBlobDateTime(newArrayforDates);
            
        }
        return blobStorage;
    }, [blobImages])  

    return (
        <div className="BodyPresenter">
            <BodyView
                blobImages={blobImages}
                blobDateTime={blobDateTime}
            />
        </div >
    )
}

export default BodyPresenter