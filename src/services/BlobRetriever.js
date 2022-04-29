import * as api_client from './api_client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Retrieves data from Azure blob storage
 * 
 * @returns an array of blobs
 */
export const getBlobs = createAsyncThunk("blobs/getBlobs",
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
export const blobSlice = createSlice({
    name: "blobs",
    initialState: {
        blobs: [],
        status: null
    },
    extraReducers: {
        [getBlobs.pending]: (state) => {
            state.status = 'loading'
        },
        [getBlobs.fulfilled]: (state, action) => {
            state.status = 'success'
            state.blobs = action.payload
        },
        [getBlobs.rejected]: (state) => {
            state.status = 'failed'
        },
    }
})

export default blobSlice.reducer