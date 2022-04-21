import React from 'react'
import './css/Header.css'

function HeaderView( {lastCreatedBlob} ) {

    function HeaderButtons( {icon, title, onClick} ) {
        return (
            <div onClick={onClick}
                className="headerButtons">
                <i className={icon}/>
                <h3 className="iconTitle">{title}</h3>
            </div>
        )
    }

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
                {/* <HeaderButtons icon={"fas fa-home fa-1g"} title="Home"/> */}
            </div>
        </div>
    )
}

export default HeaderView