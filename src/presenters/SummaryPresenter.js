// import React, {useState, useEffect} from 'react';
import SummaryView from '../views/SummaryView'
// import * as api_client from '../services/api_client'
// import { saveAs } from 'file-saver'
import { useParams } from 'react-router';


function SummaryPresenter() {

    const {blobs} = useParams();

 
    console.log(blobs)

    // /**
    //  * Downloads the image to the computer
    //  */
    // const downloadImageButton = () => {
    //     saveAs(api_client.get_image_url(blob.image), blob)
    // }

    return (
        <div className="summmaryPresenter">
            <SummaryView
                // downloadImageButton={downloadImageButton}
            />
        </div>  
    )
}

export default SummaryPresenter