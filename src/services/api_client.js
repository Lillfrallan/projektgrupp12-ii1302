import React from 'react'

const get_images = () => {
    return [
        {"name": "Picture1"},
        {"name": "Picture2"},
        {"name": "Picture3"},
        {"name": "Picture4"}
    ];
}
    
const get_image_url = (image_id) => {
    return `https://ktodb.blob.core.windows.net/pictures/${image_id}.jpg`;
}



export  {get_image_url, get_images}