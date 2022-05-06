import * as api_client from './api_client_Azure'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/*********************************************************************
 * 
 * DEPRECATED DUE TO MICROSOFT BEING GREEDY.
 * THE BlobRetrieverFireBase.js IS THE ONE BEING ACTIVE ATM
 * THOUGH THIS ONE IS ALSO FULLY FUNCTIONAL.
 * 
 *********************************************************************/

/**
 * Retrieves data from Azure blob storage
 * 
 * @returns an array of blobs
 */
export const getBlobsAzure = createAsyncThunk("blobsAzure/getBlobsAzure",
    async () => {

        let blobs = api_client.containerClient.listBlobsFlat();

        const arrayForBlobs = [];

        let index = 1;
        let objects = {};
        for await (const blob of blobs) {

            objects = {
                name : blob.name,
                images: api_client.get_image_url(blob.name),
                blobType: blob.properties.blobType,
                etag: blob.properties.etag,
                accessTier: blob.properties.accessTier,
                accessTierInferred: blob.properties.accessTierInferred,
                contentType: blob.properties.contentType,
                leaseStatus: blob.properties.leaseStatus,
                leaseState: blob.properties.leaseState,
                serverEncrypted: blob.properties.serverEncrypted,
                datesAndTime: 
                blob.properties.createdOn.getDate() + "/" + 
                (blob.properties.createdOn.getMonth()+1) + "-" + 
                blob.properties.createdOn.getFullYear() + " " + 
                blob.properties.createdOn.getHours() + ":" + 
                blob.properties.createdOn.getMinutes() + ":" + 
                blob.properties.createdOn.getSeconds(),
                blob,
                index,
            } 

            arrayForBlobs.push(objects)
            index++;
        }
        return arrayForBlobs;   
    }
)

/**
 * Creates a redux slice for the blob data
 */
export const blobSliceAzure = createSlice({
    name: "blobsAzure",
    initialState: {
        blobsAzure: [],
        status: null
    },
    extraReducers: {
        [getBlobsAzure.pending]: (state) => {
            state.status = 'loading'
        },
        [getBlobsAzure.fulfilled]: (state, action) => {
            state.status = 'success'
            state.blobsAzure = action.payload
        },
        [getBlobsAzure.rejected]: (state) => {
            state.status = 'failed'
        },
    }
})


