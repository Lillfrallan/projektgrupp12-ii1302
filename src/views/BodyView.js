import React from 'react'
import './css/Body.css'
import * as api_client from '../services/api_client'

function BodyView({ images, datesAndTime }) {

    return (
        <div className="bodyView">
            <div className="blobs">
                <div className="imageContainer">
                    <img className="image" src={api_client.get_image_url(images)} alt=""/>
                </div>
                <div className="dateAndTimeContainer">
                    <div className="dateAndTime">{datesAndTime}</div>
                </div>
            </div>
        </div>
    );
}    

export default BodyView