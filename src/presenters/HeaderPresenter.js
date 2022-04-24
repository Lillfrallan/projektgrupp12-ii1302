import React, { useEffect, useState } from 'react'
import HeaderView from '../views/HeaderView'
import * as api_client from '../services/api_client'
import { useNavigate } from 'react-router-dom';

function HeaderPresenter( {toggleTheme, theme} ) {

    const [lastCreatedBlob, setLastCreatedBlob] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function blobStorage() {

            let blobs = api_client.containerClient.listBlobsFlat();
            let newArrayforDates = [];


            for await (const blob of blobs) {
                newArrayforDates.push(
                    blob.properties.lastModified.getDate() + "/" + 
                    (blob.properties.lastModified.getMonth()+1) + "-" + 
                    blob.properties.lastModified.getFullYear() + " " + 
                    blob.properties.lastModified.getHours() + ":" + 
                    blob.properties.lastModified.getMinutes() + ":" + 
                    blob.properties.lastModified.getSeconds()
                )    
            }

            let lastBlob;
            let reversedArray = [];
            reversedArray = newArrayforDates.reverse();
            lastBlob = reversedArray[0];
    
            setLastCreatedBlob(lastBlob);
        }
        return blobStorage;
    }, [lastCreatedBlob])

    function home(e) {
        e.preventDefault();
        navigate("/home")
    }
    
    return  (
        <div>
            <HeaderView
                lastCreatedBlob={lastCreatedBlob}
                home={home}
                toggleTheme={toggleTheme}
                theme={theme}
            />
        </div>
        
    )
}

export default HeaderPresenter 