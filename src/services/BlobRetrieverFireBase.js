
import { ref, listAll } from "firebase/storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api_client_fireBase from './api_client_Firebase'

export const getBlobsFirebase = createAsyncThunk("blobs/getBlobsFirebase",
    (async () => {

        const imagesRef = ref(api_client_fireBase.storage, 'images/');

        return listAll(imagesRef)
            .then((res) => {
                const objFetches = res.items.map((imageRef, index) =>
                    fetch(`https://firebasestorage.googleapis.com/v0/b/projectgroup12-2f2a2.appspot.com/o/images%2F${imageRef.name}`)
                        .then((res) => res.json())
                        .then((res) => ({
                                name : imageRef.name,
                                nameWithFolder: res.name,
                                images : api_client_fireBase.get_image_url(imageRef.name),
                                bucket: res.bucket,
                                contentEncoding: res.contentEncoding,
                                contentType: res.contentType,
                                crc32c: res.crc32c,
                                generation: res.generation,
                                md5Hash: res.md5Hash,
                                metageneration: res.metageneration,
                                size: res.size,
                                storageClass: res.storageClass,
                                datesAndTime: res.timeCreated.replace('T', ' ').replace('Z', ' ').slice(0, -5),
                                etag: res.etag,
                                accessToken: res.accessToken,
                                index,
                        }))
                    )
                    return Promise.all(objFetches)
            })
                .catch((error) => {
                    console.log(error);
                });
    }
))

/**
 * Creates a redux slice for the blob data
 */
export const blobSliceFireBase = createSlice({
    name: "blobs",
    initialState: {
        blobs: [],
        status: null
    },
    extraReducers: {
        [getBlobsFirebase.pending]: (state) => {
            state.status = 'loading'
        },
        [getBlobsFirebase.fulfilled]: (state, action) => {
            state.status = 'success'
            state.blobs = action.payload
        },
        [getBlobsFirebase.rejected]: (state) => {
            state.status = 'failed'
        },
    }
})


export default blobSliceFireBase.reducer