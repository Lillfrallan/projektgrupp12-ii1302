import * as api_client from './api_client'

    async function blobData() {

        let blobs = api_client.containerClient.listBlobsFlat();

        const arrayForBlobs = [];

        let index = 1;
        let t = {};
        for await (const blob of blobs) {

            t = {
                images: blob.name,
                blobType: blob.properties.blobType,
                etag: blob.properties.etag,
                accessTier: blob.properties.accessTier,
                accessTierInferred: blob.properties.accessTierInferred,
                contentType: blob.properties.contentType,
                leaseStatus: blob.properties.leaseStatus,
                leaseState: blob.properties.leaseState,
                serverEncrypted: blob.properties.serverEncrypted,
                datesAndTime: 
                blob.properties.createdOn.getDate() + "/" + 
                (blob.properties.createdOn.getMonth()+1) + "-" + 
                blob.properties.createdOn.getFullYear() + " " + 
                blob.properties.createdOn.getHours() + ":" + 
                blob.properties.createdOn.getMinutes() + ":" + 
                blob.properties.createdOn.getSeconds(),
                blob,
                index
            } 

            arrayForBlobs.push(t)
            index++;
        }
        return arrayForBlobs;
    }

export default { blobData }