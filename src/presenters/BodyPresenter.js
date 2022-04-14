import * as api_client from '../services/api_client'
import React, {useState, useEffect} from 'react';
import { BlobServiceClient } from "@azure/storage-blob";
import BodyView from '../views/BodyView';

function BodyPresenter() {

    const [blobies, setBlobies] = useState([]);

    const account = "ktodb";
    const containerName = "images";


    useEffect(() => {
        async function main() {
            const blobServiceClient = new BlobServiceClient(api_client.get_blob_account(account));
            const containerClient = blobServiceClient.getContainerClient(containerName);
            
            let blobs = containerClient.listBlobsFlat();
        
            let newArray = [];
            for await (const blob of blobs) {
        
                // console.log(`${blob.name}`); //`Blob ${i++}: 
        
                newArray.push(blob.name); 
            }
        
            setBlobies(newArray);
        }
        return main;
    }, [blobies])

    
    return (
        <div className="BodyPresenter">
            <BodyView
            blobies={blobies}/>
        </div >
    )
}

export default BodyPresenter