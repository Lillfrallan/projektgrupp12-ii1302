import React, { useEffect } from 'react';
import BodyView from '../views/BodyView';
import { useNavigate } from 'react-router-dom';
import '../views/css/Body.css'
import { BsArrowDownUp } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
import { getBlobs } from '../services/BlobRetriever'

function BodyPresenter() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blobs} = useSelector(state => state.blobs)

    useEffect(() => {
        dispatch(getBlobs())
    }, [dispatch])

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
        let z = [...blobs].reverse()
        return z;
        
    }

    console.log(blobs)
    
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
                        />
                    </div>
                ))}   
        </div >
    )
}

export default BodyPresenter;