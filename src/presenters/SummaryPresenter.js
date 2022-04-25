import React, {useState, useEffect} from 'react';
import SummaryView from '../views/SummaryView'
import * as api_client from '../services/api_client'
import { saveAs } from 'file-saver'

import { useParams } from 'react-router';


function SummaryPresenter() {

    const {index, blob} = useParams();


    console.log(index)
    console.log(blob)


    // console.log(blobs)
    // const downloadImage = () => {
    //     saveAs(api_client.get_image_url(blobs[0][0]), blobs[0][0])
    //     saveAs(blobs[0][1], "hello world.txt");
    // }

    return (
        <div>
            <SummaryView  />
        </div>  
    )
}

export default SummaryPresenter