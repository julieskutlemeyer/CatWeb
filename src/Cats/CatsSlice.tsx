import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
const axios = require('axios').default;

function PostsParams() {
    const params = {
        sortby: useSelector((state: any) => state.params.sortby),
        page: useSelector((state: any) => state.params.page).toString(),
        search: useSelector((state: any) => state.params.search),
        gender: useSelector((state: any) => state.params.gender)
    }
    return params
}

export const fetchPosts = createAsyncThunk(
    'cats/fetchCats',
    async (params: any) => {
        const response = await axios.get('http://it2810-10.idi.ntnu.no:3000/api/cat', params)
        return response.data.posts
    }
)

const initialState = {
    cats: [
        // {
        // post: "default",
        // owner: "default",
        // cat: "default",
        // _id: "2"
        // }
    ],
    status: 'idle',
    error: null,
}

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending.toString()]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPosts.fulfilled.toString()]: (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.cats = (action.payload)
        },
        [fetchPosts.rejected.toString()]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})



export default catsSlice.reducer
export const selectPostById = (state: any, catId: string) =>
    state.cats.cats.find((cat: any) => cat._id === catId)


