import * as api_client from '../services/api_client'
import React, {useState, useEffect} from 'react';
import BodyView from '../views/BodyView';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import '../views/css/Body.css'
import { saveAs } from 'file-saver'
var FileSaver = require('file-saver')

function BodyPresenter() {

    const [blobs, setBlobs] = useState([]);

    //Navigate the user around the website
    const navigate = useNavigate();

    useEffect(() => {
        async function blobStorage() {

            let blobs = api_client.containerClient.listBlobsFlat();

            let arrayForBlobs = [];

            for await (const blob of blobs) {
                let index = nanoid();

                arrayForBlobs.push(blob.name); 
                arrayForBlobs.push(
                    blob.properties.createdOn.getDate() + "/" + 
                    (blob.properties.createdOn.getMonth()+1) + "-" + 
                    blob.properties.createdOn.getFullYear() + " " + 
                    blob.properties.createdOn.getHours() + ":" + 
                    blob.properties.createdOn.getMinutes() + ":" + 
                    blob.properties.createdOn.getSeconds()
                )
                arrayForBlobs.push(index)
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

            let splittedArray = divideArray(arrayForBlobs, 3, arrayForBlobs.length).reverse();

            setBlobs(splittedArray);

        }
        return blobStorage;
    }, [blobs]) 

    // console.log(blobs)
    
    const redirect = (index) => {
        return navigate("/summary/" + index);
    }

    const downloadImage = () => {
        saveAs(api_client.get_image_url(blobs[0][0]), blobs[0][0])
        saveAs(blobs[0][1], "hello world.txt");
    }

    return (
        <div className="bodyPresenter">
                {blobs.map((blob, i) => (
                    <div key={i} className="elementBox">
                        <BodyView
                            images={blob[0]}
                            datesAndTime={blob[1]}  
                            index ={blob[2]}
                            redirect={redirect}
                            key={i}    
                        />
                    </div>
                ))}   
                <button onClick={downloadImage}></button>
        </div >
    )
}

export default BodyPresenter;