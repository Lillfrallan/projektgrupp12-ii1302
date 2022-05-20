import React, { useEffect } from 'react'
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

    useEffect(() => {
        dispatch(getBlobsFirebase())
    }, [dispatch])

    
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
