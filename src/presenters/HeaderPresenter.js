import React, { useEffect, useState } from 'react'
import HeaderView from '../views/HeaderView'
import { useNavigate } from 'react-router-dom';
import BlobRetriever from '../services/BlobRetriever'
import '../views/css/Header.css'

function HeaderPresenter( {toggleTheme, theme} ) {

    const navigate = useNavigate();
    const [lastCreatedBlob, setLastCreatedBlob] = useState("");


    useEffect(() => {

        BlobRetriever.blobData().then(function(result) {
            console.log(result.reverse());
            setLastCreatedBlob(result[0].datesAndTime)
        })

    }, [lastCreatedBlob]) 

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