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
            </div>
        </div>
    )
}

export default HeaderView