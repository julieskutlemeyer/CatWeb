import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../posts/postsSlice'

//top-level state-objektet har et felt " posts"
//state.posts vil da bli oppdatert av postsReducer
//hver gang actions blir trigget
//actionene er i reducerene i postsReducer som finnes i postSlice

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})