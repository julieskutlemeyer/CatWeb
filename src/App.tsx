import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './frontend/style.scss'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from './frontend/Header';
import PostList from './frontend/ListOfPosts';
import Paging from './frontend/Pagination'
import SearchBar from './change-results/SearchBar';
import Filter from './change-results/Filter';
import Sort from './change-results/Sort';
import {SingleCatPage} from "./Cats/SingleCatPage"

// const App: React.FC = () => {
//     return (
//         // fluid sets the Jumbotron to take up entire width of parent 
//         <Container fluid id="top-level-container" className="fluid-container">
//             <Header />
//             <Container id="search-filter-sort">
//                 <Row xs={1} md={3} id="row-search">
//                     <SearchBar />
//                     <Sort />
//                     <Filter />
//                 </Row>
//             </Container>
//             <PostList />
//             <Paging />
//         </Container>
//     );
// };



import { CatsList } from './Cats/CatsList'
//import { SingleCatPage } from './Cats/SingleCatsPage'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { PageButton } from "./Cats/PageButton"

// react.fragment gjør at hvis en komponent har 
// fler elementer i seg, kan vi vise disse uten at det lages
// ekstra noder til DOMen

function App() {
    // return (

    //     // fluid sets the Jumbotron to take up entire width of parent 
    //     <Container fluid id="top-level-container" className="fluid-container">
    //         <Header/>
    //         <Container id="search-filter-sort">
    //             <Row xs={1} md={3} id="row-search">
    //                 <SearchBar />
    //                 <Sort />
    //                 <Filter />
    //             </Row>
    //         </Container>
    //         <PostList/>
    //         <Paging/>
    //     </Container>

    //         // <Router>

    //         //     <div className="PostsList">
    //         //         <Switch>
    //         //             <Route
    //         //                 exact
    //         //                 path="/"
    //         //                 render={() => (
    //         //                     <React.Fragment>
    //         //                         <CatsList />
    //         //                     </React.Fragment>
    //         //                 )}
    //         //             />
    //         //             <Route exact path="/posts/:postId" component={SingleCatPage} />
    //         //             <Redirect to="/" />
    //         //         </Switch>
    //         //     </div>
    //         // </Router>


   // );

  return (
    <div className="App">
      <header className="App-header">
         <Router> 
      
          <div className="PostsList">
             <Switch>
              <Route exact path="/"
                render={() => (
                    <React.Fragment>
                     <CatsList />
                   </React.Fragment> 
                 )}
              /> 
                 <Route exact path="/posts/:catId" component={SingleCatPage} />   
               <Redirect to="/" />
            </Switch>
          </div>
        </Router> 

        <PageButton />
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
