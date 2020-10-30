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

    const upDisabled = Boolean(Boolean(params.gender != "") && Boolean(params.page > 17) || Boolean(params.page > 34))



    return (
        <Col className="filter-col">
            <Button disabled={disabled} onClick={() => { dispatch(pageClickedDown()); dispatch(fetchPosts({ params })) }}>Prev</Button>
            <p id="page-text">{params.page}</p>
            <Button disabled={upDisabled} onClick={() => { dispatch(pageClicked()); dispatch(fetchPosts({ params })) }}>Next</Button> 
        </Col>
    );
};

export default ApplyChange;