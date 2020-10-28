import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import testcat from './database/cat_pictures/1602674119317.jpg'

const App: React.FC = () => {
    return (
        // fluid sets the Jumbotron to take up entire width of parent 
        <Container fluid id="top-level-container" className="fluid-container">
            <Container fluid className="fluid-container">
                <Jumbotron className="header">
                    <Container>
                        <h1 className="header"> Welcome to Adopt-a-Cat :3 </h1>
                        <p> We hope we can assist you to find the purrfect companion!</p>
                    </Container>
                </Jumbotron>
            </Container>
            <Container>
                <Row xs={1} sm={1} md={2} lg={3} xl={4} id="post-rows">
                    <Col> <div>Number 1 ---  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit atque commodi corrupti perferendis illum sint consequatur explicabo natus delectus perspiciatis aspernatur nesciunt, minima tempore accusamus, deleniti nisi ipsa soluta!</div></Col>
                    <Col> <div>Number 2 ---  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit atque commodi corrupti perferendis illum sint consequatur explicabo natus delectus perspiciatis aspernatur nesciunt, minima tempore accusamus, deleniti nisi ipsa soluta!</div></Col>
                    <Col> <div>Number 3 ---  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit atque commodi corrupti perferendis illum sint consequatur explicabo natus delectus perspiciatis aspernatur nesciunt, minima tempore accusamus, deleniti nisi ipsa soluta!</div></Col>
                    <Col> <div>Number 4 ---  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit atque commodi corrupti perferendis illum sint consequatur explicabo natus delectus perspiciatis aspernatur nesciunt, minima tempore accusamus, deleniti nisi ipsa soluta!</div></Col>
                    <Col> <div>Number 5 ---  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit atque commodi corrupti perferendis illum sint consequatur explicabo natus delectus perspiciatis aspernatur nesciunt, minima tempore accusamus, deleniti nisi ipsa soluta!</div></Col>
                    <Col> <div>Number 6 ---  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit atque commodi corrupti perferendis illum sint consequatur explicabo natus delectus perspiciatis aspernatur nesciunt, minima tempore accusamus, deleniti nisi ipsa soluta!</div></Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                    <Col> <div><h3>Cat numbero 7</h3>  <img src={testcat} alt="test-cat" height="200" width="200" ></img> </div> </Col>
                </Row>
            </Container>


            <h2>Buttons</h2>
            <Button />
            <Button />
            {/* <footer id="footer">
                https://medium.com/fredwong-it/react-how-to-add-a-footer-da3abb3d7a41
                <div id="empty-div"></div>
                <div id="footer-container">
                    Footer or maybe paw?
                </div>
            </footer> */}

        </Container>
    );
};



export default App;
