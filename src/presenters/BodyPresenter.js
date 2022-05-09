import React, { useEffect, useState } from 'react';
import BodyView from '../views/BodyView';
import { useNavigate } from 'react-router-dom';
import '../views/css/Body.css'
import { BsArrowDownUp } from "react-icons/bs";
import { VscAzure, VscGoToFile } from "react-icons/vsc"
import { GiCctvCamera } from "react-icons/gi"
import { useSelector, useDispatch } from 'react-redux'
import { SiFirebase } from 'react-icons/si'
import { GrRefresh } from 'react-icons/gr'
import { getBlobsAzure } from '../services/BlobRetrieverAzure'
import { getBlobsFirebase } from '../services/BlobRetrieverFireBase'

function BodyPresenter() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blobs}  = useSelector(state => state.blobs);
    const [blobArray, setBlobArray] = useState(blobs)
    const [searchTerm, setSearchTerm] = useState('')
    


    useEffect(() => {
        dispatch(getBlobsFirebase())
    }, [dispatch])

    /**
     * Used to redirect to a specific blobs summary page
     * 
     * @param {*} index blobs index number
     * @param {*} blob the blob object
     * @returns navigates to the page
     */
    const redirectToSummaryPage = (index) => {
        return navigate("/summary/" + index
        );
    }

    /**
     * Used to redirect to a specific blobs summary page
     * 
     * @param {*} index blobs index number
     * @param {*} blob the blob object
     * @returns navigates to the page
     */
    const redirectToCameraPage = () => {
        return navigate("/cameraPage"
        );
    }

    /**
     * Reverses the order of the array of blobs
     */
    const reverseOrderButton = () => {
        setBlobArray([...blobArray].reverse())
    }

    /**
     * Links the user to Azure portal
     */
    const goToAzureBlobStorageButton = () => {
        window.location = 
        'https://portal.azure.com/#blade/Microsoft_Azure_Storage/ContainerMenuBlade' + 
        '/overview/storageAccountId/%2Fsubscriptions%2F19ce1917-2d49-47ba-b0a1-6e0b8' +
        '2b295f4%2Fresourcegroups%2Fprojektgrupp12%2Fproviders%2FMicrosoft.Storage%2F' +
        'storageAccounts%2Fktodb/path/images/etag/%220x8DA1E2D4669C44B%22/defaultEncry' +
        'ptionScope/%24account-encryption-key/denyEncryptionScopeOverride//defaultId//publicAccessVal/Container'
    }

    /**
     * Links the user to Azure portal
     */
    const goToFireBaseStorageButton = () => {
        window.location = 
        'https://console.firebase.google.com/project/projectgroup12-2f2a2/storage/' +
        'projectgroup12-2f2a2.appspot.com/files/~2Fimages'
        console.log("success")
    }

    /**
     * Filters through the array, used for searching
     */
    const filteredArray = blobArray.filter((blob) => {
        if (searchTerm === '') {
            return blob;
        }
        else if (blob.datesAndTime.includes(searchTerm)) {
            return blob;
        }
    })

    return (
        <div className="bodyPresenter">
            <div className="bodyButtons">
                <input className="searchBar" type="text" onChange={event => setSearchTerm(event.target.value)} placeholder='Search for date...'/>
                <button className="lastUploadedImageButton" onClick={() => redirectToSummaryPage((blobArray[blobArray.length-1].index))} title="go to most recent picture"><VscGoToFile/></button>
                <button className="reverseButton" onClick={reverseOrderButton} title="reverse order"><BsArrowDownUp/></button>
                <button className="azureLinkButton" onClick={() => window.location.reload()} title="retrieve new image"><GrRefresh/></button>
                <button className="azureLinkButton" onClick={redirectToCameraPage} title="camera info"><GiCctvCamera/></button>
                <button className="azureLinkButton" onClick={goToAzureBlobStorageButton} title="go to Azure"><VscAzure/></button>
                <button className="azureLinkButton" onClick={goToFireBaseStorageButton} title="go to Firebase"><SiFirebase/></button>
            </div>
            <div className="blobsList">
                {filteredArray.map((blob, i) => (
                    <div key={i} className="elementBox">
                        <BodyView
                            images={blob.images}
                            index = {blob.index}
                            datesAndTime = {blob.datesAndTime}
                            redirect={redirectToSummaryPage}
                            key={i}  
                        />
                    </div>
                ))} 
            </div>  
        </div >
    )
}

export default BodyPresenter;