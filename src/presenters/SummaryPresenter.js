import React, { useEffect } from 'react';
import SummaryView from '../views/SummaryView'
import { saveAs } from 'file-saver'
import '../views/css/Summary.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBlobs } from '../services/BlobRetriever'

function SummaryPresenter() {

    const dispatch = useDispatch();
    const {blobs} = useSelector(state => state.blobs)

    useEffect(() => {
        dispatch(getBlobs())
    }, [dispatch])

    var currentBlob = blobs[window.location.href.slice(-1)]; 


    /**
     * Downloads the image to the computer
     */
    const downloadImageButton = () => {
        saveAs(currentBlob.images, currentBlob)
    }

    return (
        <div className="summmaryPresenter">
                <SummaryView
                    name = {currentBlob.name}
                    images={currentBlob.images}
                    blobType={currentBlob.blobType}
                    etag={currentBlob.etag}
                    accesstier = {currentBlob.accessTier}
                    accessTierInferred = {JSON.stringify(currentBlob.accessTierInferred)}
                    contentType = {currentBlob.contentType}
                    leaseStatus = {currentBlob.leaseStatus}
                    leaseState = {currentBlob.leaseState}
                    serverEncrypted = {JSON.stringify(currentBlob.serverEncrypted)}
                    datesAndTime={currentBlob.datesAndTime}  
                    downloadImageButton={downloadImageButton}
                />
        </div>  
    )
}

export default SummaryPresenter

