const get_image_url = (image_id) => {
    return `https://ktodb.blob.core.windows.net/images/${image_id}`;
}

const get_blob_account = (account) => {
    return `https://${account}.blob.core.windows.net`;
}


export  {get_image_url, get_blob_account}