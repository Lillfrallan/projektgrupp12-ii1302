import React from 'react'
import './Body.css'
import * as api_client from '../services/api_client'

function BodyView( {blobImages, blobDateTime} ) {

    console.log(blobDateTime)

    return (
        <div>
            {blobImages.map( (blobImages, blobDateTime) => (
                <div>
                    <div className="images">
                        <img
                            key={blobImages.id}
                            src={api_client.get_image_url(blobImages)}
                            alt=""
                        /> 
                    </div>
                    <div>{blobDateTime}</div>
                    
                </div>
            ))} 
        </div>
        )
}

export default BodyView