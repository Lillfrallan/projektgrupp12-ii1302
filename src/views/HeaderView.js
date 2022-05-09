import React from 'react'
import './css/Header.css'
import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

function HeaderView( { lastUploadedBlob, redirectToHome, toggleTheme, theme, redirectToCreatorPage } ) {

    /**
     * A toggle switch component, used for dark/light mode toggeling 
     * 
     * @returns a toggle switch component
     */
    const ToggleSwitch = () => {
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
                    <div className="lastCreatedText">{lastUploadedBlob}</div>
                </div>
                <div className="middlecontainer">
                    <span className="headerTitle" onClick={redirectToHome}>KTH-LINK</span>
                </div>
                <div className="rightContainer">
                    <FaHome className="homeIcon" onClick={redirectToHome} title="go to home screen" />
                    <RiTeamFill className="teamIcon" onClick={redirectToCreatorPage} title="go to creator page"/>
                    <ToggleSwitch className="themeSwitch" /> 
                </div>
            </div>
        </div>
    )
}

export default HeaderView