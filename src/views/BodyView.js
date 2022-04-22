import React from 'react'
import './css/Body.css'
// import * as api_client from '../services/api_client'


// const DateAndTimeBox = ({ blob }) => {
//     return (
//         <div className="dateAndTimeBox">
//             {blob.dateAndTime.map((dateAndTime, i) => (
//                 <div className="dateAndTime" key={i}>
//                     {dateAndTime}
//                 </div>  
//             ))}
//         </div>
//     );
// };

// const ImageBox = ({ blob }) => {
//     return (
//         <div className="imageBox">
//             {blob.image.map((images, i) => (
//                 <div className="image" key={i}>
//                     <img src={api_client.get_image_url(images)} alt="" />
//                 </div>
//             ))}
//         </div>
//     );
// };


function BodyView({ blobs }) {
    return (
        <div className="bodyView">
            <div className="blobs">
                {blobs.map((blob, i) => (
                    <div key={i} className="elementBox">
                        <img src={blob} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    );
}    

export default BodyView