import * as api_client from '../services/api_client'
import React, {useState, useEffect} from 'react';
// import BodyView from '../views/BodyView';

function BodyPresenter() {

    const [blobs, setBlobs] = useState([]);

    useEffect(() => {
        async function blobStorage() {
<<<<<<< HEAD

            let blobs = api_client.containerClient.listBlobsFlat();

    

            let arrayForBlobs = [];

            for await (const blob of blobs) {

                // console.log(`${blob.name}`); //`Blob ${i++}: 

                newArrayForImages.push(blob.name); 
                newArrayforDates.push(blob.properties.blobType)
=======
            
            let blobs = api_client.containerClient.listBlobsFlat();
        
            let arrayForBlobs = [];
    
            for await (const blob of blobs) {
        
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
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
<<<<<<< HEAD
                    if (((i + 1) % K) == 0) {
=======
                    if (((i + 1) % K) === 0) {
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
                        ans.push(temp);
                        temp = [];
                    }
                }
<<<<<<< HEAD
                if (temp.length != 0) {
                    let a = temp.length;
                    while (a != K) {
=======
                if (temp.length !== 0) {
                    let a = temp.length;
                    while (a !== K) {
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
                        temp.push(0);
                        a++;
                    }
                    ans.push(temp);
                }
                return ans;
            }

<<<<<<< HEAD
            let splittedArray = divideArray(arrayForBlobs, 2, arrayForBlobs.length);

            setBlobs(divideArray(arrayForBlobs, 2, arrayForBlobs.length))

            // console.log(blobObject)

        }
        return blobStorage;
    }, [blobs])  

    

    // console.log(blobs[0])

=======
            // let splittedArray = divideArray(arrayForBlobs, 2, arrayForBlobs.length);


            setBlobs(divideArray(arrayForBlobs, 2, arrayForBlobs.length))



            

            // const blobObject = {};
            // for(let i = 0; i < splittedArray.length; i++) {
            //     blobObject = {
            //         image: splittedArray[0] ,
            //         dateAndTime: splittedArray[1]
            //     };
            // }

            // console.log(blobObject)


            
            
        }
        return blobStorage;
    }, [blobs]) 
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2

    // console.log(blobs[0])
    
    
    return (
        <div className="BodyPresenter">
<<<<<<< HEAD

            <BodyView
                blobs={blobs}
            /> 
            {blobs.map(() => {
=======
            {/* {blobs.map(() => {
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
                <BodyView
                    image={blobs[0]}
                /> 

<<<<<<< HEAD
            })}

=======
            })} */}
            
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
        </div >
    )
}

export default BodyPresenter