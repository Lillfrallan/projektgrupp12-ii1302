import React from 'react'
import './css/Body.css'

function BodyView({ images, datesAndTime, index, redirect}) {

    // console.log(blobs)
    
    return (
        <div className="bodyView">
            <div className="blobs" onClick={() => redirect(index)}>
                    <img className="image" src={images} alt=""/>
                    <div className="dateAndTime">{datesAndTime}</div>
            </div>
        </div>
            
    );
}    
export default BodyView