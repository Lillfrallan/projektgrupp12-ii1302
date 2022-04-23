import React, { useEffect, useState } from 'react'
import HeaderView from '../views/HeaderView'
import * as api_client from '../services/api_client'

function HeaderPresenter() {
<<<<<<< HEAD

=======
    
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
    const [lastCreatedBlob, setLastCreatedBlob] = useState("");

    useEffect(() => {
        async function blobStorage() {
<<<<<<< HEAD

            let blobs = api_client.containerClient.listBlobsFlat();
            let newArrayforDates = [];

=======
            
            let blobs = api_client.containerClient.listBlobsFlat();
            let newArrayforDates = [];
            
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2

            for await (const blob of blobs) {
                newArrayforDates.push(
                    blob.properties.lastModified.getDate() + "/" + 
                    blob.properties.lastModified.getMonth() + "-" + 
                    blob.properties.lastModified.getFullYear() + " " + 
                    blob.properties.lastModified.getHours() + ":" + 
                    blob.properties.lastModified.getMinutes() + ":" + 
                    blob.properties.lastModified.getSeconds()
                )    
            }

            var lastBlob;
            newArrayforDates.reverse();
            for(var i = 0; i <= newArrayforDates.length; i++) {
                lastBlob = newArrayforDates[i-1];
<<<<<<< HEAD

=======
                        
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
            }
            setLastCreatedBlob(lastBlob);
        }
        return blobStorage;
    }, [lastCreatedBlob])

    return  (
        <div>
            <HeaderView
                lastCreatedBlob={lastCreatedBlob}
            />
        </div>
    )
}

<<<<<<< HEAD
export default HeaderPresenter 
=======
export default HeaderPresenter
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
