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
        pageClicked: (state: any) => {
            state.page += 1;
        },
        pageClickedDown: (state: any) => {
            state.page -= 1;
        },
        searchClicked: (state: any, action: any) => {
            state.search = action.payload
        },
        filterClicked: (state: any, action: any) => {
            state.gender = action.payload
        },
        sortClicked: (state: any, action: any) => {
            state.sortby = action.payload
        }
    }
})




export const { pageClicked, searchClicked, filterClicked, sortClicked, pageClickedDown} = paramsSlice.actions
//{type: "params/pageClicked"}

export default paramsSlice.reducer

