import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

const App: React.FC = () => {
  return (
    <Container fluid className="top-level-container">
      <Jumbotron>
        <h1 className="header">
          Welcom to Adopt-a-Cat :3
        </h1>
      </Jumbotron>
      <Row>
        <Col> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a dolorum ratione dicta veritatis molestiae. Suscipit incidunt exercitationem nemo iure fugiat, error tenetur quod, maxime nulla excepturi, reiciendis consectetur. Quia.</Col>
        <Col> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt autem velit recusandae consequatur voluptatibus et deleniti provident, ullam quod facere esse, consequuntur neque eum dolor eos commodi, tenetur aspernatur dolorem reprehenderit! Dignissimos a accusantium iste facilis exercitationem, quidem nam praesentium fuga nesciunt culpa laborum et nostrum id! Perspiciatis illo at aperiam placeat possimus rerum aspernatur dolore laborum? Ab itaque optio facilis harum ad quas dicta autem voluptas illum sit nobis necessitatibus debitis quidem rem reiciendis, blanditiis, dolore beatae! Perferendis magnam, voluptatum porro nulla similique, debitis hic consequatur libero quis rem possimus! Ab dolor rem facere non beatae ratione ex ut.</Col>
      </Row>


      <h2>Buttons</h2>
      <Button/>
      <h2>Toasts</h2>
      <Button/>
    </Container>
  );
};



export default App;
