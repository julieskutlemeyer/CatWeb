import React from 'react';
import  Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Cats/CatsSlice';
import { pageClicked, pageClickedDown } from '../Cats/ParamsSlice';

const ApplyChange = () => {
    // Komponnent for å velge mellom sidene. 
    const params = useSelector((state: any) => state.params)
    const dispatch = useDispatch()

    const disabled = Boolean(params.page < 2)

    const upDisabled = Boolean(Boolean(params.gender != "") && Boolean(params.page > 17) || Boolean(params.page > 34))


    return (
        <Col className="filter-col">
            <Button variant="primary" disabled={disabled} onClick={() => { dispatch(pageClickedDown()) }}>Prev</Button>
            <p id="page-text">{params.page}</p>
            <Button variant="primary" disabled={upDisabled} onClick={() => { dispatch(pageClicked()) }}>Next</Button> 
        </Col>
    );
};

export default ApplyChange;