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
                    blob.properties.createdOn.getMonth() + "-" + 
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
                    if (((i + 1) % K) == 0) {
                        ans.push(temp);
                        temp = [];
                    }
                }
                if (temp.length != 0) {
                    let a = temp.length;
                    while (a != K) {
                        temp.push(0);
                        a++;
                    }
                    ans.push(temp);
                }
                return ans;
            }

            // let splittedArray = divideArray(arrayForBlobs, 2, arrayForBlobs.length);

            setBlobs(divideArray(arrayForBlobs, 2, arrayForBlobs.length))

            // console.log(blobObject)

        }
        return blobStorage;
    }, [blobs])  

    

    // console.log(blobs[0])


    return (
        <div className="BodyPresenter">

            <BodyView
                blobs={blobs}
            /> 
            {blobs.map(() => {
                <BodyView
                    image={blobs[0]}
                /> 

            })}

        </div >
    )
}

export default BodyPresenter