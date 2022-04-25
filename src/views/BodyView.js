import React from 'react'
import './css/Body.css'
import * as api_client from '../services/api_client'

function BodyView({ images, datesAndTime, index, redirect, blob }) {

    // console.log(blob)
    
    return (
        <div className="bodyView">
            <div className="blobs" onClick={() => redirect(index, blob)}>
                    <img className="image" src={api_client.get_image_url(images)} alt=""/>
                    <div className="dateAndTime">{datesAndTime}</div>
            </div>
        </div>
            
    );
}    
export default BodyView