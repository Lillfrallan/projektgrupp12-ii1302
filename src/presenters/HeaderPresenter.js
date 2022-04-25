import React, { useEffect, useState } from 'react'
import HeaderView from '../views/HeaderView'
import { useNavigate } from 'react-router-dom';
import BlobRetriever from '../services/BlobRetriever'
import '../views/css/Header.css'

function HeaderPresenter( {toggleTheme, theme} ) {

    const navigate = useNavigate();
    const [lastCreatedBlob, setLastCreatedBlob] = useState("");


    useEffect(() => {

        BlobRetriever.blobData().then(function(data) {
            setLastCreatedBlob(data[0].datesAndTime)
        })

    }, []) 

    function home(e) {
        e.preventDefault();
        navigate("/home")
    }
    
    return  (
        <div className="wholeHeader">
            <HeaderView
                lastCreatedBlob={lastCreatedBlob}
                home={home}
                toggleTheme={toggleTheme}
                theme={theme}
            />
        </div>
        
    )

}

export default HeaderPresenter 