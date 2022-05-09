import React from 'react'
import { AiOutlineDownload, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsGlobe, BsFillTrashFill } from "react-icons/bs";
import '../views/css/Summary.css'


function SummaryView( {
    name, images, etag, contentType, datesAndTime, 
    viewImageInBrowserButton, index, redirectToNextBlob, redirectToPreviousBlob,
    totalNumberOfBlobs, deleteBlobButton, bucket, contentEncoding, crc32c,  generation,
    md5Hash, metageneration, size,  storageClass, downloadImageFirebase,
    } ) {

    return (
        <div className="summaryView">
            <div className="summaryDisplay">
                <div className="summaryImageContainer">
                    <img className="summaryImage" src={images} alt=""/>
                </div>
                <div className="summaryData">
                    <div>Blob name: <div className="data">{name}</div></div>
                    <div>Etag: 
                        <div className="data">{etag}</div>
                    </div>
                    <div>Bucket: 
                        <div className="data">{bucket}</div>
                    </div>
                    <div>Storage Class: 
                        <div className="data">{storageClass}</div>
                    </div>
                    <div>Content Encoding: 
                        <div className="data">{contentEncoding}</div>
                    </div>
                    <div>Content Type: 
                        <div className="data">{contentType}</div>
                    </div>
                    <div>Crc32c: 
                        <div className="data">{crc32c}</div>
                    </div>
                    <div>Generation: 
                        <div className="data">{generation}</div>
                    </div>
                    {/* <div>Meta Generation: 
                        <div className="data">{metageneration}</div>
                    </div> */}
                    <div>Size: 
                        <div className="data">{size}</div>
                    </div>
                    <div>md5Hash: 
                        <div className="data">{md5Hash}</div>
                    </div>
                    <div>Date and Time: 
                        <div className="data">{datesAndTime}</div>
                    </div>
                </div>
            </div>
            <div className="summaryButtonContainer">
                <button className="viewInBrowserButton" onClick={() => viewImageInBrowserButton(name)} title="View in browser">
                    <BsGlobe/>
                </button>
                <button className="deleteBlobButton" onClick={() => deleteBlobButton(name, index)} title="delete blob">
                        <BsFillTrashFill/>
                </button>
                <button className="deleteBlobButton" onClick={() => downloadImageFirebase(name)} title="delete blob">
                        <AiOutlineDownload/>
                </button> 
            </div>
            <div className="summaryButtonsContainer">
                <div className="nextSummaryButtonContainer">
                    <button className="nextSummaryButton" onClick={() => redirectToPreviousBlob(index-1)} title="previous image">
                        <AiOutlineArrowLeft/>
                    </button>
                </div>
                <div className="previousSummaryButtonContainer">
                    <button className="previousSummaryButton" onClick={() => redirectToNextBlob(index)} title="next image">
                        <AiOutlineArrowRight/>
                    </button>
                </div>
            </div>
            <div className="pageNumber">
                {index + 1}({totalNumberOfBlobs + 1})
                
                
            </div>
        </div>
    )
}
            
export default SummaryView