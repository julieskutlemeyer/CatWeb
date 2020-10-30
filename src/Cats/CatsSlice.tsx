import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios').default;

export const fetchPosts = createAsyncThunk(
    'cats/fetchCats',
    async (params: any) => {
        const response = await axios.get('http://it2810-10.idi.ntnu.no:3000/api/cat', params)
        return response.data.posts
    }
)

export const putLike = createAsyncThunk(
    'cats/putLike',
    async (likesAndId: any) => {
        console.log(likesAndId)
        await axios.post('http://it2810-10.idi.ntnu.no:3000/api/cat', likesAndId )
        return likesAndId
    }
)



const initialState = {
    cats: [],
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
        },
        [putLike.fulfilled.toString()]: (state: any, action: any) => {
            const {id} = action.payload
            const upvotedPost:any = state.cats.find((post: any) => post._id === id)
            console.log("This is likes", upvotedPost.post.likes)
            if (upvotedPost){
                console.log(upvotedPost)
                upvotedPost.post.likes++;
            }
        }
    }
})



export default catsSlice.reducer
export const selectPostById = (state: any, catId: string) =>
    state.cats.cats.find((cat: any) => cat._id === catId)


