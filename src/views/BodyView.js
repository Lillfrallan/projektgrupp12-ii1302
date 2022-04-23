import React from 'react'
import './css/Body.css'
import * as api_client from '../services/api_client'

<<<<<<< HEAD

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

=======
const DateAndTimeBox = ({ blob }) => {
    return (
        <div className="dateAndTimeBox">
            {blob.dateAndTime.map((dateAndTime, i) => (
                <div className="dateAndTime" key={i}>
                    {dateAndTime}
                </div>  
            ))}
        </div>
    );
};

const ImageBox = ({ blob }) => {
    return (
        <div className="imageBox">
            {blob.image.map((images, i) => (
                <div className="image" key={i}>
                    <img src={api_client.get_image_url(images)} alt="" />
                </div>
            ))}
        </div>
    );
};
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2

function BodyView({ blobs }) {
    return (
        <div className="bodyView">
            <div className="blobs">
                {blobs.map((blob, i) => (
                    <div key={i} className="elementBox">
<<<<<<< HEAD
                        <img src={blob} alt=""/>
=======
                        <DateAndTimeBox/>
                        <ImageBox/>
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2
                    </div>
                ))}
            </div>
        </div>
    );
<<<<<<< HEAD
}    
=======
}
>>>>>>> 766f8fa070b2b0d6dd483fb51b7c7d30221f7cf2

export default BodyView

