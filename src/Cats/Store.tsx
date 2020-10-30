import { configureStore } from '@reduxjs/toolkit'
import catsReducer from "./CatsSlice"
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
import paramsReducer from "./ParamsSlice"

export default configureStore({
    reducer: {
      cats: catsReducer,
      params: paramsReducer
    }
});