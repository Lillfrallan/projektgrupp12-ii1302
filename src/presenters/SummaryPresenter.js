import React, {useState, useEffect} from 'react';
import SummaryView from '../views/SummaryView'
import * as api_client from '../services/api_client'

function SummaryPresenter(  ) {

    const [blobsData, setBlobsData] = useState([]);

    useEffect(() => {
        async function blobStorage() {

            let blobs = api_client.containerClient.listBlobsFlat();

            let arrayForBlobs = [];

            for await (const blob of blobs) {
                let index = 1;

                arrayForBlobs.push(blob.name); 
                arrayForBlobs.push("Date Created: " + 
                    blob.properties.createdOn.getDate() + "/" + 
                    (blob.properties.createdOn.getMonth()+1) + "-" + 
                    blob.properties.createdOn.getFullYear() + " " + 
                    blob.properties.createdOn.getHours() + ":" + 
                    blob.properties.createdOn.getMinutes() + ":" + 
                    blob.properties.createdOn.getSeconds()
                )
                arrayForBlobs.push(index)
                arrayForBlobs.push("Blobtype: " + blob.properties.blobType)
                arrayForBlobs.push("Etag: " + blob.properties.etag)
                arrayForBlobs.push("Access Tier: " + blob.properties.accessTier)
                arrayForBlobs.push("Access Tier Inferred: " + blob.properties.accessTierInferred)
                arrayForBlobs.push("Content Type: " + blob.properties.contentType)
                arrayForBlobs.push("Lease Status: " + blob.properties.leaseStatus)
                arrayForBlobs.push("Lease State: " + blob.properties.leaseState)
                arrayForBlobs.push("Server Encrypted: " + blob.properties.serverEncrypted)
                index++;
            }

            /**
             * Divides array into smaller arrays.
             * 
             * @param {array to divide} array 
             * @param {size of each division} K 
             * @param {array length} N 
             * @returns the divided array
             */
            function divideArray(array, K, N) {
                let ans = [];
                let temp = [];
                for (let i = 0; i < N; i++) {
                    temp.push(array[i]);
                    if (((i + 1) % K) === 0) {
                        ans.push(temp);
                        temp = [];
                    }
                }
                if (temp.length !== 0) {
                    let a = temp.length;
                    while (a !== K) {
                        temp.push(0);
                        a++;
                    }
                    ans.push(temp);
                }
                return ans;
            }

            let splittedArray = divideArray(arrayForBlobs, 11, arrayForBlobs.length).reverse();

            setBlobsData(splittedArray);

        }
        return blobStorage;
    }, [blobsData])

    return (
        <div>
            {blobsData.map((blob, i) => (
                <div key={i} className="elementBox">
                    <SummaryView
                        images={blob[0]}
                        datesAndTime={blob[1]}  
                        index ={blob[2]}
                        key={i}    
                    />
                </div>
            ))} 
        </div>  
    )
}

export default SummaryPresenter