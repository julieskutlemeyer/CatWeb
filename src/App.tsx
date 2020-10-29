import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './frontend/style.scss'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from './frontend/Header';
import Posts from './frontend/ListOfPosts';
import Paging from './frontend/Pagination'
import SearchBar from './change-results/SearchBar';
import Filter from './change-results/Filter';
import Sort from './change-results/Sort';

const App: React.FC = () => {
    return (
        // fluid sets the Jumbotron to take up entire width of parent 
        <Container fluid id="top-level-container" className="fluid-container">
            <Header/>
            <Container id="search-filter-sort">
                <Row xs={1} md={3} id="row-search">
                    <SearchBar />
                    <Sort />
                    <Filter />
                </Row>
            </Container>
            <Posts/>
            <Paging/>
        </Container>
    );
};



export default App;
