import React from 'react'
import './css/Body.css'
import * as api_client from '../services/api_client'

function BodyView( {blobs} ) { 

    // console.log(blobs)

    return (
        <div>
            HEEEEEEEY PÅÅÅ DIG
            <div>
                {blobs.map( (blobs, i, z) => (
                    
                    <><div key={i}>
                        {blobs.image.map((images, i) => (
                            <div className="image" key={i}>
                                <img
                                    src={api_client.get_image_url(images)}
                                    alt="" 
                                />
                            </div>
                        ))}

                    </div>
                    <div key={z}>
                            {blobs.dateAndTime.map((dateAndTime, z) => (
                                <div className="dateAndTime" key={z}>
                                    {dateAndTime}
                                </div>
                            ))}
                        </div>
                    </>


                    
                ))} 
            </div>
        </div>
        )
}

export default BodyView