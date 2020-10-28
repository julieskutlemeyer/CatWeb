import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



import Container from 'react-bootstrap/Container';

import Header from './frontend/Header';
import Posts from './frontend/ListOfPosts';
import Paging from './frontend/Pagination'

const App: React.FC = () => {
    return (
        // fluid sets the Jumbotron to take up entire width of parent 
        <Container fluid id="top-level-container" className="fluid-container">
            <Header/>
            <Posts/>
            <Paging/>
        </Container>
    );
};



export default App;
