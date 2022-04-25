import React from 'react'
import './css/Header.css'
import { FaHome } from "react-icons/fa";


function HeaderView( { lastCreatedBlob, home, toggleTheme, theme } ) {

    function ToggleSwitch() {
        return(
            <label className="form-switch">
                <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"}/>
                <i></i>
            </label>
        )
    }

    return (
        <div>
            <div className="headerContainer">
                <div className="leftContainer"> 
                    <h2 className="">Last uploaded foto: </h2>
                    <div className="lastCreatedText">{lastCreatedBlob}</div>
                </div>
                <div className="middlecontainer">
                    <span className="headerTitle">KTH-LINK</span>
                </div>
                <div className="rightContainer">
                    <FaHome className="homeIcon" onClick={home} />
                    <ToggleSwitch className="themeSwitch" /> 
                </div>
            </div>
        </div>
    )
}

export default HeaderView