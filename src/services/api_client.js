
const get_images = () => {
    return [
        {"name": "koi"},
        {"name": "kth"},
        {"name": "Picture3"},
        {"name": "Picture4"}
    ];
}
    
const get_image_url = (image_id) => {
    return `https://ktodb.blob.core.windows.net/pictures/${image_id}.jpg`;
}


// https://ktodb.blob.core.windows.net/pictures/${image_id}.jpg

export  {get_image_url, get_images}