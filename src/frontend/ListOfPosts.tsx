import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// TODO: remove this import when actual data is implemented
// import testcat from 'src/database/cat_pictures/1602674119317.jpg'

function PostList() {
    return (
        <Container>
            <Row xs={1} sm={1} md={2} lg={3} xl={4} id="post-rows">
                <Col> <div> N1 </div> </Col>
                <Col> <div> Number 2 </div></Col>
                <Col> <div> Number 3 </div></Col>
                <Col> <div> Number 4 </div></Col>
                <Col> <div> Number 5 </div></Col>
                <Col> <div> Number 6 </div></Col>
                <Col> <div> Number 7 </div></Col>
                <Col> <div> Number 8 </div></Col>
                <Col> <div> Number 9 </div></Col>
                <Col> <div> Number 10 </div></Col>
                <Col> <div> Number 11 </div></Col>
                <Col> <div> Number 12 </div></Col>
            </Row>
        </Container>
    );
};

export default PostList;