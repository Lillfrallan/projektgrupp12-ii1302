import React from 'react'
import CameraView from '../views/CameraPageView'
import { useNavigate } from 'react-router-dom'

function CameraPagePresenter() {

    const navigate = useNavigate();

    /**
     * redirects the user to the home screen
     * 
     * @param {String} element 
     */
    const home = (element) => {
        element.preventDefault();
        navigate("/home")
    }

    return (
        <div>
            <CameraView
                home={home}
            />
        </div>
    )
}

export default CameraPagePresenter