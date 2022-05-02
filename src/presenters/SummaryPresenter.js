import React, { useEffect, useState } from 'react';
import SummaryView from '../views/SummaryView'
import { saveAs } from 'file-saver'
import '../views/css/Summary.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBlobs } from '../services/BlobRetriever'
import { useNavigate } from 'react-router-dom';
import { containerClient } from '../services/api_client'

function SummaryPresenter() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blobs} = useSelector(state => state.blobs)
    const [totalNumberOfBlobs, setTotalNumberOfBlobs] = useState(blobs[blobs.length-1].index);

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

    const viewImageInBrowserButton = (blob) => {
        window.location = `https://ktodb.blob.core.windows.net/images/${blob}`
    }

    /**
     * Used to redirect to the next blobs summary page
     * 
     * @param {blobs index number} index 
     * @param {the blob object} blob 
     * @returns navigates to the page
     */
    const redirectToNextBlob = (blob) => {
        if(blob == blobs[blobs.length-1].index) {
            return;
        }
        else
            return navigate("/summary/" + (blob)
        );
    }

    /**
     * Used to redirect to the next blobs summary page
     * 
     * @param {blobs index number} index 
     * @param {the blob object} blob 
     * @returns navigates to the page
     */
    const redirectToPreviousBlob = (blob) => {
        if(blob == blobs[0].index-1) {
            return;
        }
        else
            return navigate("/summary/" + (blob-1)
        );
    }

    async function deleteBlobButton(blobName, index) {
        if(window.confirm("Are you sure you want to delete the current blob?")) {
            containerClient.deleteBlob(blobName)
            redirectToNextBlob(index)
            setTotalNumberOfBlobs(totalNumberOfBlobs-1)
        } else {
            return null;
        }
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
                    viewImageInBrowserButton={viewImageInBrowserButton}
                    redirectToNextBlob={redirectToNextBlob}
                    redirectToPreviousBlob={redirectToPreviousBlob}
                    deleteBlobButton={deleteBlobButton}
                    index={currentBlob.index}
                    totalNumberOfBlobs={totalNumberOfBlobs}
                />
        </div>  
    )
}

export default SummaryPresenter

