import React, { useEffect, useState } from 'react';
import SummaryView from '../views/SummaryPageView'
import { saveAs } from 'file-saver'
import '../views/css/Summary.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBlobsAzure } from '../services/BlobRetrieverAzure'
import { getBlobsFirebase } from '../services/BlobRetrieverFireBase'
import { useNavigate } from 'react-router-dom';
import { containerClient } from '../services/api_client_Azure'
import * as api_client_fireBase from '../services/api_client_Firebase'

function SummaryPresenter() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blobs} = useSelector(state => state.blobs)
    const [totalNumberOfBlobs, setTotalNumberOfBlobs] = useState(blobs[blobs.length-1].index);

    useEffect(() => {
        dispatch(getBlobsFirebase())
    }, [dispatch])


    var currentBlob = blobs[window.location.href.slice(-1)]; 


    const downloadImageFirebase = () => {
        api_client_fireBase.download_image(currentBlob.name)
    }


    /**
     * redirects the user to the storage page of firebase
     */
    const viewImageInBrowserViaFirebaseButton = (blob) => {
        window.location = `https://firebasestorage.googleapis.com/v0/b/projectgroup12-2f2a2.appspot.com/o/images%2F${blob}?alt=media`
    }

    /**
     * Used to redirect to the next blobs summary page
     * 
     * @param {*} index blobs index number 
     * @param {*} blob the blob object
     * @returns navigates to the page
     */
    const redirectToNextBlob = (blob) => {
        if(blob === blobs[blobs.length-1].index) {
            return;
        }
        else
            return navigate("/summary/" + (blob+1)
        );
    }

    /**
     * Used to redirect to the next blobs summary page
     * 
     * @param {*} blob blobs index number
     * @returns navigates to the page
     */
    const redirectToPreviousBlob = (blob) => {
        if(blob === blobs[0].index-1) {
            return;
        }
        else
            return navigate("/summary/" + (blob)
        );
    }


    /**
     * deletes the current blob from Firebase storage
     * 
     * @param {*} blobName name of the blob to remove
     * @param {*} index index of the blob to redirect to
     * @returns null if no blob can be removed
     */
    const deleteFromFirebase = (blobName, index) => {
        let blobsLeft = blobs.length;
        if(window.confirm("Are you sure you want to delete the current blob?")) {
            if(blobsLeft > 1 && index !== blobs[blobs.length -1]) {
                api_client_fireBase.delete_image(blobName)
                redirectToNextBlob(index)
                setTotalNumberOfBlobs(totalNumberOfBlobs)
            }
            else if(blobsLeft = 1) {
                api_client_fireBase.delete_image(blobName)
                navigate("/home")
            }
            if(currentBlob.index === blobs.length-1) {
                api_client_fireBase.delete_image(blobName)
                redirectToPreviousBlob(index - 1)
                setTotalNumberOfBlobs(totalNumberOfBlobs)
                
            }
        } 
        else {
            return null;
        }
    };

    /**
     **************************************************
     *******************DEPRECATED*********************
     **************************************************
     * deletes the current blob from Azure blob storage
     * 
     * @param {*} blobName name of the blob to remove
     * @param {*} index index of the blob to redirect to
     * @returns null if no blob can be removed
     */
    async function deleteFromAzure(blobName, index) {
        let blobsLeft = blobs.length;
        if(window.confirm("Are you sure you want to delete the current blob?")) {
            if(blobsLeft > 1 && index === blobs[blobs.length -1]) {
                containerClient.deleteBlob(blobName)
                setTotalNumberOfBlobs(totalNumberOfBlobs-1)
            }
            else if(blobsLeft > 1 && index !== blobs[blobs.length -1]) {
                containerClient.deleteBlob(blobName)
                redirectToNextBlob(index)
                setTotalNumberOfBlobs(totalNumberOfBlobs-1)
            }
            else if(blobsLeft = 1) {
                containerClient.deleteBlob(blobName)
                navigate("/home")
            }
        } 
        else {
            return null;
        }
    }

    /**************************************************
    *******************DEPRECATED**********************
    ***************************************************
    */
    const downloadImageAzure = (images, name) => {
        saveAs(images, name)
    }

    
    /**************************************************
    *******************DEPRECATED**********************
    ***************************************************
    */
    const viewImageInBrowserViaAzureButton = (blob) => {
        window.location = `https://ktodb.blob.core.windows.net/images/${blob}`
    }

    return (
        <div className="summmaryPresenter">
                <SummaryView
                    name = {currentBlob.name}
                    images={currentBlob.images}
                    bucket={currentBlob.bucket}
                    contentEncoding={currentBlob.contentEncoding}
                    crc32c={currentBlob.crc32c}
                    generation={currentBlob.generation}
                    md5Hash = {currentBlob.md5Hash}
                    metageneration = {currentBlob.metageneration}
                    size = {currentBlob.size}
                    storageClass= {currentBlob.storageClass}
                    etag={currentBlob.etag}
                    contentType = {currentBlob.contentType}
                    datesAndTime={currentBlob.datesAndTime}  
                    viewImageInBrowserButton={viewImageInBrowserViaFirebaseButton}
                    redirectToNextBlob={redirectToNextBlob}
                    redirectToPreviousBlob={redirectToPreviousBlob}
                    deleteBlobButton={deleteFromFirebase}
                    downloadImageFirebase = {downloadImageFirebase}
                    index={currentBlob.index}
                    totalNumberOfBlobs={totalNumberOfBlobs}
                    nameWithFolder = {currentBlob.nameWithFolder}
                    blob = {currentBlob.blob}
                />
        </div>  
    )
}

export default SummaryPresenter

