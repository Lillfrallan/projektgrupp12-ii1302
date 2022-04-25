import React, {useState, useEffect} from 'react';
import BodyView from '../views/BodyView';
import { useNavigate } from 'react-router-dom';
import '../views/css/Body.css'
import BlobRetriever from '../services/BlobRetriever'
import { BsArrowDownUp } from "react-icons/bs";

function BodyPresenter() {

    // Navigate the user around the website
    const navigate = useNavigate();
    const [blobs, setBlobs] = useState([]);

    useEffect(() => {

        BlobRetriever.blobData().then(function(data) {
            setBlobs(data)
        })

    }, []) 

    
    const redirect = (index, blob) => {
        return navigate("/summary/" + index,
        {blob}
        );
    }

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
                            images={blob.images}
                            datesAndTime={blob.datesAndTime}  
                            index = {i}
                            redirect={redirect}
                            key={i}   
                            blob={blob}  
                        />
                    </div>
                ))}   
        </div >
    )
}

export default BodyPresenter;