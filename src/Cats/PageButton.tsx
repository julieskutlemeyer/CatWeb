import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pageClicked } from './ParamsSlice'

export function PageButton() {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(pageClicked())}>
          Next
        </button>
    )
}