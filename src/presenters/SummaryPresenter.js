import React, { useEffect } from 'react';
import SummaryView from '../views/SummaryView'
import { saveAs } from 'file-saver'
import '../views/css/Summary.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBlobs } from '../services/BlobRetriever'
import { useNavigate } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';

function SummaryPresenter() {

    const navigate = useNavigate();
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

    const viewImageInBrowser = (blob) => {
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
        if(blob == blobs[0].index) {
            return;
        }
        else
            return navigate("/summary/" + (blob-1)
        );
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
                    viewImageInBrowser={viewImageInBrowser}
                    redirectToNextBlob={redirectToNextBlob}
                    redirectToPreviousBlob={redirectToPreviousBlob}
                    index={currentBlob.index}
                />
        </div>  
    )
}

export default SummaryPresenter

