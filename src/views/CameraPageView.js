import React from 'react'
import './css/CameraPage.css'
import { FaHome } from "react-icons/fa";

function CameraPageView( {images, home} ) {
    return (
        <div className="cameraPageView">
            <div className='cameraPictureContainer'>
                <img className="cameraPicture" src={images['testKameraBild.jpg']} />
            </div>
            <div className="cameraPageData">
                <div>Camera Name: 
                    <div className="cameraData">{}</div>
                </div>
                <div>Camera Manufacturer: 
                    <div className="cameraData">{}</div>
                </div>
                <div>Software Version: 
                    <div className="cameraData">{}</div>
                </div>
                <div>Operating System(OS): 
                    <div className="cameraData">{}</div>
                </div>
                <div>Processor Architecture: 
                    <div className="cameraData">{}</div>
                </div>
                <div>Processor Design: 
                    <div className="cameraData">{}</div>
                </div>
                <div>Total Storage: 
                    <div className="cameraData">{}</div>
                </div>
                <div>Total Memory: 
                    <div className="cameraData">{}</div>
                </div>
                <div>Date and Time: 
                    <div className="cameraData">{}</div>
                </div>
            </div>
            <div className="goBackButtonContainer">
                <button className="goBackButton" title="go back to home" onClick={home}><FaHome/></button>
            </div>
        </div>
    )
}

export default CameraPageView