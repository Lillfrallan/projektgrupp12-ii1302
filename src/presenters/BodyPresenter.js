import React, { useEffect, useState } from 'react';
import BodyView from '../views/BodyView';
import { useNavigate } from 'react-router-dom';
import '../views/css/Body.css'
import { BsArrowDownUp } from "react-icons/bs";
import { VscAzure, VscGoToFile } from "react-icons/vsc"
import { useSelector, useDispatch } from 'react-redux'
import { getBlobs } from '../services/BlobRetriever'

function BodyPresenter() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blobs} = useSelector(state => state.blobs)
    const [blobArray, setBlobArray] = useState(blobs)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        dispatch(getBlobs())
    }, [dispatch])

    /**
     * Used to redirect to a specific blobs summary page
     * 
     * @param {blobs index number} index 
     * @param {the blob object} blob 
     * @returns navigates to the page
     */
    const redirect = (blobs) => {
        return navigate("/summary/" + blobs
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
                <button className="reverseButton" onClick={() => redirect((blobArray[blobArray.length-1].index)-1)} title="go to most recent upload"><VscGoToFile/></button>
                <button className="reverseButton" onClick={reverseOrderButton} title="reverse order"><BsArrowDownUp/></button>
                <button className="azureLinkButton" onClick={goToAzureBlobStorageButton} title="go to Azure"><VscAzure/></button>
            </div>
            <div className="blobsList">
                {filteredArray.map((blob, i) => (
                    <div key={i} className="elementBox">
                        <BodyView
                            images={blob.images}
                            datesAndTime={blob.datesAndTime}  
                            index = {i}
                            redirect={redirect}
                            key={i}  
                            blobs={blob} 
                        />
                    </div>
                ))} 
            </div>  
        </div >
    )
}

export default BodyPresenter;