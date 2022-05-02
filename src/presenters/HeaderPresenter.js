import React, { useEffect, useState } from 'react'
import HeaderView from '../views/HeaderView'
import { useNavigate } from 'react-router-dom';
import '../views/css/Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBlobs } from '../services/BlobRetriever'

function HeaderPresenter( {toggleTheme, theme} ) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {blobs} = useSelector(state => state.blobs)
    const [lastUploadedBlob, setLastUploadedBlob] = useState(blobs[blobs.length-1].datesAndTime)

    
    useEffect(() => {
        dispatch(getBlobs())
    }, [dispatch])


    const home = (e) => {
        e.preventDefault();
        navigate("/home")
    }

    return  (
        <div className="wholeHeader">
            <HeaderView
                home={home}
                toggleTheme={toggleTheme}
                theme={theme}
                lastUploadedBlob = {lastUploadedBlob} 
            />
        </div>
    )
}

export default HeaderPresenter 