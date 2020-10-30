import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
const axios = require('axios').default;

// const params = {
//     sortby: "",
//     page: "1",
//     search: "",
//     gender: ""
// }

function PostsQuery() {
  const params = {
    sortby: useSelector( (state:any) => state.params.sortby),
    page: useSelector( (state:any) => state.params.page).toString(),
    search: useSelector( (state:any) => state.params.search),
    gender: useSelector( (state:any) => state.params.gender)
  }
  
  var query = "?sortby="+params.sortby+"&page="+params.page+"&name="+params.search+"&gender="+params.gender
  return query
}



export const fetchPosts = createAsyncThunk('cats/fetchCats', async () => {
     const response = await axios.get('http://it2810-10.idi.ntnu.no:5000/api/cat'+PostsQuery() )
        return response.data.posts})
    

  
  

  console.log(fetchPosts)

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
          state.cats = state.cats.concat(action.payload)
        },
        [fetchPosts.rejected.toString()]: (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        }
      }
})



export default catsSlice.reducer


