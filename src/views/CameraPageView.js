import React from 'react'
import './css/CameraPage.css'
import { FaHome } from "react-icons/fa";

function CameraPageView( {images, home} ) {
    return (
        <div className="cameraPageView">
            <div className='cameraPictureContainer'>
                {/* <img className="cameraPicture" src={images['testKameraBild.jpg']} /> */}
            </div>
            <div className="cameraPageData">
                <div>Camera Name: 
                    <div className="cameraData">OV2640</div>
                </div>
                <div>Camera Manufacturer: 
                    <div className="cameraData">OmniVision</div>
                </div>
                <div>Processor: 
                    <div className="cameraData">Xtensa 32-bit LX7 dual-core processor</div>
                </div>
                <div>Total Storage: 
                    <div className="cameraData">32 GB</div>
                </div>
                <div>Total Memory: 
                    <div className="cameraData">520KB SRAM + 8MB PSRAM</div>
                </div>
            </div>
            <div className="goBackButtonContainer">
                <button className="goBackButton" title="go back to home" onClick={home}><FaHome/></button>
            </div>
        </div>
    )
}

export default CameraPageView