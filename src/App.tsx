import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'
import './frontend/style.scss'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

// Components
import Header from './frontend/Header';
import Paging from './frontend/Pagination'
import SearchBar from './change-results/SearchBar';
import Filter from './change-results/Filter';
import Sort from './change-results/Sort';
import {SingleCatPage} from "./Cats/SingleCatPage"
import CatsList from './Cats/CatsList';

//import { SingleCatPage } from './Cats/SingleCatsPage'
import { PageButton } from "./Cats/PageButton"
import ApplyChange from './change-results/ApplyChange';

// react.fragment gjør at hvis en komponent har 
// fler elementer i seg, kan vi vise disse uten at det lages
// ekstra noder til DOMen

function App() {
    return (

        // fluid sets the Jumbotron to take up entire width of parent 
        <Container fluid id="top-level-container" className="fluid-container">
            <Header />
            <Container id="search-filter-sort">
                <Row xs={1} md={3} id="row-search">
                    <SearchBar />
                    <Sort />
                    <Filter />
                    
                </Row>
                <Row>
                    <ApplyChange/>
                </Row>
            </Container>

            <Router>

                <div className="PostsList">
                    <Switch>
                        <Route
                            exact
                            path="/"
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
            {/* <CatsList/> */}
            {/* <Paging /> */}
            <PageButton />
            {/* PageButton thingy */}
        </Container>

    );
};


//   return (

//          <Router> 

//           <div className="PostsList">
//              <Switch>
//               <Route
//                 exact
//                 path="/"
//                 render={() => (
//                     <React.Fragment>
//                      <CatsList />
//                    </React.Fragment> 
//                  )}
//               /> 
//                 {/* <Route exact path="/posts/:postId" component={SingleCatPage} />   */}
//                <Redirect to="/" />
//             </Switch>
//           </div>
//         </Router> 

//         <PageButton />

//   );
// }

export default App;
