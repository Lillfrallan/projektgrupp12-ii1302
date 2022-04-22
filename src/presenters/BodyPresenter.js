import * as api_client from '../services/api_client'
import React, {useState, useEffect} from 'react';
import BodyView from '../views/BodyView';

function BodyPresenter() {

    const [blobs, setBlobs] = useState([]);

    useEffect(() => {
        async function blobStorage() {

            let blobs = api_client.containerClient.listBlobsFlat();

            let arrayForBlobs = [];

            for await (const blob of blobs) {

                arrayForBlobs.push(blob.name); 
                arrayForBlobs.push(
                    blob.properties.createdOn.getDate() + "/" + 
                    (blob.properties.createdOn.getMonth()+1) + "-" + 
                    blob.properties.createdOn.getFullYear() + " " + 
                    blob.properties.createdOn.getHours() + ":" + 
                    blob.properties.createdOn.getMinutes() + ":" + 
                    blob.properties.createdOn.getSeconds()
                )
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

            setBlobs(divideArray(arrayForBlobs, 2, arrayForBlobs.length));

        }
        return blobStorage;
    }, [blobs])  


    return (
        <div className="bodyPresenter">
                {blobs.map((blob, i) => (
                    <div key={i} className="elementBox">
                        <BodyView
                            images={blob[0]}
                            datesAndTime={blob[1]}  
                            key={i}    
                        />
                    </div>
                ))}   
        </div >
    )
}

export default BodyPresenter