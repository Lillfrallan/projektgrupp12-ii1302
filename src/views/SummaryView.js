import React from 'react'
import { AiOutlineDownload, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";


function SummaryView( {
    name, images, blobType, etag, accesstier, accessTierInferred, contentType, 
    leaseStatus, leaseState, serverEncrypted, datesAndTime, downloadImageButton,
    viewImageInBrowser, index, redirectToNextBlob, redirectToPreviousBlob,
    totalNumberOfBlobs
} ) {

    
    return (
        <div className="summaryView">
            <div className="summaryDisplay">
                <div className="summaryImageContainer">
                    <img className="summaryImage" src={images} alt=""/>
                </div>
                <div className="summaryData">
                    <div>Blob name: <div className="data">{name}</div></div>
                    <div>Blob type: 
                        <div className="data">{blobType}</div>
                    </div>
                    <div>Etag: 
                        <div className="data">{etag}</div>
                    </div>
                    <div>Access Tier: 
                        <div className="data">{accesstier}</div>
                    </div>
                    <div>Access Tier Inferred: 
                        <div className="data">{accessTierInferred}</div>
                    </div>
                    <div>Content Type: 
                        <div className="data">{contentType}</div>
                    </div>
                    <div>Lease Status: 
                        <div className="data">{leaseStatus}</div>
                    </div>
                    <div>Lease State: 
                        <div className="data">{leaseState}</div>
                    </div>
                    <div>Server Encrypted: 
                        <div className="data">{serverEncrypted}</div>
                    </div>
                    <div>Date and Time: 
                        <div className="data">{datesAndTime}</div>
                    </div>
                </div>
            </div>
            <div className="summaryButtonContainer">
                <button className="downloadImageButton" onClick={downloadImageButton} title="DOWNLOAD IMAGE">
                    <AiOutlineDownload/>
                </button>
                <button className="viewInBrowserButton" onClick={() => viewImageInBrowser(name)} title="View in browser">
                    <BsGlobe/>
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
                {index}({totalNumberOfBlobs})
            </div>
        </div>
    )
}
            
export default SummaryView