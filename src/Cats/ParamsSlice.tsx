import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortby: "",
    page: 1,
    search: "",
    gender: ""
}

export const paramsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        pageClicked: (state:any) => {
            state.params.page +=1;
        }

          }
    })




export const { pageClicked } = paramsSlice.actions
//{type: "params/pageClicked"}
export default paramsSlice.reducer

