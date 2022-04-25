import * as api_client from '../services/api_client'
import React, {useState, useEffect} from 'react';
import BodyView from '../views/BodyView';
import { useNavigate } from 'react-router-dom';
import '../views/css/Body.css'
import { saveAs } from 'file-saver'
import BlobRetriever from '../services/BlobRetriever'

function BodyPresenter() {

    // Navigate the user around the website
    const navigate = useNavigate();
    const [blobs, setBlobs] = useState([]);

    useEffect(() => {

        BlobRetriever.blobData().then(function(result) {
            setBlobs(result)
        })

    }, [blobs]) 
    
    const redirect = (index, blob) => {
        return navigate("/summary/" + index, {
            blob
        });
    }

    // console.log(blobs)
    // const downloadImage = () => {
    //     saveAs(api_client.get_image_url(blobs[0][0]), blobs[0][0])
    //     saveAs(blobs[0][1], "hello world.txt");
    // }

    return (
        <div className="bodyPresenter">
                {blobs.map((blob, i) => (
                    <div key={i} className="elementBox">
                        <BodyView
                            images={blob.images}
                            datesAndTime={blob.datesAndTime}  
                            index = {i}
                            redirect={redirect}
                            key={i}   
                            blob={blob}    
                        />
                    </div>
                ))}   
                {/* <button onClick={downloadImage}>DOWNLOAD TEST</button> */}
        </div >
    )
}

export default BodyPresenter;