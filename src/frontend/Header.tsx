import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/esm/Container';

function Header()  {

    return (
        <Container fluid className="fluid-container">
            <Jumbotron className="header">
                <Container>
                    <h1 className="header"> Welcome to Adopt-a-Cat :3 </h1>
                    <p> Let us help you find the purrfect furbaby!</p>
                </Container>
            </Jumbotron>
        </Container>
    );
};

export default Header;