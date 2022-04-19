import React from 'react'
import './css/Body.css'
import * as api_client from '../services/api_client'

function BodyView( {blobImages} ) { 

    return (
        <div>
            HEEEEEEEY
            <div>
                {blobImages.map( (blobImages, i) => (
                    <div key={i}>
                        
                        <div className="images">
                            <img
                                src={api_client.get_image_url(blobImages)}
                                alt=""
                            /> 
                        </div>
                    </div>
                ))} 
            </div>
        </div>
        )
}

export default BodyView