import React from 'react';
import  Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Cats/CatsSlice';
import { pageClicked, pageClickedDown } from '../Cats/ParamsSlice';

const ApplyChange = () => {

    const params = useSelector((state: any) => state.params)
    const dispatch = useDispatch()

    const disabled = Boolean(params.page < 2)



    return (
        <Col className="filter-col">
            <Button disabled={disabled} onClick={() => { dispatch(pageClickedDown()); dispatch(fetchPosts({ params })) }}>Prev</Button>
            <p id="page-text">{params.page}</p>
            <Button onClick={() => { dispatch(pageClicked()); dispatch(fetchPosts({ params })) }}>Next</Button> 
        </Col>
    );
};

export default ApplyChange;