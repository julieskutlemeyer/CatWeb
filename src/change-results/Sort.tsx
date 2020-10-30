import React, { useState } from 'react'
import ButtonToggle from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Cats/CatsSlice';
import { pageClicked, sortClicked } from '../Cats/ParamsSlice';
import Button from 'react-bootstrap/Button';

function Sort() {

    const types = ["Owners name A-Å", "Likes ↑", "Likes ↓"]

    const dispatch = useDispatch()
    const params = useSelector((state: any) => state.params)

    // Code from https://react.school/ui/button
    const [active, setActive] = useState(types[0]);


    const filterClick = async (e: any) => {
        var type = e.target.innerHTML
        var filter;
        switch (type){
            case types[0]:
                filter ="owner.first_name"
                break;
            case types[1]:
                filter ="post.likes"
                break;
            case types[2]:
                filter = "-post.likes"
                break;
            default:
                break
        }
        dispatch(sortClicked(filter))
        setActive(type)
    }


    return (
        <Col className="filter-col">
            {types.map(type => (
                <ButtonToggle
                    key={type}
                    active={active === type}
                    onClick={filterClick}
                    variant="primary"
                >
                    {type}
                </ButtonToggle>
            ))}
        </Col>
    );
};

export default Sort;