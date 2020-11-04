import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonToggle from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Cats/CatsSlice';
import { filterClicked } from '../Cats/ParamsSlice';

const types = ['Both', 'Male', 'Female'];

function Filter() {

    const dispatch = useDispatch()
    const params = useSelector((state: any) => state.params)

    // Code from https://react.school/ui/button
    const [active, setActive] = useState(types[0]);

    // Sender en dispatch for å kunne filtrere på kattens kjønn
    const filterClick = async (e: any) => {
        var type = e.target.innerHTML
        const filter = type.toLowerCase() === "both" ? "" : type.toLowerCase()
        dispatch(filterClicked(filter))
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
}


export default Filter;