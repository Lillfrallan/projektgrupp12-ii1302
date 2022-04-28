import React, { useEffect } from 'react';
import SummaryView from '../views/SummaryView'
// import * as api_client from '../services/api_client'
// import { saveAs } from 'file-saver'
import { useSelector, useDispatch } from 'react-redux'
import { getBlobs } from '../services/BlobRetriever'


function SummaryPresenter() {

    const dispatch = useDispatch();
    const {blobs} = useSelector(state => state.blobs)

    useEffect(() => {
        dispatch(getBlobs())
    }, [dispatch])




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
                blobs={blobs}
            />
        </div>  
    )
}

export default SummaryPresenter