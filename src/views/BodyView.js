import React from 'react'
import './Body.css'
import * as api_client from '../services/api_client'

function BodyView( {blobImages} ) { 

    // console.log(blobDateTime)

    return (
        <div>
            HEEEEEEEY
            {blobImages.map( (blobImages) => (
                <div>
                    <div className="images">
                        <img
                            src={api_client.get_image_url(blobImages)}
                            alt=""
                        /> 
                    </div>
                    
                </div>
            ))} 
        </div>
        )
}

export default BodyView