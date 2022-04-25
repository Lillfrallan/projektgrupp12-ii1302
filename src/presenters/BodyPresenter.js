import React, {useState, useEffect} from 'react';
import BodyView from '../views/BodyView';
import { useNavigate } from 'react-router-dom';
import '../views/css/Body.css'
import BlobRetriever from '../services/BlobRetriever'
import { BsArrowDownUp } from "react-icons/bs";

function BodyPresenter() {

    const navigate = useNavigate();
    const [blobs, setBlobs] = useState([]);

    useEffect(() => {

        BlobRetriever.blobData().then(function(data) {
            setBlobs(data)
        })

    }, []) 

    
    /**
     * Used to redirect to a specific blobs summary page
     * 
     * @param {blobs index number} index 
     * @param {the blob object} blob 
     * @returns navigates to the page
     */
    const redirect = (blobs) => {
        return navigate("/summary/" + blobs
        );
    }

    /**
     * Reverses the order of the array of blobs
     */
    const reverseOrderButton = () => {
        var y = [...blobs].reverse()
        setBlobs(y);
    }

    return (
        <div className="bodyPresenter">
            <div className="bodyButtons">
                <button className="reverseButton" onClick={reverseOrderButton} title="reverse order"><BsArrowDownUp/></button>
            </div>
                {blobs.map((blob, i) => (
                    <div key={i} className="elementBox">
                        <BodyView
                            name={blob.name}
                            images={blob.images}
                            datesAndTime={blob.datesAndTime}  
                            index = {i}
                            redirect={redirect}
                            key={i}   
                            blobs={blob}  
                        />
                    </div>
                ))}   
        </div >
    )
}

export default BodyPresenter;