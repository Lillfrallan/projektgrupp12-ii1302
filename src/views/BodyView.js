import React from 'react'
import './Body.css'
import * as api_client from '../services/api_client'

function BodyView( {blobies} ) {
    return (
        <div>
            {blobies.map( (blobies) => (

            <div className="images">
                <img
                    key={blobies.id}
                    src={api_client.get_image_url(blobies)}
                />
            </div>
        ))} 
        </div>
        )
}

export default BodyView