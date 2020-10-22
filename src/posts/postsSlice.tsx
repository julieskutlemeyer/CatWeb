import { createSlice } from '@reduxjs/toolkit'

//denne inneholder en initial state (data)
//og en postsSlice (navn, state og reducer for å oppdatere state)

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default postsSlice.reducer
