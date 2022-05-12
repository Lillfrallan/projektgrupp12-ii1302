import React, { useEffect, useState } from 'react'
import HeaderView from '../views/HeaderView'
import { useNavigate } from 'react-router-dom';
import '../views/css/Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBlobsAzure } from '../services/BlobRetrieverAzure'
import { getBlobsFirebase } from '../services/BlobRetrieverFireBase'
import { auth, onAuthStateChanged, signOut } from '../services/api_client_Firebase'

function HeaderPresenter( {toggleTheme, theme} ) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blobs} = useSelector(state => state.blobs)
    const [lastUploadedBlob, setLastUploadedBlob] = useState(blobs[blobs.length-1].datesAndTime)
    // const [currentUser, setCurrentUser] = useState({});

    // onAuthStateChanged(auth, (currentuser) => {
    //     setCurrentUser(currentuser);
    // })

    useEffect(() => {
        dispatch(getBlobsFirebase())
    }, [dispatch])

    useEffect(() => {
        setLastUploadedBlob(blobs[blobs.length-1]?.datesAndTime)
    }, [blobs])


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

    const logoutUserButton = async () => {
        if(window.confirm("Are you sure you wan't to log out?")) {
            await signOut(auth)
            navigate("/signInUser")
        }
    }


    return  (
        <div className="wholeHeader">
            <HeaderView
                redirectToHome={redirectToHome}
                redirectToCreatorPage={redirectToCreatorPage}
                toggleTheme={toggleTheme}
                theme={theme}
                lastUploadedBlob = {lastUploadedBlob}
                // currentUser={currentUser?.email} 
                logoutUserButton={logoutUserButton}
            />
        </div>
    )
}

export default HeaderPresenter 