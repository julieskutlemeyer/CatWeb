import React, { useState } from 'react'
import ButtonToggle from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/Button';

const types = ['Both', 'Male', 'Female'];

function Filter() {

    // return (
    //     <div id="gender-changer">
    //         <Button variant="light">{}</Button>{' '}
    //     </div>
    // )
        const [active, setActive] = useState(types[0]);
        return (
            <div>
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
            </div>
        );

}


export default Filter;