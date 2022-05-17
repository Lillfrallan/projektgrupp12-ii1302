import React, { useEffect, useState } from 'react'
import HeaderView from '../views/HeaderView'
import { useNavigate } from 'react-router-dom';
import '../views/css/Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBlobsAzure } from '../services/BlobRetrieverAzure'
import { getBlobsFirebase } from '../services/BlobRetrieverFireBase'
import { auth, signOut } from '../services/api_client_Firebase'

function HeaderPresenter( {toggleTheme, theme, setIsLoggedIn} ) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blobs} = useSelector(state => state.blobs)
    const [lastUploadedBlob, setLastUploadedBlob] = useState(blobs[blobs.length-1].datesAndTime)

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
            setIsLoggedIn(false);
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
                logoutUserButton={logoutUserButton}
            />
        </div>
    )
}

<<<<<<< HEAD
export default HeaderPresenter
=======
export default HeaderPresenter 
>>>>>>> developingBranch
