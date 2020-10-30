import React, { useState } from 'react'
import ButtonToggle from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';

const types = ['Both', 'Male', 'Female'];

function Filter() {

    // Code from https://react.school/ui/button
    const [active, setActive] = useState(types[0]);
    return (
        <Col className="filter-col">
            {types.map(type => (
                <ButtonToggle
                    key={type}
                    active={active === type}
                    onClick={() => setActive(type)}
                    variant="primary"
                >
                    {type}
                </ButtonToggle>
            ))}
        </Col>
    );
}


export default Filter;