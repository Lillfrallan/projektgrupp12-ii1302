import React from 'react'
import CameraView from '../views/CameraPageView'
import { useNavigate } from 'react-router-dom'

function CameraPagePresenter() {

    const navigate = useNavigate();

    /**
     * Imports the images from the resource folder
     * 
     * @param {*} image the images to import
     * @returns an array of the imported images
     */
    const importImages = (image) => {
        let images = {};
        image.keys().map((item) => { images[item.replace('./', '')] = image(item); });
        return images;
    }
    
    const images = importImages(require.context('../resources', false, /\.(png|jpe?g|svg)$/));

    /**
     * redirects the user to the home screen
     * 
     * @param {*} element 
     */
    const home = (element) => {
        element.preventDefault();
        navigate("/home")
    }

    return (
        <div>
            <CameraView
                images={images}
                home={home}
            />
        </div>
    )
}

export default CameraPagePresenter