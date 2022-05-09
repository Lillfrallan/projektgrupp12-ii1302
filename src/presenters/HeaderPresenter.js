import React, { useEffect, useState } from 'react'
import HeaderView from '../views/HeaderView'
import { useNavigate } from 'react-router-dom';
import '../views/css/Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBlobsAzure } from '../services/BlobRetrieverAzure'
import { getBlobsFirebase } from '../services/BlobRetrieverFireBase'

function HeaderPresenter( {toggleTheme, theme} ) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blobs} = useSelector(state => state.blobs)
    const [lastUploadedBlob, setLastUploadedBlob] = useState(blobs[blobs.length-1].datesAndTime)

    
    useEffect(() => {
        dispatch(getBlobsFirebase())
    }, [dispatch])

    useEffect(() => {
        setLastUploadedBlob(blobs[blobs.length-1].datesAndTime)
    }, [])


    /**
     * redirects the user to the home screen
     * 
     * @param {*} element 
     */
    const redirectToHome = (element) => {
        element.preventDefault();
        navigate("/home")
    }

    /**
     * redirects the user to the creator page
     * 
     * @param {*} element 
     */
    const redirectToCreatorPage = (element) => {
        element.preventDefault();
        navigate("/CreatorPage")
    }

    return  (
        <div className="wholeHeader">
            <HeaderView
                redirectToHome={redirectToHome}
                redirectToCreatorPage={redirectToCreatorPage}
                toggleTheme={toggleTheme}
                theme={theme}
                lastUploadedBlob = {lastUploadedBlob} 
            />
        </div>
    )
}

export default HeaderPresenter 