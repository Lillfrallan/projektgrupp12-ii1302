import React from 'react'
import './css/Header.css'

function HeaderView( {lastCreatedBlob} ) {

    return (
        <div>
            <div className="headerContainer">
                <div className="leftContainer"> 
                    <h3>Last uploaded foto:</h3>
                    <div className="lastCreatedText">{lastCreatedBlob}</div>
                </div>
                <div className="middlecontainer">
                    <span className="headerTitle">KTH-LINK</span>
                </div>
                <div className="rightContainer"></div>
<<<<<<< HEAD
                {/* <HeaderButtons icon={"fas fa-home fa-1g"} title="Home"/> */}
=======
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
            </div>
        </div>
    )
}

export default HeaderView