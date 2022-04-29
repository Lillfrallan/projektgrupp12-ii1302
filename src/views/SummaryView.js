import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";

function SummaryView( {
    name, images, blobType, etag, accesstier, accessTierInferred, contentType, 
    leaseStatus, leaseState, serverEncrypted, datesAndTime, downloadImageButton
} ) {

    
    return (
        <div>
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
            <div>
                <button className="downloadImageButton" onClick={downloadImageButton} title="DOWNLOAD IMAGE">
                    <AiOutlineDownload/>
                </button>
            </div>
        </div>
    )
}
            
export default SummaryView