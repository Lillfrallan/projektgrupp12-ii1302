import React from 'react'
import './css/Body.css'

function BodyView({ images, datesAndTime, index, redirect, blobs, name }) {

    // console.log(blob)
    
    return (
        <div className="bodyView">
            <div className="blobs" onClick={() => redirect(blobs)}>
                    <img className="image" src={images} alt=""/>
                    <div className="dateAndTime">{datesAndTime}</div>
            </div>
        </div>
            
    );
}    
export default BodyView